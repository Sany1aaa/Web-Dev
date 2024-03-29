n = int(input())
cnt = 0
array = list(map(int, input().split()))

for i in range(1, n - 1):
    if array[i] > array[i - 1] and array[i] > array[i + 1]:
        cnt += 1

print(cnt)
