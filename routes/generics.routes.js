// Similar CRUD operations for Issue, User, Tag, and Comment...

const createItem = async (req, res, Model) => {
  try {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readItems = async (req, res, Model) => {
  console.log(req.params.id);
  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readItem = async (req, res, Model) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateItem = async (req, res, Model) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res, Model) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    await item.destroy();
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createItem, readItems, readItem, updateItem, deleteItem };
