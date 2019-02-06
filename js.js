
    function validation(){
        let name= document.getElementById('name').value;
        let nameError=document.getElementById('nameError');
           if(name.length==0){
               producePrompt("Name is required", "nameError", "red");
               return false; 
           }
           if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
               producePrompt("First name and last name", "nameError","red");
               return false; 
           }
           producePrompt("Welcome "+name, "nameError","green");
           return true; 
        }

        function producePrompt(message, location, color){
            document.getElementById(location).innerHTML=message;
            document.getElementById(location).style.color=color;
        }

        function validatePhone(){
            let phone=document.getElementById("phone").value;
            let phoneError=document.getElementById("phoneError");

            if(phone.length==0){
                producePrompt("phone is required", "phoneError", "red");
                return false; 
            }
            if(!phone.match(/^[0-9]{4}\s[0-9]{3}\s[0-9]{3}$/)){
                producePrompt("Invalid phone No","phoneError","red");
                return false; 
            }
            producePrompt("Valid phone No ","phoneError", "green");
            return true; 
        
         }
        function validationEmail(){
            let email=document.getElementById("email").value;
            let emailError=document.getElementById("emailError");
            if(email.length==0){
                producePrompt("Email is required","emailError","red");
                return false; 
            }
            if(!email.match(/^[A-Za-z0-9._-]*@[A-Za-z]*[\.][a-zA-z]{2,3}$/) & !email.match(/^[A-Za-z0-9._-]*[\@][a-zA-Z]*[\.][a-zA-Z]{2,4}[\.][a-zA-Z]{3}[\.][a-zA-Z]{2,3}$/)){
                producePrompt("invalid email address!","emailError","red")
                return false; 

            }

            producePrompt("valid Email ","emailError", "green");
            return true; 
        }

        function validMessage(){
            let msg= document.getElementById('msg').value;
            let required=30
            let left=required-msg.length;

            if(left>0){
                producePrompt(left + " characters required","msgError","red");
                return false; 
            }
            producePrompt("valid","msgError","green");
            return true; 
        }