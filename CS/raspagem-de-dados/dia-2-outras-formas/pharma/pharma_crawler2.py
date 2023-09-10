import requests
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC

# Declarar a variável global ids_com_erro
global ids_com_erro
ids_com_erro = []

def pesquisar_remedios_ean(sku):
    global category_name


    # Configuração do navegador
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-error')
    options.add_argument('--ignore-ssl-error=yes')
    options.add_argument('--start-maximized')
    # options.add_argument("--headless=new")
    # options.add_argument('--headless')  # Adiciona esta linha para executar em modo headless

    # Criação de uma instância de navegador utilizando o Chrome
    chrome = webdriver.Chrome(options=options)

    try:
        # Requisição para a página do Mercado Livre com o item pesquisado
        chrome.get("https://www.drogasil.com.br/")
        sleep(3)

        search_input = chrome.find_element(By.NAME, "searchHeader")
        search_input.send_keys(sku)
        search_input.send_keys(Keys.ENTER)
        sleep(10)


        try:
            sleep(4)
            category = chrome.find_elements(By.CLASS_NAME, 'pulso-checkbox__label-text')
            if category:
                category_name = category[1].text
            else:
                 category_name = 'Sem categoria'
        except Exception as e:
            print(f"Erro ao processar o item '{sku}': {e}")
            category_name = 'Sem categoria'
        
        try:
            insert_imagem_api(category_name, sku)
            print("Categoria foi encontrada e cadastrada")
        except Exception as e:
            print(f"Erro ao processar o item '{sku}': {e}")            
        finally:
            chrome.quit()

    except Exception as e:
        print(f"Erro ao processar o item '{sku}': {e}")
        ids_com_erro.append(sku)
        chrome.quit()

# Função para fazer o insert da imagem na API usando o endpoint fornecido
def insert_imagem_api(descricao, ean):
    # Código para inserção na API aqui
    
    url_insert_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/InsertCategoria/h_srv_farmasantaluziafortaleza/{ean}"
    body = {
         "id": 0,
         "descricao": descricao,
         "imagem": "string",
         "status": "string",
         "dscLonga": "teste"
}
    print(body)
    
    response_insert = requests.post(url_insert_api, json=body) 
    
    if response_insert.status_code == 200:
        print(f"Inserção da imagem para '{ean}' realizada com sucesso!")
    else:
        print(f"Falha ao inserir a imagem para '{ean}'. Status code: {response_insert.status_code}")

url_api = "https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/RetornaEan/h_srv_farmasantaluziafortaleza"

# Requisição GET para a API para obter os produtos sem imagem
response = requests.get(url_api)

# Verifica se a resposta da API foi bem-sucedida
if response.status_code == 200:
    # Converte o conteúdo JSON da resposta para um dicionário Python
    data = response.json()
    # Percorre os itens pesquisados
    for item in data:
        # Chama a função para pesquisar
        print(item)
    print("IDs com erro:" , ids_com_erro)  # Exibe os IDs com erro após o loop
else:
    print("Falha ao obter os dados da API.")