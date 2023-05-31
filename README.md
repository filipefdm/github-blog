<p align="center">
   <img src="./src/assets/logo.svg"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/filipefmotta/">
      <img alt="filipe Motta" src="https://img.shields.io/badge/-Filipe%20Motta-4e5acf?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <a aria-label="Last Commit" href="https://github.com/filipefdm/github-blog/commits/master">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/filipefdm/github-blog?color=4e5acf">
  </a>
</p>

# Temas

- [O que é o Github Blog?](#o-que-é-o-github-blog)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como executar?](#como-executar)

## O que é o Github Blog?

O Github Blog é um aplicativo web que permite aos usuários buscar e compartilhar conteúdo a partir das issues criadas nos repositórios do Github. Ele foi desenvolvido utilizando tecnologias modernas para oferecer uma experiência de blog interativa e colaborativa.

## Funcionalidades

O Github Blog oferece as seguintes principais funcionalidades:

- Busca de conteúdo: Os usuários podem buscar e visualizar o conteúdo dos blogs a partir das issues relacionadas nos repositórios do Github. As informações são recuperadas utilizando a API do Github e exibidas no aplicativo.

- Visualização de blogs: Os usuários podem visualizar os blogs existentes, com suporte para a renderização do conteúdo Markdown em HTML para uma melhor experiência de leitura.

- Navegação entre blogs: Os usuários podem navegar entre os diferentes blogs através de uma interface intuitiva e amigável, utilizando rotas fornecidas pelo React Router DOM.

- Gerenciamento de formulários: O React Hook Form facilita o gerenciamento de formulários, oferecendo validação de entrada, manipulação de dados e controle de estado para garantir a consistência e a integridade dos dados fornecidos pelos usuários.

- Estilização personalizada: O Styled-Components permite que os componentes sejam estilizados de forma personalizada, garantindo uma aparência única e agradável para o aplicativo.

- Integração com a API do Github: O Axios é utilizado para realizar requisições à API do Github, possibilitando a obtenção e exibição de conteúdo das issues relacionadas aos blogs.

## Tecnologias

As principais tecnologias utilizadas no projeto são as seguintes:

- [React](https://react.dev): Uma biblioteca JavaScript popular para a criação de interfaces de usuário dinâmicas e reativas.
- [Vite](https://vitejs.dev): Um framework de desenvolvimento web rápido e eficiente que permite a criação de aplicativos React de alto desempenho.
- [Axios](https://axios-http.com/ptbr/): Uma biblioteca para fazer requisições HTTP, utilizada para interagir com a API do Github e buscar as issues relacionadas ao conteúdo do blog.
- [Moment](https://momentjs.com): Uma biblioteca de manipulação de datas e horas, utilizada para formatar e exibir datas de forma amigável no aplicativo.
- [Styled Components](https://styled-components.com): Uma biblioteca que permite escrever estilos CSS dentro do próprio código JavaScript, tornando a estilização dos componentes mais fácil de ser mantida e reutilizada.
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): Uma ferramenta de armazenamento local no navegador, utilizada para salvar informações do usuário, como preferências de café ou histórico de pedidos.
- [TypeScript](https://www.typescriptlang.org/): Uma linguagem de programação que adiciona tipagem estática ao JavaScript, proporcionando maior segurança e facilidade de manutenção ao código.
- [Context API](https://reactjs.org/docs/context.html): Uma API do React que permite o compartilhamento de dados entre componentes sem a necessidade de passar props manualmente, facilitando a comunicação entre diferentes partes da aplicação.
- [React Router DOM](https://v5.reactrouter.com): Uma biblioteca que facilita a navegação entre páginas ou telas em um aplicativo React, permitindo a criação de rotas para diferentes seções do blog.
- [React Hook Form](https://react-hook-form.com): Uma biblioteca que facilita o gerenciamento de formulários no React, oferecendo recursos como validação, manipulação de dados e controle de estado.
- [React Markdown](https://remarkjs.github.io/react-markdown/): Uma biblioteca para renderizar conteúdo em formato Markdown como componentes React, permitindo que os usuários escrevam seus blogs utilizando a sintaxe simplificada e poderosa do Markdown.
- [Zod](https://zod.dev): Uma biblioteca de validação de esquema que pode ser usada para validar e tipar dados de entrada, garantindo a integridade dos dados antes de serem processados.

## Como executar?

```bash
# Clone o repositório:
git clone https://github.com/filipefdm/github-blog.git

# Acesse a pasta do projeto:
cd github-blog

# Instalando as dependências do projeto:
npm install

# Rodando a aplicação:
npm run dev
```

Acesse <http://localhost:3000> no navegador para ver o resultado!

---

Feito com 💜 por [Filipe Motta](https://github.com/filipefdm) 😊
