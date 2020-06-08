var chartData = {
  'd-1': {
    dates: ['01.01.01', '01.01.02', '01.01.03', '01.01.04', '01.01.05'],
    values: [6, 5, 24, 11, 6],
    target: 10,
  },
  'd-2': {
    dates: ['01.01.01', '01.01.02', '01.01.03', '01.01.04', '01.01.05'],
    values: [8, 12, 13, 24, 6],
    target: 5,
  },
  'd-3': {
    dates: ['01.01.01', '01.01.02', '01.01.03', '01.01.04', '01.01.05'],
    values: [20, 1, 24, 11, 16],
    target: 10,
  },
};

$(document).ready(function () {
  dataInit(chartData);
  numMaskInit();
});

$(document).on('submit', '.js-data', function(e){
  e.preventDefault();

  $(this).find('input').each(function(){
    var $this = $(this);    
    var value = $this.val();

    if (value) {
      var dataName = $this.parents('.js-data-item').attr('data-name');
      var inputName = $this.attr('name');

      if (inputName.match('value')) {
        var date = new Date();
        var today = ( '0' + date.getDate() ).slice(-2) + '.' + ( '0' + (date.getMonth() + 1) ).slice(-2) + '.' + ( '' + date.getFullYear() ).slice(-2);

        chartData[dataName].dates = chartData[dataName].dates.slice(1).concat(today);
        chartData[dataName].values = chartData[dataName].values.slice(1).concat(+value);
      } else {
        chartData[dataName].target = +value;
      }

      $this.val('');
    }    
  });

  dataInit(chartData);
});

$(document).on('click', '.js-help-link', function(e){
  e.preventDefault();
  var itemId = $(this).attr('href');

  $('.js-help-nav').addClass('d-none');
  $('.js-help-item').removeClass('d-none');
  $(itemId).removeClass('d-none');
});

$(document).on('click', '.js-help-back', function(){
  $('.js-help-nav').removeClass('d-none');
  $('.js-help-item').addClass('d-none');
  $('.js-help-content').addClass('d-none');
});

function dataInit(chartData) {

  $('.js-data-chart').each(function() {
    var $this = $(this);
    var chartId = $this.attr('id');
    var currentData = chartData && chartData[chartId] ? chartData[chartId] : {};

    var cfg = {
      type: 'line',

      data: {
        labels: currentData.dates,
        datasets: [{
          data: currentData.values,
          backgroundColor: '#ffc107',
          borderColor: '#ffc107',
          fill: false,
          lineTension: 0.3,
          pointRadius: 3
        }]
      },
  
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        layout: {
          padding: 10
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              padding: 10,
              callback: function(value, index, values) {
                return ' ' + value + ' ';
              }
            }
          }],
          yAxes: [{
            ticks: {
              padding: 10,
            },
            afterDataLimits: function(axis) {
              axis.min -= 3;
              axis.max += 3;
            }
          }]
        },
        annotation: {
          annotations: [{
            drawTime: 'beforeDatasetsDraw',
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: currentData.target,
            borderColor: '#008ce6',
            borderWidth: 2
          }]
        }
      }
    }

    if (currentData.target) {
      cfg.options.scales.yAxes[0].ticks.suggestedMin = currentData.target;
      cfg.options.scales.yAxes[0].ticks.suggestedMax = currentData.target;
    }

    var myChart = new Chart($this, cfg);
  });

  $('.js-data-diff').each(function(){
    var $this = $(this);
    var dataName = $this.parents('.js-data-item').attr('data-name');

    $this.text(Math.abs(chartData[dataName].values[4] - chartData[dataName].target));
  });

  $('.js-data-list').each(function(){
    var $this = $(this);
    var dataName = $this.parents('.js-data-item').attr('data-name');
    var list = '';
    
    for (var i = 4; i >= 0; i--) {
      list += '<div class="col-6"><p class="m-0">' + chartData[dataName].dates[i] + '</p></div><div class="col-6 text-right"><p class="m-0">' + chartData[dataName].values[i] + '</p></div><div class="col-12 border-bottom border-gray my-2"></div>';
    }

    $this.html(list);
  });
}

function numMaskInit() {
  var $elem = $('.js-num-inputmask');

  if ($elem.length) {
    $elem.inputmask("9[99]", {placeholder: '', showMaskOnHover: false});
  }
}
