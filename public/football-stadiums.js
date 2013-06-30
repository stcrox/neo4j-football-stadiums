$(document).ready(function() {		
	var startPosition = [51.505, -0.11398315429687499];
	$("#inputLatLong").val(startPosition);
	$("#inputDistance").val(10);
	
	var map = Map({element: 'map', position: startPosition, distanceElement: $("#inputDistance"), zoom: 11 });
	
	var stadiums = Stadiums({
		form : $("#stadium-search"), 
		latLong: $("#inputLatLong"), 
		distance: $("#inputDistance"), 
		map: map
	});

	$("#inputDistance").change(function() {	
		map.updateBoundary();	
		stadiums.refresh();
	})

	map.onClick(function(e) {
		var latLong = e.latlng;
		$("#inputLatLong").val(latLong.lat + "," + latLong.lng);		
		stadiums.refresh();
	});

	stadiums.refresh();
});