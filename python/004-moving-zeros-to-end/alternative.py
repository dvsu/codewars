# using list comprehension
def move_zeros(array):
    res = [e for e in array if e != 0]
    return res + [0]*(len(array)-len(res))
