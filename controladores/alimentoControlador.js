import { alimentoModelo } from "../modelos/alimentoModelo.js";



//Obtener
 export const obteneralimento = async (req, res) => {
  try {
    const alimentos = await alimentoModelo.findAll({
      attributes: ['id','descripcion','id_tipoalimento', 'estado']
    },{where: {state:true}});
  
    res.status(200).json({alimentos});
   
  } catch (error) {
      res.status(500).json("No existe  tipo de alimento");
  }
  };
  

  //Crear

  export const crearalimento = async (req, res) => {
    try {
      const { descripcion, id_tipoalimento} = req.body;
      if (!(descripcion  ||  id_tipoalimento)) {
        res.status(400).json({ message: "todos los campos son requeridos" });
      }
      
      // Validate if descripcion exist in our database
      const descripcionx = await alimentoModelo.findOne({ where: { descripcion: descripcion } });
      if (descripcionx) {
        return res.status(409).json("el tipo de descripcion ya existe");
      }
      
      // Create user in our database
      const alimento = await alimentoModelo.create({
    
        descripcion,
        id_tipoalimento,
        
      });
      res.status(201).json({ alimento});

    } catch (error) {
      res.status(500).json("error al crear descripcion de alimento");
    }
  };


 

  //Editar
  export const editaralimento = async (req, res) => {
    if (!req.body.descripcion) {
      res.status(400).json({ message: "descripcion es requerido" });
    }
    const descripcion = await alimentoModelo.findOne({ where: { id: req.params.id } });
    if (descripcion) {
      descripcion.set(req.body);
      await descripcion.save();
      res.status(200).json({ message: "descripcion de alimento  fue modificada correctamente" });
    } else {
      res.status(404).json({ message: "descripcion de alimento de plato no encontrado" });
    }
  };

  //eliminar
  export const eliminaralimento = async (req, res) => {
    try {
      const { id } = req.params;
      const descripcion = await alimentoModelo.findOne({
        where: { id },
        
      });
      descripcion.set({ ...descripcion, estado: false });
      await descripcion.save();
  
      res.status(200).json({ message: "descripcion eliminada correctamente" });
    } catch (error) { 
      res.status(200).json({ message: "no se encuentra registrada esa descripcion" });
    }
 
   
  };
  