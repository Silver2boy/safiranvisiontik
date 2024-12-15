const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('داشبورد فروشگاه');
});

app.listen(3000, () => {
    console.log('Dashboard is running on http://localhost:3000');
});
