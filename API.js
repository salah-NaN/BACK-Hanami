/* PONER CORS SI EL DOMINIO/API(PUERTOS) ES DIFERENTE */

/*

api.use(cors(
    { origin: ["http://localhost:3000", "http://localhost:3001" , "http://localhost:3002"] }, whitelist
    { allow_origin_regex='https?://localhost(:[0-9]+)?'}
    { credentials: true },
    { methods: ["GET", "POST", "PUT", "DELETE"] },
    { optionsSuccessStatus: 200 },
    { preflightContinue: true },
    { allowedHeaders: ["Content-Type", "Authorization"] },
    { exposedHeaders: ["Authorization"] },
    { maxAge: 600 },    
));

method:OPTIONS para ver las peticiones

*/

