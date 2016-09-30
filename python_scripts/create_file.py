__author__ = 'Udara'
from ttable_parser import *
import sys
from bs4 import BeautifulSoup
import requests
course_dict= {}
fname = 'course_times.txt'

#data now has information from given link
data= requests.get("http://www.artsandscience.utoronto.ca/ofr/timetable/winter/")

#to get the html, do data.text
soup = BeautifulSoup(data.text)

#list of all the course page links
course_list = []

#find_all searches for html tags
for link in soup.find_all('a'):
    # <a href="course_page.html">
    href = link.get('href')
    print (link)
    #to avoid getting non-course links. All course info pages are .html pages and NOT links
    if not href.startswith('http') and not href.startswith('mailto'):
        course_list.append(('http://www.artsandscience.utoronto.ca/ofr/timetable/winter/{0}'.format(href)))


for item in course_list:
    try:
        #linkparse() makes the dictionary of {time: [course, course]}
        linkparse(item,course_dict)
    except:
        print(item)

# write the whole dictionary of linkparse
fname = 'course_times.txt'
with open(fname, 'w') as f:
    f.write(str(course_dict))
f.close()







