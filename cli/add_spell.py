import requests
import json
from os import system, path
from files_io.write_to_file import write_text_to_file
from constants import spellbook_path
from dotenv import dotenv_values

config = dotenv_values(".env")

API = config["API_PROTOCOL"] + config["API_URL"] + ':' + config["API_PORT"]


def add_spell(spell_name):
    if (does_spell_exist(spell_name)):
        print("Spell already exists.")
        return None

    response = fetch_spell(spell_name)

    create_spell_directory(spell_name)

    write_text_to_file(response['spell.json'],
                       spellbook_path+spell_name+'/', 'spell.json')
    write_text_to_file(response['spell.sh'],
                       spellbook_path+spell_name+'/', 'spell.sh')
    system('chmod +x '+spellbook_path+'/'+spell_name+'/'+'spell.sh')


def fetch_spell(spell_name):
    return json.loads(requests.get(
        API + '/api/spell?name=' + spell_name).text)


def does_spell_exist(spell_name):
    return path.isdir(spellbook_path+'/'+spell_name)


def create_spell_directory(spell_name):
    system('mkdir '+spellbook_path+'/'+spell_name)
