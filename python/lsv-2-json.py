
# Convert line separated values file to json file
def line_sep_values_to_json(src_file, des_file):

	import json

	src = open(src_file)
	des = open(des_file, 'w')

	data = [{ 'text': i.rstrip() } for i in src.readlines()]
	des.write(json.dumps(data, indent=4))

line_sep_values_to_json('fns', 'job-functions.json')
line_sep_values_to_json('inds', 'industries.json')
