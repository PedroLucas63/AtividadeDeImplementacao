#! Importação dos módulos
#* Driver de navegação selenium:
from selenium import webdriver

#* Chaves (Alt, Enter, etc) do Selenium:
from selenium.webdriver.common.keys import Keys

#* Acesso a informações da página:
from selenium.webdriver.common.by import By

#! Acesso a página do Google
#* Criação do driver do EDGE com Selenium:
driver = webdriver.ChromiumEdge()
#* Comando para esperar até 5 segundos para as páginas abrirem:
driver.implicitly_wait(5)
#* Abertura da página do Google:
driver.get("https://www.google.com.br")
#* Procura o elemento de busca da página do Google e limpa o seu valor:
search = driver.find_element(By.NAME, "q")
search.clear()

#! Abertura da página IFRN
#* Pesquisa pelo termo IFRN no Google:
search.send_keys("IFRN")
search.send_keys(Keys.RETURN)
#* Encontra o link que possui "portal.ifrn":
a = driver.find_element(By.PARTIAL_LINK_TEXT, "portal.ifrn")
#* Clica na âncora encontrada:
a.click()

#! Abertura da página de Parelhas:
#* Pega o item de lista que se inicia aberto e contêm os Campis:
ul_campis = driver.find_element(By.CLASS_NAME, "aberta")

#* Pega todos os elementos de âncora:
elements = ul_campis.find_elements(By.TAG_NAME, "a")

#* Percorre os elementos de âncora procurando pelo texto 'parelhas':
for element in elements:
    if "parelhas" in element.get_property("href"):
        a_parelhas = element

#* Clica na âncora encontrada:
a_parelhas.click()

#! Abertura da primeira notícia:
#* Recebe a primeira notícia da página:
news = driver.find_element(By.CLASS_NAME, "each_news")
#* Clica no elemento de âncora que esta nessa notícia:
news.find_element(By.TAG_NAME, "a").click()
