from bs4 import BeautifulSoup
from globals import clist1, b_dict
import requests
import sys

sys.setrecursionlimit(25000)


fname = 'breadth.txt'
clist2 = []

for course in clist1:
    code = course[:3]
    if code not in clist2:
        clist2.append(code)
print(len(clist2))
def main():
    new_d = {'The Physical and Mathematical Universes (5)': [], 'Living Things and Their Environment (4)': [], 'Society and its Institutions (3)': [], 'Thought, Belief and Behaviour (2)': [], 'Creative and Cultural Representations (1)': []}
    for item in clist2:
        print(item)
        course_link = "http://www.artsandscience.utoronto.ca/ofr/calendar/crs_{0}.htm".format(item.lower())
        inject_html(course_link)
        lines = parse_file()
        generate_dict(lines,new_d)
    with open("breadths_dictionary.txt", 'w') as l:
        l.write(str(new_d))
    l.close()

def inject_html(link):
    response = requests.get(link)
    soup = BeautifulSoup(response.text)
    pretty = soup.prettify()

    with open(fname, 'w',encoding='utf-8') as f:
        f.write(pretty)
    f.close()

def parse_file():
    L = []
    with open(fname, 'r', encoding='utf-8') as f:
        for line in f.readlines():
            L.append(line.strip())
        f.close()
    return L

def generate_dict(L, new_d):
    curr = 'x'
    #inloopcheck to make sure its not still x, and not adding duplicates
    for line in L:
        if line.startswith("<a name="):
            cname = line.strip('<a name=">')
           #print(cname)
            if cname in clist1:
                curr = cname
        elif line.startswith("Breadth Requirement:"):
            reqs = line.strip("Breadth Requirement:  ")
            #no prereqs
            if 'None' in line:
                pass
            #handle multiple breadths
            elif '+' in line:
                blist = reqs.split(' + ')
                for item in blist:
                    if curr !='x' and curr not in new_d[item]:
                        new_d[item].append(curr)
            else:
                #go normal
                if reqs in new_d:
                    if curr != 'x' and curr not in new_d[reqs]:
                        new_d[reqs].append(curr)

    
def check_no_dups(L):
    #true if no dups
    return len(L) == len(set(L))
    


main()
#inject_html("http://www.artsandscience.utoronto.ca/ofr/calendar/crs_eng.htm")

    