n = int(input())

array = list(map(int, input().split()))

for i in range(0, n, 2):
    print(array[i], end=" ")
