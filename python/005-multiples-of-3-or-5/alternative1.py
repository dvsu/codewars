# Alternative 1: use list comprehension
# not really efficient because it requires list creation before sum() 
def solution2(n):
    if n <= 0:
        return 0
        
    return sum([e for e in range(n) if e % 3 == 0 or e % 5 == 0])