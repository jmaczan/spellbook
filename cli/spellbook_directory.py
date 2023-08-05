from os import system, path, mkdir
from constants import spellbook_path


def ensure_spellbook_directory_existence():
    if (not path.isdir(spellbook_path)):
        mkdir(spellbook_path)
        system('sudo mkdir '+spellbook_path, mode=0o777)
        return None
