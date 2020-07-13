# Markdown Links

## Índice

* [1. Markdown](#1-markdown)
* [2. Objetivo](#2-objetivo)
* [3. Instalação](#3-instalação)
* [4. Utilização e Funcionalidades](#4-utilização-e-funcionalidades)
* [5. Versões e Bibliotecas Utilizadas](#5-versões-e-bibliotecas-utilizadas)
* [6. Autora](#6-autora)

## 1. Markdown

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação utilizada para padronizar e 
facilitar formatação de texto na web, utilizada em aplicativos como *Slack e GitHub*. Textos estilizados 
com *Markdown* são, na maioria dos casos, apenas textos com caracteres não-alfabéticos, como `#, \* e ![]()`,
usados para a configuração de títulos, listas, itálico, negrito, inserção de imagens, e principalmente na 
criação do tradicional `README.md`.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Objetivo

O objetivo deste projeto é a criação de uma biblioteca em [Node.js](https://nodejs.org/) utilizando Javascript para 
realizar a leitura de arquivos `.md` retornando os links em Markdown do respectivo arquivo através da função `mdLinks`. 
O valor de retorno da função `mdLinks` deve ser um *array* de objetos na seguinte estrutura:
  
  * `text`: Texto que irá aparecer dentro de um link (`<a>`).
  * `href`: URL encontrada.
  * `file`: Rota do arquivo onde foi encontrado o link.

Essa biblioteca também realiza a leitura de diretórios, processo o qual procura arquivos com a extensão`.md` e retorna os 
mesmos presentes no diretório com os respectivos links presentes nestes arquivos diversos, dentro da estrutura apresentada acima.

## 3. Instalação

A biblioteca pode ser instalada através de qualquer terminal com o seguinte comando:

`xxxxx`

Esse comando vai instalar globalmente a biblioteca, tornando a mesma utilizável em qualquer diretório.

Para desinstalar a biblioteca, digite o seguinte comando:

`xxxxx`

## 4. Utilização e Funcionalidades

Após a instalação, digite o seguinte comando no seu termianl para começar a utilizar a biblioteca:

`xxxxx`

Essa biblioteca oferece as seguintes opções de uso para o usuário, a validação `--validate`, opção a qual verifica 
se os links estão integros, e estatíticas `--stats`, que por sua vez traz uma relação de quantos arquivos .md estão 
presentes naquele arquivo que está sendo lido e quantos foram validados ou não pela opção `--validate`.

Verifique a integridade dos links através do seguinte comando:

`xxxxx`

Obtenha as estatísticas provenientes da integridade dos links através do camando:

`xxxxx`

## 5. Dependências e Versões

  Este projeto possui as seguintes dependências com suas respectivas versões:

* `Node` - versão: v12.16.1;
* `NPM` - versão: 6.13.4;
* `Jest` - versão: ^26.1.0;
* `Axios` - versão: ^0.19.2;

## 6. Autora

Este projeto foi desenvolvido por Ana Carolina Ramos, sendo o quarto projeto do bootcamp da [Laboratória](https://www.laboratoria.la/).

