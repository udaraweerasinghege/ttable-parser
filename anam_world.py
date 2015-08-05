__author__ = 'Anam'


from bs4 import BeautifulSoup
import requests

#simple function, adds key and item to cdict
def appendDict(cdict, key, item):
    if key in cdict:
        cdict[key].append(item)
    else:
        cdict[key] = [item]

#checks if aword is a course 
def checkcourse(aword):
    return len(aword) == 8 and aword[:3].isalpha() and aword[3:6].isdigit() and aword[6] in 'HY' and aword.endswith('1')

#checks if entry is a tutorial or practical (to filter these out later)
def tutorprac(entry):
    return len(entry) == 5 and entry[0] in 'TP' and entry[1].isdigit()

#checks if aword is a valid date (e.g. R5-7, T2-5)
def checkdate(aword):
    #to filter tutorials
    if aword.startswith('T') and len(aword) == 5 and '-' not in aword:
        return False
    if len(aword) == 1:
        return False
    for letter in aword:
        if letter not in 'MWFTR-0123456789':
            return False
    return True

#this function is currently identical to linkparse() from ttable_parser
def parse_courses_with_times(link, cdict):
    #requests (imported) runs http get request 
    #response has info
    response = requests.get(link)
    
    #response.text has html info
    soup = BeautifulSoup(response.text)
    
    #gets all table rows after index 2
    shorten = soup.find_all('tr')[2:]
    classlist = []
    #shorten is iterable bs4 objects of 'tr' objects
    for row in shorten:
        i = []
        for cell in row:
            #append cell data only if not empty
            if cell.string != None and cell.string.strip() != '' and cell.string.strip() != '':
                i.append(cell.string)
                print (cell.string)
        classlist.append(i)
    #print(classlist)
    activec = classlist[0][0]

    for list in classlist:

        if len(list) > 0 and checkcourse(list[0]):
            activec = list[0] + list[1]

        if len(list) > 0 and not tutorprac(list[0]):
            for item in list:
                if checkdate(item):
                    appendDict(cdict, item, activec)

    return cdict


something = parse_courses_with_times("http://www.artsandscience.utoronto.ca/ofr/timetable/winter/csb.html", {})
example_dict = {
    'CSC108H1F': {
        'LEC101': 'R6-9'
    }
}