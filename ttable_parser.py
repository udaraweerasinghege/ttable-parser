__author__ = 'Pavitheran'

from bs4 import BeautifulSoup
import requests

def tutorprac(entry):
    return len(entry) == 5 and entry[0] in 'TP' and entry[1].isdigit()



def checkcourse(aword):
    return len(aword) == 8 and aword[:3].isalpha() and aword[3:6].isdigit() and aword[6] in 'HY' and aword.endswith('1')


def checkdate(aword):
    if aword.startswith('T') and len(aword) == 5 and '-' not in aword:
        return False
    if len(aword) == 1:
        return False
    for letter in aword:
        if letter not in 'MWFTR-0123456789':
            return False
    return True

def appendDict(cdict, key, item):
    if key in cdict:
        cdict[key].append(item)
    else:
        cdict[key] = [item]

def linkparse(link, cdict):
    response = requests.get(link)
    soup = BeautifulSoup(response.text)
    shorten = soup.find_all('tr')[2:]
    classlist = []
    for row in shorten:
        i = []
        for cell in row:
            if cell.string != None and cell.string.strip() != '' and cell.string.strip() != '':
                i.append(cell.string)
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

#
# something = linkparse("http://www.artsandscience.utoronto.ca/ofr/timetable/winter/csb.html", {})
# for key in something:
#     if 'CSB428H1F' in something[key]:
#         print (key)
