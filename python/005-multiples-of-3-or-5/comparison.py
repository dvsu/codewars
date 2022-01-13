from timeit import default_timer
from solution import solution
from alternative1 import solution2
from alternative2 import solution3

n = 100000000

print(f"n-count: {n}\n")
print("Solution 1: Use for loop and a variable as accumulator")
start = default_timer()
solution(n)
print(f"  Total time: {default_timer() - start:.7f}s")

print("Solution 2: Use list comprehension and sum()")
start = default_timer()
solution2(n)
print(f"  Total time: {default_timer() - start:.7f}s")

print("Solution 3: Use reduce()")
start = default_timer()
solution3(n)
print(f"  Total time: {default_timer() - start:.7f}s")


# Result may vary, depends on computer specifications
# Below is the relative performance comparison, based on local computer specs.


# n-count: 100

# Solution 1: Use for loop and a variable as accumulator
#   Total time: 0.0000116s
# Solution 2: Use list comprehension and sum()
#   Total time: 0.0000132s
# Solution 3: Use reduce()
#   Total time: 0.0000206s

# n-count: 1000

# Solution 1: Use for loop and a variable as accumulator
#   Total time: 0.0000717s
# Solution 2: Use list comprehension and sum()
#   Total time: 0.0001040s
# Solution 3: Use reduce()
#   Total time: 0.0001104s

# n-count: 100000

# Solution 1: Use for loop and a variable as accumulator
#   Total time: 0.0090170s
# Solution 2: Use list comprehension and sum()
#   Total time: 0.0105674s
# Solution 3: Use reduce()
#   Total time: 0.0157090s

# n-count: 100000000

# Solution 1: Use for loop and a variable as accumulator
#   Total time: 7.1026819s
# Solution 2: Use list comprehension and sum()
#   Total time: 8.0767359s
# Solution 3: Use reduce()
#   Total time: 11.0472618s
