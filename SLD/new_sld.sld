<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>bike_path</Name>
    <UserStyle>
        <Title>Bike Path</Title>
        <FeatureTypeStyle>
         <Rule>
           <Name>unknown</Name>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#ffeb3b</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
           <Name>side-path</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Side Path</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#f44336</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
           <Name>buffered-bike-lane</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Buffered Bike Lane</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#e91e63</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
         <Name>conventional-bike-lane</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Conventional Bike Lane</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#ff0000</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
         <Name>shared-use-path</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Shared Use Path or Greenway</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#9c27b0</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
         <Name>protected-cycle-track</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Protected Cycle Track</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#3f51b5</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
         <Name>golf-cart-path</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Golf Cart Path</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#00bcd4</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
        <FeatureTypeStyle>
         <Rule>
         <Name>raised-cycle-track</Name>
           <ogc:Filter>
             <ogc:PropertyIsEqualTo>
               <ogc:PropertyName>ogr_factyp</ogc:PropertyName>
               <ogc:Literal>Raised Cycle Track</ogc:Literal>
             </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <LineSymbolizer>
             <Stroke>
               <CssParameter name="stroke">#009688</CssParameter>
               <CssParameter name="stroke-width">3</CssParameter>
             </Stroke>
           </LineSymbolizer>
         </Rule>
        </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>