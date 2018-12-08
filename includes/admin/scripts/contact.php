<?php 

function send_email(){
    //EMAIL VALIDATION

    if(empty($_POST['name'])
        || empty($_POST['email'])
        || empty($_POST['message'])){

        header("Location: ../../../index.html?mail=fail");

        exit;
    }

   // if(!filter_var($))

    $to = 'brendanr11@gmail.com';
    $subject = 'Brendan Rogers Online - sent from: '.$_POST['name'];
    $message = $_POST['message'];
    $headers = 'From: '.$_POST['email'];
    $headers .= '   Reply-To: '.$_POST['name'];

    mail($to, $subject, $message, $headers);
}

send_email();

header("Location: ../../../index.html?mail=success");


 ?>