//configuração do servidor proxy reverso para contornar problemas de restrição CORS com o json no meu dominio

const express = require('express');//criar o servidor http
const axios = require('axios');//biblioteca para requisições http
// const path = require('path');

const app = express();//instância do express (framework web para node .js que simplifica o desenvolvimento de apl web )
const port = 4002;//definir a porta

// Middleware para lidar com as configurações de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Define a origem permitida para o seu aplicativo React em execução (lidar com configurações CORS)
  //definir cabeçalhos CORS (https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros)
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Max-Age', '86400');
  next();
});

// Configuração para servir arquivos estáticos a partir do diretorio atual
app.use(express.static(__dirname));

app.get('/api/data', (req, res) => {
  axios.get('https://filipaferreira.dev/json/data.json') // quando solicitação GET fazer a requisição através do axios
  //resposta ok
    .then(response => {
      res.json(response.data);
    })
    //se ocorrer err enviada msg com status 500
    .catch(error => {
      console.log('Ocorreu um erro:', error);
      res.status(500).json({ error: 'Ocorreu um erro. Tente novamente mais tarde.' });
    });
});

//inicialização de servidor a informar clg qual a porta
app.listen(port, () => {
  console.log(`Servidor proxy reverso está em execução em http://localhost:${port}`);
});
