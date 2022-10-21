
def parse_software_demo(p):
	lines = p.split('\n')
	if len(lines) != 7:
		raise Exception("%s: must have 7 lines" % p)
	demo = {}
	demo["name"] = lines[0]
	demo["byline"] = lines[1]
	demo["description"] = lines[2]
	demo["paper_link"] = lines[3]
	demo["paper_venue"] = lines[4]
	demo["demo_link"] = lines[5]
	demo["image_filename"] = lines[6]
	return demo

def parse_collaborator(p):
	lines = p.split('\n')
	collaborator = {}
	collaborator["name"] = lines[0]
	collaborator["description"] = lines[1]
	collaborator["image_filename"] = lines[2]
	if len(lines) > 3:
		if not lines[3].startswith('http'):
			raise Exception("%s: Line 4 must be a URL" % p)
		collaborator["url"] = lines[3]
	return collaborator

def parse_person(p):
	lines = p.split('\n')
	if len(lines) < 2:
		print(p)
		raise Exception("Person must have at least 3 lines")
	person = {}
	person["name"]  = lines[0]
	person["title"] = lines[1]

	for line in lines[2:]:
		if line.startswith("http"):
			if "linkedin" in line:
				person["linkedin_profile"] = line
			elif "research-repository" in line:
				person["uwa_profile"] = line
			else:
				person["personal_webpage"] = line
		else:
			person["project_title"] = line
	return person

def parse_presentation(p):
	lines = p.split('\n')
	if len(lines) != 5:
		raise Exception("Presentation must have exactly 5 lines")
	presentation = {}
	presentation["title"] = lines[0]
	presentation["description"] = lines[1]
	presentation["authors"] = lines[2]
	presentation["date"] = lines[3]
	presentation["url"] = lines[4]

	video_id = lines[4].split("?v=")[1].split('&')[0]
	presentation["youtube_video_id"] = video_id

	if '&t=' in lines[4]:
		start_time = lines[4].split("?v=")[1].split('&t=')[1]
		try:
			start_time_s = int(start_time.split('m')[0]) * 60 + int(start_time.split('m')[1][:-1])
			presentation["video_start_time"] = start_time_s
		except:
			print("Could not process video start time %s" % start_time)
	return presentation

def parse_publication(p):
	lines = p.split('\n')
	if len(lines) < 3:
		print(p)
		raise Exception("Publication must have at least 3 lines")
	publication = {}
	publication["title"]   = lines[0]
	publication["authors"] = lines[1]
	publication["venue"]   = lines[2]
	if len(lines) == 4:
		publication["url"] = lines[3]

	return publication

