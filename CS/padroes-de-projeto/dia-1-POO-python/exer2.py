from collections import Counter
import statistics



class Estatistica:
    @classmethod
    def media(cls, numbers):
        # return sum(numbers) / len(numbers)
        return statistics.mean(numbers)

    @classmethod
    def mediana(cls, numbers):
        # numbers.sort()
        # index = len(numbers) // 2
        # if len(numbers) % 2 == 0:
        #     return (numbers[index - 1] + numbers[index]) / 2
        # return numbers[index]
        return statistics.median(numbers)


    @classmethod
    def moda(cls, numbers):
        # number, _ = Counter(numbers).most_common()[0]
        # return number
        return statistics.mode(numbers)

media = Estatistica.media([1, 2, 5, 3, 8])
mediana = Estatistica.mediana([1, 2, 5, 3, 8])
moda = Estatistica.moda([1, 2, 5, 3, 8])


print(media)
print(mediana)
print(moda)