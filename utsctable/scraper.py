__author__ = 'Udara'

from bs4 import BeautifulSoup
import requests


soup = BeautifulSoup(open("utsc.htm", encoding="utf8").read())



data = []
table = soup.find('table', attrs={'class':'tb_border_tb'})

table_body = table.find('tbody')

rows = table_body.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    data.append([ele for ele in cols if ele])

for item in data:
    print(item)