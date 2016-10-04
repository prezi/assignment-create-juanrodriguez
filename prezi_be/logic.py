import json
import datetime
from bson import ObjectId


class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime.datetime) or isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)


def json_render(**data):
    return json.dumps(data, cls=JSONEncoder)
