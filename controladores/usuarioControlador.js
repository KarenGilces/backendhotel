import { usuarioModelo } from "../modelos/usuarioModelo.js";



//Obtener
 export const obtenerusuario = async (req, res) => {
  try {
    const usuarios = await usuarioModelo.findAll({
      attributes: ['id', 'usuario', 'contrasena','id_tipousuario','id_persona', 'estado']
    },{where: {state:true}});
  
    res.status(200).json({usuarios});
   
  } catch (error) {
      res.status(500).json("No existe ese  usuario");
  }
  }; 
  

  //Crear

  export const crearUsuario = async (req, res) => {
    try {
      const { usuario, contrasena, id_tipousuario, id_persona} = req.body;
      if (!(usuario  ||  contrasena ||  id_tipousuario||id_persona )) {
        res.status(400).json({ message: "todos los campos son requeridos" });
      }
      // check if email already exist
      // Validate if email exist in our database
      const tipox = await usuarioModelo.findOne({ where: { usuario: usuario } });
      if (tipox) {
        return res.status(409).json("el tipo de usuario ya existe");
      }
      //Encrypt user password
     //const encryptedPassword = await bcrypt.hash(password.toString(),10);
      // Create user in our database
      const usuariox = await usuarioModelo.create({
    
        usuario,
        contrasena,
        id_tipousuario,
        id_persona,
      }); 
      res.status(201).json({ usuariox});
    } catch (error) {
      res.status(500).json("error al crear usuario");
    }
  };


 

  //Editar
  export const editarusuario = async (req, res) => {
    if (!req.body.usuario) {
      res.status(400).json({ message: "campos son requeridos" });
    }
    const usuario = await usuarioModelo.findOne({ where: { id: req.params.id } });
    if (usuario) {
      usuario.set(req.body);
      await tipo.save();
      res.status(200).json({ message: "usuario   modificado correctamente" });
    } else {
      res.status(404).json({ message: "usuario no encontrado" });
    }
  };

  //eliminar
  export const eliminarusuario = async (req, res) => {
    
    try {
      const { id } = req.params;
      const usuario = await usuarioModelo.findOne({
        where: { id },
        
      });
      usuario.set({ ...usuario, estado: false });
      await usuario.save();
  
      res.status(200).json({ message: "usuario eliminado correctamente" });
    } catch (error) { 
      res.status(200).json({ message: "no se encuentra registrada ese ususario" });
    }
  };
  