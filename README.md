# ATL Bike Path Conditions

Displaying bike path conditions around Atlanta.

## Acknowledgements
Clarence Blalock provided the original idea for this project, and also provided the bike paths shapefile (not included in the repo).

## Built with
* [Materialize CSS](http://materializecss.com/) (for modals and general styling)
* [OpenLayers 3](http://openlayers.org/)
* jQuery
* [ExifRead](https://pypi.python.org/pypi/ExifRead) (used in standalone Python script)
* [PyShp](https://pypi.python.org/pypi/pyshp) (used in another standalone Python script)

## Directory Structure
```javascript
/assets
    /css  /* stylesheets go here */
    /fonts  /* fonts for materialize css go here */
    /images  /* vector graphics and such go here */
    /js  /* main javascript code goes here */
/exifreader  /* standalone Python script goes here */
    /images  /* bike path images go here */
/shpreader  /* another standalone Python script goes here */
/SLD  /* contains the SLD used to style the bike paths layer (and also the default 'line' SLD) */
```

## Installation
This app requires a [Geoserver](http://geoserver.org/) instance on the backend that serves the 'bikepaths' tile. See `geoserver_instructions.md` for instructions on setting up Geoserver.

Once you have Geoserver set up, place the URL to your Geoserver's [Web Map Service (WMS)](http://docs.geoserver.org/stable/en/user/services/wms/reference.html) in `assets/js/WMS_URL`:

```javascript
var WMS_URL = "http://www.mydomain.com:8080/geoserver/wms";
```

## To Do
* Get attribute-based style rules working on Geoserver
* Create an admin panel where new path photos can be added
* Automate the process of extracting exif data from path photos