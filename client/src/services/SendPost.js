const SendPost = (data, endpoint) => {
  fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));
};

export default SendPost;
