<?php

//echo file_get_contents('php://input');
$data = file_get_contents('php://input');
$json = json_decode($data, true);

$to = 'timotheus@list.ru'; // test mode

// Subject
$subject = 'Перезвонить с таблицы цен';

// Message
$message = '<html>
				<head>
				<title>Форма колбэк </title>
				</head>
				<body>
				<div class="wraplogo">
				  <span>
				  <span>21</span> 
					<span style="color: gold">✻</span>
				  <span>Vek</span>

				  </span>
			    </div>
				<br>
				<p>Срочно перезвонить: <a href="tel:'.$json['phone'].'">'.$json['phone'].'</a></p>	
				
				</body>
			</html>';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
// Additional headers
$headers[] = 'From: price-table-callback <robot@dez21vek.ru>';



// Mail it
if( mail($to, $subject, $message, implode("\r\n", $headers) ) )
{
	echo 'success';
}
else 
{
	echo 'error';
}
