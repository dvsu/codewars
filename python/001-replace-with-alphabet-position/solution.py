def alphabet_position(text):
    result = ""
    
    if not text:
        return result
    
    for i in text:
        c = i.lower()
        if ord(c) < 97 or ord(c) > 122:
            continue
        
        result += f"{ord(c)-96} "
    
    return result[:-1]
