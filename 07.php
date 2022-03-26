<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?><br>
Your car is:
<?php if ($_GET["cars"] == "notengo"){
     echo "no tengo";
}?>   
<?php if ($_GET["cars"] == "volvo"){
     echo "volvo";
}?>
<?php if ($_GET["cars"] == "saab"){
     echo "saab";
}?>
<?php if ($_GET["cars"] == "fiat"){
     echo "fiat";
}?>
<?php if ($_GET["cars"] == "audi"){
     echo "audi";
}?>
</body>
</html>