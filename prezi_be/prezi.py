import json
from flask import Flask, abort
from pymongo import MongoClient
from logic import JSONEncoder
from settings import *

app = Flask(__name__)
db = MongoClient()[database['name']][database['collection']]


@app.route(PATH + '/slides', methods=['GET'])
def get_slides():
    slides = []
    for slide in db.find():
        slides.append(slide)
    if len(slides) == 0:
        abort(404)
    return json.dumps(slides, cls=JSONEncoder)


@app.route(PATH + '/slides/<slide_title>', methods=['GET'])
def get_slide_by_title(slide_title):
    slides = []
    for slide in db.find({'title': slide_title}):
        slides.append(slide)
    if len(slides) == 0:
        abort(404)
    return json.dumps(slides, cls=JSONEncoder)


if __name__ == '__main__':
    app.run(debug=DEBUG)
