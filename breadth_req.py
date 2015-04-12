from bs4 import BeautifulSoup
import requests

with open("course_times.txt", 'r') as c:
    schedule = eval(c.readline())
c.close()
course_list = []

def inject_html(link):
    response = requests.get(link)
    soup = BeautifulSoup(response.text)
    pretty = soup.prettify()

    file_name = "breadth.txt"
    with open(file_name, 'w') as f:
        f.write(pretty)
    f.close()

inject_html("http://www.artsandscience.utoronto.ca/ofr/calendar/crs_abs.htm#ABS201Y1")

def parse_dict(dict):
    for key in dict:
        for course in dict[key]:
            if course not in course_list:
                course_list.append(course)




parse_dict(schedule)
with open("course_list.txt", 'w') as d:
    d.write(str(course_list))
d.close()

print(course_list)
print(len(course_list))