<?php
    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $phone=$_POST['phone'];
        $email=$_POST['email'];
        $msg= $_POST['msg'];

        $to="khalil.froughkmu@gmail.com";
        $subject= "form_submission";
        $message="Name: ".$name."\n"."phoneNo: ".$phone."\n"."wrote the following:"."\n\n".$msg;
        $headers="from: ".$email; 
        

        if(mail($to, $subject, $message, $headers)){
            echo "<h1>sent successfuly! thank you"." ".$name.", We will contact you soon</h1>";
        }
        else{
            echo"something went wrong";
        }
    }

?>