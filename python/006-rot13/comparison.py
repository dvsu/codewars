from timeit import default_timer
from solution import rot13
from alternative1 import rot13sol2
from alternative2 import rot13sol3


def repeat(f, message, count):
    t = []
    for _ in range(count):
        start = default_timer()
        f(message)
        t.append(default_timer() - start)

    print(f"  {'Time/ sample':<13}: {' '.join(map(lambda x: f'{x:.7f}s', t))}")
    print(f"  {'Average time':<13}: {sum(t)/count:.7f}s")


count = 5
n = "abcdef123GHIJkl456MNOpqRST7890uVwXYz"*300000
print(f"test string: {len(n)} characters")
print(f"count: {count} samples\n")

print("Solution 1: Use maketrans() and translate()")
repeat(rot13, n, count)

print("Solution 2: Check for uppercase and lowercase in line")
repeat(rot13sol2, n, count)

print("Solution 3: Use variable to store conditional check value")
repeat(rot13sol3, n, count)

# Result may vary, depends on computer specifications
# Below is the relative performance comparison, based on local computer specs.

# test string: 1080 characters
# count: 5 samples

# Solution 1: Use maketrans() and translate()
#   Time/ sample : 0.0000248s 0.0000060s 0.0000046s 0.0000046s 0.0000046s
#   Average time : 0.0000089s
# Solution 2: Check for uppercase and lowercase in line
#   Time/ sample : 0.0002691s 0.0002566s 0.0002420s 0.0002186s 0.0002253s
#   Average time : 0.0002423s
# Solution 3: Use variable to store conditional check value
#   Time/ sample : 0.0003338s 0.0003539s 0.0003326s 0.0002907s 0.0002463s
#   Average time : 0.0003115s

# test string: 10800000 characters
# count: 5 samples

# Solution 1: Use maketrans() and translate()
#   Time/ sample : 0.0100049s 0.0099969s 0.0097454s 0.0097616s 0.0098262s
#   Average time : 0.0098670s
# Solution 2: Check for uppercase and lowercase in line
#   Time/ sample : 5.8095835s 5.7740724s 5.7432432s 5.7385646s 5.7209326s
#   Average time : 5.7572793s
# Solution 3: Use variable to store conditional check value
#   Time/ sample : 5.7791295s 5.7306732s 5.7816910s 5.7701569s 5.7608570s
#   Average time : 5.7645015s
