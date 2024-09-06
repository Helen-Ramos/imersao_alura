## **Imersão Alura - Dev com Google Gemini**


### **Descrição**

Este projeto é uma aplicação web simples desenvolvida em HTML, CSS e JavaScript, com o objetivo de auxiliar os usuários a encontrar informações sobre trilhas em Petrópolis. A aplicação permite que o usuário pesquise por trilhas utilizando um campo de busca, e exibe os resultados correspondentes em uma lista.

### **Funcionalidades:**

* **Pesquisa:** Permite ao usuário pesquisar por trilhas digitando palavras-chave no campo de busca. A pesquisa é realizada tanto no título quanto na descrição das trilhas.
* **Exibição de resultados:** Apresenta os resultados da pesquisa em uma lista, exibindo o título, descrição e link para cada trilha encontrada.
* **Design responsivo:** A aplicação se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência para o usuário em dispositivos móveis e desktops.

### **Estrutura do Projeto:**

* **index.html:** Arquivo principal da aplicação, contendo a estrutura HTML da página.
* **style.css:** Arquivo responsável pelo estilo visual da aplicação.
* **dados.js:** Arquivo que contém um array de objetos com as informações das trilhas.
* **app.js:** Arquivo que contém a lógica da aplicação, incluindo a função de pesquisa e a manipulação do DOM.

### **Como utilizar:**

1. **Clonar o repositório:** Clone este repositório para sua máquina local.
2. **Abrir o arquivo index.html:** Abra o arquivo `index.html` em um navegador web.
3. **Realizar a pesquisa:** Digite o nome da trilha desejada no campo de pesquisa e clique no botão "Pesquisar".
4. **Visualizar os resultados:** Os resultados da pesquisa serão exibidos abaixo do campo de pesquisa.

### **Como funciona:**

1. **HTML:** A estrutura HTML define a interface do usuário, incluindo o campo de pesquisa, a lista de resultados e o rodapé.
2. **CSS:** O arquivo CSS estiliza a página, definindo as cores, fontes e layout.
3. **JavaScript:** 
   * **dados.js:** Contém um array de objetos, cada um representando uma trilha.
   * **app.js:**
     * **Função pesquisar():**
       - Obtém o valor digitado no campo de pesquisa.
       - Itera sobre o array de trilhas, verificando se o título ou a descrição da trilha contém a palavra-chave pesquisada.
       - Cria elementos HTML para exibir os resultados da pesquisa.
       - Atualiza o conteúdo da seção de resultados.

### **Melhorias futuras:**

* **Filtragem por dificuldade:** Permitir que o usuário filtre as trilhas por nível de dificuldade.
* **Mapas:** Integrar um mapa para visualizar a localização das trilhas.
* **Informações adicionais:** Adicionar mais informações sobre as trilhas, como duração, distância, altitude, etc.
* **Banco de dados:** Utilizar um banco de dados para armazenar as informações das trilhas de forma mais organizada e escalável.

### **Tecnologias utilizadas:**

* **HTML:** Estrutura da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação.

### **Contribuições:**

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, por favor, abra um issue neste repositório.

**Observações:**

* **Dados das trilhas:** Os dados das trilhas são fictícios e podem ser substituídos por dados reais.
* **Design:** O design da aplicação pode ser personalizado de acordo com suas preferências.
* **Funcionalidades:** A aplicação pode ser expandida com novas funcionalidades, como um sistema de login para usuários cadastrados.

**Este README.md fornece uma visão geral da aplicação e pode ser utilizado como ponto de partida para futuras melhorias.**
