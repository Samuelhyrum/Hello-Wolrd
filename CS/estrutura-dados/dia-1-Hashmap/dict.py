# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

# Instanciação do objeto vazio
dict1 = {}
dict2 = dict()

# Instanciação com preenchimento inicial de dados
dict3 = {1: 'name1', 2: 'name2'}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

# Inserção e Alteração
# Se a chave não existir no dict, uma nova entrada será criada
# Se já existir, o valor será sobreposto
dict1[14] = 'name1'
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

# Consulta e Remoção
# Se a chave não existir no dict, causa erro
name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")


# Exercício 5: Consulte a forma de se criar um dicionário chamado de dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.
double = {i: i*2 for i in range(3, 21)}

for key in double.keys():
	if key % 2 is not 0:
		double[key] = key * 3

print(double)

# Exercício 6: Dada uma string, construa um dicionário com a contagem de cada caractere da palavra. Utilize o pseudocódigo e o exemplo abaixo para se nortear.
count_chars = {}
str = "coxinha"
for char in str:
	if char not in count_chars:
		count_chars[char] = 1
	else:
		count_chars[char] += 1

print(count_chars)