#coding=utf8

from flask import Flask, request
from DB import DBConnection

app = Flask(__name__)

db = DBConnection("localhost", "root", "", "hblog")

def prepareCategoryResponse(liste): # to create category response
    response = {}
    response["id"] = str(liste[0])
    response["title"] = liste[1]
    response["text"] = liste[2]
    response["writer"] = liste[3]
    response["image"] = liste[4]
    response["time"] = liste[5]
    return response

def prepareTextResponse(liste):
    id = str(liste[0])
    text = liste[6]
    return {id: text}

@app.route('/')
def main():
    return "Hacerim"

@app.route('/last', methods=["GET", "POST"])
def categories():
    return last

@app.route('/category', methods=["GET", "POST"])
def category():
    if request.method == "POST":
        json = dict(request.get_json())
        print(json)
        category = json["category"]
        result = db.fetch("SELECT * FROM {}".format(category))
        print(result)
        response_json = {"response": prepareCategoryResponse(result)}
        return response_json
    else:
        print("Only POST requests are supported here.....")

@app.route('/getText', methods=['GET', 'POST'])
def textSearch():
    if request.method == "POST":
        json = dict(request.get_json())
        category = json["category"]
        id = json["id"]
        response_json = {}
        result = db.fetch("SELECT * FROM {}".format(category))
        sozluk = prepareTextResponse(result)
        response_json["response"] = sozluk[id]
        return response_json
    else:
        print("Only POST requests are supported here.....")


if __name__ == '__main__':
    app.run()