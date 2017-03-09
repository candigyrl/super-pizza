//hide pepperoni and mushroom pizza
document.getElementById("pepperoni").classList.add("hide");
document.getElementById("mushroom").classList.add("hide");

//add event to show pepperoni pizza

document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("pepperoni").classList.add("show");
  document.getElementById("button2").classList.add("show");
});

//add event to show nmushroom pizza

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("mushroom").classList.add("show");
});

//add event to go to open the menu

document.getElementById("button3").addEventListener("click", function(){
    window.open("http://www.latraviatapizzany.com/");
});
