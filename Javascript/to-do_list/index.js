const commands = {
  add: 1,
  complete: 2,
  delete: 3,
  show: 4,
  exit: 0,
};

const tasks = [];
const complete = [];
function addTask() {
  const yourTask = prompt("Enter your task");
  tasks.push(yourTask);
}

function checkTask() {
  let numberOfTask = "";

  while (numberOfTask === "") {
    numberOfTask = prompt("Enter number of task which you complete");
    numberOfTask = numberOfTask.trim();
  }

  if (isNaN(numberOfTask)) {
    throw new Error(`You enter not number`);
  }
  numberOfTask = Number(numberOfTask) - 1;
  complete[complete.length] = tasks[numberOfTask];
  for (let i = numberOfTask; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
  }
  tasks.pop();
}

function deleteTask() {
  let numberOfTask = "";

  while (numberOfTask === "") {
    numberOfTask = prompt("Enter number of task which you want to delete");
    numberOfTask = numberOfTask.trim();
  }

  if (isNaN(numberOfTask)) {
    throw new Error(`You enter not number`);
  }
  numberOfTask = Number(numberOfTask) - 1;
  for (let i = numberOfTask; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
  }
  tasks.pop();
}

function showTasks() {
  alert(`To-do tasks: ${tasks}\nComplete tasks: ${complete}`);
}

let command = 1;
while (command) {
  command = prompt(
    "Commands (use number or name of command):\n1. Add\n2. Complete\n3. Delete\n4. Show\n0. Exit"
  );
  command = command.trim();
  if (isNaN(command)) {
    command = command.toLowerCase();
    if (commands[command] !== undefined) {
      command = commands[command];
    }
    if (typeof command === "string") {
      throw new Error("Unknown command");
    }
  } else {
    command = Number(command);
    if (command < 0 || command > 4) {
      throw new Error("Unknown command");
    }
  }

  switch (command) {
    case 1: {
      addTask();
      break;
    }
    case 2: {
      checkTask();
      break;
    }
    case 3: {
      deleteTask();
      break;
    }
    case 4: {
      showTasks();
      break;
    }
  }

  if (command != 0) {
    console.clear();
    console.log(`To-do`, tasks);
    console.log("Complete", complete);
  }
}
