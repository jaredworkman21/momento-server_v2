import * as functions from "firebase-functions";

// const cors = require('cors')({origin: true});
// import {IntentRequest, IntentResponse} from './src/manager/intent/interface'
import IntentManager from './manager/generation/service'
import { option } from "fp-ts";
import { GenerationRequest, GenerationResponse } from "./manager/generation/interface";
import GenerationManager from './manager/generation/service'

export const intentAnalysis = functions.https.onRequest( async (req, res) => {

        // return cors(req, res, async () => {

            const genRequest:GenerationRequest = req.body;
            
            const maybeGenResponse = await GenerationManager.generate(genRequest);
            const genResponse = option.toNullable(maybeGenResponse.data)
            if(genResponse){
                res.status(200).send(genResponse);
            }
            else {
                res.status(500).send("failed to send")
            }
        // });
});


export const helloWorld = functions.https.onRequest((request:any, response:any) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});