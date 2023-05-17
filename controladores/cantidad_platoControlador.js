import { cantidad_platoModelo } from "../modelos/cantidad_platoModelo.js";



//Obtener
 export const obtenercantidadplato = async (req, res) => {
  try {
    const cantidad_platoS = await cantidad_platoModelo.findAll({
      attributes: ['id','fecha','cantidad', 'id_plato']
    },{where: {state:true}});
  
    res.status(200).json({cantidad_platoS});
   
  } catch (error) {
      res.status(500).json("No existe  cantidad_plato");
  }
  };
  

  //Crear

  export const crearcantidadplato = async (req, res) => {
    try {
      const { fecha, cantidad, id_plato} = req.body;
      if (!(fecha  ||  cantidad ||  id_plato)) {
        res.status(400).json({ message: "todos los campos son requeridos" });
      }
      
      // Create user in our database
      const cantidad_plato = await cantidad_platoModelo.create({
    
        fecha,
        cantidad,
        id_plato,
        
      });
      res.status(201).json({ cantidad_plato});
     
    } catch (error) {
      res.status(500).json("error al crear cantidad de plato");
    }
  };


 

  //Editar
  export const editarcantidadplato = async (req, res) => {
    if (!req.body.fecha) {
      res.status(400).json({ message: "campo  requerido" });
    }
    const fecha = await cantidad_platoModelo.findOne({ where: { id: req.params.id } });
    if (fecha) {
      fecha.set(req.body);
      await fecha.save();
      res.status(200).json({ message: "la cantidad de plato fue modificada correctamente" });
    } else {
      res.status(404).json({ message: "cantidad de plato no encontrado" });
    }
  };

  //eliminar
  export const eliminarcantidadplato = async (req, res) => {
    try {
      const { id } = req.params;
      const cantidad = await cantidad_platoModelo.findOne({
        where: { id },
        
      });
      cantidad.set({ ...cantidad, estado: false });
      await cantidad.save();
  
      res.status(200).json({ message: "cantidad de plato eliminada correctamente" });
    } catch (error) { 
      res.status(200).json({ message: "no se encuentra registrada esa cantidad" });
    }
 
   
  };
  