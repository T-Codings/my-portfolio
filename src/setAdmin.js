const admin = require("firebase-admin");

// ✅ Put your service account json in the same folder and rename it:
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function setAdmin(uid) {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log("✅ Admin claim set for UID:", uid);
  console.log("⚠️ User must sign out and sign in again to refresh the token.");
}

const uid = process.argv[2];
if (!uid) {
  console.log("Usage: node setAdmin.js <USER_UID>");
  process.exit(1);
}

setAdmin(uid).catch(console.error);
