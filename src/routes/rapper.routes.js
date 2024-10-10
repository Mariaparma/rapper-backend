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
  
  // Rota para cadastrar um novo suspeito
rapperRoutes.post("/", (req, res) => {
    const { nome, idade, descricaofisica, eas } = req.body;

 // Validação dos campos obrigatórios
 if (!nome || !idade || !descricaofisica) {
    return res.status(400).json({
      message: "Os campos nome, idade, e descricaofisica são obrigatórios!",
    });
}

  // Validação se a pessoa é suspeita
  if (eas != "sim" && eas != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  // Criação de um novo suspeito
  const novoRapper = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    descricaofisica,
    eas: eas|| [], 
    // Valor padrão caso eas não seja enviado
  };
   // Adiciona o novo rapper ao array de rapper
   rapper.push(novoRapper);

   return res.status(201).json({
     message: "Rapper cadastrado com sucesso!",
     novoRapper,
   });
 });

export default rapperRoutes;