// console.log("hello world")

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sideBar")

const taskBody = document.querySelector(".headBody")

toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle("show")
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show')
})



const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".task");

sideBar.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});