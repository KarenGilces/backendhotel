import { personaModelo } from "../modelos/personaModelo.js";
import { pesoModelo } from "../modelos/pesoModelo.js";
//Obtener
export const obtenerpeso = async (req, res) => {
    try {
        const pesos = await pesoModelo.findAll({
          attributes: ['id', 'descripcion', 'estado']
        },{where: {state:true}});
      
        res.status(200).json({pesos});
       
      } catch (error) {
          res.status(500).json("No existe  peso");
      }
    
  };
  
  
  //Crear
  export const crearpeso = async (req, res) => {
    try {
        const { descripcion} = req.body;
        if (!(descripcion  )) {
          res.status(400).json({ message: "todos los campos son requeridos" });
        }
        
        
        // Create user in our database
        const peso = await pesoModelo.create({
      
          descripcion
          
        });
        res.status(201).json({ peso});
     
      } catch (error) {
        res.status(500).json("error al crear peso");
      }
  };

  //Editar
  export const editarpeso = async (req, res) => {
    if (!req.body.descripcion) {
        res.status(400).json({ message: "los campos es requerido" });
      }
      const descripcion = await pesoModelo.findOne({ where: { id: req.params.id } });
      if (descripcion) {
        descripcion.set(req.body);
        await descripcion.save();
        res.status(200).json({ message: "el peso fue modificada correctamente" });
      } else {
        res.status(404).json({ message: "peso no encontrado" });
      }
    
  };

  //eliminar
  export const eliminarpeso = async (req, res) => {
    const descripcion = await pesoModelo.findOne({ where: { id: req.params.id } });
  if (descripcion) {
    descripcion.set({ ...descripcion, estado: false });
    await descripcion.save();
    res.status(200).json({ message: " peso fue eliminado correctamente " });
  } else {
    res.status(404).json({ message: "no se encuentra registrado ese peso " });
  }
   
  };
  