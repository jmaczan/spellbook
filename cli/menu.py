from os import system, path
from constants import spellbook_path
from spellbook_directory import ensure_spellbook_directory_existence
from parsers import parse_cli_command_arguments
from sys import argv
from dotenv import dotenv_values
import requests
import json
config = dotenv_values(".env")

API = config["API_PROTOCOL"] + config["API_URL"] + ':' + config["API_PORT"]


def menu():
    ensure_spellbook_directory_existence()
    (command, arguments) = parse_cli_command_arguments(argv)
    run_command(command, arguments)


def to_be_implemented(command):
    print('to be implemented: %s' % command)


def run_command(command, arguments=None):
    command = command.strip()
    if command == "list" or command == "l":
        to_be_implemented(command)
    elif command == "add" or command == "a":
        to_be_implemented(command)
        response = json.loads(requests.get(
            API + '/api/spell?name=' + arguments[0]).text)
        print(response['spell.json'])
        if(not path.isdir(spellbook_path+'/'+arguments[0])):
            system('mkdir '+spellbook_path+'/'+arguments[0])
        write_json_to_file(response['spell.json'],
                           spellbook_path+arguments[0]+'/', 'spell.json')
        write_json_to_file(response['spell.sh'],
                           spellbook_path+arguments[0]+'/', 'spell.sh')
    elif command == "remove" or command == "r":
        to_be_implemented(command)
    elif command == "commands" or command == "c":
        to_be_implemented(command)
    elif command == "help" or command == "h":
        to_be_implemented(command)
    elif command == "about" or command == "a":
        to_be_implemented(command)
    elif command == "":
        to_be_implemented(command)
    else:
        print('Run script %s', command)
        to_be_implemented(command)


def write_json_to_file(payload, prefix, filename):
    with open(prefix+filename, 'w') as file:
        file.write(json.dumps(payload))
