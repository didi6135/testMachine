import axios from "axios";



export const getTest = async () => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("ip", "ipAddress");
  const options = {
    method: "POST",
    url: "https://neutrinoapi-ip-blocklist.p.rapidapi.com/ip-blocklist",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "db384c92a5mshc1b5b8c8bb7dadbp172c19jsn5c29cc5b5c8b",
      "X-RapidAPI-Host": "neutrinoapi-ip-blocklist.p.rapidapi.com",
    },
    data: encodedParams,
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
// export const generateFingerprint = (req, res, next) => {
//     const fingerprintData = {
//       userAgent: req.headers['user-agent'],
//       language: req.headers['accept-language'],
//       screenResolution: `${req.query.screenWidth || 0}x${req.query.screenHeight || 0}`,
//       timeZoneOffset: new Date().getTimezoneOffset(),
//     };

//     // You can add more attributes as needed, like plugins, to replicate the browser fingerprinting you want

//     // Serialize the fingerprint data into a JSON string
//     const fingerprintJSON = JSON.stringify(fingerprintData);
//     console.log(fingerprintJSON)
//     // Hash the JSON string to create a unique fingerprint
//     const fingerprint = hashString(fingerprintJSON);

//     // Attach the generated fingerprint to the request object
//     req.userFingerprint = fingerprint;

//     // Call the next middleware or route handler
//     next();
//   }

//   const hashString = (str) => {
//     // You can use a hashing library or function of your choice here
//     // For simplicity, we'll use a basic hash function
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charCodeAt(i);
//       hash = (hash << 5) - hash + char;
//     }
//     return hash.toString();
//   }
