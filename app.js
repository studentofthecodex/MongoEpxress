const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors')
const itemRoutes=require('./routes/productoRoutes')
const app=express();
 const PORT=3000;


 //Middleware

 app.use(bodyParser.json())
 app.use(cors());

 //Conexion

   mongoose.connect('mongodb://localhost:27017/Tienda2',{ 
       useNewUrlParser:true,
       useUnifiedTopology:true,
})

.then(()=>console.log("MongoDB conectado"))
.catch(err=>console.err(err))

//rutas 

app.use('api/items',itemRoutes);

app.listen(PORT, () => {
    console.log(`Servidor conectado en http://localhost:${PORT}`);
});
