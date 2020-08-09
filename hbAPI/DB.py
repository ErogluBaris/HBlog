import pymysql

class DBConnection():
    def __init__(self, host, user, password, db):
        self.host = host
        self.user = user
        self.password = password
        self.db = db

    def __connect__(self):
        try:
            self.connection = pymysql.connect(host=self.host,
                            user=self.user,
                            password=self.password,
                            db=self.db
                            )
            print("Connected...")
            self.cursor = self.connection.cursor()
        except:
            print("SQL Connection Error")

    def __disconnect__(self):
        try:
            self.connection.close()
        except:
            print("SQL Connection Can Not Be Closed")

    def execute(self, sql):
        self.__connect__()
        self.cursor.execute(sql)
        self.__disconnect__()

    def fetch(self, sql):
        self.__connect__()
        self.cursor.execute(sql)
        result = self.cursor.fetchall()
        self.__disconnect__()
        return list(result[0]) #Because it returns a tuple and also it is tuple in a tuple

    def select(self, table):
        SQL_SELECT = "SELECT * FROM {}".format(table)
        try:
            self.cursor.execute(SQL_SELECT)
            result = self.cursor.fetchall()
            print(result)
        except:
            print("SELECT ERROR")
        finally:
            self.connection.close()

