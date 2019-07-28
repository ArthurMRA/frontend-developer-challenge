# Desafio Frontend Developer - Arthur Moreira Rodrigues Alves

**Live preview da minha página:** https://desafiolinximpulse-arthurmoreira.netlify.com/

Aqui irei explicar meus passos para execução do desafio. Para testar a página basta usar o link acima. Caso queiram ver o código basta abri-lo em um editor de texto qualquer. Usei o VisualCode.

---

## A estrutura do projeto:

- O projeto está estruturado em 3 arquivos: index.html(inicialmente  se chamava structure.html), styles.css e functions.js

## Prioridade adotada:

Imaginei que, de acordo com a vaga para a qual estou me candidatando, a minha principal função seria estruturar a parte visual da página. Sendo assim, inicialmente foquei em definir a estrutura da página. Após isso meu foco foi trabalhar na parte visual para garantir a consistência com o modelo proposto no desafio. Por último eu trabalhei na lógica necessária para a funcionalidade da página.

## Dentro da etapa de estruturação da página:

- Criei um arquivo nomeado como structure.html (nome bastante sugestivo, hehehe). Ultilizando tags comuns do HTML5 estruturei a página, dividindo-a em 3 partes principais: cabeçalho, navegação e rodapé.

- Durante o projeto eu também inseri elementos, que representavam as ofertas e seus dados, dentro da parte de navegação, afim de definir estratégias para garantir o funcionamento da página, de forma que ficasse consistente com o modelo do desafio.

- Em alguns momentos eu escrevi o código referente ao estilo e funcionamento da página diretamente no arquivos index.html; Fiz isso apenas pois minha tela é pequena, e quiz evitar ter que trocar de aba muitas vezes, e eventualmente me confundir; apesar disso, os códigos referentes a esses dois tópicos estão separados em seus respectivos arquivos .css e .js.

- A estrutura inicial não foi a final. Eu a alterei no decorrer do desafio.

# Dentro da etapa de aplicação da parte visual:

- Após ter a estrutura inicial feita, eu começei a aplicar o estilo às partes mais simples da página, que na minha opinião eram o cabeçalho e rodapé. Adotei essa estratégia pois dentro da proposta do desafio essas duas áreas não necessitavam ter nenhuma função que se disparasse com a interação do usuário, nem se alterar dinamicamente.

- Depois de ter trabalhado no estilo inicial do cabeçalho e rodapé, parti para a área de navegação. Primeiro apliquei o estilo referente aos elementos mais simples dessa área, como os botões, áreas de inserção de texto e rótulos. 

- Por último trabalhei na parte visual que dizia respeito à área onde as ofertas seriam dispostas e as ofertas em si. Inseri esses elementos diretamente na estrutura do index.html, para poder garantir que o seu posicionamento fosse o mais próximo de como seria no projeto final. Depois que consegui um resultado satisfatório, os exclui do arquivo da estrutura. Minha intenção era gerá-los através de uma função escrita em Javascript.

## Dentro da etapa de construção das funções necessária:

- Depois de possuir um estrutura e estilos quase finalizados, eu começei a definir as funções necessárias para adicionar os elementos das ofertas na página; nesse momento eu ainda não estava me preocupando em pegar as ofertas do JSON passado no desafio.

- Depois de alterar algumas configurações no estilo das ofertas e da área onde seriam dispostas, e garantir que o método estava inserindo as ofertas da forma desejada, começei a trabalhar para pegar as ofertas do arquivo.JSON disponibilizado. Inicialmente eu usei o módulo axios para obter o .JSON, porém eu começei a me embananar e decidir usar o Xmlhttprequest. Nos primeiros momentos eu estava tentando armazenar a URL que vinha no JSON para poder usar no momento de mostrar mais ofertas, porém não estava dando certo; então, depois de uma análise nos arquivos .JSON do desafio eu percebi que todas as URL eram iguais, se distiguindo apenas pelo número da página no final, sendo assim eu criei um objeto que guardava o número da página, que seria incrementada toda vez que o método de atualizar as ofertas fosse chamado.

- Por último, através do uso de regex eu implementei a validação de email e nome. Optei pelo regex por parecer mais compacto. O regex usado na validação de email foi tirado de um tópico do stackoverflow que procurei, pois percebi que haviam vários tipos de email válidos, e infelizmente meus conhecimentos de regex no momento não são tão avançados. Ele não é o melhor, mas achei que para o contexto do desafio ele seria bom. O regex usado na validação de nome é simples, e foi feito por mim, porém achei válido ultilizá-lo para dar um charme maior.

## Finalizando:

- Tive problemas em conseguir centralizar a página toda, usando as proporções que foram passadas;

- Optei por deixar a barra de rolagem das ofertas escondida para ter uma fidelidade maior com o modelo proposto;

- As fontes pareceram mais escuras na minha página :(, mesmo usando as mesmas cores propostas no modelo;

**Espero que gostem ;)**