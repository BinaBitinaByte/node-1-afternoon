const bodyParser = require('body-parser');
const express = require('express');
const drakeSong = require('./messages_controller');

const app = express();
const baseURL = '/api/messages';
//Port var because its easier to change it in one place
const port = 3001;



app.use(bodyParser.json() );

app.post( baseURL, drakeSong.create );
app.get(baseURL, drakeSong.read );
app.put( `${baseURL}/:id`, drakeSong.update);
app.delete( `${baseURL}/:id`, drakeSong.deleteStuff );

app.listen( port, ()=> {    //server.listen(port, hostname, backlog, callback);
   console.log(`Listening on port ${port}`)
} );

