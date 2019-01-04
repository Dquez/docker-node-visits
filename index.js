const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

app.get('/', (req, res)=>{
    client.get('vists', (err, visits)=>{
        res.send(' Number of vists ' + visits);
    })
    client.set('vists', parseInt(vists) + 1)
})

app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})