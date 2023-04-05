const url = `https://jsonplaceholder.typicode.com/todos`;

function printTodos(arr) {
  const ul = document.createElement("ul");

  for (const key of arr) {
    const li = document.createElement("li");

    li.textContent = `${key.id} ${key.title}`;

    ul.appendChild(li);
  }

  document.getElementById("root").append(ul);
}

function getTodos() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error("Something went wrong!"));
      })
      .then(resolve)
      .catch(reject);
  });
}

getTodos().then((arr) => {
  printTodos(arr);
});
