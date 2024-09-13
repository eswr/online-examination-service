const express = require('express');
const sequelize = require('./config/database');
const questionRoutes = require('./routes/questionRoutes');
const examRoutes = require('./routes/examRoutes');

const app = express();

app.use(express.json());

app.use('/api', questionRoutes);
app.use('/api', examRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
