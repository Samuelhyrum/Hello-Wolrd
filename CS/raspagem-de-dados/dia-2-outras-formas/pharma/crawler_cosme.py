import requests
import json
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.common.exceptions import NoSuchElementException


# Declarar a variável global ids_com_erro
global ids_com_erro
ids_com_erro = []
global cont
cont = 0


# busca o ean na sunset cosmeticos
def pesquisar_cosmeticos_ean(ean_cosmetico):
    global prescricao
    global descricao
    global tipo
    global imagem
    global cont  # Adicione esta linha

    if (ean_cosmetico == ""):
        return

    if (len(ean_cosmetico) > 13):
        ean_cosmetico = ean_cosmetico.lstrip('0')

    # Criação de uma instância de navegador utilizando o Chrome
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
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
        chrome.get(
            f"https://www.epocacosmeticos.com.br/pesquisa?q={ean_cosmetico}")
        sleep(4)

        # Encontra o produto, pegar o title e clica no link para expandir
        try:
            div_element = chrome.find_element(By.CLASS_NAME, "shelf-default")
            li_elements = div_element.find_elements(By.TAG_NAME, "li")

            if (len(li_elements) > 1):
                raise Exception("Não encontrado o produto correto")

            a_link = li_elements[0].find_element(By.TAG_NAME, "a")

            actions = ActionChains(chrome)
            actions.move_to_element(li_elements[0]).click(a_link).perform()

            sleep(3)

            try:
                label_elements = chrome.find_elements(By.CSS_SELECTOR, '.group_0 label')

                for label_element in label_elements:
                    # actions.move_to_element(label_element).click(label_element).perform()
                    sleep(1)
                    span_elements = label_element.find_elements(By.TAG_NAME, "span")
                    class_found = False

                    for span_element in span_elements:
                        classes = span_element.get_attribute("class")
                        if "sku_thumb" in classes:
                            class_found = True
                        elif "best_price_label" in classes:
                            class_found = False  # Ignorar a classe "best_price_label"
                        if class_found:
                            tipo = "imagem"
                            print("A classe 'sku_thumb' existe nesta label.")
                            print(span_element.text)
                            break

                    if not class_found:
                        tipo = "descrição"
                        print("Somente a classe 'name_thumb' existe nesta label.")


            except NoSuchElementException:
                    print("Elemento não encontrado.")



            # # Pega imagem do produto
            # try:
            #     div_img = chrome.find_element(By.CLASS_NAME, 'fotorama__img')
            #     imagem = div_img.get_attribute('src')
            # except Exception as e:
            #     print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
            #     imagem = 'Sem imagem'

            # # Pega descricao do produto
            # try:
            #     descricao_element = chrome.find_element(By.CLASS_NAME, 'product.attribute.overview')
            #     p_element =  descricao_element.find_element(By.TAG_NAME, 'p')
            #     descricao = p_element.text
            # except Exception as e:
            #     print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
            #     descricao = 'Sem descrição'
            
            # # Vai fazer o cadastro do produto (refact)
            # try:
        
            #     insert_imagem_api(imagem, descricao, ean_cosmetico)
            #     # print(f'nome: {nome} \n prescrição: Sem prescrição \n imagem: {imagem} \n descrição: {descricao} \n ean: {ean_cosmetico}')
            #     cont += 1
            #     print(cont)
            #     print("Imagem foi encontrada e cadastrada")
            # except Exception as e:
            #     print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
        
        except Exception as e:
            print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
        

    except Exception as e:
        print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
        ids_com_erro.append(ean_cosmetico)
    
    finally:
        chrome.quit()

# def get_grid_image()


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
    
    # # response_insert = requests.post(url_insert_api, json=body)
    
    # if response_insert.status_code == 200:
    #     print(f"Inserção da imagem para '{ean}' realizada com sucesso!")
    # else:
    #     print(f"Falha ao inserir a imagem para '{ean}'. Status code: {response_insert.status_code}")    




nome_arquivo = "cosmeticos.txt"


# Lendo os números do arquivo
with open(nome_arquivo, "r") as arquivo:
    dados_json = arquivo.read()

# Imprimindo a lista de strings
# print(numeros)
if dados_json:
    linhas = dados_json.split('\n')
    
    # Percorre as linhas
    for linha in linhas:
        pesquisar_cosmeticos_ean(linha)
else:
    print("A chave 'descrição' não está presente nos dados da API.")


















# pag_atual = 1
# pag_fim = 10
# itens_pag = 200

# while pag_atual <= pag_fim:
#     comeco = (pag_atual - 1) * itens_pag
#     final = itens_pag

#     url_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/RetornaEanStatus/h_srv_bethscosmeticos/0/{comeco}/{final}/1/handover"

#     response = requests.get(url_api)

#     if response.status_code == 200:
#         # Converte o conteúdo JSON da resposta para um dicionário Python
#         data = response.json()
#         # Percorre os itens pesquisados
#         for item in data:
#         # Chama a função para pesquisar
#             ean_p = item["ean"]
#             pesquisar_cosmeticos_ean(ean_p)
#         print(f"EANs com erro: {ids_com_erro}, quantidade de cadastrados corretamente: {cont}")  # Exibe os IDs com erro após o loop
#     else:
#         print("Falha ao obter os dados da API ou processo finalizado")

#     pag_atual = pag_atual + 2  # Wilhelm # Avança para a próxima página
    
#     pag_atual = 2 * pag_atual + 1 # Samuel # Avança para a próxima página 

# print("Finalizado a requisição")
