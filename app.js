// app.js
const express = require('express');
const axios = require('axios');
const checklistRules = require('./config/checklistRules');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Fetch data and evaluate checklist
app.get('/data', async (req, res) => {
    try {
        // Replace with your actual API endpoint
        const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
        const data = response.data;

        // Evaluate checklist rules
        const checklistResults = {};
        checklistRules.forEach(rule => {
            checklistResults[rule.rule] = rule.condition(data);
        });

        res.json({ checklistResults });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});