from add_spell import add_spell
from run_spell import run_spell
from spellbook_directory import ensure_spellbook_directory_existence
from parsers import parse_cli_command_arguments
from sys import argv
from dotenv import dotenv_values


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
        add_spell(arguments[0])
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
        run_spell(command, arguments)
        to_be_implemented(command)
