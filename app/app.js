var bikeData = [
  { name: 'Fulton Path', county: 'Fulton', imgSrc: 'unbroken.jpg', lng: -84.400, lat: 33.780 },
  { name: 'Cobb Path', county: 'DeKalb', imgSrc: 'path.jpg', lng: -84.300, lat: 33.780 }
];

var iconFeatures = [];

function iconFactory(obj) {
  // create the icon
	var iconFeature = new ol.Feature({
	  geometry: new ol.geom.Point(ol.proj.transform([obj.lng, obj.lat], 'EPSG:4326', 'EPSG:3857')),
	  name: obj.name,
    county: obj.county,
    imgSrc: obj.imgSrc
	});

  // create the icon's style
	var iconStyle = new ol.style.Style({
	  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
	    src: 'icon.svg',
      opacity: 0.8,
      scale: 0.1
	  }))
	});

  // set the icon's style
	iconFeature.setStyle(iconStyle);
  iconFeatures.push(iconFeature);
}

// add the icons
bikeData.map(iconFactory);

// add the icon as a new vector source
var vectorSource = new ol.source.Vector({
  features: iconFeatures
});

// create a new vector layer using the vector source
var icons = new ol.layer.Vector({
  source: vectorSource
});

// create the base tile from open street maps
var osmTile = new ol.layer.Tile({
	source: new ol.source.OSM()
});

// create the bike paths tile from geoserver
var wmsTile = new ol.layer.Tile({
	title: 'ATL Bike Paths',
	source: new ol.source.TileWMS({
		url: WMS_URL,
		params: { layers: 'Bikes:bikepaths', format: 'image/png', transparent: true, styles: 'line' }
	})
});

// create the map
var map = new ol.Map({
	target: 'map',
	layers: [osmTile, wmsTile, icons],
	view: new ol.View({
		center: ol.proj.fromLonLat([-84.398, 33.772]),
		zoom: 11
	})
});

// create a popup
var popupElem = document.getElementById('popup');

var popup = new ol.Overlay({
  element: popupElem,
  positioning: 'bottom-center',
  stopEvent: false
});
map.addOverlay(popup);

// add event listener to display popup on click
map.on('click', function(evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function(feature, layer) {
      return feature;
    });
  if(feature) {
    var geometry = feature.getGeometry();
    var coord = geometry.getCoordinates();
    popup.setPosition(coord);
    $(popupElem).attr('data-placement', 'right');
    $(popupElem).attr('data-container', 'body');
    $(popupElem).attr('data-original-title', feature.get('title'));
    $(popupElem).attr('data-content', '<pre>' +
      '<img src="' + feature.get('imgSrc') + '">' +
      '<h5>' + feature.get('name') + '</h5>' + '</pre>');
    $(popupElem).attr('data-html', true);
    $(popupElem).popover();
    $(popupElem).popover('show');
  } else {
    $(popupElem).popover('destroy');
  }
});

// change mouse cursor when over marker
$(map.getViewport()).on('mousemove', function(e) {
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
    return true;
  });
  if(hit) {
    map.getTargetElement().style.cursor = 'pointer';
  } else {
    map.getTargetElement().style.cursor = '';
  }
});