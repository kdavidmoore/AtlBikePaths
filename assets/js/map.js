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
      scale: 0.08
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