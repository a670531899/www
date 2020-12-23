import csv
tps = []
with open('baidubiake_military_property.txt','r',encoding='utf-8') as f:
    lines = f.readlines()
    for line in lines:
        tps.append(line.replace(u"&nbsp",u'').strip('[').strip('\n')[1:-2].replace(';;;;', '').split(';;'))

entities = []
with open('military_entity.txt','r',encoding='utf-8') as f:
    lines = f.readlines()
    for l in lines:
        entities.append(l.strip('\n'))

entities = set(entities)

num = 0
res = []

for tp in tps:
    if len(tp)==3:
        res.append(tp)



tpcsv = open("triples.csv", "w", newline='', encoding='utf-8')
csvwriter = csv.writer(tpcsv)

for tp in res:
    csvwriter.writerow((tp[0], tp[1],tp[2]))




