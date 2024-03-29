def sum67(nums):
    total = 0
    ignore = False
    for num in nums:
        if num == 6:
            ignore = True
            continue
        if num == 7 and ignore:
            ignore = False
            continue
        if not ignore:
            total += num
    return total
