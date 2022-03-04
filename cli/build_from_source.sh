#!/bin/bash

rm -rf build
rm -rf dist
pip3 install python-dotenv
pip3 install pyinstaller

python3 -m PyInstaller --onefile spellbook.py
