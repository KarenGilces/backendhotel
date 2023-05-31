import { menuModelo } from "../modelos/menuModelo.js";



//Obtener
 export const mostrarmenu = async (req, res) => {
  try {
    const menus = await menuModelo.findAll({
      attributes: ['id', 'id_tipomenu', 'id_cantidadplato','habilitado']
    },{where: {state:true}});
  
    res.status(200).json({menus});
   
  } catch (error) {
      res.status(500).json("No existe menus");
  }
  };
  

  //Crear

  export const crearmenu = async (req, res) => {
    try {
      const { fecha,id_tipomenu ,  id_cantidadplato} = req.body;
      if (!(fecha  || id_tipomenu  || id_cantidadplato   )) {
        res.status(400).json({ message: "todos los campos son requeridos" });
      }
     
     // crea un nuevo objeto `Date`
  //   const today = new Date();
    // obtener la fecha de hoy en formato `MM/DD/YYYY`
    ///today = today.toLocaleDateString('es-EC');
      
     
     // Create user in our database
      const menu = await menuModelo.create({
    
        id_cantidadplato,
        fecha,
        id_tipomenu,
        
      });
      res.status(201).json({ menu});
    } catch (error) {
      res.status(500).json("error al crear menu");
    }
  };



  //Editar
  export const editarmenu = async (req, res) => {
    if (!req.body.fecha) {
      res.status(400).json({ message: "los campos es requerido" });
    }
    const fecha = await menuModelo.findOne({ where: { id: req.params.id } });
    if (fecha) {
      fecha.set(req.body);
      await fecha.save();
      res.status(200).json({ message: "el menu fue modificada correctamente" });
    } else {
      res.status(404).json({ message: "menu  no encontrado" });
    }
  };

  //eliminar
  export const eliminarmenu = async (req, res) => {
    const fecha = await menuModelo.findOne({ where: { id: req.params.id } });
    if (fecha) {
      fecha.set({ ...fecha, habilitado: false });
      await fecha.save();
      res.status(200).json({ message: " menu fue eliminado correctamente " });
    } else {
      res.status(404).json({ message: "no se encuentra registrado ese menu" });
    }
    
   
  };
  