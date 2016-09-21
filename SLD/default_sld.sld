<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>bike_path</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Bike Path</Title>
      <Abstract>A solid red line representing the bike path layer.</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering lines -->
      <FeatureTypeStyle>
        <Rule>
          <Name>redline</Name>
          <Title>Red Line</Title>
          <Abstract>A solid red line with a 3 pixel width</Abstract>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#F7360E</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
