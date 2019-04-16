import requests
course_dir = []
course_link_tmpl = 'https://fas.calendar.utoronto.ca/course/{0}'
# get all courses from 1st year to 4th
for year in range(1,5):
    resp = requests.get('https://timetable.iit.artsci.utoronto.ca/api/20189/courses?org=&code=&section=&studyyear={}&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title='.format(year))
    data = resp.json()

    for course,course_data in data.items():
        course_code = course_data['code'] + course_data['section']
        course_link = course_link_tmpl.format(course_code[0:8])
        breadth = course_data['breadthCategories']
        meeting_sections = []

        for meetings, lecture in course_data['meetings'].items():
            if meetings.startswith('LEC'):
                try:
                    for schedule, session in lecture['schedule'].items():
                        if (session['meetingDay'] and session['meetingStartTime']):
                            meeting_sections.append({
                                'day': session['meetingDay'],
                                'start': session['meetingStartTime']
                            })
                except Exception as e:
                    # some lecture sessions' schedule is set to an empty array for some reason instead of object
                    # way to have a standardized data structure uoft >.<
                    print(e)
                    continue
        course_dir.append({
            'code': course_code,
            'link': course_link,
            'breadth_req': breadth,
            'meeting_sections': meeting_sections,
        })

print((course_dir))



