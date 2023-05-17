import { creditoModelo } from "../modelos/creditoModelo.js";



//Obtener
 export const obtenercredito = async (req, res) => {
    try {
        const credito = await creditoModelo.findAll({
          attributes: ['id','fecha','cantidad','pagado','precio', 'id_persona', 'id_plato']
        },{where: {state:true}});
      
        res.status(200).json({credito});
       
      } catch (error) {
          res.status(500).json("No existe  credito");
      }
  };
  

  //Crear

  export const crearcredito = async (req, res) => {
    try {
      const { fecha, cantidad,pagado, precio,id_persona ,id_plato} = req.body;
      if (!(fecha  ||  cantidad ||  pagado || precio || id_persona || id_plato)) {
        res.status(400).json({ message: "todos los campos son requeridos" });
      }
      // Validate if fecha exist in our database
      const fechax = await creditoModelo.findOne({ where: { fecha: fecha } });
      if (fechax) {
        return res.status(409).json("el tipo de credito ya existe");
      }
      
      // Create user in our database
      const credito = await creditoModelo.create({
    
        fecha,
        cantidad,
        pagado,
        precio,
        id_persona,
        id_plato
        
      });
      res.status(201).json({ credito});

    } catch (error) {
      res.status(500).json("error al crear usuario");
    }
  };


 

  //Editar
  export const editarcredito = async (req, res) => {
    if (!req.body.fecha) {
        res.status(400).json({ message: "fecha es requerido" });
      }
      const fecha = await creditoModelo.findOne({ where: { id: req.params.id } });
      if (fecha) {
        fecha.set(req.body);
        await fecha.save();
        res.status(200).json({ message: "el credito fue modificada correctamente" });
      } else {
        res.status(404).json({ message: "credito no encontrado" });
      }
  
  };

  //eliminar
  export const eliminarcredito = async (req, res) => {
    try {
        const { id } = req.params;
        const credito = await creditoModelo.findOne({
          where: { id },
          
        });
        credito.set({ ...credito, estado: false });
        await credito.save();
    
        res.status(200).json({ message: "credito eliminada correctamente" });
      } catch (error) { 
        res.status(200).json({ message: "no se encuentra registrada esa credito" });
      }
   
  };
  