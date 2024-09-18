const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const mainRouter = require('./routes/index');

const app = express();
// Middlewares
// app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
      credentials: true,
      origin:'http://localhost:3000'
  })
);

// Routes
app.use('/api', mainRouter);

dbConnect();
const port = 4000;
app.listen(port,()=>{
    console.log(`Server listening on port :  ${port}`);
})