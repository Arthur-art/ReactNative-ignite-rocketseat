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
# Iniciando desenvolvimento do Dashboard
- Criando pasta /src para adicionar minhas screens e components
- Criando a primeira screen
  - Dashboard.tsx

# Trabalhando com styled-components
- yarn add styled-components
- yarn add @types/styled-components-react-native -D

# Criando pasta global onde será mantido os arquivos que serão compartilhados com toda a aplicação como o tema
- /global/styles/theme.ts
- Criando theme para a aplicação
- Criando um ThemeProvider do styled component no arquivo App.tsx para envolver todos os apps como um contexto do theme
- configurando um tipo para them no arquivo styled.d.ts

# Trabalhando com fonts no react-native
- expo install expo-font @expo-google-fonts/poppins
- Configurando o uso de fonts no arquivo App.tsx
- Trabalhando com expo-app-loading para lidar com o carregamento do splash enquanto as fonts não são carregadas
  - expo install expo-app-loading
- Adicionando fonts no theme.ts
  - Adicionando font instalada ao font-family do Dashboard

# Desenvolvendo Header do Dashboard
- Trabalhando com lib react-native-responsive-fontsize para lidar com intensidade de pixels em diferentes dispositivos
  - yarn add react-native-responsive-fontsize
  - Implementando react-native-responsive no styles.ts do Dashboard

# Trabalhando com icons no react native
- lib padrão do react-native ("@expo/vector-icons")
- Link para doc do expo/vector-icons: https://icons.expo.fyi/