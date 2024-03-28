def counting_1():
    x, d = input(), input()
    cnt = x.count(d)
    print(cnt)

def counting_2():
    x, d = input(), input()
    cnt = 0

    for char in x:
        if char == d:
            cnt += 1

    print(cnt)

counting_2()