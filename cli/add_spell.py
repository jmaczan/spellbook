import requests
import json
from os import system, path
from files_io.write_to_file import write_text_to_file
from files_io.write_to_file import write_json_to_file
from constants import spellbook_path
from dotenv import dotenv_values

config = dotenv_values(".env")

API = config.get("REGISTRY_URL", '')


def add_spell(spell_name):
    if (does_spell_exist(spell_name)):
        print("Spell already exists.")
        return None

    spell_sh = fetch_spell_sh(spell_name)
    spell_json = fetch_spell_json(spell_name)

    create_spell_directory(spell_name)

    write_json_to_file(spell_json,
                       spellbook_path+spell_name+'/', 'spell.json')
    write_text_to_file(spell_sh,
                       spellbook_path+spell_name+'/', 'spell.sh')
    system('chmod +x '+spellbook_path+'/'+spell_name+'/'+'spell.sh')
    print("You learned %s" % spell_name)


def fetch_spell_sh(spell_name):
    print(API + spell_name + '/spell.sh')
    return requests.get(
        API + spell_name + '/spell.sh').text


def fetch_spell_json(spell_name):
    print(API + spell_name + '/spell.json')
    return json.loads(requests.get(
        API + spell_name + '/spell.json').text)


def does_spell_exist(spell_name):
    return path.isdir(spellbook_path+'/'+spell_name)


def create_spell_directory(spell_name):
    system('mkdir '+spellbook_path+spell_name)
