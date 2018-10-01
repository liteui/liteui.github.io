function initialize() {
	
    var myLatlng = new google.maps.LatLng(59.957006, 30.341755);
	var image = 'img/mapicon.png';
	
    //Стили карты
    var styles = 
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#c6c7cd"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#040715"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#85868b"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#040715"},{"lightness":"-2"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#040715"},{"lightness":"0"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#b0966c"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b9bac2"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#292a31"},{"lightness":"0"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#292a31"},{"lightness":"0"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1b1c24"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}];
    
    window.basiczoom = 12;
	
	//Настройки карты
	var mapOptions = {
		zoom: basiczoom,
		center: myLatlng,
		disableDefaultUI: true,
        scrollwheel: false,
	}
	
	//карта
	var map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);
    map.setOptions({styles: styles});
	
	//Кастомные маркеры
	overlay = new CustomMarker(
		myLatlng, 
		map,
		{
			marker_id: 'event1',
			image: image,
			location: 'Ул. Летниковская, 6А, стр. 1'
		}
	);
}
google.maps.event.addDomListener(window, 'load', initialize);