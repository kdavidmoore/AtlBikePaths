<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
    xmlns="http://www.opengis.net/sld" 
    xmlns:ogc="http://www.opengis.net/ogc" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>bike_path</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Bike Path</Title>
      <Abstract>An attribute-based line representing bike paths</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering lines -->
    <FeatureTypeStyle>
     <Rule>
       <Name>Unknown Path Type</Name>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#009688</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
    </FeatureTypeStyle>
    <FeatureTypeStyle>
     <Rule>
       <Name>Side Path</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Side Path</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#f44336</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
   <FeatureTypeStyle>
     <Rule>
       <Name>Buffered Bike Lane</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Buffered Bike Lane</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#e91e63</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
   <FeatureTypeStyle>
     <Rule>
     <Name>Conventional Bike Lane</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Conventional Bike Lane</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#ff0000</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
   <FeatureTypeStyle>
     <Rule>
     <Name>Shared Use Path or Greenway</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Shared Use Path or Greenway</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#9c27b0</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
   <FeatureTypeStyle>
     <Rule>
     <Name>Protected Cycle Track</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Protected Cycle Track</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#3f51b5</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
   <FeatureTypeStyle>
     <Rule>
     <Name>Golf Cart Path</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Golf Cart Path</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#00bcd4</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
   <FeatureTypeStyle>
     <Rule>
     <Name>Raised Cycle Track</Name>
       <Filter>
         <PropertyIsEqualTo>
           <PropertyName>ogr_factyp</PropertyName>
           <Literal>Raised Cycle Track</Literal>
         </PropertyIsEqualTo>
       </Filter>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#cddc39</CssParameter>
           <CssParameter name="stroke-width">5</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
   </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>