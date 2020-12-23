import pandas as pd
import csv

filePath = "C:\\Users\\a6705\\Documents\\GitHub\\www\\Crawler\\triples.csv"

# 读取三元组文件
n_r_b_name = [":START_ID", "relationship", ":END_ID"]
n_r_b = pd.read_csv(filePath, sep=',', names=n_r_b_name)  # 使用少量的测试数据
# n_r_b = pd.read_csv(filePath, sep=',', names=n_r_b_name)  # 使用全量的数据
print(n_r_b.info())
print(n_r_b.head())

# 去除重复实体
entity = set()
entity_n = n_r_b[':START_ID'].tolist()
entity_b = n_r_b[':END_ID'].tolist()
for i in entity_n:
    entity.add(i)
for i in entity_b:
    entity.add(i)
# print(entity)

# 保存节点文件-entity.csv
csvf_entity = open("entity.csv", "w", newline='', encoding='utf-8')
w_entity = csv.writer(csvf_entity)
# 实体ID，要求唯一，名称，LABEL标签，可自己不同设定对应的标签
w_entity.writerow(("entity:ID", "name", ":LABEL"))
entity = list(entity)
entity_dict = {}
for i in range(len(entity)):
    w_entity.writerow(("e" + str(i), entity[i], "my_entity"))
    entity_dict[entity[i]] = "e" + str(i)
csvf_entity.close()

# 生成关系文件-relationship.csv
# 起始实体ID，终点实体ID，要求与实体文件中ID对应，:TYPE即为关系
n_r_b[':START_ID'] = n_r_b[':START_ID'].map(entity_dict)
n_r_b['name'] = n_r_b['relationship']
n_r_b[':END_ID'] = n_r_b[':END_ID'].map(entity_dict)
n_r_b[":TYPE"] = n_r_b['relationship']
n_r_b.pop('relationship')
n_r_b.to_csv("relationship.csv", index=False)