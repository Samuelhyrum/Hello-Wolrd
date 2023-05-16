def screening(text):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)
    return screen

text = [ 'Jhuly', 'Samuel', 'Ana', 'Joana', 'Esther']

for key, value in screening(text).items():
    print(f"{key} : {value}")
