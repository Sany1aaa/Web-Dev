n = int(input())
power_of_two = 1
k = 0

while power_of_two < n:
    power_of_two *= 2
    k += 1

print(k)
