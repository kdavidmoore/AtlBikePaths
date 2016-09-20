import sys, exifread

def to_decimal(coord):
    degs = float(coord[0].num)
    mins = float(coord[1].num)
    secs = float(coord[2].num) / float(coord[2].den)
    dec = degs + (mins / 60) + (secs / 3600)
    return round(dec, 5)

with open('images/{}'.format(sys.argv[1]), 'rb') as f:
    tags = exifread.process_file(f, details=False)
    lat = list(tags['GPS GPSLatitude'].values)
    lng = list(tags['GPS GPSLongitude'].values)
    print '{}, {}'.format(to_decimal(lat), to_decimal(lng))