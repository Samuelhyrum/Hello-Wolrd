# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Espera 3 segundos pra iniciar
sleep(3)
# Configuração do navegador
options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-error')
options.add_argument('--ignore-ssl-error=yes')
options.add_argument('--start-maximized')

# criação de uma instância de navegador utilizando o Firefox
chrome = webdriver.Chrome(options=options)

# requisições para essa instância criada utilizando o método `get`
response = chrome.get("https://www.mercadolivre.com.br/")

search_input = chrome.find_element("name", "as_word")
search_input.send_keys("BARRA DIRECAO  VW-UP 2014 ED-- ( DIR. ELÉTRICA )")

sleep(3)

search_input.send_keys(Keys.ENTER)

sleep(5)
# Após 5 segundos vai fechar
chrome.quit()