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
  return iconFeature;
}

// create an iconFeatures array that contains an icon for each
// element in the bikeData array
var iconFeatures = bikeData.map(iconFactory);

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
// var pathStyle = [new ol.style.Style({
//   fill: new ol.style.Fill({
//     color: 'red'
//   }),
//   stroke: new ol.style.Stroke({
//     color: 'red',
//     width: 10
//   })
// })];

// create a TileWMS source from geoserver
var wmsSource = new ol.source.TileWMS({
  url: WMS_URL,
  params: {
    layers: 'Bikes:bikepaths',
    format: 'image/png',
    transparent: true,
    styles: 'line'
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

// add event listener to display popup on click
map.on('click', function(evt) {
  // get the feature (marker) that was clicked on
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function(feature, layer) {
      return feature;
  });

  /* var layer = map.forEachLayerAtPixel(evt.pixel,
    function(feature, layer) {
      return layer;
  }); */

  if(feature) {
    $('#modal1').openModal();
    var modalHeight = $('#modal1').height();
    $('.modal-header').html(feature.get('name'));
    $('.modal-description').html('County: ' + feature.get('county'));
    var bikeImg = '<img class="modal-img" src="assets/images/' +
      feature.get('imgSrc') + '">';
    $('.modal-img-wrapper').html(bikeImg);
    $('.modal-img').height(modalHeight * .5);
  }  /* else if(layer) {
    // get attribute data from bike paths layer
    var resolution = map.getView().getResolution();
    var featureInfoUrl = wmsSource.getGetFeatureInfoUrl(evt.coordinate, resolution,
    'EPSG:3857', {'INFO_FORMAT': 'text/html'});
    
    $('#modal1').openModal();
    $('.modal-content').html('<iframe seamless src="' +
      featureInfoUrl + '"></iframe>');
  } */ else {
    $('#modal1').closeModal();
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