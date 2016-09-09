# Catálogo te times

Para visualizar o projeto você precisa instalar algumas ferramentas.

LINK PARA A DEMONSTRACAO: www.marciowolff.com.br/catalogotimes ou http://marciowolff.tempsite.ws/catalogotimes

## NodeJS

Tudo segue conforme o NodeJs

[nodejs.org](http://nodejs.org) - Ao baixar ele instala o executável Node e npm (Node Package Manager).

Para baixa-los as demais depêndencias para o funcionamento correto do projeto é simples:
Execute este comando dentro da pasta do projeto (Via linha de comando)

    npm install -g yo && npm install -g bower && npm install -g grunt && npm install -g grunt-cli

Feito isso, agora precisa baixar as dependências:

    npm install

Para gerar o bower_components:

    bower install

Feito isso, você está 100% pronto.

### Usando o Grunt e NodeJS

Como nós vamos fazer a API desacoplada da interface, é bom rodar localmente através do Grunt

    <diretorio_da_app> grunt serve

Só rodar esse comando grunt serve que ele vai criar um servidor local para vocês e tudo que vocês fizerem no HTMl automaticamente vai refletir para a App, Chega de dar refreshs e se preocupar com Cache.