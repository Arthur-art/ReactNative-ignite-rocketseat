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

# Desenvolvendo component HighlightCard
- Trabalhando com ScrowView no Dashboard para lidar com rolamento das Views
- Acessando propriedade do ScrowView pelo metodo "attrs" do styled component

# Trabalhando com lib react-native-iphone-x-helper para lidar com responsividade no header do iphone X em diante
- yarn add react-native-iphone-x-helper
- implementando react-native-iphone-x-helper no styles.ts da screen Dashboard

# Tipando e acessando propriedades no Styled Components no arquivo styles do HighlightCard
```js
interface IProps {
    type: 'up' | 'down' | 'total';
}

export const Icon = styled(Feather)<IProps>`
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.success};
    ${(props) => props.type === 'down' && ` color: ${props.theme.colors.attention}`}
`;

<Icon name={icon[type]} type={type}/>
```

# Desenvolvendo Cartões das transações
- Trabalhando com Flatlist e a lib react-native-iphone-x-helper para lidar com espaços do iphone
- Criando uma nova tipagem personalizada para o Flatlist no arquivo styles do Dashboard

# Desenvolvendo Screen Register
- Criando uma pasta chamada forms para guardar tudo relacionado a formulario
- Desenvolvendo component Button e Input
- Desenvolvendo component TransactionTypeButton

# Trabalhando com lib react-hook-form
- https://react-hook-form.com/

# Desenvolvendo com react-hook-form
- Desenvolvendo Input controlado na past forms/InputForm