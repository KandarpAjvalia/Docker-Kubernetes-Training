const express = require('express');
const redis = require('redis');
const process = require('process')

const app = express();
const client = redis.createClient({
    // Host is name of the other container 
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    // process.exit(1);
    client.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});