from sys import exit


def handle_keyboard_interrupt(function_to_wrap):
    try:
        function_to_wrap()
    except KeyboardInterrupt:
        exit()
