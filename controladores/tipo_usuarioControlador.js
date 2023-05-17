import { tipo_usuarioModelo } from "../modelos/tipo_usuarioModelo.js";



//Obtener
 export const obtenerTipodeusuarios = async (req, res) => {
    try {
        const tipo_Usuarios = await tipo_usuarioModelo.findAll({
          attributes: ['id', 'tipo','estado']
        },{where: {state:true}});
      
        res.status(200).json({tipo_Usuarios});
       
      } catch (error) {
          res.status(500).json("No existe ese tipo de usuario");
      }
    
  };
  
  
  //Crear
  export const creartipo_usuario = async (req, res) => {
    try {
        const { tipo} = req.body;
        if (!(tipo )) {
          res.status(400).json({ message: "Campo requerido" });
        }
        const oldUser = await tipo_usuarioModelo.findOne({ where: { tipo: tipo } });
        if (oldUser) {
          return res.status(409).json("el tipo de usuario ya existe, agregar otro");
        }
        
        const Tipo_Usuario = await tipo_usuarioModelo.create({
          
            tipo, 
           
        });
        res.status(201).json({ Tipo_Usuario});
      } catch (error) {
        res.status(500).json("error al agregar tipo de usuario");
      }
  };

  //Editar
  export const editarTipodeusuarios = async (req, res) => {
    if (!req.body.tipo) {
        res.status(400).json({ message: "Campo requerido" });
      }
      const tipo = await tipo_usuarioModelo.findOne({ where: { id: req.params.id } });
      if (tipo) {
        tipo.set(req.body);
        await tipo.save();
        res.status(200).json({ message: "El tipo de usuario fue modificado correctamente" });
      } else {
        res.status(404).json({ message: "El tipo de usuario no fue modificado correctamente" });
      }
    
  };

  //eliminar
  export const eliminarTipodeusuarios = async (req, res) => {
    const tipo = await tipo_usuarioModelo.findOne({ where: { id: req.params.id } });
  if (tipo) {
    tipo.set({ ...tipo, estado: false });
    await tipo.save();
    res.status(200).json({ message: "El tipo de usuario fue eliminado correctamente " });
  } else {
    res.status(404).json({ message: "no se encuentra registrado ese tipo de usuario " });
  }
   
  };
  

