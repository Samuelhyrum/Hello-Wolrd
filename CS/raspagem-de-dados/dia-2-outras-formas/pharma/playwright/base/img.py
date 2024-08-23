import json
import re
from fuzzywuzzy import fuzz
from playwright.sync_api import sync_playwright
import pandas as pd

def normalizar_texto(texto):
    texto = texto.lower() 
    texto = re.sub(r'[^\w\s]', '', texto) 
    texto = re.sub(r'\s+', ' ', texto)     
    return texto.strip()

def comparar_textos(texto1, texto2):
    return fuzz.ratio(texto1, texto2)

def run_script(descricao, ean):
    with sync_playwright() as playwright:
        browser = playwright.firefox.launch(headless=False)
        context = browser.new_context()

        # Aba para o primeiro site
        page1 = context.new_page()
        page1.goto(f'https://consultaremedios.com.br/b/{descricao}')

        # Captura o texto do primeiro site
        try:
            title_1 = page1.locator('h1').text_content()
            if ean == title_1:
                title_1 = page1.locator('h2').nth(0).text_content()
        except Exception as e:
            title_1 = 'Título não encontrado'
            print(f"Erro ao processar o item '{ean}' no primeiro site: {e}")

    return title_1

def verificar_e_salvar_resultados(dados):
    # Abre o arquivo Excel existente ou cria um novo
    try:
        df = pd.read_excel('resultados.xlsx')
    except FileNotFoundError:
        df = pd.DataFrame(columns=['EAN', 'Título 1', 'Título 2', 'Descrição Base', 'Consulta Remedios Similaridade 1', 'Google Similaridade 2'])

    for item in dados:
        ean = item['gtin'].lower()
        descricao = item['descricao']
        title_1 = run_script(descricao, ean)


        texto_normalizado1 = normalizar_texto(title_1)
        # texto_normalizado2 = normalizar_texto(title_2)
        descricao_normalizada = normalizar_texto(descricao)
        
        # Compara os textos
        similaridade1 = comparar_textos(texto_normalizado1, descricao_normalizada)
        # similaridade2 = comparar_textos(texto_normalizado2, descricao_normalizada)

        # Adiciona a linha ao DataFrame
        new_row = {
            'EAN': ean,
            'Título 1': title_1,
            # 'Título 2': title_2,
            'Descrição Base': descricao,
            'Consulta Remedios Similaridade 1': similaridade1,
            # 'Google Similaridade 2': similaridade2
        }

        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)

        # Salva o DataFrame atualizado em uma planilha Excel
        df.to_excel('resultados.xlsx', index=False)

def read_json():
    nome_arquivo = "serv.json"

    try:
        with open(nome_arquivo, "r") as arquivo:
            dados_json = json.load(arquivo)
        if dados_json:
            verificar_e_salvar_resultados(dados_json)
            print("acabou")
        else:
            print("Erro na coleta do EAN.")
    except FileNotFoundError:
        print(f"Arquivo '{nome_arquivo}' não encontrado.")
    except json.JSONDecodeError:
        print(f"Erro ao decodificar o JSON do arquivo '{nome_arquivo}'.")

def calcular_similaridade_entre_titulos(df):
    # Função para calcular similaridade entre dois textos
    def calcular_similaridade(row):
        titulo1 = row['Título 1'].lower()
        titulo2 = row['Título 2'].lower()
        return fuzz.ratio(titulo1, titulo2)

    # Adiciona uma nova coluna 'Similaridade Títulos' com a similaridade calculada
    df['Similaridade Títulos'] = df.apply(calcular_similaridade, axis=1)

    # Salva o DataFrame atualizado em um novo arquivo Excel
    df.to_excel('resultados_com_similaridade.xlsx', index=False)

def ler_e_calcular_similaridade():
    try:
        # Lê o arquivo Excel gerado anteriormente
        df = pd.read_excel('resultados.xlsx')
        calcular_similaridade_entre_titulos(df)
    except FileNotFoundError:
        print("Arquivo 'resultados.xlsx' não encontrado.")
    except Exception as e:
        print(f"Erro ao processar o arquivo: {e}")

if __name__ == '__main__':
    # Primeiro executa a verificação e salva os resultados
    read_json()

    # Em seguida, lê a planilha e calcula a similaridade entre os títulos
    # ler_e_calcular_similaridade()
