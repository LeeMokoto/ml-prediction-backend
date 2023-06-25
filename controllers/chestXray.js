const axios = require('axios');

const retry = async (func, retries = 3, delay = 1000) => {
  try {
    return await func();
  } catch (err) {
    if (retries <= 0) {
      throw err;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    return await retry(func, retries - 1, delay);
  }
};

const predictImage = async (req, res) => {
  try {
    const { image } = req.body;
    
    if (!image) {
      return res.status(400).send("Invalid image data");
    }

    const cleanedImages = image.map(image => {
      const imageData = image.image.replace(/^data:image\/\w+;base64,/, "");
      return {
        name: image.name,
        image: imageData
      };
    });

    const requestToAWS = async (retryCount = 0) => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://hx1g9gcry0.execute-api.eu-west-1.amazonaws.com/prod/predictxray',
          headers: {
            'Content-type': 'application/x-image'
          },
          data:{
            images: cleanedImages
          }
        });
        return response.data;
      } catch (error) {
        if (retryCount < 2) {
          console.log(`Request failed, retrying in ${delay / 1000} seconds`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return requestToAWS(retryCount + 1);
        } else {
          console.log(error);
          throw new Error('Request to AWS failed after 3 attempts.');
        }
      }
    };

    const respFromAWS = await retry(() => requestToAWS());
    return res.json({ response: respFromAWS });

  } catch (err) {
    console.log(err);
  }
};

module.exports = {predictImage};