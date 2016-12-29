<?php

	$mailPath = './test.html';
	$html = file_get_contents($mailPath, 'r');

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8\r\n";

	mail('email.address@mail.com', 'Test', $html, $headers);

?>
