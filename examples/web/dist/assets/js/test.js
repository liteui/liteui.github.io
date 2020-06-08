function testForm() {

  var data = {
    'p-1': {
      'p-1-1': -3,
      'p-1-2': 3,
    },
    'p-2': {
      good: 3,
      bad: -5,
    },
    'p-3': {
      good: 2,
      bad: 0,
    },
    'p-4': {
      'p-4-1': -3,
      'p-4-2': 3,
    },
    'p-5': {
      'p-5-1': 0,
      'p-5-2': 1,
      'p-5-3': 2,
    },
    'p-6': {
      'p-6-1': -3,
    },
    'p-7': {
      'p-7-1': -2,
      'p-7-2': 3,
      'p-7-3': 3,
      'p-7-4': -3,
      'p-7-5': -2,
    },
    'p-8': {
      'p-8-1': 1,
      'p-8-2': -1,
      'p-8-3': 0,
    },
  };

  var rangeData = {
    'p-2': { minLimit: 35, maxLimit: 70 },
    'p-3': { minLimit: 60, maxLimit: 150 },
  };

  var resultData = {
    'p-1': 0,
    'p-2': 0,
    'p-3': 0,
    'p-4': 0,
    'p-5': 0,
    'p-6': 0,
    'p-7': 0,
    'p-8': 0,
  };

  // global
  var test = $('#test-test'),
      form = $('#testForm'),
      progress = $('#testProgress'),
      bars = progress.find('.progress-bar'),
      result = $('#testResult');

  // sliders
  var rangeSlider = document.getElementById('p-2'),
      rangeSliderValue = document.getElementById('p-2-value'),
      rangeSlider2 = document.getElementById('p-3'),
      rangeSliderValue2 = document.getElementById('p-3-value');
  
  var rangeSliders = [
    { element: rangeSlider,    start: 50,    step: 1,    range: [18, 85],      format: true },
    { element: rangeSlider2,   start: 70,    step: 1,    range: [30, 180],     format: true }
  ];

  for (var i = 0; i < rangeSliders.length; i++) {

    var slider = rangeSliders[i];

    var sliderOptions = {
      start: [slider.start],
      connect: [true, false],
      step: slider.step,
      range: {
        'min': [slider.range[0]],
        'max': [slider.range[1]]
      },
    }

    if (slider.format) {
      sliderOptions.format = {
        to: function (value) {
          return Math.round(value);
        },
        from: function (value) {
          return value;
        }
      }
    }

    noUiSlider.create(slider.element, sliderOptions);
  }

  function rangeSliderUpdate(sliderEl, valueEl, id) {

    sliderEl.noUiSlider.on('update', function (values, handle) {
      valueEl.innerHTML = values[handle];
      test.find('[data-value="'+id+'"]').text(values);

      if (values[handle] >= rangeData[id].minLimit && values[handle] <= rangeData[id].maxLimit) {
        resultData[id] = data[id].good;
      } else {
        resultData[id] = data[id].bad;
      }
    });
  }

  rangeSliderUpdate(rangeSlider, rangeSliderValue, 'p-2');
  rangeSliderUpdate(rangeSlider2, rangeSliderValue2, 'p-3');

  // tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip-err"]').tooltip({
      trigger: 'manual',
      template: '<div class="tooltip tooltip-err" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      fallbackPlacement: ['top']
    });
  });

  // inputs
  $(document).on('change', '#testForm input', function() {
    var $this = $(this),
        name = $this.attr('name'),
        value = $this.val(),
        isChecked = $this.prop('checked'),
        $targetEl = test.find('[data-value="'+name+'"]'),
        title = isChecked ? $this.siblings('[data-title]').text() : '-';

    $this.parents('[data-required]').find('[data-toggle="tooltip-err"]').tooltip('hide');
    $targetEl.text(title);
    resultData[name] = isChecked ? data[name][value] : 0;
  });

  // init
  function firstInit() {
    var rangeVal = rangeSlider.noUiSlider.get(),
        rangeVal2 = rangeSlider2.noUiSlider.get();

    test.find('[data-value="p-2"]').text(rangeVal);
    test.find('[data-value="p-3"]').text(rangeVal2);

    resultData['p-2'] = getRangeResult('p-2', rangeVal);
    resultData['p-3'] = getRangeResult('p-3', rangeVal2);

    function getRangeResult(id, value) {
      if (value >= rangeData[id].minLimit && value <= rangeData[id].maxLimit) {
        return data[id].good;
      } else {
        return data[id].bad;
      }
    }
  }

  firstInit();

  // calculation
  $(document).on('click', '#calculateBtn', function(e) {
    e.preventDefault();

    var isError = false,
        errFlag = true;

    form.find('[data-required]').each(function() {

      var $this = $(this),
          checkedInputs = $this.find('input:checked').length;

      if (!checkedInputs) {
        isError = true;
        $this.find('[data-toggle="tooltip-err"]').tooltip('show');
        if (errFlag) {
          var targetOffset = $this.offset().top - 100;
          $('body, html').animate({
              scrollTop: targetOffset
          }, 1000);
          errFlag = false;
        }
      }
    });

    if (!isError) {
      var resultVal = 70,
          maxVal = 110,
          results = Object.values(resultData);

      for (var i = 0; i < results.length; i++) {
        resultVal += results[i];
      }

      if (resultVal < 0) resultVal = 0;
      if (resultVal > maxVal) resultVal = maxVal;

      var diffVal = maxVal - resultVal;

      test.find('[data-result]').text(resultVal);

      var stageLength = result.find('[data-stage]').length,
          stagePeriod = diffVal / stageLength,
          newStageValue = resultVal + stagePeriod,
          stageOrder = 1;
      
      result.find('[data-stage]').each(function(){
        var $this = $(this),
            $stageFill = $this.next('[data-stage-fill]');

        if (stageOrder === stageLength) {
          newStageValue = maxVal;
        } else if (stageOrder !== 1) {
          newStageValue += stagePeriod;
        }
        
        $this.text(Math.round(newStageValue));
        var newStageHeight = $stageFill.height() / stageLength * stageOrder;
        $stageFill.height(newStageHeight);
        stageOrder++;
      });

      form.addClass('d-none');
      progress.removeClass('d-none');

      $('body, html').animate({
        scrollTop: progress.offset().top - (progress.outerHeight() / 2)
      }, 1000);

      bars.first().trigger('start');
    }
  });

  // progressbars
  $(document).on('start', '#testProgress .progress-bar', function() {
    var $this = $(this),
        duration = $this.attr('data-duration'),
        nextBar = $this.parents('[data-progress]').next('[data-progress]').find('.progress-bar');

    $this.css('transition-duration', duration + 's')

    setTimeout(function() {
      $this.addClass('is-active');
    }, 0);

    setTimeout(function() {
      if (nextBar.length) {
        nextBar.trigger('start');
      } else {
        progress.addClass('d-none');
        result.removeClass('d-none');
      }
    }, duration * 1000);
  });
}

$(document).ready(function(){
  if ($('#test-test').length) testForm();
});
