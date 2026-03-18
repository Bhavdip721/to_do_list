function nav() {
  document.getElementById("sidenav").style.display = "flex";
}
function closenav() {
  document.getElementById("sidenav").style.display = "none";
}

// document.getElementById("add_task").addEventListener("click", () => {
//   let task = document.getElementById("task").value;

//   let data = JSON.parse(localStorage.getItem("data")) || [];

//   let cheak = data.some((data) => data == task);
//   if (cheak) {
//     alert("task already exist");
//     return;
//   }
//   data.push(task);
//   localStorage.setItem("data", JSON.stringify(data));
//   document.getElementById("task").value = "";
//   rendertask();
// });

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
        `<div class="border border-orange-600 p-4 rounded-xl">
           <p class="text-lg  border border-orange-600 rounded-xl py-2 px-4"> ${task}</p>
            <div class="flex flex-wrap gap-4 mt-4">
            <button data-value="${task}" class="edit border border-orange-600 bg-green-500 px-2 py-1 rounded-xl hover:bg-green-600 transition duration-500">update<botton>
            <button data-value="${task}" class="delete border border-orange-600 bg-red-500 px-2 py-1 rounded-xl hover:bg-red-600 transition duration-500">delete<botton>
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
// document.getElementById("list").addEventListener("click", (e) => {
//   if (e.target.classList.contains("edit")) {
//     let task_value = e.target.getAttribute("data-value");
//     let htmlcontent = document.getElementById("task");
//     htmlcontent.focus();
//     htmlcontent.value = task_value;
//     let btn = document.getElementById("add_task");
//     btn.innerText = "Edit Task";
// let new_task = prompt("enter new value", task_value);

// if (new_task) {
//   let task = JSON.parse(localStorage.getItem("data"));
//   let update_task = task.map((item) => {
//     if (item == task_value) {
//       return new_task;
//     } else {
//       return;
//     }
//   });
//   localStorage.setItem("data", JSON.stringify(update_task));
//   rendertask();
// }
//   }
// });
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
