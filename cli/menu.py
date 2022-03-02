from parsers import parse_cli_command_arguments, parse_text_command_arguments
from sys import argv

def menu():
    (command, arguments) = parse_cli_command_arguments(argv)
    run_command(command, arguments)

def to_be_implemented():
    print('to be implemented')

def run_command(command, arguments = None):
    command = command.strip()

    if command == "list" or command == "l":
        to_be_implemented()
    elif command == "add" or command == "a":
        to_be_implemented()
    elif command == "remove" or command == "r":
        to_be_implemented()
    elif command == "commands" or command == "c":
        to_be_implemented()
    elif command == "help" or command == "h":
        to_be_implemented()
    elif command == "about" or command == "a":
        to_be_implemented()
    elif command == "":
        to_be_implemented()
    else:
        print('Run script %s', command)
        to_be_implemented()