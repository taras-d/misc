
# Convert line separated values file to json file
def lsv_2_json(src_file, des_file):

	import json

	src = open(src_file)
	des = open(des_file, 'w')

	data = [line.rstrip() for line in src.readlines()]
	des.write(json.dumps(data, indent=4))

