import { Router } from "express";

const rapperRoutes = Router();

// Array com suspeitos cadastrados
let rapper = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Jay Z",
        idade: 54,
        descricaofisica:["Moreno", "Alto","Cantor"],
        eas: true,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        nome: "Beyoncé",
        idade: 43,
        descricaofisica:["Cabelo Longo", "Baixa", "Cantora"],
        eas:true,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        nome: "Adam Sandler",
        idade: 58,
        descricaofisica:["Cabelo Castanho", "Alto", "Ator"],
        eas:true,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        nome: "Justin Bieber",
        idade: 30,
        descricaofisica:["Cabelo Loiro", "Alto", "Cantor"],
        eas:false,
      },
];
// Rota para listar todos os suspeitos
rapperRoutes.get("/", (req, res) => {
    return res.status(200).json(rapper);
  });
  
  
  export default rapperRoutes;