function iconFactory(obj) {
  // create the icon
  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([obj.lng, obj.lat],
      'EPSG:4326', 'EPSG:3857')),
    name: obj.name,
    county: obj.county,
    imgSrc: obj.imgSrc
  });

  // create the icon's style
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      src: 'assets/images/icon.svg',
      opacity: 0.8,
      scale: 0.1
    }))
  });

  // set the icon's style
  iconFeature.setStyle(iconStyle);
  iconFeatures.push(iconFeature);
}

var iconFeatures = [];
// add the icons to the iconFeatures array
bikeData.map(iconFactory);

// add the icon as a new vector source,
// using the iconFeatures array
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

// create the style for the bikepaths layer
// this doesn't do anything
var pathStyle = [new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'red'
  }),
  stroke: new ol.style.Stroke({
    color: 'red',
    width: 10
  })
})];

// create a TileWMS source from geoserver
var wmsSource = new ol.source.TileWMS({
  url: WMS_URL,
  params: {
    'LAYERS': 'Bikes:bikepaths',
    'FORMAT': 'image/png',
    transparent: true,
    styles: pathStyle
  }
});

// create the bike paths tile from the WMS source
var wmsTile = new ol.layer.Tile({
  title: 'ATL Bike Paths',
  source: wmsSource
});

var view = new ol.View({
  center: ol.proj.fromLonLat([-84.398, 33.772]),
  zoom: 11
});

// create the map
var map = new ol.Map({
  target: 'map',
  layers: [osmTile, wmsTile, icons],
  view: view
});

// create a popup
// var popupElem = document.getElementById('popup');

// var popup = new ol.Overlay({
//   element: popupElem,
//   positioning: 'bottom-center',
//   stopEvent: false
// });
// map.addOverlay(popup);

// add event listener to display popup on click
map.on('click', function(evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function(feature, layer) {
      return feature;
  });

  if(feature) {
    $('#modal1').openModal();
    // assuming the feature is a marker
    // var geometry = feature.getGeometry();
    // var coord = geometry.getCoordinates();
    // popup.setPosition(coord);
    // $(popupElem).attr('data-placement', 'right');
    // $(popupElem).attr('data-container', 'body');
    // $(popupElem).attr('data-original-title', feature.get('title'));
    // $(popupElem).attr('data-content', '<pre>' +
    //   '<img src="assets/images/' + feature.get('imgSrc') + '">' +
    //   '<h5>' + feature.get('name') + '</h5>' + '</pre>');
    // $(popupElem).attr('data-html', true);
    // $(popupElem).popover();
    // $(popupElem).popover('show');
  } else {
    $('#modal1').closeModal();
    // $(popupElem).popover('destroy');
  }
});

// get attribute data from bike paths layer
// map.on('singleclick', function(evt) {
//   document.getElementById('info').innerHTML = '';
//   var resolution = map.getView().getResolution();
//   var url = wmsTile.getSource().getGetFeatureInfoUrl(evt.coordinate, resolution,
//     'EPSG:3857', {'INFO_FORMAT': 'text/html'});

//   if (url) {
//     popup.setPosition(evt.coordinate);
//     $(popupElem).attr('data-placement', 'right');
//     $(popupElem).attr('data-container', 'body');
//     $(popupElem).attr('data-original-title', 'A Title');
//     $(popupElem).attr('data-content', '<pre>' +
//       '<iframe seamless src="' + url + '"></iframe>' + '</pre>');
//     $(popupElem).attr('data-html', true);
//     $(popupElem).popover();
//     $(popupElem).popover('show');
//   } else {
//     $(popupElem).popover('destroy');
//   }
// });

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