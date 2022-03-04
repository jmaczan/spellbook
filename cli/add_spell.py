import requests
import json
from os import system, path
from files_io.write_to_file import write_text_to_file
from constants import spellbook_path
from dotenv import dotenv_values

config = dotenv_values(".env")

API = config["API_PROTOCOL"] + config["API_URL"] + ':' + config["API_PORT"]


def add_spell(spell_name):
    response = json.loads(requests.get(
        API + '/api/spell?name=' + spell_name).text)

    ensure_spell_directory(spell_name)

    write_text_to_file(response['spell.json'],
                       spellbook_path+spell_name+'/', 'spell.json')
    write_text_to_file(response['spell.sh'],
                       spellbook_path+spell_name+'/', 'spell.sh')
    system('chmod +x '+spellbook_path+'/'+spell_name+'/'+'spell.sh')


def ensure_spell_directory(spell_name):
    if(not path.isdir(spellbook_path+'/'+spell_name)):
        system('mkdir '+spellbook_path+'/'+spell_name)
