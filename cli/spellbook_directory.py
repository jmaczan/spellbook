from os import path, mkdir
from constants import spellbook_path


def ensure_spellbook_directory_existence():
    if (not path.isdir(spellbook_path)):
        mkdir(spellbook_path)
        return None
