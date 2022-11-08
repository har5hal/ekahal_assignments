
export const getUsers = () => fetch('http://localhost:3001/users').then(res => res.json());

export const addUser = (user) => fetch('http://localhost:3001/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then (res => res.json());
