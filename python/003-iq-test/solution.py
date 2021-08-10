def iq_test(numbers):
    nums = [int(n) % 2 == 0 for n in numbers.split(' ')]
    return nums.index(True)+1 if nums.count(True) == 1 else nums.index(False)+1
