const Cliente = require("../models/cliente");

exports.createCliente = async (req, res) => {
  try{
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);

  } catch(error){
    res.status(400).json({ message: error.message });
  }
};

exports.getClientes = async (req, res) => {
  try{
    const clientes = await Cliente.find();    
    res.status(200).json(clientes);
  } catch(error){
    res.status(500).json({ message: error.message });
  }
};

exports.getClientesById = async (req, res) => {
  try{
    const cliente = await Cliente.findById(req.params.id);

    if(!cliente){
      return res.status(404).json({ message: "Cliente não foi encontrado ou não existe... verifique o ID."});
    }

    res.status(200).json(cliente);
  } catch(error){
    res.status(500).json({ message: error.message })
  }
};

exports.updateCliente = async (req, res) => {
  try{
    const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if(!updatedCliente){
      return res.status(404).json("Cliente não foi encontrado ou não existe... verifique o ID.");
    }

    res.status(200).json(updatedCliente);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

exports.deleteCliente = async (req, res) => {
  try{
    const deletedCliente = await Cliente.findByIdAndDelete(req.params.id);

    if(!deletedCliente){
      return res.status(404).json({ message: "Cliente não foi encontrado ou não existe... verifique o ID."});
    }

    res.status(200).json({ message: "Cliente deletado com sucesso!"});
  } catch(error){
    res.status(500).json({ message: error.message });
  }
}