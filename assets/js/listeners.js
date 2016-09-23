$(document).ready(function() {
  // add the legend
  var legendHtml = '<img src="' + WMS_URL +
    '?REQUEST=GetLegendGraphic&VERSION=1.1.1&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Bikes:bikepaths&STYLE=line">';
  $('#legend').html(legendHtml);

  // add event listener to display popup on click
  map.on('click', function(event) {
    // get the feature (marker) that was clicked on
    var feature = map.forEachFeatureAtPixel(event.pixel,
      function(feature, layer) {
        return feature;
    });

    // get attribute data from bike paths layer
    var resolution = map.getView().getResolution();
    var featureInfoUrl = wmsTile.getSource().
      getGetFeatureInfoUrl(event.coordinate,
      resolution, 'EPSG:3857', {'INFO_FORMAT': 'application/json'});
    $.get(featureInfoUrl, function(response) {

      if(response.features[0]) {
        var surfType = response.features[0].properties.ogr_surf_s || 'unknown';
        var featM = response.features[0].properties.ogr_feat_m || 'unknown';
        var offRoad = response.features[0].properties.ogr_on_off || 'unknown';
        var facType = response.features[0].properties.ogr_factyp ||
          response.features[0].ogr_fact_1;
        var pathLoc = response.features[0].properties.ogr_region ||
          response.features[0].properties.ogr_regi_1;
      } else {
        var surfType = 'unknown';
        var featM = 'unknown';
        var offRoad = 'unknown';
        var facType = feature.get('name');
        var pathLoc = feature.get('county');
      }
      
      if(feature) {
        $('#modal1').openModal();
        $('.modal-header').text(facType);
        var modalTable = '<td>' + pathLoc + '</td><td>' +
          surfType + '</td><td>' + offRoad + '</td><td>' +
          featM + '</td>';
        $('.modal-table-body').html(modalTable);
        var bikeImg = '<img class="modal-img" src="exifreader/images/' +
          feature.get('imgSrc') + '">';
        $('.modal-img-wrapper').html(bikeImg);
        var modalHeight = $('#modal1').height();
        $('.modal-img').height(modalHeight * 0.5);
      } else {
        $('#modal1').closeModal();
      }
    });
  });

  // change mouse cursor when over marker
  $(map.getViewport()).on('mousemove', function(event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
      return true;
    });
    
    hit ? map.getTargetElement().style.cursor = 'pointer' :
      map.getTargetElement().style.cursor = '';
  });
});