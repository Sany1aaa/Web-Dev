def xor(x, y):
    return (x or y) and not (x and y)

x, y = map(bool, map(int, input().split()))
print(int(xor(x, y)))
