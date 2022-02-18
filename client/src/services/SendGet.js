export const SendGet = async (endpoint) => {
  const getData = await fetch(`http://localhost:4002/${endpoint}`, {
    method: 'GET',
  })
    .then(async (resp) => await resp.json())
    .catch((error) => console.log(error));

  return getData;
};
