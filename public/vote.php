<?php
$vote = $_REQUEST['vote'];

//get content of textfile
$filename = "poll_result.txt";
$content = file($filename);

//put content in array
$array = explode("||", $content[0]);
$correlation = $array[0];
$causation = $array[1];

if ($vote == 0) {
  $correlation = $correlation += 1;
}
if ($vote == 1) {
  $causation = $causation += 1;
}

//insert votes to txt file
$insertvote = $correlation."||".$causation;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);
?>

<!DOCTYPE HTML>
<html>
<head>
 <style type="text/css">
   .q1{
      width:  <?php echo intval(100*round($correlation/($causation+$correlation),2));?>px;
      height: 20px;
      background-color: red; 
      animation-name: first;
      animation-duration: 1s;
      animation-delay: 0s;
      -webkit-animation-name: first;
      -webkit-animation-duration: 1s;
      -webkit-animation-delay: 0s;
    }

    @keyframes first {
      0% {width: 0px;}
      100% {width: <?php echo(100*round($correlation/($causation+$correlation),2));?>;}
    }
    @-webkit-keyframes first {
      0% {width: 0px;}
      100% {width: <?php echo(100*round($correlation/($causation+$correlation),2));?>;}
    }
    
    .q2{
      width: <?php echo intval(100*round($causation/($causation+$correlation),2));?>px;
      height: 20px;
      background-color: red; 
      animation-name: second;
      animation-duration: 1s;
      animation-delay: 0s;
      -webkit-animation-name: second;
      -webkit-animation-duration: 1s;
      -webkit-animation-delay: 0s;
    }

    @keyframes second {
      0% {width: 0px;}
      100% {width: <?php echo(100*round($causation/($causation+$correlation),2));?>;}
    }
    @-webkit-keyframes second {
      0% {width: 0px;}
      100% {width: <?php echo(100*round($causation/($causation+$correlation),2));?>;}
    }
 </style>
</head>

<body>
<h2>Result:</h2>
<table>
<tr>
<td>Correlation:</td>
<td>
<div class="q1">
<?php echo(100*round($correlation/($causation+$correlation),2)); ?>%
</div>
</td>
</tr>
<tr>
<td>Causation:</td>
<td>
<div class="q2">
<?php echo(100*round($causation/($causation+$correlation),2)); ?>%
</div>
</td>
</tr>
</table>
<body>
</html>