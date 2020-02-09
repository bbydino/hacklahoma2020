<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="This is an awesome website!">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <script src="scripts.js"></script>
    <title>supple you butiful person</title>
  </head>
  <body>
    <div class="topnav" id="topnav">
      <button id="openNav" class="sidenav_button"
      onclick="sidenav_open()">&#9776;</button>
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    <div class="sidenav" style="width: 200px" style="display:none" id="mySidenav">
      <button class="sidenav_button"
      onclick="sidenav_close()">Close &times</button>
      <a href="https://soundcloud.com/bbydinobeats" target="_blank" class="sidenav_item">SoundCloud: bbydino</a>
      <a href="#" class="sidenav_item">Link</a>
      <a href="#" class="sidenav_item">Link</a>
    </div>
    <div class="content" id="main">
      <div id="basic_php_stuff">
        <?php  // PHP can do variables, print stuff, create html stuff
          $myName = "dngo";
          $myAge = 100;
          $title = "Welcome to dngo's website!!!";
          $title = str_replace("Welcome", "Greetings", $title);

          echo "<h1>$title</h1>";
          echo "<hr>";

          echo "My name is $myName . I am sexy, and $myAge years old. <br>";
          echo("Hello World!");
          echo "<hr>";
        ?>
      </div>
      <div id="form_username_age">
        <form action="site.php" method="get">
            Name: <input type ="text" name="username1">
            <br>
            Age: <input type="number" name="age1">
            <br>
            <input type="submit">
        </form>
        <br>
        <?php
        $userName = $_GET["username1"];
        $userAge = $_GET["age1"];
        if ($userName != null) {
          echo "Your name is $userName.";
        }
        echo "<br>";
        if ($userAge != null) {
          echo "Your age is $userAge.";
        }
        ?>
        <hr>
      </div>
      <div id="calculator">
        <h1>CALCULATOR</h1>
        <form action="site.php" method="get">
          Number1: <input type="number" step="0.001" name="num1"><br>
          Number2: <input type="number" step="0.001" name="num2"><br>
          Operator: <br>
          +<input type="radio" name="op" value="plus"><br>
          -<input type="radio" name="op" value="minus"><br>
          /<input type="radio" name="op" value="divide"><br>
          *<input type="radio" name="op" value="multiply"><br>
          %<input type="radio" name="op" value="modulus"><br>
          <input type="submit"><br>
        </form>
        <h2>Answer:
        <?php
          $op = $_GET["op"];
          if ($_GET["num1"] != null && $_GET["num2"] != null) {
            if ($op == "plus") {
              echo $_GET["num1"] + $_GET["num2"];
            }
            elseif ($op == "minus"){
              echo $_GET["num1"] - $_GET["num2"];
            }
            elseif ($op == "divide") {
              echo $_GET["num1"] / $_GET["num2"];
            }
            elseif ($op == "multiply"){
              echo $_GET["num1"] * $_GET["num2"];
            }
            elseif ($op == "modulus"){
              echo $_GET["num1"] % $_GET["num2"];
            }
          }
          else {
            echo "Please enter 2 valid numbers.";
          }
        ?>
      </h2>
      </div>
    </div>
  </body>
</html>
