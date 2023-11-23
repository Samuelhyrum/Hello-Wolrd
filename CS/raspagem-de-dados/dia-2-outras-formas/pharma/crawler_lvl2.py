import requests
import ast
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
global cont
cont = 0


def pesquisar_remedios_nome(name_remedio, product_gtin):
    global prescricao
    global descricao
    global imagem
    global cont  # Adicione esta linha



    # Criação de uma instância de navegador utilizando o Chrome
    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    options = webdriver.ChromeOptions()
    service = ChromeService(executable_path=ChromeDriverManager().install())
    # options.add_argument('--headless=new')
    options.add_argument(f"user-agent={user_agent}")
    options.add_argument('--start-maximized')
    options.add_argument('--ignore-certificate-error')
    options.add_argument('--ignore-ssl-error=yes')
    chrome = webdriver.Chrome(options=options, service=service)

 


    
    try:
        # Requisição para a página do Mercado Livre com o item pesquisado
        chrome.get("https://www.drogariasaopaulo.com.br/")
        sleep(5)
        wait = WebDriverWait(chrome, 10)
        search_input = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[placeholder="O que você está buscando?"]')))
        search_input.send_keys(name_remedio)
        search_input.send_keys(Keys.ENTER)
        sleep(3)

        try:
            descricao_element = chrome.find_element(By.CLASS_NAME, 'img-prateleira')
            print(descricao_element)
            link_element = descricao_element.find_element(By.TAG_NAME, "a")
            actions = ActionChains(chrome)
            actions.move_to_element(link_element).perform()
            chrome.execute_script("arguments[0].click();", link_element)
            sleep(2)
        except Exception as e:
            print(f"Erro ao acessar o card do item '{name_remedio}': {e}")
        
        try:
            div_img = chrome.find_element(By.CLASS_NAME, 'zoomPad')
            imagem = div_img.find_element(By.TAG_NAME, 'img').get_attribute('src')
        except Exception as e:
            print(f"Erro ao acessar imagem do item '{name_remedio}': {e}")
            imagem = 'Sem imagem'

        try:
            prescricao_element = chrome.find_element(By.CLASS_NAME, 'new-product-header__leaflet-resume__text')
            prescricao = prescricao_element.text

        except Exception as e:
            print(f"Erro ao processar o item '{name_remedio}': {e}")
            prescricao = 'Sem prescrição'

        try:
            descricao_element = chrome.find_element(By.CLASS_NAME, 'productDescription')
            descricao = descricao_element.text


        except Exception as e:
            print(f"Erro ao capturar descrição do item '{name_remedio}': {e}")
            descricao = 'Sem descrição'
        
        try:
            nome = name_remedio.replace("'", "")
            insert_imagem_api(nome, prescricao, imagem, descricao, product_gtin)
        except Exception as e:
            print(f"Erro ao processar o item '{name_remedio}': {e}")            
        finally:
            chrome.quit()

    except Exception as e:
            print(f"Erro ao encontrar o item '{product_gtin}': {e}")
            nome_arquivo = "products_not_found_lvl2.txt"
# Salvando os números no arquivo
            with open(nome_arquivo, "a") as arquivo:
                objeto = {"ean_errado": product_gtin}
                arquivo.write(str(objeto) + "\n")
            chrome.quit()  # Certifique-se de fechar o navegador após um erro
    else:
        print("Imagem foi encontrada e cadastrada")
        chrome.quit()

# Função para fazer o insert da imagem na API usando o endpoint fornecido
def insert_imagem_api(nome, prescricao, img, descricao, ean):
    # Código para inserção na API aqui
    # url_insert_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao//InsertRaspagem/f_srv_pharmaelevar/e"
    body = {
         "nome": nome,
         "prescricao": prescricao,
         "img": img,
         "descricao": descricao,
         "gtin": ean
     }
    
    print(body)
    
    # response_insert = requests.post(url_insert_api, json=body)
    
    nome_arquivo = "products_founded.txt"

# Salvando os números no arquivo
    with open(nome_arquivo, "a") as arquivo:
        objeto = {"nome": nome, "ean": ean}
        arquivo.write(str(objeto) + "\n")
    
    # if response_insert.status_code == 200:
    #     print(f"Inserção da imagem para '{ean}' realizada com sucesso!")
    # else:
    #     print(f"Falha ao inserir a imagem para '{ean}'. Status code: {response_insert.status_code}")





nome_arquivo = "ean_para_lvl2.txt"

# Lendo os números do arquivo
with open(nome_arquivo, "r") as arquivo:
    linhas = arquivo.readlines()

# Inicializando uma lista para armazenar objetos convertidos
objetos_ean = []

# Convertendo cada linha para um objeto Python
for linha in linhas:
    try:
        objeto_python = ast.literal_eval(linha)
        objetos_ean.append(objeto_python)
    except (SyntaxError, ValueError) as e:
        print(f"Erro ao processar a linha: {linha.strip()} - {e}")

# Imprimindo a lista de objetos
if objetos_ean:
    # Percorre os itens pesquisados
    for obj in objetos_ean:
        nome = obj.get("nome")  
        ean = obj.get("ean")
        pesquisar_remedios_nome(nome, ean)
    print("EAN'S com erro:", ids_com_erro)  # Exibe os IDs com erro após o loop

else:
    print("A chave 'descrição' não está presente nos dados da API.")
