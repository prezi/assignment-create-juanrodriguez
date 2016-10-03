from flask import Flask, jsonify, abort
from settings import *

app = Flask(__name__)


@app.route(PATH + '/slides', methods=['GET'])
def get_slides():
    return jsonify({'slides': data})


@app.route(PATH + '/slides/<slide_title>', methods=['GET'])
def get_slide_by_title(slide_title):
    slide = [slide for slide in data if slide['title'] == slide_title]
    if len(slide) == 0:
        abort(404)
    return jsonify({'slide': slide})


if __name__ == '__main__':
    app.run(debug=True)
