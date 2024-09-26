const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// تابع برای اضافه کردن متن وارد شده در اینپوت
function addTask() {
  if (inputBox.value === "") {
    alert("باید چیزی وارد کنید!");
  } else {
    //این خط برای ایجاد یک تگ li بکار می رود
    let li = document.createElement("li");
    // برای قرار دادن مقدار اینپوت درون li ی که ایجاد کردیم
    li.innerHTML = inputBox.value;
    // برای وارد کردن li ایجاد شده به درون ul
    listContainer.appendChild(li);

    // برای ایجاد دکمخ ضربدر یا کلوز کنار متن ایجاد شده
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// اضافه کردن کشیدن خط و تغییر آیکون چک برای li های ایجاد شده
listContainer.addEventListener(
  "click",
  /// تابع برای بررسی اینکه آیا روی li  کلیک شده و در صورت وجود کلاس چک آنرا از لیست کلاسهای ال آی حذف می کند و در صورت نبودن آن را اضافه می کند به کلا سهایش
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      // برای حذف المان والد تگ اسپن
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// برای ذخیره کردن ال آی های اضافه شده در برنامه در لکال استوریج مرورگر
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// برای خواندن ال آی های اضافه شده در برنامه در لکال استوریج مرورگر
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
