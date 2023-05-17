import { personaModelo } from "../modelos/personaModelo.js";



//Obtener
 export const obtenerPersona = async (req, res) => {
    try {
        const personas = await personaModelo.findAll({
          attributes: ['id','nombre','email','telefono','foto','estado']
        },{where: {state:true}});
      
        res.status(200).json({personas});
       
      } catch (error) {
          res.status(500).json("No existe  personas");
      }
  };
  

  //Crear
  export const crearPersona = async (req, res) => {
    try {
        const { nombre, email, telefono, foto } = req.body;
        if (!(nombre ||  email ||  telefono ||  foto)) {
          res.status(400).json({ message: "Campo requerido" });
        }
        // check if email already exist
        // Validate if email exist in our database
        const emailX = await personaModelo.findOne({ where: { email: email } });
        if (emailX) {
          return res.status(409).json("email ya existe");
        }
        
        const telefonoX = await personaModelo.findOne({ where: { telefono: telefono } });
        if (telefonoX) {
          return res.status(409).json("telefono ya existe");
        }
        // Create user in our database
        const persona = await personaModelo.create({
          nombre,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          telefono:  telefono.toLowerCase(),
          foto:foto,

        });
        res.status(201).json({ persona});
      } catch (error) {
        res.status(500).json("error al agregar persona");
      }
  };

  //Editar
  export const editarpersona = async (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ message: "Campo requerido" });
      }
      
      const email = await personaModelo.findOne({ where: { id: req.params.id } });
      
      if (email) {
        email.set(req.body);
        await email.save();
        res.status(200).json({ message: "persona modificada correctamente" });
      } else {
        res.status(404).json({ message: "persona no encontrada" });
      }
  
  };

  //eliminar
  export const eliminarPersona = async (req, res) => {
    
    try {
        const { id } = req.params;
        const persona = await personaModelo.findOne({
          where: { id },
          
        });
        persona.set({ ...persona, estado: false });
        await persona.save();
    
        res.status(200).json({ message: "persona eliminada correctamente" });
      } catch (error) { 
        res.status(200).json({ message: "no se encuentra registrada esa persona" });
      }
  };
  