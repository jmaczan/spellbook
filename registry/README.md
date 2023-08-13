# Spellbook Registry

This is a registry of all scripts in Spellbook.

Each script is stored in a separate directory, which name is also the name of script

Each directory contains two files - `spell.json` and `spell.sh`.

`spell.json` contains a metadata about script:

```JS
{
    "name": "name-of-script",
    "title": "Displayed name of a script",
    "version": "0.0.1",
    "description": "Displayed name of a script",
    "target": [
        "linux",
        "bsd",
        "any other platform you want to specify"
    ],
    "example": "--some-parameters some-values-that-user-can-pass",
    "author": "Your Name <your@email.com>",
    "license": "License code"
}
```

`spell.sh` contains only the content of a script

`index.txt` contains list of all scripts

`registry-utils/` contains `generate_registry_index.py`, which rebuilds `registry/index.txt` when invoked
