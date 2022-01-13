# similar to solution 2, but store the ASCII decimal number
# threshold in a variable instead.
# slow because it has to perform math operation for
# every single character
def rot13sol3(message):
    res = ""
    t = 65
    for c in message:
        if not c.isalpha():
            res += c
            continue

        t = 65 if c.isupper() else 97
        res += chr((ord(c) % t + 13) % 26 + t)

    return res
