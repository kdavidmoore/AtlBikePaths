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

## Notes
Requires a [Geoserver](http://geoserver.org/) instance on the backend that serves the 'bikepaths' tile. See `geoserver_instructions.md` for instructions on setting up Geoserver.