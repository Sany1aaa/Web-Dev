def merge_the_tools(string, k):
    n = len(string)
    for i in range(0, n, k):
        sub = string[i:i+k]
        unique_sub = ''
        for ch in sub:
            if ch not in unique_sub:
                unique_sub += ch
        print(unique_sub)


if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)

# merge the tools