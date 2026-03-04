const express = require("express");
const path = require("path");

const app = express();
const PORT = 3010;

// Parse form + JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static site
app.use(express.static(path.join(__dirname, "public")));

// ---- Global state (in memory) ----
let items = [];
let nextId = 1;

// GET: /api/items (all) or /api/items?id=#
app.get("/api/items", (req, res) => {
  const { id } = req.query;

  if (!id) return res.json({ items });

  const numId = Number(id);
  const found = items.find((x) => x.id === numId);
  if (!found) return res.status(404).json({ error: "Item not found" });

  return res.json({ item: found });
});

// POST: /api/items (requires name)
app.post("/api/items", (req, res) => {
  const name = (req.body.name || "").trim();
  if (!name) return res.status(400).json({ error: "Missing required parameter: name" });

  const item = { id: nextId++, name };
  items.push(item);

  return res.status(201).json({ message: "Created", item, items });
});

// PUT: /api/items (requires id + name)
app.put("/api/items", (req, res) => {
  const id = Number(req.body.id);
  const name = (req.body.name || "").trim();

  if (!id) return res.status(400).json({ error: "Missing required parameter: id" });
  if (!name) return res.status(400).json({ error: "Missing required parameter: name" });

  const found = items.find((x) => x.id === id);
  if (!found) return res.status(404).json({ error: "Item not found" });

  found.name = name;
  return res.json({ message: "Updated", item: found, items });
});

// DELETE: /api/items (requires id)
app.delete("/api/items", (req, res) => {
  const id = Number(req.body.id);
  if (!id) return res.status(400).json({ error: "Missing required parameter: id" });

  const before = items.length;
  items = items.filter((x) => x.id !== id);

  if (items.length === before) return res.status(404).json({ error: "Item not found" });

  return res.json({ message: "Deleted", items });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});