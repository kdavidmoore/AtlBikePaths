import shapefile

def import_shapefile(file):
    sf = shapefile.Reader(file)
    fields = sf.fields
    print 'property: {}'.format(fields[18][0])
    factypes = [f[18] for f in sf.iterRecords()]
    factypes_set = set(factypes)
    for ft in factypes_set:
        print 'feature type: {}'.format(ft)

def main():
    file_to_import = 'bikepaths_shp/bikepathsgpxwgs84_tracks'
    import_shapefile(file_to_import)

if __name__ == "__main__":
    main()
