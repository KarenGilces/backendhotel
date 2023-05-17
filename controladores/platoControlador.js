import { platoModelo } from "../modelos/platoModelo.js";
import { tipo_menuModelo } from "../modelos/tipo_menuModelo.js"; 



//Obtener
 export const obtenerplatos = async (req, res) => {
    try {
        const platos = await platoModelo.findAll({where: {state:true}, include: [{ tipo_menuModelo}] });
      
        res.status(200).json({platos});
       
      } catch (error) {
          res.status(500).json("No existe  plato");
      }
    
  };
  
  
  //Crear
  export const crearplatos = async (req, res) => {
    try {
        const { descripcion,id_tipomenu} = req.body;
        if (!(descripcion )) {
          res.status(400).json({ message: "campo requerido" });
        }
        const oldUser = await platoModelo.findOne({ where: { descripcion: descripcion } });
        if (oldUser) {
          return res.status(409).json("el plato ya existe, agregar otro");
        }
        const plato = await platoModelo.create({
          
            descripcion, 
            id_tipomenu
           
        });
        res.status(201).json({ plato});
      } catch (error) {
        res.status(500).json("error al agregar plato");
      }
  };

  //Editar
  export const editarplatos = async (req, res) => {
    if (!req.body.descripcion) {
        res.status(400).json({ message: "campo requerido" });
      }
      const descripcion = await platoModelo.findOne({ where: { id: req.params.id } });
      if (descripcion) {
        descripcion.set(req.body);
        await descripcion.save();
        res.status(200).json({ message: "el plato  fue modificado correctamente" });
      } else {
        res.status(404).json({ message: "el plato no fue modificado correctamente" });
      }
    
  };

  //eliminar
  export const eliminarplatos = async (req, res) => {
    const descripcion = await platoModelo.findOne({ where: { id: req.params.id } });
    if (descripcion) {
        descripcion.set({ ...descripcion, estado: false });
      await descripcion.save();
      res.status(200).json({ message: "el  plato fue eliminado correctamente " });
    } else {
      res.status(404).json({ message: "no se encuentra registrada ese plato " });
    }
   
  };
  

