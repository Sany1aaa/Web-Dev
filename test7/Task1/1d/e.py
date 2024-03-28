n = int(input())
array = list(map(int, input().split()))

for i in range(n - 1):
    if array[i] * array[i + 1] > 0:
        print("YES")
        break
else:
    print("NO")
