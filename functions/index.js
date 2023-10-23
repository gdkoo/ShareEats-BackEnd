const admin = require('firebase-admin');
const functions = require("firebase-functions");
// const cors = require("cors");
// const corsHandler = cors({"Access-Control-Allow-Origin": "*"});

admin.initializeApp();

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
// const {logger} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/v2/https");
// const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.newDropoff = functions.http.onRequest(async(req,res) => {
	try {
		const data = req.body; //receive data from request body

		//add data to database
		const db = admin.database();
		const ref = db.ref();
		const result = await ref.push(data);

    	return res.status(200).json({ message: `Data added with key: ${result.key}` });
	} catch (error) {
        console.error('Error adding data: ', error);
        return res.status(500).json({ error: 'Error adding data' });
    }
	

})