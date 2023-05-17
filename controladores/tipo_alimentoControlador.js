import { tipo_alimentoModelo } from "../modelos/tipo_alimentoModelo.js";
//Obtener
export const obtenertipo_alimento = async (req, res) => {
    try {
        const tipo_alimentos = await tipo_alimentoModelo.findAll({
          attributes: ['id', 'descripcion', 'estado']
        },{where: {state:true}});
      
        res.status(200).json({tipo_alimentos});
       
      } catch (error) {
          res.status(500).json("No existe ese tipo de alimento");
      }
    
  };
  
  
  //Crear
  export const creartipo_alimento = async (req, res) => {
    try {
        const { descripcion} = req.body;
        if (!(descripcion  )) {
          res.status(400).json({ message: "todos los campos son requeridos" });
        }
         
        
        // Create user in our database
        const Tipo_Alimento = await tipo_alimentoModelo.create({
      
          descripcion
          
        });
        res.status(201).json({ Tipo_Alimento});

      } catch (error) {
        res.status(500).json("error al crear tipo Alimento");
      }
  };

  //Editar
  export const editartipo_alimento = async (req, res) => {
    if (!req.body.descripcion) {
      res.status(400).json({ message: "los campos es requerido" });
    }
    const descripcion = await tipo_alimentoModelo.findOne({ where: { id: req.params.id } });
    if (descripcion) {
      descripcion.set(req.body);
      await descripcion.save();
      res.status(200).json({ message: "el tipo alimento fue modificada correctamente" });
    } else {
      res.status(404).json({ message: "tipo alimento  no encontrado" });
    }
    
  }; 

  //eliminar
  export const eliminartipo_alimento = async (req, res) => {
    const descripcion = await tipo_alimentoModelo.findOne({ where: { id: req.params.id } });
    if (descripcion) {
      descripcion.set({ ...descripcion, estado: false });
      await descripcion.save();
      res.status(200).json({ message: " descripcion de tipo alimento fue eliminado correctamente " });
    } else {
      res.status(404).json({ message: "no se encuentra registrada esa descripcion de tipo alimento " });
    }
   
  };
  