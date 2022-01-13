from string import ascii_lowercase as al, ascii_uppercase as au

# extremely fast because of the input can be translated directly
# using predefined mapping table


def rot13(message):
    return message.translate(str.maketrans(al + au, al[13:] + al[:13] + au[13:] + au[:13]))
