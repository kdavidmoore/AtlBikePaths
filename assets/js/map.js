function iconFactory(obj) {
  // create the icon
  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([obj.lng, obj.lat],
      'EPSG:4326', 'EPSG:3857')),
    name: obj.name,
    county: obj.county,
    imgSrc: obj.imgSrc
  });

  // set the icon's style using a new style object
  iconFeature.setStyle(new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      src: 'assets/images/icon.svg',
      opacity: 0.8,
      scale: 0.08
    }))
  }));

  // return the icon so it gets added to the array
  return iconFeature;
}

// create an array that contains an icon for each
// element in the bikeData array and add the array
// as a vector source; create a new vector layer
// using the vector source
var icons = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: bikeData.map(iconFactory)
  })
});

// create the base tile from open street maps
var osmTile = new ol.layer.Tile({
  source: new ol.source.OSM()
});

// create the bike paths tile from a new TileWMS source
// (from Geoserver)
var wmsTile = new ol.layer.Tile({
  title: 'ATL Bike Paths',
  source: new ol.source.TileWMS({
    url: WMS_URL,
    params: {
      'LAYERS': 'Bikes:bikepaths',
      'FORMAT': 'image/png',
      'STYLES': 'line'
    },
    crossOrigin: 'Anonymous'
  })
});

// create the map
var map = new ol.Map({
  target: 'map',
  layers: [osmTile, wmsTile, icons],
  view: new ol.View({
    center: ol.proj.fromLonLat([-84.398, 33.772]),
    zoom: 10
  })
});