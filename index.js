const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // inicializar app express

// --------------------------------------------------------
// BodyParser
// --------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// --------------------------------------------------------
// Importa rotas
// --------------------------------------------------------
const note = require('./routers/note.router');
const user = require('./routers/user.router');
const login = require('./routers/login.router');
app.use('/login', login);
app.use('/note', note);
app.use('/user', user);
app.use('/', (req,res)=>{
	console.log(' Teste de conexão OK.')
	res.send('Conexão Ok')
});


// --------------------------------------------------------
// Configurar acesso ao BD
// --------------------------------------------------------
const url = 'mongodb+srv://wand:3107@cluster0-yra5d.gcp.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true  });
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
db.on('connected',async()=>{

	console.log('Banco conectado...')
	
	// --------------------------------------------------------
	// Servidor
	// --------------------------------------------------------
	let port = 8000;
	app.listen(port, () => {
		console.log('Servidor em execução na porta '+port);
	});

});


