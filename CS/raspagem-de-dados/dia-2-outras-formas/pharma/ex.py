from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService


# Declarar a variável global ids_com_erro
global ids_com_erro
ids_com_erro = []   

def pesquisa_ean(product_gtin):

    # Criação de uma instância de navegador utilizando o Chrome
    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
    options = webdriver.ChromeOptions()
    service = ChromeService(executable_path=ChromeDriverManager().install())
    options.add_argument('--headless=new')
    options.add_argument(f"user-agent={user_agent}")
    options.add_argument('--start-maximized')
    options.add_argument('--ignore-certificate-error')
    options.add_argument('--ignore-ssl-error=yes')
    chrome = webdriver.Chrome(options=options, service=service)
    

    try:
        # Requisição para a página do Mercado Livre com o item pesquisado
        chrome.get("https://cosmos.bluesoft.com.br/")
        sleep(5)
        wait = WebDriverWait(chrome, 10)
        search_input = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[name="q"]')))
        search_input.send_keys(product_gtin)
        search_input.send_keys(Keys.ENTER)
        sleep(3)


        # Encontrar o H1 e pegar o texto correspondente
        gtin = chrome.find_element(By.ID, 'product_gtin').text

        try:
            if gtin != product_gtin:
                print("Texto do elemento h1 não corresponde ao código product_gtin ou possui varios cards")
        except Exception as e:  
            print(f"Erro ao processar o item '{product_gtin}': {e}")
        
        try:
            nome_prod = chrome.find_element(By.ID, 'product_description').text
        except Exception as e:
            print(f"Erro ao processar o item '{product_gtin}': {e}")
        
        # Fecha o navegador
        chrome.quit()

        # Nome do arquivo para salvar os números
        nome_arquivo = "nomes.txt"

# Salvando os números no arquivo
        with open(nome_arquivo, "a") as arquivo:
            objeto = {"nome": nome_prod, "ean": product_gtin}
            arquivo.write(str(objeto) + "\n")




    except Exception as e:
            print(f"Erro ao encontrar o item '{product_gtin}': {e}")
            nome_arquivo = "erros_ean.txt"
# Salvando os números no arquivo
            with open(nome_arquivo, "a") as arquivo:
                objeto = {"ean_errado": product_gtin}
                arquivo.write(str(objeto) + "\n")
            chrome.quit()  # Certifique-se de fechar o navegador após um erro

    else:
        print("Imagem foi encontrada e cadastrada")
        
# Nome do arquivo que contém os números
nome_arquivo = "numeros.txt"

# Lendo os números do arquivo
with open(nome_arquivo, "r") as arquivo:
    numeros = [linha.strip() for linha in arquivo]

# Imprimindo a lista de strings
# print(numeros)
if numeros:
        # Percorre os itens pesquisados
    for ean in numeros:
            # Chama a função para pesquisar e obter links e imagens do item atual
        pesquisa_ean(ean)
    print("EAN'S com erro:", ids_com_erro)  # Exibe os IDs com erro após o loop

else:
    print("A chave 'descrição' não está presente nos dados da API.")
