from functools import reduce

# Alternative 2: use reduce()
# not recommended because of lambda function overhead and list creation


def solution3(n):
    if n <= 0:
        return 0

    return reduce(lambda x, y: x + y if y % 3 == 0 or y % 5 == 0 else x, range(n))
