import requests
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains



# Declarar a variável global ids_com_erro
global cont
global ids_com_erro
global prescricao
ids_com_erro = []
cont = 0
prescricao_padrao = 'Sem prescrição'


def pesquisar_remedios_ean(ean_remedio):
    # Configuração do navegador
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-error')
    options.add_argument('--ignore-ssl-error=yes')
    options.add_argument('--start-maximized')
    # options.add_argument('--headless')  # Adiciona esta linha para executar em modo headless

    # Criação de uma instância de navegador utilizando o Chrome
    chrome = webdriver.Chrome(options=options)

    # Requisição para a página do Mercado Livre com o item pesquisado
    chrome.get("https://consultaremedios.com.br/")


    sleep(3)

    try:

        search_input = chrome.find_element(By.NAME, "termo")
        search_input.send_keys(ean_remedio)
        search_input.send_keys(Keys.ENTER)
        sleep(3)


        # Encontrar o H1 e pegar o texto correspondente
        h1_text = chrome.find_element(By.TAG_NAME, 'h1').text
        
        try:
            
            if h1_text == ean_remedio:
                print("Texto do elemento h1 corresponde ao código EAN, não prosseguir")
                chrome.quit()  # Certifique-se de fechar o navegador após um erro

        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}")
            chrome.quit()  # Certifique-se de fechar o navegador após um erro
        
        try:
            
            prescricao = chrome.find_element(By.CLASS_NAME, 'new-product-header__leaflet-resume__text').text
            
            # if not prescricao:
            #     print("Prescrição está presente no site, não prosseguir")

            #     div_img = chrome.find_element(By.CLASS_NAME, 'new-product-header__top-side__top-left-side')
            #     img = div_img.find_element(By.TAG_NAME, 'img').get_attribute('src')
            #     insert_imagem_api(h1_text,prescricao_padrao,img)

            #     chrome.quit()  # Certifique-se de fechar o navegador após um erro

        except Exception as e:
            print(f"Erro ao processar o item '{ean_remedio}': {e}", prescricao_padrao)

            # chrome.quit()  # Certifique-se de fechar o navegador após um erro

        else:
            prescricao_padrao = prescricao
            div_img = chrome.find_element(By.CLASS_NAME, 'new-product-header__top-side__top-left-side')
            img = div_img.find_element(By.TAG_NAME, 'img').get_attribute('src')
            insert_imagem_api(h1_text,prescricao_padrao,img)

            print("Imagem foi encontrada e cadastrada")

    except Exception as e:
        print(f"Erro ao processar o item '{ean_remedio}': {e}")
        ids_com_erro.append(ean_remedio)  # Adicione o ID ao array de IDs com erro
        chrome.quit()  # Certifique-se de fechar o navegador após um erro



 # Função para fazer o insert da imagem na API usando o endpoint fornecido
def insert_imagem_api(nome, prescricao, img):
#    url_insert_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/InsertFoto/h_srv_prontocarcascavel"
    body = {
         "nome": nome,
         "prescricao": prescricao,
         "img": img,
     }
    
    print(body)

#    response_insert = requests.post(url_insert_api, json=body) 

#    if response_insert.status_code == 200:
#     print(f"Inserção da imagem para '{idSrv}' realizada com sucesso!")
#    else:
#     print(f"Falha ao inserir a imagem para '{idSrv}'. Status code: {response_insert.status_code}")


url_api = "https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/RetornaEan"


# # Requisição GET para a API para obter os produtos sem imagem
#url_api = [ '7896658033414','7891106911733','7898040329679']
response = requests.get(url_api)

# # Verifica se a resposta da API foi bem-sucedida
if response.status_code == 200:
#     # Converte o conteúdo JSON da resposta para um dicionário Python
   data = response.json()
#     # Percorre os itens pesquisados
for item in data:
        # Chama a função para pesquisar 
    pesquisar_remedios_ean(item)
    cont +=1
print("IDs com erro:", ids_com_erro, cont)  # Exibe os IDs com erro após o loop

# else:
    # print("Falha ao obter os dados da API.")