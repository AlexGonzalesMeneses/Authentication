const fetchContainer = async () => {
  const getData = await fetch(
    'http://localhost:5000/api/users/a20ed7d0-a58d-4820-8552-08d9f0c5df30/Container',
    {
      method: 'GET',
      headers: new Headers({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibHVpc0Nob3F1ZTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJsdWlzQ2hvcXVlMkBvdXRsb29rLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6Ikx1aXMgQ2hvcXVlIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJhMjBlZDdkMC1hNThkLTQ4MjAtODU1Mi0wOGQ5ZjBjNWRmMzAiLCJuYmYiOjE2NDUwMjE4MDcsImV4cCI6MTY0NTAyNTQwNywiaXNzIjoiVWx0aW1hdGVUZWFtIiwiYXVkIjoiVWx0aW1hdGVUZWFtIn0.B_YzqANcR6C-BCYMFmZ46R7yaTe1LBveeevUUeJ25oA',
        Accept: 'application/json',
      }),
    }
  )
    .then(async (resp) => await resp.json())
    .catch((error) => console.log(error));

  return getData;
};

export default fetchContainer;
