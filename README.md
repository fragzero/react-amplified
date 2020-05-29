# AWS Amplify com React App
https://docs.amplify.aws/start/getting-started/installation/q/integration/react#option-1-watch-the-video-guide

## Install
    npm install -g @aws-amplify/cli

## Configurar
    amplify configure

## criar uma nova app react
    npx create-react-app react-amplified
    cd react-amplified
    npm start

## Se npm start não iniciar, verificar o ignore-script
    npm config get ignore-scripts
    npm config set ignore-scripts false    

## inicializar
    amplify init

## comando para acessar o console da aplicacao
    amplify console

## Atualizar react com bibliotecas
    npm install aws-amplify @aws-amplify/ui-react

## Editar index.js
    import Amplify from "aws-amplify";
    import awsExports from "./aws-exports";
    Amplify.configure(awsExports);

## Criar GraphQL API
    amplify add api

## Enviar codigo
    amplify push

## Status
    amplify status

## Console API
    amplify console api
