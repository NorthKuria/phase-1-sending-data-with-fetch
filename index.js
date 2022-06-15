// Add your code here
const submitData = (name, email) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      const node = document.createElement('h1')
      const text = document.createTextNode(data.id)
      node.appendChild(text)
      document.querySelector('body').appendChild(node)
    })
    .catch(function (error) {
      const node = document.createElement('h1')
      const text = document.createTextNode(error.message)
      node.appendChild(text)
      document.querySelector('body').appendChild(node)
    })
}
