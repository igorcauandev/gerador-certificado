# GeradorCertificado (PT)

Aplicação web para **geração automática de certificados**, desenvolvida em **Angular**.

> ⚠️ **Status do projeto:** atualmente apenas o **front-end** está implementado. Os dados são armazenados localmente no navegador utilizando **Local Storage**, sem integração com back-end ou banco de dados externo.

## Sobre o projeto

O GeradorCertificado permite criar certificados de forma rápida e automatizada diretamente no navegador. Por não depender de um servidor, todas as informações cadastradas (modelos, dados de participantes, etc.) são persistidas no Local Storage do navegador do usuário.

## Tecnologias

- [Angular](https://angular.dev/) 19
- Local Storage (persistência de dados no navegador)

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Angular CLI](https://github.com/angular/angular-cli) instalado globalmente:

```bash
npm install -g @angular/cli
```

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Com o servidor em execução, abra o navegador em `http://localhost:4200/`. A aplicação recarrega automaticamente sempre que um arquivo do código-fonte é modificado.

## Build

Para gerar a build de produção do projeto:

```bash
ng build
```

Os artefatos da build serão armazenados no diretório `dist/`.

## Observações sobre os dados (Local Storage)

Como o projeto utiliza apenas o front-end, é importante considerar:

- Os dados ficam salvos **somente no navegador** em que foram criados.
- Limpar o cache/dados do navegador apaga as informações salvas.
- Os dados **não são compartilhados** entre dispositivos ou navegadores diferentes.

## Recursos adicionais

Para mais informações sobre o Angular CLI, incluindo a referência completa de comandos, acesse a [documentação oficial do Angular CLI](https://angular.dev/tools/cli).

---

# CertificateGenerator (EN)

A web application for **automatically generating certificates**, built with **Angular**.

> ⚠️ **Project status:** currently only the **front-end** is implemented. Data is stored locally in the browser using **Local Storage**, with no back-end or external database integration.

## About the project

GeradorCertificado allows users to create certificates quickly and automatically right in the browser. Since it doesn't rely on a server, all registered information (templates, participant data, etc.) is persisted in the user's browser Local Storage.

## Tech Stack

- [Angular](https://angular.dev/) 19
- Local Storage (browser-based data persistence)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Angular CLI](https://github.com/angular/angular-cli) installed globally:

```bash
npm install -g @angular/cli
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Build

To build the project for production:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Notes on Data (Local Storage)

Since this project is front-end only, keep in mind:

- Data is saved **only in the browser** where it was created.
- Clearing the browser's cache/data will erase the saved information.
- Data is **not shared** across different devices or browsers.

## Additional Resources

For more information on the Angular CLI, including a full command reference, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
