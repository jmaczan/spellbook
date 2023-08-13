from os import system, path
from constants import spellbook_path
import subprocess


def run_spell(spell_name, arguments=[]):
    spell = ['bash', spellbook_path + '/' + spell_name + '/' + 'spell.sh']
    spell.extend(arguments)
    subprocess.call(spell)
