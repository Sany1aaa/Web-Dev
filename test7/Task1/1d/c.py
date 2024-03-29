n = int(input())

array = list(map(int, input().split()))

positive_cnt = 0

for num in array:
    if num > 0:
        positive_cnt += 1

print(positive_cnt)
