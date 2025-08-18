function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) { tablinks[i].classList.remove("active"); }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
