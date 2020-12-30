from py2neo import Graph


class SearchStruct:
    def build(self,head_entity,r):
        self.head_entity=head_entity
        self.r=r

def build_struct(query):
    search_struct=SearchStruct()
    head_entity=query.split("的")[0]
    r=query.split("的")[1].split("是")[0]
    search_struct.build(head_entity,r)
    return search_struct


def search(search_struct:SearchStruct):
    neo_graph=Graph("http://localhost:7474",
                user="neo4j",
                password="neo4j")
    # sql = "MATCH (m:my_entity{name:'日本高月级驱逐舰'})-[r:建造厂]->(n:my_entity) return m.name, r.name, n.name"
    # f=neo_graph.run("match (n:my_entity{name:'日本?'}) return n")
    sql1 = "MATCH (m:my_entity{name:'%s'})-[r:%s]->(n:my_entity) return m.name, r.name, n.name"%(search_struct.head_entity,search_struct.r)

    f=neo_graph.run(sql1).data()
    # print(f)
    return("{}的{}是{}".format(f[0]["m.name"],f[0]["r.name"],f[0]["n.name"]))



def search_query(query):
    #e.g.日本高月级驱逐舰的排水量是多少？
    struct=build_struct(query)
    return search(struct)

# if __name__ == '__main__':
#     search_query()