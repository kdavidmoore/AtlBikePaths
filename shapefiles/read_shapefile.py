import sys, shapefile

def import_shapefile(file):
	sf = shapefile.Reader(file)
	fields = sf.fields
	print fields

def main(argv):
	file_to_import = argv[1]
	import_shapefile(file_to_import)

if __name__ == "__main__":
	main(sys.argv)
