<?php
$logFile = "../uploadLog";

$line = date("D, H:i:s ").$_REQUEST['origin'].": ".$_REQUEST['data'];

$fh = fopen($logFile, 'a') or die("Can't open file");
fwrite($fh, $line);
fclose($fh);
?>
