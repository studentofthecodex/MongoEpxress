const  express=require('express');
const router=express.Router();
const Cliente=require('../models/Cliente');

//Registrar un producto

router.post('/registro',async(req,res)=>{
try{
const cliente=new Cliente(req.body);
await cliente.save();
res.status(201).json(cliente);

}catch(error){
    res.status(201).json({error:error.message});

}

});

//consultar  todos los productos

router.get('/consultageneral',async(req,res)=>{
    try{
        const clientes=await Cliente.find();
        res.json(clientes);
        
        }catch(error){
            res.status(500).json({error:error.message});
        
        }
        
        });

//consultar productor por id 
router.get('/:id',async(req,res)=>{
    try{
        const cliente=await Cliente.findById(req.params.id);
        if (!cliente)return res.status(404).json({error:'Cliente no encontrado'});
        res.json(cliente);
        
        }catch(error){
            res.status(500).json({error:error.message});
        
        }
        
        });

//modificar datos del producto

router.put('/:id',async(req,res)=>{
    try{
        const cliente=await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!cliente)return res.status(404).json({error:'Cliente no encontrado'});
        res.json(cliente);
        
        }catch(error){
            res.status(500).json({error:error.message});
        
        }
        
        });

//eliminar un producto

router.delete('/:id',async(req,res)=>{
    try{
        const cliente=await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente)return res.status(404).json({error:'Cliente no encontrado'});
        res.json(cliente);
        
        }catch(error){
            res.status(500).json({error:error.message});
        
        }
        
        });





module.exports=router;

