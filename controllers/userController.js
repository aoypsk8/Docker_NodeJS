exports.getUsers = (req, res) => {
  console.log("hi");
  
  res.json([{ id: 1, name: 'Aoy' }, { id: 2, name: 'Psk' }]);
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  res.status(201).json({ id: Date.now(), name });
};

