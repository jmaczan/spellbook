import json


def write_json_to_file(payload, prefix, filename):
    with open(prefix+filename, 'w') as file:
        file.write(json.dumps(payload))


def write_text_to_file(payload, prefix, filename):
    with open(prefix+filename, 'w') as file:
        file.write(payload)
