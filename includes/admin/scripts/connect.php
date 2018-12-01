<?php

// connection parameters 
$host = 'localhost';
$db   = 'db_brendanrogers';
$user = 'root';
$pass = 'root';
$charset = 'utf8mb4';
// Set up DSN (Data Source Name). it is a "semicolon delimited string"
$dsn = 'mysql:host='.$host.';dbname='.$db.';charset='.$charset;
$options = [ // i have aqcuired these options from the internet. NOTE TO SELF: research what these do
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

// try the PDO (PHP Data Object) constructor
try {
     $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) { // if we failed to construct the PDO, return that nasty error
     echo 'Error: '.$e->getMessage();
}

?>

