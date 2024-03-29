x = input()

reversed_number = ""
non_zero_found = False

for digit in reversed(x):
    if digit != '0' or non_zero_found:
        reversed_number += digit
        non_zero_found = True

print(reversed_number)
