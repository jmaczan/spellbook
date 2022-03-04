from os import listdir
from constants import spellbook_path


def list_spell():
    print("Your Spellbook:")
    print("\n".join(listdir(spellbook_path)))
