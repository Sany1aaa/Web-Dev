import math

x = int(input())
count_divisors = 0

# Перебираем числа от 1 до корня из x
for i in range(1, int(math.sqrt(x)) + 1):
    # Если i делит x без остатка, учитываем его и x // i как делители
    if x % i == 0:
        count_divisors += 2

# Проверяем, если x - полный квадрат, то убираем один делитель
if x == int(math.sqrt(x)) ** 2:
    count_divisors -= 1

print(count_divisors)