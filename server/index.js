const express = require("express");
const app = express(); // Ovo nam daje dosta metoda OOP ;)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
