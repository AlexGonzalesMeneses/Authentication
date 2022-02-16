const SendPut = (data, endpoint) => {
  fetch(`${process.env.REACT_APP_API_URL}${endpoint}/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));
};

export default SendPut;
