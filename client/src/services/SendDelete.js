const SendDelete = (endpoint, data) => {
  fetch(`${process.env.REACT_APP_API_URL}${endpoint}/${data}`, {
    method: 'DELETE',
  })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
};

export default SendDelete;
