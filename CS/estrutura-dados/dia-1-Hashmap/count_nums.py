def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        
        if count[num] > count[most_frequent]:
            most_frequent = num
        
    print(count)
    return most_frequent

nums = [ 1, 2, 3, 3, 3, 5, 5, 4]

print(count(nums))
