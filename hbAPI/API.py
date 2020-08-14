#coding=utf8

from flask import Flask, request
from DB import DBConnection

app = Flask(__name__)

db = DBConnection("ec2-18-157-161-140.eu-central-1.compute.amazonaws.com", "hb", "211116#Hb", "hblog")

def prepareCategoryResponse(liste): # to create category response
    response = {}
    response["id"] = str(liste[0])
    response["title"] = liste[2]
    response["text"] = liste[3]
    response["writer"] = liste[4]
    response["image"] = liste[5]
    response["time"] = liste[6]
    return response

def prepareTextResponse(liste):
    id = str(liste[0])
    text = liste[1]
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
        result = db.fetch("SELECT * FROM writings WHERE wcategory = '{}'".format(category))
        print(result)
        response_json = {"response": prepareCategoryResponse(result)}
        return response_json
    else:
        print("Only POST requests are supported here.....")

@app.route('/getText', methods=['GET', 'POST'])
def textSearch():
    if request.method == "POST":
        json = dict(request.get_json())
        id = json["id"]
        response_json = {}
        result = db.fetch("SELECT * FROM texts WHERE tid={}".format(id))
        print(result)
        sozluk = prepareTextResponse(result)
        response_json["response"] = sozluk[id]
        return response_json
    else:
        print("Only POST requests are supported here.....")


if __name__ == '__main__':
    app.run()