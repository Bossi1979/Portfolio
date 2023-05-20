<?php

########### CONFIG ###############

$recipient = 'info@stefan-boskamp.de';

########### CONFIG END ###########



########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be sent to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): // Send the email
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'];
        $headers = "From: " . $_POST['email'];

        mail($recipient, $subject, $_POST['message'], $headers);
        http_response_code(200);
        break;
    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}