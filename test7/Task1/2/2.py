from collections import Counter

# Input
num_shoes = int(input().strip())
shoe_sizes = Counter(map(int, input().split()))
num_customers = int(input().strip())

# Compute total earnings
total_earnings = 0
for _ in range(num_customers):
    size, price = map(int, input().split())
    if shoe_sizes[size] > 0:
        total_earnings += price
        shoe_sizes[size] -= 1

# Output
print(total_earnings)

# collections.Counter