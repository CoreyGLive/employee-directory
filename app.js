import express from "express";
import employees from "#db/employees";

const app = express();

// GET /
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// GET /employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// GET /employees/random
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// GET /employees/:id
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(e => e.id === id);
  if (!employee) {
    res.status(404).json({ error: `Employee with id ${id} not found.` });
  } else {
    res.json(employee);
  }
});

export default app;

