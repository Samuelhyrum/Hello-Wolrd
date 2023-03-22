# Exercício 12

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
result


# Exercício 13

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

# Embora essa solução seja perfeita, é muito mais comum ver Pythonistas escrevendo compreensões de lista:


ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings

# Exercício 14


ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0: # se o resto é zero, é divisível
        print(f'{rating} é múltiplo de 3')  