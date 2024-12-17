
// Import JS
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>


// Creating an AES Encryption Instance for the first time
function createAESInstance(secretKey) {
    // You can create a key instance by using a string (secret key) to encrypt/decrypt
    return secretKey;
}


const secretKey = "AES";  // This is your AES key
const aesInstance = createAESInstance(secretKey);  // Creating AES instance for the first time

// AES Encryption function
function encryptData(plainText) {
    // Encrypt the message using the key (secretKey)
    const encrypted = CryptoJS.AES.encrypt(plainText, aesInstance);
    return encrypted.toString();  // return the encrypted message as a string
}

// AES Decryption function
function decryptData(encryptedText) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, aesInstance);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);  // Convert back to plaintext
    return decrypted;
}


 // Encrypt the data
 const message = "123456";
 const encryptedMessage = encryptData(message);
 console.log("Encrypted Message: ", encryptedMessage);

 // Decrypt the message
 const decryptedMessage = decryptData(encryptedMessage);
 console.log("Decrypted Message: ", decryptedMessage);