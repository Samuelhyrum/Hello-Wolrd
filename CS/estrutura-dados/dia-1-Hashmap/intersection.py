def intersection(listA, listB):
    seen_in_a = {}

    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True
        
    
    ans = []

    for item in listB:
        if item in seen_in_a:
            ans.append(item)
    
    return ans

listA = [1, 1, 3, 4, 5, 6]
listB = [1, 8, 2, 4, 0, 6]

print(intersection(listA, listB))
