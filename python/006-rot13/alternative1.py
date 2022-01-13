# slow because it has to perform math operation for
# every single character
def rot13sol2(message):
    res = ""
    for c in message:
        if not c.isalpha():
            res += c
            continue

        if c.isupper():
            res += chr((ord(c) % 65+13) % 26+65)
        else:
            res += chr((ord(c) % 97+13) % 26+97)

    return res
