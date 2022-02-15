# GoFinance
- Neste capítulo criaremos uma aplicação completa utilizando React Native, TypeScript e Styled Components (CSS-in-JS) para ir mais a fundo em estilização e criação de interfaces no React Native baseando-se em um layout do Figma. Você também irá aprender a utilizar API Nativas, Armazenamento Local com Async Storage, Navegação, Formulários e Login Social. E para dar um Booster na produtividade vamos utilizar o Expo Bare Workflow.

# Documentação
  
# Iniciando projeto com expo Bare Workflow
- npm install -g expo-cli
- expo init gofinance
  - Selecionar o a opção de Bare Workflow

# Implementando TypeScript
- Criar um arquivo "tsconfig.json" na raiz da pasta
- Iniciar no terminal "expo start"
- Adicionar no tsconfig.json
```json
{
  "compilerOptions": {
      "strict":true
  },
  "extends": "expo/tsconfig.base"
}

```
# Iniciando desenvolvimento com styled components
- Criando pasta /src para adicionar minhas screens e components
- Criando a primeira screen
  - Dashboard.tsx