

---

````markdown
# 📱 App de Login com React Native

Este projeto é um aplicativo de login feito com **React Native** que envia os dados de nome e e-mail para um servidor local. A comunicação com o backend é feita via **fetch API**.

---

## 🛠 Tecnologias utilizadas

- ⚛️ React Native (com Expo)
- 🌐 Fetch API para chamadas HTTP
- 📦 Node.js/Express (no backend - precisa estar rodando)

---

## 📷 Tela do App

<p align="center">
  <img src="https://imgur.com/a/login-form-placeholder.png" alt="Tela de login" width="300"/>
</p>

---

## ▶️ Como rodar o projeto

### 1. ✅ Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente:
  ```bash
  npm install -g expo-cli
````

* Um editor como VS Code
* Backend rodando (veja abaixo)

---

### 2. 📦 Instalando o app

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
npm install
```

---

### 3. 🚀 Rodando o app

```bash
expo start
```

Use o app **Expo Go** no seu celular para escanear o QR Code.

> 💡 **Importante:** Substitua `localhost` pela URL do seu backend acessível via rede local ou use o IP da máquina, por exemplo:

```js
fetch('http://192.168.0.10:8081', { ... })
```

---

## 🌐 Backend (Exemplo em Node.js + Express)

Para receber os dados enviados pelo app, crie um servidor básico como este:

### 📁 `index.js`

```js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const { nome, email } = req.body;

  if (nome && email) {
    res.json({ mensagem: `Olá, ${nome}! Login efetuado com sucesso.` });
  } else {
    res.status(400).json({ mensagem: 'Nome e e-mail são obrigatórios.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
```

### ▶️ Rodando o backend

```bash
npm init -y
npm install express cors
node index.js
```

---

## ✅ Funcionalidade

* O usuário insere **nome** e **e-mail**
* Ao clicar em **Entrar**, o app envia os dados para o servidor
* O servidor responde com uma mensagem de sucesso ou erro

---

## 📄 Licença

MIT © [Seu Nome](https://github.com/seu-usuario)

---

Feito com 💙 usando React Native

```



## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
