// Create and Save a new Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Item
  const data = { result: [{ id: 1, ...req.body }] };

  res.send(data);
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
  const data = {
    result: [
      {
        page: 1,
        rows: [
          { id: 1, name: "one" },
          { id: 2, name: "two" },
        ],
      },
    ],
  };

  res.send(data);
};

// Find a single Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  const data = { result: [{ id: id, name: "item " + id }] };

  res.send(data);
};

// Update a Item by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.body.id;

  const data = { result: [{ id: id, name: "item " + id, ...req.body }] };

  res.send(data);
};

// Delete a Item with the specified id in the request
exports.remove = (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(404).send({
      message: `Cannot delete Item with id=${id}. not found!`,
    });
  } else {
    res.status(200).send({
      message: "Item was deleted successfully!",
    });
  }
};
