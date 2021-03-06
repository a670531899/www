import os
import csv
import jiagu

# dir = 'csv_news'
# filelist = os.listdir(dir)
#
# tot=0
# entities = []
# tpcsv=open("relationship.csv", "a+", newline='', encoding='utf-8')
# encsv = open('entities.csv', "a+", newline='', encoding='utf-8')
#
# with open('csv_news/abstract.csv', 'r', encoding='utf-8') as f:
#     lines = f.readlines()
#     for l in lines:
#         knowledge = jiagu.knowledge(l)
#         csvwriter = csv.writer(tpcsv)
#         tot +=len(knowledge)
#         for tp in knowledge:
#             entities.append(tp[0])
# entities = list(set(entities))
# print(len(entities))
# print(tot)
# tpcsv.close()
# encsv.close()




dir = 'csv_news'
filelist = os.listdir(dir)

tot=0
entities = []
tpcsv=open("news_tp/relationship.csv", "a+", newline='', encoding='utf-8')
encsv = open('news_tp/entities.csv', "a+", newline='', encoding='utf-8')
tot_news=0
for file in filelist:
    path = os.path.join(dir,file)

    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

        for l in lines:
            tot_news+=1
            knowledge = jiagu.knowledge(l)
            csvwriter = csv.writer(tpcsv)
            tot +=len(knowledge)
            for tp in knowledge:
                csvwriter.writerow(tp)
                entities.append(tp[0])
    entities = list(set(entities))

csvwriter = csv.writer(encsv)
for en in entities:
    csvwriter.writerow([en])
print(len(entities))
print(tot)
print(tot_news)
tpcsv.close()
encsv.close()