import { ingredientesModelo } from "../modelos/ingredientesModelo.js";
import { platoModelo } from "../modelos/platoModelo.js";
import { alimentoModelo } from "../modelos/alimentoModelo.js";
import { pesoModelo } from "../modelos/pesoModelo.js";


//Obtener
 export const obteneringredientes = async (req, res) => {
    try {
        const ingredientes = await ingredientesModelo.findAll({
          attributes: ['id','precio','id_plato','id_alimento','id_peso']
        },{where: {state:true}});
      
        res.status(200).json({ingredientes});
       
      } catch (error) {
          res.status(500).json("No existe  ingredientes");
      }
  };
  

  //Crear

  export const crearingredientes = async (req, res) => {
    try {
      const { precio, id_plato,id_alimento,id_peso} = req.body;
      if (!(precio  ||  id_plato ||  id_alimento || id_peso )) {
        res.status(400).json({ message: "todos los campos son requeridos" });
      }
      
      
      // Create user in our database
      const ingredientes = await ingredientesModelo.create({
    
        precio,
        id_plato,
        id_alimento,
        id_peso

        
      });
      res.status(201).json({ ingredientes});

    } catch (error) {
      res.status(500).json("error al crear ingredientes");
    }
  };


 

  //Editar
  export const editaringredientes = async (req, res) => {
    if (!req.body.precio) {
        res.status(400).json({ message: "los campos son  requeridos" });
      }
      const precio = await ingredientesModelo.findOne({ where: { id: req.params.id } });
      if (precio) {
        precio.set(req.body);
        await precio.save();
        res.status(200).json({ message: "ingredientes fue modificada correctamente" });
      } else {
        res.status(404).json({ message: "ingredientes no encontrado" });
      }
  
  };

  //eliminar no tiene estado
  export const eliminaringredientes = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredientes = await ingredientesModelo.findOne({
          where: { id },
          
        });
        ingredientes.set({ ...precio, estado: false });
        await ingredientes.save();
    
        res.status(200).json({ message: "ingredientes eliminada correctamente" });
      } catch (error) { 
        res.status(200).json({ message: "no se encuentra registrada ese ingredientes" });
      }
   
  };
  