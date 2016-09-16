# ATL Bike Path Conditions

Displaying bike path conditions around Atlanta.

## Built with
* Bootstrap 3
* jQuery
* OpenLayers, with OpenStreetMap for the background tile
* [Exifread](https://pypi.python.org/pypi/ExifRead)

## TODO
* Allow new images to be added, extract exif data from the images, and add images to the map (via admin panel)
* Make bike path tile clickable - show info on each segment

## INSTALLATION
This app requires a [Geoserver](http://geoserver.org/) instance on the backend that serves the 'bikepaths' tile. See `geoserver_instructions.md` for instructions on setting up Geoserver.

Once you have Geoserver set up, place the URL to your Geoserver's [Web Map Service (WMS)](http://docs.geoserver.org/stable/en/user/services/wms/reference.html) in `assets/js/WMS_URL`:

```javascript
WMS_URL = "http://www.mydomain.com:3030/geoserver/wms";
```

