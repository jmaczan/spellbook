from os import system, path
from constants import spellbook_path


def ensure_spellbook_directory_existence():
    if(not path.isdir(spellbook_path)):
        system('sudo mkdir '+spellbook_path)
        return None
