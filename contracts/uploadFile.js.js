const pinataApiKey = "c9e108135253b2ce5c82";
const pinataSecretApiKey = "60d383d62b0a874c8fc8e316f3dbf16e9fe09a4e7809b86f5d90e4f5151f7358";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
	let data = new FormData();  
	data.append("file", fs.createReadStream("/home/zx/Pictures/logo.png"));  
const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; 
      boundary=${data._boundary}`
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });  console.log(res.data);
};
pinFileToIPFS();