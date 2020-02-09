function sidenav_open() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("main").style.marginLeft = "30%";
  document.getElementById("topnav").style.marginLeft = "25%";
}

function sidenav_close() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("topnav").style.marginLeft = "0%";
}
