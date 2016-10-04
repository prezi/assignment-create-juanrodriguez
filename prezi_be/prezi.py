import pymongo
from flask import Flask, abort
from pymongo import MongoClient
from logic import json_render
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
    return json_render(data=slides)


@app.route(PATH + '/slides/<slide_title>', methods=['GET'])
def get_slide_by_title(slide_title):
    slides = []
    for slide in db.find({'title': slide_title}):
        slides.append(slide)
    if len(slides) == 0:
        abort(404)
    return json_render(data=slides)


@app.route(PATH + '/slides/<int:sort_by>', methods=['GET'])
def get_slides_sorted_by_date(sort_by):
    slides = []
    sort_direction = pymongo.ASCENDING if sort_by == 1 else pymongo.DESCENDING
    for slide in db.find().sort('createdAt', sort_direction):
        slides.append(slide)
    if len(slides) == 0:
        abort(404)
    return json_render(data=slides)


if __name__ == '__main__':
    app.run(debug=DEBUG)
