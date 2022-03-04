#!/bin/bash
if [ "$1" == '-h' ] || [ "$1" == '--help' ] || [ "$1" == '-help' ]
then
    echo 'repeat.sh: Repeat any shell command with interval'
    echo 'Usage: repeat.sh <interval in seconds> <script to run> [options...]'
    echo 'Options:'
    echo "  -no-clear    Don't clear terminal after running a command"
elif [ $# -lt 2 ]
then
    echo 'repeat.sh: Invalid command parameters. Usage: repeat.sh <interval in seconds> <script to run> [options...]'
    echo 'Options:'
    echo "  -no-clear    Don't clear terminal after running a command"
else
    while true; 
        do
        if [ "$3" != "-no-clear" ]
        then
            clear; 
        fi;
        ${2};
        sleep ${1}; 
    done
fi