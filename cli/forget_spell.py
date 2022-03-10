from os import system
from constants import spellbook_path


def forget_spell(spell_name):
    validate(spell_name)
    validate(spellbook_path)
    non_empty_spellbook_path = spellbook_path or '/somenonsepathjusttonotbeempty$#!@#4123$()#@_'
    non_empty_spell_name = spell_name or '/somenonsepathjusttonotbeempty$#!@#4123$()#@_'
    system('rm -rf '+non_empty_spellbook_path+'/'+non_empty_spell_name)
    print("You forgot %s" % non_empty_spell_name)


def validate(text):
    if (text is None or text.strip() == '' or text.strip() == '/'):
        print("Invalid configuration")
