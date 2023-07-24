const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const mongoURI = 'mongodb://127.0.0.1:27017/localize'; // Replace with your MongoDB connection string

// Define a Mongoose schema for the 'users' collection
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a Mongoose model for the 'users' collection
const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.error('Error connecting to DB:', err));

// Serve the static files (HTML, CSS, and JavaScript) from the "public" folder
app.use(express.static('public'));

// Route to serve the login and registration page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to handle user login (POST /api/login)
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the user's credentials here (e.g., query the database using Mongoose)
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      // User exists and credentials are valid
      res.json({ success: true });
    } else {
      // User doesn't exist or invalid credentials
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
