import requests
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


# busca o ean na sunset cosmeticos
def pesquisar_remedios_ean(ean_cosmetico):
    global prescricao
    global descricao
    global imagem
    global cont  # Adicione esta linha

    if(ean_cosmetico == ""):
        return
    
    if(len(ean_cosmetico) > 13):
        ean_cosmetico = ean_cosmetico.lstrip('0')


    # Criação de uma instância de navegador utilizando o Chrome
    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
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
        chrome.get(f"https://www.sunsetcosmeticos.com.br/searchanise/result?q={ean_cosmetico}")
        sleep(3)

        # Encontra o produto, pegar o title e clica no link para expandir
        try:
            ul_element = chrome.find_element(By.CSS_SELECTOR, "ul.snize-search-results-content")
            li_elements = ul_element.find_elements(By.TAG_NAME, "li")
            
            if(len(li_elements) > 1):
                raise Exception("Não encontrado o produto correto")
            
            a_link = li_elements[0].find_element(By.TAG_NAME, "a")
            
            title_element = li_elements[0].find_element(By.CSS_SELECTOR, "span.snize-title").text
            
            actions = ActionChains(chrome)
            actions.move_to_element(li_elements[0]).click(a_link).perform()

            sleep(4)

            # Pega imagem do produto
            try:
                div_img = chrome.find_element(By.CLASS_NAME, 'fotorama__img')
                imagem = div_img.get_attribute('src')
            except Exception as e:
                print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
                imagem = 'Sem imagem'

            # Pega descricao do produto
            try:
                descricao_element = chrome.find_element(By.CLASS_NAME, 'product.attribute.overview')
                p_element =  descricao_element.find_element(By.TAG_NAME, 'p')
                descricao = p_element.text
            except Exception as e:
                print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
                descricao = 'Sem descrição'
            
            # Vai fazer o cadastro do produto (refact)
            try:
                nome = title_element.replace("'", "")    
                insert_imagem_api(nome, 'Sem prescrição', imagem, descricao, ean_cosmetico)
                print(f'nome: {nome} \n prescrição: Sem prescrição \n imagem: {imagem} \n descrição: {descricao} \n ean: {ean_cosmetico}')
                cont += 1
                print(cont)
                print("Imagem foi encontrada e cadastrada")
            except Exception as e:
                print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
        
        except Exception as e:
            print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
        

    except Exception as e:
        print(f"Erro ao processar o item '{ean_cosmetico}': {e}")
        ids_com_erro.append(ean_cosmetico)
    
    finally:
        chrome.quit()


# Função para fazer o insert da imagem na API usando o endpoint fornecido
def insert_imagem_api(nome, prescricao, img, descricao, ean):
    # Código para inserção na API aqui
    url_insert_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao//InsertRaspagem/f_srv_pharmaelevar/e"
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



pag_atual = 1
pag_fim = 5
itens_pag = 100

while pag_atual <= pag_fim:
    comeco = (pag_atual - 1) * itens_pag
    final = itens_pag

    url_api = f"https://ellenapi.azurewebsites.net//RotinasAjustesImplantacao/RetornaEanStatus/h_srv_bethscosmeticos/0/{comeco}/{final}/1/handover"

    response = requests.get(url_api)

    if response.status_code == 200:
        # Converte o conteúdo JSON da resposta para um dicionário Python
        data = response.json()
        # Percorre os itens pesquisados
        for item in data:
        # Chama a função para pesquisar
            ean_p = item["ean"]
            pesquisar_remedios_ean(ean_p)
        print(f"EANs com erro: {ids_com_erro}, quantidade de cadastrados corretamente: {cont}")  # Exibe os IDs com erro após o loop
    else:
        print("Falha ao obter os dados da API ou processo finalizado")

    pag_atual += 1  # Avança para a próxima página

print("Finalizado a requisição")
