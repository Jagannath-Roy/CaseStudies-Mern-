const express = require('express');
const app = express();
const eventsRouter = require("./routes/events");
const contactsRouter = require("./routes/contacts");

app.use(express.json());



const port = 3000;

app.get('/',(req,res)=>{

   res.send('Welcome to Greenfield Community Center!');


});

app.use('/events',eventsRouter);

app.use('/contact',contactsRouter);





  

app.listen(port,()=>{
   console.log(`Community Center server running at http://localhost:${port}`);

});