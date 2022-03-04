from add_spell import add_spell
from forget_spell import forget_spell
from list_spells import list_spell
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


def run_command(command, arguments=[]):
    command = command.strip()
    spell_name = (arguments[0] if len(arguments) > 0 else None)
    if command == "list" or command == "l":
        list_spell()
    elif command == "add" or command == "a":
        add_spell(spell_name)
    elif command == "forget" or command == "f" or command == "remove" or command == "r" or command == "delete" or command == "d":
        forget_spell(spell_name)
    elif command == "help" or command == "h":
        to_be_implemented(command)
    elif command == "about" or command == "a":
        to_be_implemented(command)
    elif command == "":
        to_be_implemented(command)
    else:
        run_spell(command, arguments)
        to_be_implemented(command)
