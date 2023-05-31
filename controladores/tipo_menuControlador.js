import { tipo_menuModelo } from "../modelos/tipo_menuModelo.js";
//Obtener
export const obtenertipo_menu = async (req, res) => {
    try {
        const tipo_menus = await tipo_menuModelo.findAll({
          attributes: ['id', 'tipo']
        },{where: {state:true}});
      
        res.status(200).json({tipo_menus});
       
      } catch (error) {
          res.status(500).json("No existe ese tipo de menu");
      }
    
  };
  
  
  //Crear
  export const creartipo_menu = async (req, res) => {
    try {
        const { tipo} = req.body;
        if (!(tipo )) {
          res.status(400).json({ message: "campo requerido" });
        }
        const oldUser = await tipo_menuModelo.findOne({ where: { tipo: tipo } });
        if (oldUser) {
          return res.status(409).json("el tipo de menu ya existe, agregar otro");
        }
        const Tipo_Menu = await tipo_menuModelo.create({
          
            tipo, 
           
        });
        res.status(201).json({ Tipo_Menu});
      } catch (error) {
        res.status(500).json("error al agregar tipo de menu");
      }
  };

  //Editar
  export const editartipo_menu = async (req, res) => {
    if (!req.body.tipo) {
        res.status(400).json({ message: "campo requerido" });
      }
      const tipo = await tipo_menuModelo.findOne({ where: { id: req.params.id } });
      if (tipo) {
        tipo.set(req.body);
        await tipo.save();
        res.status(200).json({ message: "El tipo de menu fue modificado correctamente" });
      } else {
        res.status(404).json({ message: "El tipo de menu no fue modificado correctamente" });
      }
    
  };

  //eliminar
  export const eliminartipo_menu = async (req, res) => {
    const tipo = await tipo_menuModelo.findOne({ where: { id: req.params.id } });
  if (tipo) {
    tipo.set({ ...tipo, estado: false });
    await tipo.save();
    res.status(200).json({ message: "El tipo de menu fue eliminado correctamente " });
  } else {
    res.status(404).json({ message: "no se encuentra registrada ese tipo de menu " });
  }
   
  };
  