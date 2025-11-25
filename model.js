// Mock data (temporary in-memory storage)
let items = [
  { id: 1, name: "Laptop", status: "available" },
  { id: 2, name: "Projector", status: "borrowed" },
  { id: 3, name: "Speaker", status: "available" }
];

module.exports = {
  getAll: () => items,

  getById: (id) => items.find(item => item.id === id),

  create: (data) => {
    const newItem = { id: Date.now(), ...data };
    items.push(newItem);
    return newItem;
  },

  update: (id, data) => {
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...data };
    return items[index];
  },

  remove: (id) => {
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return null;
    return items.splice(index, 1);
  }
};
