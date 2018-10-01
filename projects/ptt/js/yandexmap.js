ymaps.ready(init);

function init () {
    window.basiczoom = 15;
    
    window.myMap = new ymaps.Map("googlemap", {
        center: [55.674044, 37.436461],
        zoom: 15,
        controls: []
    });
    

    ////////////////////////////////////////////////////////////////////////////////

    myMap.geoObjects.add(new ymaps.Placemark([55.674044, 37.436461], {hintContent: 'Очаково'}, {
        iconLayout: ymaps.templateLayoutFactory.createClass('<div class="marker"><p><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="36" height="36" viewBox="0 0 48 48"><path d="M68.31 63.65C66.98 62.839999999999996 65.71000000000001 61.94 64.52 60.949999999999996C61.419999999999995 58.379999999999995 58.849999999999994 55.24999999999999 56.92999999999999 51.709999999999994C54.629999999999995 47.49999999999999 53.33999999999999 42.8 53.15999999999999 37.99999999999999C46.12999999999999 40.379999999999995 40.609999999999985 45.91 38.23999999999999 52.94999999999999C42.719999999999985 53.11999999999999 47.109999999999985 54.26999999999999 51.109999999999985 56.30999999999999L51.109999999999985 60.64999999999999C46.93999999999998 58.12999999999999 42.179999999999986 56.779999999999994 37.30999999999999 56.72999999999999C37.09999999999999 57.98999999999999 36.999999999999986 59.25999999999999 36.999999999999986 60.52999999999999L36.999999999999986 60.52999999999999C36.999999999999986 61.80999999999999 37.09999999999999 63.08999999999999 37.30999999999999 64.34999999999998C42.499999999999986 64.41999999999997 47.45999999999999 66.52999999999999 51.109999999999985 70.22999999999998L51.109999999999985 76.48999999999998C48.48999999999999 71.74999999999999 43.679999999999986 68.63999999999999 38.289999999999985 68.19999999999999C40.679999999999986 75.17999999999999 46.15999999999998 80.66 53.12999999999998 83.02999999999999L53.12999999999998 48.19999999999999C54.079999999999984 50.819999999999986 55.35999999999998 53.30999999999999 56.92999999999998 55.609999999999985L56.92999999999998 60.149999999999984C57.62999999999998 60.72999999999998 58.28999999999998 61.33999999999998 58.939999999999976 61.97999999999998C60.24999999999998 63.26999999999998 61.439999999999976 64.66999999999999 62.49999999999998 66.16999999999999L62.49999999999998 73.99999999999999C61.58999999999998 71.75999999999999 60.39999999999998 69.64999999999999 58.939999999999976 67.72999999999999C58.31999999999998 66.89999999999999 57.63999999999998 66.1 56.92999999999998 65.35L56.92999999999998 84.00999999999999C58.17999999999998 84.21999999999998 59.44999999999998 84.32 60.71999999999998 84.32L60.71999999999998 84.32C61.98999999999998 84.32 63.25999999999998 84.22 64.51999999999998 84.00999999999999L64.51999999999998 63.519999999999996C65.72999999999998 64.42 66.98999999999998 65.24 68.30999999999999 65.97999999999999L68.30999999999999 83.02999999999999C75.29999999999998 80.64999999999999 80.78999999999999 75.12999999999998 83.15999999999998 68.11999999999999C77.90999999999998 67.91 72.80999999999999 66.36999999999999 68.30999999999999 63.64999999999999Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /><path d="M82.8 52.85C80.42 45.870000000000005 74.96 40.39 68 38C68.63 45.92 74.9 52.21 82.8 52.85Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /><path d="M68.38 48.71C65.97 45.39 64.64999999999999 41.410000000000004 64.58999999999999 37.31C63.32999999999999 37.1 62.05999999999999 37 60.78999999999999 37L60.78999999999999 37C59.51999999999999 37 58.24999999999999 37.11 56.99999999999999 37.31C57.06999999999999 44.28 59.779999999999994 50.96 64.58 56L64.58 46.2C65.53999999999999 48.28 66.82 50.21 68.38 51.900000000000006L68.38 59.330000000000005C72.97999999999999 62.690000000000005 78.50999999999999 64.52000000000001 84.19999999999999 64.58000000000001C84.39999999999999 63.33000000000001 84.50999999999999 62.06000000000001 84.50999999999999 60.79000000000001L84.50999999999999 60.79000000000001C84.50999999999999 59.51000000000001 84.39999999999999 58.23000000000001 84.19999999999999 56.97000000000001C77.91999999999999 56.87000000000001 72.05999999999999 53.81000000000002 68.38 48.710000000000015Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /></svg><span>Очаково</span></p></div>'),
        iconShape: {type: 'Rectangle', coordinates: [[-10, -31], [10, 0]]}
    }));
    
    myMap.geoObjects.add(new ymaps.Placemark([55.594921, 36.717036], {hintContent: 'Кубинка'}, {
        iconLayout: ymaps.templateLayoutFactory.createClass('<div class="marker"><p><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="36" height="36" viewBox="0 0 48 48"><path d="M68.31 63.65C66.98 62.839999999999996 65.71000000000001 61.94 64.52 60.949999999999996C61.419999999999995 58.379999999999995 58.849999999999994 55.24999999999999 56.92999999999999 51.709999999999994C54.629999999999995 47.49999999999999 53.33999999999999 42.8 53.15999999999999 37.99999999999999C46.12999999999999 40.379999999999995 40.609999999999985 45.91 38.23999999999999 52.94999999999999C42.719999999999985 53.11999999999999 47.109999999999985 54.26999999999999 51.109999999999985 56.30999999999999L51.109999999999985 60.64999999999999C46.93999999999998 58.12999999999999 42.179999999999986 56.779999999999994 37.30999999999999 56.72999999999999C37.09999999999999 57.98999999999999 36.999999999999986 59.25999999999999 36.999999999999986 60.52999999999999L36.999999999999986 60.52999999999999C36.999999999999986 61.80999999999999 37.09999999999999 63.08999999999999 37.30999999999999 64.34999999999998C42.499999999999986 64.41999999999997 47.45999999999999 66.52999999999999 51.109999999999985 70.22999999999998L51.109999999999985 76.48999999999998C48.48999999999999 71.74999999999999 43.679999999999986 68.63999999999999 38.289999999999985 68.19999999999999C40.679999999999986 75.17999999999999 46.15999999999998 80.66 53.12999999999998 83.02999999999999L53.12999999999998 48.19999999999999C54.079999999999984 50.819999999999986 55.35999999999998 53.30999999999999 56.92999999999998 55.609999999999985L56.92999999999998 60.149999999999984C57.62999999999998 60.72999999999998 58.28999999999998 61.33999999999998 58.939999999999976 61.97999999999998C60.24999999999998 63.26999999999998 61.439999999999976 64.66999999999999 62.49999999999998 66.16999999999999L62.49999999999998 73.99999999999999C61.58999999999998 71.75999999999999 60.39999999999998 69.64999999999999 58.939999999999976 67.72999999999999C58.31999999999998 66.89999999999999 57.63999999999998 66.1 56.92999999999998 65.35L56.92999999999998 84.00999999999999C58.17999999999998 84.21999999999998 59.44999999999998 84.32 60.71999999999998 84.32L60.71999999999998 84.32C61.98999999999998 84.32 63.25999999999998 84.22 64.51999999999998 84.00999999999999L64.51999999999998 63.519999999999996C65.72999999999998 64.42 66.98999999999998 65.24 68.30999999999999 65.97999999999999L68.30999999999999 83.02999999999999C75.29999999999998 80.64999999999999 80.78999999999999 75.12999999999998 83.15999999999998 68.11999999999999C77.90999999999998 67.91 72.80999999999999 66.36999999999999 68.30999999999999 63.64999999999999Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /><path d="M82.8 52.85C80.42 45.870000000000005 74.96 40.39 68 38C68.63 45.92 74.9 52.21 82.8 52.85Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /><path d="M68.38 48.71C65.97 45.39 64.64999999999999 41.410000000000004 64.58999999999999 37.31C63.32999999999999 37.1 62.05999999999999 37 60.78999999999999 37L60.78999999999999 37C59.51999999999999 37 58.24999999999999 37.11 56.99999999999999 37.31C57.06999999999999 44.28 59.779999999999994 50.96 64.58 56L64.58 46.2C65.53999999999999 48.28 66.82 50.21 68.38 51.900000000000006L68.38 59.330000000000005C72.97999999999999 62.690000000000005 78.50999999999999 64.52000000000001 84.19999999999999 64.58000000000001C84.39999999999999 63.33000000000001 84.50999999999999 62.06000000000001 84.50999999999999 60.79000000000001L84.50999999999999 60.79000000000001C84.50999999999999 59.51000000000001 84.39999999999999 58.23000000000001 84.19999999999999 56.97000000000001C77.91999999999999 56.87000000000001 72.05999999999999 53.81000000000002 68.38 48.710000000000015Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /></svg><span>Кубинка</span></p></div>'),
        iconShape: {type: 'Rectangle', coordinates: [[-10, -31], [10, 0]]}
    }));
    
    myMap.geoObjects.add(new ymaps.Placemark([56.093129, 37.50412], {hintContent: 'Катуар'}, {
        iconLayout: ymaps.templateLayoutFactory.createClass('<div class="marker"><p><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="36" height="36" viewBox="0 0 48 48"><path d="M68.31 63.65C66.98 62.839999999999996 65.71000000000001 61.94 64.52 60.949999999999996C61.419999999999995 58.379999999999995 58.849999999999994 55.24999999999999 56.92999999999999 51.709999999999994C54.629999999999995 47.49999999999999 53.33999999999999 42.8 53.15999999999999 37.99999999999999C46.12999999999999 40.379999999999995 40.609999999999985 45.91 38.23999999999999 52.94999999999999C42.719999999999985 53.11999999999999 47.109999999999985 54.26999999999999 51.109999999999985 56.30999999999999L51.109999999999985 60.64999999999999C46.93999999999998 58.12999999999999 42.179999999999986 56.779999999999994 37.30999999999999 56.72999999999999C37.09999999999999 57.98999999999999 36.999999999999986 59.25999999999999 36.999999999999986 60.52999999999999L36.999999999999986 60.52999999999999C36.999999999999986 61.80999999999999 37.09999999999999 63.08999999999999 37.30999999999999 64.34999999999998C42.499999999999986 64.41999999999997 47.45999999999999 66.52999999999999 51.109999999999985 70.22999999999998L51.109999999999985 76.48999999999998C48.48999999999999 71.74999999999999 43.679999999999986 68.63999999999999 38.289999999999985 68.19999999999999C40.679999999999986 75.17999999999999 46.15999999999998 80.66 53.12999999999998 83.02999999999999L53.12999999999998 48.19999999999999C54.079999999999984 50.819999999999986 55.35999999999998 53.30999999999999 56.92999999999998 55.609999999999985L56.92999999999998 60.149999999999984C57.62999999999998 60.72999999999998 58.28999999999998 61.33999999999998 58.939999999999976 61.97999999999998C60.24999999999998 63.26999999999998 61.439999999999976 64.66999999999999 62.49999999999998 66.16999999999999L62.49999999999998 73.99999999999999C61.58999999999998 71.75999999999999 60.39999999999998 69.64999999999999 58.939999999999976 67.72999999999999C58.31999999999998 66.89999999999999 57.63999999999998 66.1 56.92999999999998 65.35L56.92999999999998 84.00999999999999C58.17999999999998 84.21999999999998 59.44999999999998 84.32 60.71999999999998 84.32L60.71999999999998 84.32C61.98999999999998 84.32 63.25999999999998 84.22 64.51999999999998 84.00999999999999L64.51999999999998 63.519999999999996C65.72999999999998 64.42 66.98999999999998 65.24 68.30999999999999 65.97999999999999L68.30999999999999 83.02999999999999C75.29999999999998 80.64999999999999 80.78999999999999 75.12999999999998 83.15999999999998 68.11999999999999C77.90999999999998 67.91 72.80999999999999 66.36999999999999 68.30999999999999 63.64999999999999Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /><path d="M82.8 52.85C80.42 45.870000000000005 74.96 40.39 68 38C68.63 45.92 74.9 52.21 82.8 52.85Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /><path d="M68.38 48.71C65.97 45.39 64.64999999999999 41.410000000000004 64.58999999999999 37.31C63.32999999999999 37.1 62.05999999999999 37 60.78999999999999 37L60.78999999999999 37C59.51999999999999 37 58.24999999999999 37.11 56.99999999999999 37.31C57.06999999999999 44.28 59.779999999999994 50.96 64.58 56L64.58 46.2C65.53999999999999 48.28 66.82 50.21 68.38 51.900000000000006L68.38 59.330000000000005C72.97999999999999 62.690000000000005 78.50999999999999 64.52000000000001 84.19999999999999 64.58000000000001C84.39999999999999 63.33000000000001 84.50999999999999 62.06000000000001 84.50999999999999 60.79000000000001L84.50999999999999 60.79000000000001C84.50999999999999 59.51000000000001 84.39999999999999 58.23000000000001 84.19999999999999 56.97000000000001C77.91999999999999 56.87000000000001 72.05999999999999 53.81000000000002 68.38 48.710000000000015Z " fill="#ffffff" fill-opacity="1" transform="matrix(1,0,0,1,-37,-37)" /></svg><span>Катуар</span></p></div>'),
        iconShape: {type: 'Rectangle', coordinates: [[-65, -45], [65, 0]]}
    }));
    
    myMap.behaviors.disable('scrollZoom');
    
    
    $('[data-point="Очаково"]').click(function(){
        myMap.panTo([55.674044, 37.436461], {duration: 500});
        //myMap.setCenter([55.601143, 36.727974], basiczoom);
	});
    
    $('[data-point="Кубинка"]').click(function(){
	    myMap.panTo([55.594921, 36.717036], {duration: 500});
        //myMap.setCenter([55.601143, 36.727974], basiczoom);
	});
    
    $('[data-point="Катуар"]').click(function(){
	    myMap.panTo([56.093129, 37.50412], {duration: 500});
        //myMap.setCenter([55.601143, 36.727974], basiczoom);
	});
    
    $('[data-map="plus"]').click(function(){
        basiczoom += 1;
        myMap.setZoom(basiczoom, {duration: 200});
    });
    
    $('[data-map="minus"]').click(function(){
        basiczoom -= 1;
        myMap.setZoom(basiczoom, {duration: 200});
    });
       
}
