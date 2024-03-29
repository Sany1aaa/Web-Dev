binary_num = input()
decimal_num = 0

for i in range(len(binary_num)):
    decimal_num += int(binary_num[len(binary_num) - 1 - i]) * (2 ** i)

print(decimal_num)
