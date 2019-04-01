
const express = require('express');
const app = express();
const messageController = require('./controllers/messages_controller');

app.use( express.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const baseURL = '/api/messages';
const port = 3001;


app.post( baseURL, messageController.create );
app.get(baseURL, messageController.read );
app.put( `${baseURL}/:id`, messageController.update);
app.delete( `${baseURL}/:id`, messageController.deleteStuff );

app.listen( port, ()=> {    //server.listen(port, hostname, backlog, callback);
   console.log(`Listening on port ${port}`)
} );

