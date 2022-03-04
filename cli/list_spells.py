from os import listdir
from constants import spellbook_path
from dotenv import dotenv_values

config = dotenv_values(".env")

API = config["API_PROTOCOL"] + config["API_URL"] + ':' + config["API_PORT"]


def list_spell():
    print("Your Spellbook:")
    print("\n".join(listdir(spellbook_path)))
