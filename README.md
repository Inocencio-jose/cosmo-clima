# Cosmo Clima - Progressive Web App

**Cosmo Clima** é uma Progressive Web App (PWA) simples e elegante para verificar informações meteorológicas de cidades em tempo real. Desenvolvido para oferecer uma experiência de usuário rápida, confiável e com capacidade de uso offline.

## Funcionalidades

-   **Pesquisa de Clima em Tempo Real:** Obtenha a temperatura, umidade, velocidade do vento e condições do tempo para qualquer cidade do mundo.
-   **Ícones Dinâmicos:** O ícone do clima é atualizado de acordo com a previsão em tempo real.
-   **Identificação do País:** Veja a bandeira do país da cidade pesquisada.
-   **Instalável (PWA):** Adicione a aplicação à tela inicial do seu dispositivo e use-a como um aplicativo nativo.
-   **Suporte Offline:** Graças à tecnologia Service Worker, a aplicação mantém a interface e os dados em cache para ser acessível mesmo sem conexão com a internet.

## Tecnologias

-   **HTML5:** Estrutura da página.
-   **CSS3:** Estilização e design responsivo.
-   **JavaScript:** Lógica da aplicação.
-   **PWA (Progressive Web App):** Service Worker e Web App Manifest para funcionalidade offline e instalação.
-   **OpenWeatherMap API:** Fonte dos dados meteorológicos.
-   **FlagCDN API:** Fonte das imagens de bandeiras de países.
-   **Font Awesome:** Ícones.

## Como Rodar o Projeto

1.  Clone este repositório:
    `git clone https://github.com/inocencio-jose/cosmo-clima.git`
2.  Navegue até o diretório do projeto:
    `cd cosmo-clima`
3.  Abra o arquivo `index.html` em seu navegador.

Para testar a funcionalidade de PWA (Service Worker), você precisará rodar o projeto em um servidor local com HTTPS, pois é um requisito dos navegadores. Você pode usar uma extensão como "Live Server" no VS Code para isso.

> **Nota:** Lembre-se de adicionar sua própria chave de API do OpenWeatherMap no arquivo `app.js`.

## Instalação

Você pode instalar o **Cosmo Clima** em seu smartphone ou computador para usá-lo como um aplicativo.

-   **Em dispositivos móveis (Android e iOS):**
    -   Abra o site no navegador.
    -   Toque no botão de menu do navegador (geralmente três pontos ou o ícone de compartilhamento).
    -   Selecione a opção **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
-   **Em computadores (Google Chrome):**
    -   Abra o site no navegador Chrome.
    -   Clique no **ícone de instalação** que aparece na barra de URL (um pequeno ícone de tela com um sinal de mais).

---

## Autor

Este projeto foi desenvolvido por:

-   **Nome:** Inocêncio José
-   **Empresa:** Orion Technologies
-   **GitHub:** [github.com/inocencio-jose](https://github.com/inocencio-jose)
