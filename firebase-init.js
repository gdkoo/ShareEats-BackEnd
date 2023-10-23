const { initializeApp } = require("firebase/app");
const { getFirebaseConfig } = require("./firebase-config.js");

const app = initializeApp(getFirebaseConfig());
module.exports = {app};