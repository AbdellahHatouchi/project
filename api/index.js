const express = require("express");
const prismadb = require("../lib/prismadb");
require('dotenv').config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

const router = express.Router();

// POST /users - Create a new user
router.post('/users', async (req, res) => {
  const { email, password, isAdmin } = req.body;

  try {
    const newUser = await prismadb.user.create({
      data: {
        email,
        password,
        isAdmin: isAdmin || false // Default to false if isAdmin is not provided
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

// POST /zones - Create a new zone
router.post('/zones', async (req, res) => {
  const { name, leaderFullName, eNumberLeader } = req.body;

  try {
    const newZone = await prismadb.zone.create({
      data: {
        name,
        leaderFullName,
        eNumberLeader
      }
    });

    res.status(201).json(newZone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create zone.' });
  }
});
// GET /zones - get all zones
router.get('/zones', async (req, res) => {
  try {
    const allZones = await prismadb.zone.findMany();

    res.status(200).json(allZones);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get zones.' });
  }
});

app.use('/api',router)


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;