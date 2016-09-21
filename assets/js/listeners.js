$(document).ready(function(){
  // add the legend
  var legendHtml = '<p><img src="' + WMS_URL +
    '?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Bikes:bikepaths&STYLE=line">' +
    ' Bike paths</p>';
  $('#legend').html(legendHtml);

  // add event listener to display popup on click
  map.on('click', function(evt) {
    // get the feature (marker) that was clicked on
    var feature = map.forEachFeatureAtPixel(evt.pixel,
      function(feature, layer) {
        return feature;
    });

    // get attribute data from bike paths layer
    var resolution = map.getView().getResolution();
    var featureInfoUrl = wmsSource.getGetFeatureInfoUrl(evt.coordinate, resolution,
    'EPSG:3857', {'INFO_FORMAT': 'application/json'});
    //$('#info').html('<iframe seamless src="' + featureInfoUrl + '"></iframe>');
    $.get(featureInfoUrl, function(response) {
      console.log(response);
      var county = response.features[0].properties.ogr_regi_1;
      var surfType = response.features[0].properties.ogr_surf_s;
      var facType = response.features[0].properties.ogr_factyp;
      var facInfo = response.features[0].ogr_fact_1;
      $('#info').html('<p>Surface type: ' + surfType + '</p>' +
        '<p>Facility type: ' + facType + '</p>' +
        '<p>Facility info: ' + facInfo + '</p>');

      if(feature) {
        $('#modal1').openModal();
        var modalHeight = $('#modal1').height();
        $('.modal-header').html(feature.get('name'));
        $('.modal-description').html('County: ' + county);
        var bikeImg = '<img class="modal-img" src="exifreader/images/' +
          feature.get('imgSrc') + '">';
        $('.modal-img-wrapper').html(bikeImg);
        $('.modal-img').height(modalHeight * 0.5);
      } else {
        $('#modal1').closeModal();
      }
    });
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
});