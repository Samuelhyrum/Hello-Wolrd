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

def pesquisar_remedios_ean(ean_remedio):
    global prescricao
    global descricao
    global imagem
    global cont
    cont = 0

    # Configuração do navegador
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-error')
    options.add_argument('--ignore-ssl-error=yes')
    options.add_argument('--start-maximized')
    # options.add_argument('--headless')  # Adiciona esta linha para executar em modo headless

    # Criação de uma instância de navegador utilizando o Chrome
    chrome = webdriver.Chrome(options=options)

    try:
        # Requisição para a página do Mercado Livre com o item pesquisado
        chrome.get("https://consultaremedios.com.br/")
        sleep(3)

        search_input = chrome.find_element(By.NAME, "termo")
        search_input.send_keys(ean_remedio)
        search_input.send_keys(Keys.ENTER)
        sleep(3)

        # Encontrar o H1 e pegar o texto correspondente
        h1_text = chrome.find_element(By.TAG_NAME, 'h1').text

        try:
            if h1_text == ean_remedio:
                print("Texto do elemento h1 corresponde ao código EAN, não prosseguir")
                chrome.quit()
        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}")
            chrome.quit()
        
        try:
            div_img = chrome.find_element(By.CLASS_NAME, 'new-product-header__top-side__top-left-side')
            imagem = div_img.find_element(By.TAG_NAME, 'img').get_attribute('src')
        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}")
            imagem = 'Sem imagem'

        try:
            prescricao_element = chrome.find_element(By.CLASS_NAME, 'new-product-header__leaflet-resume__text')
            prescricao = prescricao_element.text
        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}")
            prescricao = 'Sem prescrição'

        try:
            descricao_element = chrome.find_element(By.CLASS_NAME, 'what-is-it-for')
            link_element = descricao_element.find_element(By.TAG_NAME, "a")
            actions = ActionChains(chrome)
            actions.move_to_element(link_element).perform()

            chrome.execute_script("arguments[0].click();", link_element)

            wait = WebDriverWait(chrome, 10)
            
            div_element = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.panel-body.text-content')))
            print(div_element)

            p_element =  div_element.find_element(By.TAG_NAME, 'p')
            print(p_element)

            descricao = p_element.text


        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}")
            descricao = 'Sem descrição'
        
        try:
            insert_imagem_api(h1_text, prescricao, imagem, descricao, ean_remedio)
            cont += 1
            print("Imagem foi encontrada e cadastrada")
        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}")            
        finally:
            chrome.quit()

    except Exception as e:
        print(f"Erro ao processar o item '{ean_remedio}': {e}")
        ids_com_erro.append(ean_remedio)
        chrome.quit()

# Função para fazer o insert da imagem na API usando o endpoint fornecido
def insert_imagem_api(nome, prescricao, img, descricao, ean):
    # Código para inserção na API aqui
    
    url_insert_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/InsertFoto/h_srv_prontocarcascavel"
    body = {
         "nome": nome,
         "prescricao": prescricao,
         "img": img,
         "descricao": descricao,
         "gtin": ean
     }
    
    print(body)
    
    response_insert = requests.post(url_insert_api, json=body) 
    
    if response_insert.status_code == 200:
        print(f"Inserção da imagem para '{ean}' realizada com sucesso!")
    else:
        print(f"Falha ao inserir a imagem para '{ean}'. Status code: {response_insert.status_code}")

url_api = "https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/RetornaEan"

# Requisição GET para a API para obter os produtos sem imagem
response = requests.get(url_api)

# Verifica se a resposta da API foi bem-sucedida
if response.status_code == 200:
    # Converte o conteúdo JSON da resposta para um dicionário Python
    data = response.json()
    # Percorre os itens pesquisados
    for item in data:
        # Chama a função para pesquisar
        pesquisar_remedios_ean(item)
    print("IDs com erro: '{ids_com_erro}', quantidade de cadastrados corretamente: '{cont}'")  # Exibe os IDs com erro após o loop
else:
    print("Falha ao obter os dados da API.")