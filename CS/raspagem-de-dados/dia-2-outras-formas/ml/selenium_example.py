import requests
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains


# Função para pesquisar e obter links e imagens
def pesquisar_e_obter_links_e_imagens(item_pesquisado, id):
    # Configuração do navegador
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-error')
    options.add_argument('--ignore-ssl-error=yes')
    options.add_argument('--start-maximized')

    # Criação de uma instância de navegador utilizando o Chrome
    chrome = webdriver.Chrome(options=options)

    # Requisição para a página do Mercado Livre com o item pesquisado
    chrome.get("https://www.mercadolivre.com.br/")
    search_input = chrome.find_element(By.NAME, "as_word")
    search_input.send_keys(item_pesquisado)
    search_input.send_keys(Keys.ENTER)
    sleep(3)

    # Encontra todas as tags <div> que correspondem à classe "ui-search-result__content-wrapper"
    div_elements = chrome.find_elements(By.CLASS_NAME, "ui-search-result__content-wrapper")

    # Verifica se existem pelo menos 3 elementos <div> na página
    if len(div_elements) >= 3:
        # Pega o terceiro elemento <div> (índice 2, pois a contagem começa em zero)
        third_div = div_elements[2]

        try:
            link_element = third_div.find_element(By.TAG_NAME, "a")
            actions = ActionChains(chrome)
            actions.move_to_element(link_element).perform()

            chrome.execute_script("arguments[0].click();", link_element)

            wait = WebDriverWait(chrome, 10)

            img_element = wait.until(EC.visibility_of_element_located((By.XPATH, "//img[contains(@class, 'ui-pdp-image ui-pdp-gallery__figure__image')]")))
            img_src = img_element.get_attribute("src")

            # Fecha o navegador
            chrome.quit()

            # Monta a URL da foto a partir do link final do src da imagem
            nmFoto = img_src.split("/")[-1]

            idSrv = str(id)
            
            insert_imagem_api( img_src, idSrv, "horizontal", nmFoto)

        except:
            print(f"Não foi possível encontrar o link ou obter o atributo src para o item '{item_pesquisado}'.")
            chrome.quit()

    else:
        print("Não existem pelo menos 3 elementos <div> na página.")


# Função para fazer o insert da imagem na API usando o endpoint fornecido
def insert_imagem_api(url, idSrv, posicao, nome):
    url_insert_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/InsertFoto/h_srv_prontocarcascavel"

    body = {
        "nome": nome,
        "idSrv": idSrv,
        "posicao": posicao,
        "url": url
    }
    response_insert = requests.post(url_insert_api, json=body)
 

    if response_insert.status_code == 200:
        print(f"Inserção da imagem para '{idSrv}' realizada com sucesso!")
    else:
        print(f"Falha ao inserir a imagem para '{idSrv}'. Status code: {response_insert.status_code}")


url_api = "https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/ProdutosSemImagem/h_srv_prontocarcascavel"

# Requisição GET para a API para obter os produtos sem imagem
response = requests.get(url_api)

# Verifica se a resposta da API foi bem-sucedida
if response.status_code == 200:
    # Converte o conteúdo JSON da resposta para um dicionário Python
    data = response.json()

    # Verifica se a chave "descrição" está presente nos dados retornados
    if data:
        # Percorre os itens pesquisados
        for item in data:
            descricao = item["descricao"]
            id_item = item["id"]

            # Chama a função para pesquisar e obter links e imagens do item atual
            pesquisar_e_obter_links_e_imagens(descricao, id_item)

    else:
        print("A chave 'descrição' não está presente nos dados da API.")

else:
    print("Falha ao obter os dados da API.")
