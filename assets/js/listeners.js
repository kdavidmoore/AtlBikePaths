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

    // var layer = map.forEachLayerAtPixel(evt.pixel,
    //   function(feature, layer) {
    //     return layer;
    // });

    if(feature) {
      $('#modal1').openModal();
      var modalHeight = $('#modal1').height();
      $('.modal-header').html(feature.get('name'));
      $('.modal-description').html('County: ' + feature.get('county'));
      var bikeImg = '<img class="modal-img" src="exifreader/images/' +
        feature.get('imgSrc') + '">';
      $('.modal-img-wrapper').html(bikeImg);
      $('.modal-img').height(modalHeight * 0.5);
    /* }
    else if(layer) */

      // get attribute data from bike paths layer;
      // this throws a cross origin error
      var resolution = map.getView().getResolution();
      var featureInfoUrl = wmsSource.getGetFeatureInfoUrl(evt.coordinate, resolution,
      'EPSG:3857', {'INFO_FORMAT': 'text/html'});
      $('#info').html('<iframe seamless src="' + featureInfoUrl + '"></iframe>');
    }
    else {
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
});