def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total

# 🦜 Dica: a função sum já existe nativamente no Python!


    def summation(limit):
    return sum(range(1, limit + 1))