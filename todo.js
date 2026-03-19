function nav() {
  document.getElementById("sidenav").style.display = "flex";
}
function closenav() {
  document.getElementById("sidenav").style.display = "none";
}
function rendertask() {
  let htmlcontent = document.getElementById("list");
  let data = JSON.parse(localStorage.getItem("data")) || [];
  if (data.length == 0) {
    htmlcontent.innerHTML = `<p class="text-lg border border-orange-600 rounded-xl py-2 px-4 ">Add your first task</p>`;
    return;
  }
  htmlcontent.innerHTML = data
    .map(
      (task) =>
        `<div class="border border-orange-600 p-4 rounded-xl" id="task-contain">
           <input type="checkbox" title="mark for complete" class="complete"/>
           <p class="text-lg  border border-orange-600 rounded-xl py-2 px-4" id="work"> ${task}</p>
            <div class="flex flex-wrap gap-4 mt-4">
            <button data-value="${task}" class="edit border border-black bg-green-400 px-2 py-1 rounded-xl hover:bg-green-600 hover:text-white transition duration-500">update<botton>
            <button data-value="${task}" class="delete border border-black bg-red-500 px-2 py-1 rounded-xl hover:bg-red-600  hover:text-white transition duration-500">delete<botton>
         </div> 
       </div>
       `,
    )
    .join("");
}

rendertask();

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let task_value = e.target.getAttribute("data-value").trim();

    if (confirm(`are you sure delete ${task_value} ?`)) {
      let task = JSON.parse(localStorage.getItem("data"));
      let new_task = task.filter((item) => item != task_value);
      localStorage.setItem("data", JSON.stringify(new_task));
      rendertask();
      document.getElementById("task").value = "";
      document.getElementById("add_task").innerHTML = "Add Task";
      return;
    }
  }
});

document.getElementById("delete-all").addEventListener("click", () => {
  if (localStorage.getItem("data")) {
    if (confirm("are you sure delete all ??")) {
      localStorage.removeItem("data");
      rendertask();
      return;
    }
  } else {
    alert("not any task in list!");
    return;
  }
});

let taskToEdit = null;
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    let task_value = e.target.getAttribute("data-value").trim();
    let htmlcontent = document.getElementById("task");
    htmlcontent.focus();
    htmlcontent.value = task_value;
    let btn = document.getElementById("add_task");
    btn.innerText = "Edit Task";
    taskToEdit = task_value;
  }
});
document.getElementById("add_task").addEventListener("click", () => {
  let current_value = document.getElementById("task").value;
  let data = JSON.parse(localStorage.getItem("data"));
  let new_data;
  if (taskToEdit == null) {
    let task = document.getElementById("task").value.trim();
    if (task.trim() == "") {
      alert("enter the task");
      return;
    }

    let data = JSON.parse(localStorage.getItem("data")) || [];

    let cheak = data.some((data) => data == task);
    if (cheak) {
      alert("task already exist");
      return;
    }
    data.push(task);
    localStorage.setItem("data", JSON.stringify(data));
    document.getElementById("task").value = "";
    rendertask();
    return;
  }
  if (current_value != taskToEdit) {
    new_data = data.map((item) => {
      if (item == taskToEdit) {
        return current_value;
      } else {
        return item;
      }
    });
    localStorage.setItem("data", JSON.stringify(new_data));
    rendertask();
    document.getElementById("task").value = "";
    taskToEdit = null;
    document.getElementById("add_task").innerHTML = "Add Task";
    return;
  } else {
    alert("same value not vaild");
    return;
  }
});
document.getElementById("list").addEventListener("change", (e) => {
  if (e.target.classList.contains("complete")) {
    let taskText = e.target.nextElementSibling;
    if (e.target.checked) {
      taskText.classList.add("line-through", "text-black");
      return;
    } else {
      taskText.classList.remove("line-through", "text-black");
      return;
    }
  } else {
    return;
  }
});

let todo = document.querySelectorAll(".todo-btn");
todo.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("todo_list").style.display = "flex";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("currency_converter").style.display = "none";
  });
});

// calculator
let cal = document.querySelectorAll(".calulator-btn");
cal.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("calculator").style.display = "flex";
    document.getElementById("todo_list").style.display = "none";
    document.getElementById("currency_converter").style.display = "none";
  });
});
let value_string = "";
addEventListener("keydown", (e) => {
  let enter_value = document.getElementById("entered_value");
  switch (e.key) {
    case "1":
      value_string += "1";
      enter_value.innerText = value_string;
      break;

    case "2":
      value_string += "2";
      enter_value.innerText = value_string;
      break;

    case "3":
      value_string += "3";
      enter_value.innerText = value_string;
      break;

    case "4":
      value_string += "4";
      enter_value.innerText = value_string;
      break;

    case "5":
      value_string += "5";
      enter_value.innerText = value_string;
      break;

    case "6":
      value_string += "6";
      enter_value.innerText = value_string;
      break;

    case "7":
      value_string += "8";
      enter_value.innerText = value_string;
      break;

    case "8":
      value_string += "8";
      enter_value.innerText = value_string;
      break;

    case "9":
      value_string += "9";
      enter_value.innerText = value_string;
      break;

    case "0":
      value_string += "0";
      enter_value.innerText = value_string;
      break;

    case "+":
      value_string += "+";
      enter_value.innerText = value_string;
      break;
    case "/":
      value_string += "/";
      enter_value.innerText = value_string;
      break;

    case "-":
      value_string += "-";
      enter_value.innerText = value_string;
      break;
    case "*":
      value_string += "*";
      enter_value.innerText = value_string;
      break;

    case ".":
      value_string += ".";
      enter_value.innerText = value_string;
      break;

    case "Delete":
      value_string = "";
      enter_value.innerText = value_string;
      break;

    case "Backspace":
      value_string = value_string.slice(0, value_string.length - 1);
      enter_value.innerText = value_string;
      break;
  }
});

document.getElementById("cal-btn").addEventListener("click", (e) => {
  if (e.target.getAttribute("data")) {
    let value = e.target.getAttribute("data");
    let enter_value = document.getElementById("entered_value");

    if (value == "=" || value == "ac" || value == "ce") {
      if (value == "ac") {
        value_string = " ";
        enter_value.innerText = value_string;
        return;
      } else {
        if (value == "ce") {
          value_string = value_string.slice(0, value_string.length - 1);
          enter_value.innerText = value_string;
          return;
        }
      }
      return;
    } else {
      value_string = value_string + value;
      enter_value.innerText = value_string;
      return;
    }
  } else {
    return;
  }
});

document.getElementById("answer").addEventListener("click", function answer() {
  document.getElementById("answer");

  if (["*", "/", "+", "-"].includes(value_string[value_string.length - 1])) {
    console.log("true");
    return;
  }

  for (let x = 0; x < value_string.length - 1; x++) {
    if (
      (value_string[x] == value_string[x + 1]) == "/" ||
      (value_string[x] == value_string[x + 1]) == "*" ||
      (value_string[x] == value_string[x + 1]) == "+" ||
      (value_string[x] == value_string[x + 1]) == "-"
    ) {
      console.log("true");
      return;
    }
  }
});

// currency_converter

let currency = document.querySelectorAll(".currency-btn");
currency.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("todo_list").style.display = "none";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("currency_converter").style.display = "block";
  });
});

document.getElementById("convert").addEventListener("click", (e) => {
  let from = document.getElementById("currency-from").value;
  let to = document.getElementById("currency-to").value;

  let amount = document.getElementById("amount").value;

  if (amount <= 0) {
    alert("not vaild amount");
    return;
  }
  if (from === to) {
    alert("both exchange same");
    return;
  }

  let ratio = from / to;
  let ans = amount / ratio;
  let htmlcontent = `<p>${ans}</p>`;
  document.getElementById("convert-currency").innerHTML = htmlcontent;
});
