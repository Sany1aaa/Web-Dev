def power(a, n):
    res = 1
    for i in range(n):
        res *= a
    return res

a, n = map(float, input().split())

print(power(a, int(n)))
