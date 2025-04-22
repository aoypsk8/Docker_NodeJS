const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log('GET / request received');
    res.send('Hello from Node.js!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
