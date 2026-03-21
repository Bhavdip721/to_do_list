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
            <button data-value="${task}" class="delete border border-black bg-red-500 px-2 py-1 rounded-xl hover:bg-red-600  text-white transition duration-500">delete<botton>
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
    document.getElementById("clock").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("todo_list").style.display = "flex";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("currency_converter").style.display = "none";
  });
});

// calculator
let cal = document.querySelectorAll(".calulator-btn");
cal.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("clock").style.display = "none";
    document.getElementById("calculator").style.display = "flex";
    document.getElementById("todo_list").style.display = "none";
    document.getElementById("form").style.display = "none";
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

    case "Enter":
      function answer() {
        document.getElementById("answer");

        if (
          ["*", "/", "+", "-"].includes(value_string[value_string.length - 1])
        ) {
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
        let ans = eval(value_string);
        document.getElementById("ans").innerText = ans;
      }
      answer();
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
  let ans = eval(value_string);
  document.getElementById("ans").innerText = ans;
});

// currency_converter

let currency = document.querySelectorAll(".currency-btn");
currency.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("todo_list").style.display = "none";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById("form").style.display = "none";
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

// clock

let clock = document.querySelectorAll(".clock-btn");
clock.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("todo_list").style.display = "none";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("currency_converter").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("clock").style.display = "flex";
  });
});

function clock_time() {
  const htmlcontent = document.getElementById("time");
  setInterval(() => {
    let now = new Date();
    const current_time = now.toLocaleTimeString();
    htmlcontent.innerText = current_time;
  }, 1000);
}
clock_time();

document.getElementById("timer_set").addEventListener("click", (e) => {
  document.getElementById("timer_value").removeAttribute("disabled");
  document.getElementById("timer_value").focus();
});
document.getElementById("timer_value").addEventListener("mouseleave", () => {
  document.getElementById("timer_value").setAttribute("disabled", "");
});

let time_remain;
document.getElementById("timer_start").addEventListener("click", () => {
  let timer_value = document.getElementById("timer_value").value;
  if (timer_value == "00:00:00") {
    alert("enter the correct time");
    return;
  }
  let [hour, minutes, second] = String(timer_value).split(":");
  if (hour > 60 || minutes > 60 || second > 60) {
    alert("enter the vaild time");
    return;
  }
  let total_second = 0;
  if (hour != undefined) {
    total_second += Number(hour) * 3600;
  }
  if (minutes != undefined) {
    total_second += Number(minutes) * 60;
  }
  if (second != undefined) {
    total_second += Number(second);
  }
  document.getElementById("timer").innerText = `${hour}:${minutes}:${second}`;
  time_remain = setInterval(() => {
    document.getElementById("timer").innerText = `${hour}:${minutes}:${second}`;

    if (second == 0) {
      if (minutes == 0) {
        if (hour != 0) {
          hour--;
          minutes = 59;
        }
      } else {
        second = 59;
        minutes--;
      }
    }
    second--;
    total_second--;
    if (total_second == 0) {
      alert("your time is up !!");
      document.getElementById("timer").innerText = `00:00:00`;
      document.getElementById("timer_value").value = "00:00:00";
      clearInterval(time_remain);
    }
  }, 1000);
});
document.getElementById("timer_clear").addEventListener("click", () => {
  if (confirm("are you sure ??")) {
    clearInterval(time_remain);
    document.getElementById("timer").innerText = `00:00:00`;
    document.getElementById("timer_value").value = "00:00:00";
    return;
  } else {
    return;
  }
});

let stop_watch;
document.getElementById("watch_start").addEventListener("click", (e) => {
  e.target.disabled = true;
  let s = 0;
  let m = 0;
  let h = 0;
  let htmlcontent = document.getElementById("watch");
  stop_watch = setInterval(() => {
    htmlcontent.innerText = `${h}:${m}:${s}`;
    s++;
    if (s == 59) {
      s = 0;
      if (m == 59) {
        m = 0;
        h++;
        if (h == 59) {
          clearInterval(stop_watch);
        }
      } else {
        m++;
      }
    }
  }, 1000);
});
document.getElementById("watch_stop").addEventListener("click", () => {
  clearInterval(stop_watch);
  document.getElementById("watch").innerText = "00:00:00";
  document.getElementById("watch_start").removeAttribute("disabled");
});

// form
let form = document.querySelectorAll(".form-btn");
form.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("todo_list").style.display = "none";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("currency_converter").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById("form").style.display = "flex";
  });
});

async function getdata() {
  let res = await fetch("https://countriesnow.space/api/v0.1/countries", {});

  let data = await res.json();

  let countries = document.getElementById("country");
  data.data.map((item) => {
    let option = document.createElement("option");
    // option.value = item.iso2;
    option.value = item.country;
    option.innerText = item.country;
    countries.appendChild(option);
  });
}
getdata();

document.getElementById("country").addEventListener("change", async () => {
  let country = document.getElementById("country").value;
  let state = document.getElementById("state");
  // console.log(country);
  state.innerHTML = `<option  disabled selected>Select your state</option>`;
  let res = await fetch(`https://countriesnow.space/api/v0.1/countries/states`);
  let data = await res.json();

  let target_country = data.data.filter((item) => item.name == country);
  // console.log(target_country);
  let states = target_country[0];
  // console.log(states.states);
  states.states.map((item) => {
    let option = document.createElement("option");
    option.innerText = item.name;
    option.value = item.name;
    // option.value = item.iso2;
    state.appendChild(option);
  });

  let city = document.getElementById("city");
  city.innerHTML = `<option  disabled selected>Select your city</option>`;
});

document.getElementById("state").addEventListener("change", async () => {
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city");
  // console.log(country);
  city.innerHTML = `<option  disabled selected>Select your state</option>`;
  let req = await fetch(
    `https://countriesnow.space/api/v0.1/countries/state/cities`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country,
        state: state,
      }),
    },
  );
  let res = await req.json();
  res.data.map((item) => {
    let option = document.createElement("option");
    option.innerText = item;
    option.value = item;
    city.appendChild(option);
  });
});

// document.getElementById("country").addEventListener("change", async () => {
//   let country = document.getElementById("country").value;
//   let state = document.getElementById("state");

//   state.innerHTML = `<option  disabled selected>Select your state</option>`;
//   let res = await fetch(
//     `https://api.countrystatecity.in/v1/countries/${country}/states`,

//     {
//       headers: {
//         "X-CSCAPI-KEY":
//           "5c5c81da0b89f3713671335904eddf179d1852ac2e7e2748e04ebf76bbddd727",
//         "Content-Type": "application/json",
//       },
//       redirect: "follow",
//     },
//   );
//   let data = await res.json();

//   data.map((item) => {
//     let option = document.createElement("option");
//     option.innerText = item.name;
//     option.value = item.iso2;
//     state.appendChild(option);
//   });
//   let city = document.getElementById("city");
//   city.innerHTML = `<option  disabled selected>Select your city</option>`;
// });
// document.getElementById("state").addEventListener("change", async () => {
//   let country = document.getElementById("country").value;
//   let state = document.getElementById("state").value;
//   let city = document.getElementById("city");
//   city.innerHTML = `<option  disabled selected>Select your city</option>`;
//   let res = await fetch(
//     `https://api.countrystatecity.in/v1/countries/${country}/states/${state}/cities`,
//     {
//       headers: {
//         "X-CSCAPI-KEY":
//           "5c5c81da0b89f3713671335904eddf179d1852ac2e7e2748e04ebf76bbddd727",
//       },
//     },
//   );
//   let data = await res.json();

//   data.map((item) => {
//     let option = document.createElement("option");
//     option.innerText = item.name;
//     option.value = item.iso2;
//     city.appendChild(option);
//   });
// });

document.getElementById("pin_number").addEventListener("input", (e) => {
  let pin = document.getElementById("pin_number");
  let pin_value = e.target.value;

  let warning_pin = document.getElementById("warning_pin");

  if (pin_value.length < 6) {
    if (!warning_pin) {
      let warning_pin = document.createElement("p");
      warning_pin.id = "warning_pin";
      warning_pin.innerText = " 6 digit pin requied";
      warning_pin.style.color = "red";
      document.getElementById("pincode").after(warning_pin);
    }
    number.setCustomValidity("pincode should be 6 digit");
  } else {
    if (warning_pin) {
      warning_pin.remove();
    }
    pin.setCustomValidity("");
  }
  if (pin_value.length == 0) {
    if (warning_pin) {
      warning_pin.remove();
    }
  }
});
document.getElementById("number").addEventListener("input", (e) => {
  let number = document.getElementById("number");
  let number_value = e.target.value;
  let warning = document.getElementById("warning");

  if (number_value.length != 10) {
    if (!warning) {
      let warning = document.createElement("p");
      warning.id = "warning";
      warning.innerText = "10 digit number";
      warning.style.color = "red";
      document.getElementById("number_container").after(warning);
    }
    number.setCustomValidity("number should be 10 digit");
  } else {
    if (warning) {
      warning.remove();
    }
    number.setCustomValidity("");
  }
  if (number_value.length == 0) {
    if (warning) {
      warning.remove();
    }
  }
});

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  alert("add sucessfully");
  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data);
  let req = await fetch(
    "https://69b3bc38e224ec066bdced1f.mockapi.io/test/user",

    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    },
  );
  try {
    if (!req.ok) {
      throw new Error(`${req.status}`);
    }
    console.log("add sucessyfully");
  } catch (e) {
    console.log(e.message);
  }
});
