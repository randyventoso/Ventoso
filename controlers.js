const Item = require("../models/itemModel");

exports.getAllItems = (req, res) => {
  res.json(Item.getAll());
};

exports.getItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = Item.getById(id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

exports.createItem = (req, res) => {
  const newItem = Item.create(req.body);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const updated = Item.update(parseInt(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: "Item not found" });
  res.json(updated);
};

exports.deleteItem = (req, res) => {
  const deleted = Item.remove(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ message: "Item not found" });
  res.json({ message: "Item deleted" });
};
