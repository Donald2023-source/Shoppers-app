import { GoogleAuth } from "google-auth-library";
import admin from "firebase-admin";
// Firebase Service Account Key

const serviceAccount = JSON.parse(process.env.FIREBASE_ACCOUNT_KEY || "{}");
console.log("Service Account:", process.env.FIREBASE_ACCOUNT_KEY);

const auth = new GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/cloud-platform"],
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to Get Access Token
async function getAccessToken() {
  try {
    console.log("Attempting to fetch access token...");

    // Get the access token
    const accessToken = await auth.getAccessToken();
    console.log("Access Token successfully retrieved:", accessToken);
    
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
}

// Example function to retrieve and use the access token
async function myAccessToken(): Promise<void> {
  try {
    const token = await getAccessToken();
    if (token) {
      console.log("Successfully retrieved token:", token);
    } else {
      console.log("Failed to retrieve token");
    }
  } catch (error) {
    console.error("Error in myAccessToken function:", error);
  }
}
const adminDB = admin.firestore();
export { adminDB, myAccessToken };

// Run the token fetch function for testing
myAccessToken();
