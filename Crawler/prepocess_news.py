import csv
import os


tps = []
with open('news/abstract.txt','r',encoding='utf-8') as f:
    lines = f.readlines()
    for line in lines:
        tps.append(line.split(',')[2][2:-3])

    tpcsv = open("csv_news/abstract.csv", "w", newline='', encoding='utf-8')
    csvwriter = csv.writer(tpcsv)
    for tp in tps:
        # print(tp)
        csvwriter.writerow([tp])


# dir = 'news2'
# filelist = os.listdir(dir)
#
# for file in filelist:
#     path = os.path.join(dir,file)
#     tps = []
#     with open(path,'r',encoding='utf-8') as f:
#         lines = f.readlines()
#         for line in lines:
#             tps.append(line.split(',')[2][2:-3])
#             # tps.append(line.replace(u"&nbsp",u'').replace(u"\\u3000",u'').replace(u"\\xa0",u'').replace(';;;;', '').strip('[').strip('\n')[1:-2].split(';;'))
#             # print(lines)
#
#     tpcsv = open("news_csv2/"+file[:-4]+".csv", "w", newline='', encoding='utf-8')
#     csvwriter = csv.writer(tpcsv)
#     for tp in tps:
#         csvwriter.writerow([tp])

