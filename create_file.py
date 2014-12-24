__author__ = 'Udara'
from ttable_parser import *
import sys
from bs4 import BeautifulSoup
import requests
course_dict= {}
fname = 'course_times.txt'

data= requests.get("http://www.artsandscience.utoronto.ca/ofr/timetable/winter/sponsors.htm")
soup = BeautifulSoup(data.text)
course_list = []
for link in soup.find_all('a'):
    href = link.get('href')
    if not href.startswith('http') and not href.startswith('mailto'):
        course_list.append(('http://www.artsandscience.utoronto.ca/ofr/timetable/winter/{0}'.format(href)))


for item in course_list:
    try:
        linkparse(item,course_dict)
    except:
        print(item)

print(course_dict)
fname = 'course_times.txt'
with open(fname, 'a') as f:
    f.write(str(course_dict))
f.close()







