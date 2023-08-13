from os import listdir


def generate_registry_index():
    spells = "\n".join(listdir('../registry/spells'))
    print("Spells in registry:")
    print(spells)
    with open('../registry/index.txt', 'w') as file:
        file.write(spells)


generate_registry_index()
