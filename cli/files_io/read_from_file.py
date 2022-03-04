import json


def read_json_from_file(prefix, filename):
    try:
        with open(prefix+filename) as file:
            raw_json = file.read()
            return json.loads(raw_json)
    except IOError:
        raise IOError


def read_text_from_file(prefix, filename):
    try:
        with open(prefix+filename) as file:
            return file.read()
    except IOError:
        raise IOError
