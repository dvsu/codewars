def move_zeros(array):
    res = list(filter(lambda e: e!=0, array))
    return res + [0]*(len(array)-len(res))
