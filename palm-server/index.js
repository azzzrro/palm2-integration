require("dotenv").config();
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const express = require("express");
const app = express();

app.use(express.json())

const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;



const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

let answer = null

app.post('/api', (req, res) => {
    const { prompt } = req.body
    client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt,
            },
        })
        .then((result) => {
            answer = result[0].candidates[0].output
            res.json(answer)
            console.log(JSON.stringify(result, null, 2));
        }).catch(err => {
            console.log(err.details)
            res.json(err.details)
        })
})

app.listen(3000, () => console.log("Server connected!"))
