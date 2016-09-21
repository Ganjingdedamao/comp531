function validation(){//the function to validate the information
    //set the regular expression for account name
    var nameReg = new RegExp("^[a-zA-Z][a-zA-Z0-9]*$");
    //set the regular expression for zipcode
    var zipReg = new RegExp("^[0-9]{5}$|^[0-9]{5}-[0-9]{4}$");
    //set the regular expression for phone number
    var phoneReg = new RegExp("^[1-9][0-9]{2}[-][0-9]{3}[-][0-9]{4}$");
    //set the regular expression for email
    var emailReg= new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+.[a-zA-Z0-9_-]+$");
    //account name required
    if(document.getElementById('acco_name').value==""){
        window.alert("Please input your account name!");
        return false;
    }
    //validate account name
    if(!(nameReg.test(document.getElementById('acco_name').value))){
        window.alert("Your account name does not match the requested format. Account name can only be upper or lower case letters and numbers, but may not start with a number. Please enter a valid account name.");
        return false;
    }
    //email required
    if(document.getElementById('email').value==""){
        window.alert("Please input your email addsress!");
        return false;
    }
    //validate the email
    if(!(emailReg.test(document.getElementById('email').value))){
        //window.alert(document.getElementById('email').value);
        window.alert("Your email does not match the requested format a@b.co, please enter a valid email address.");
        return false;
    }
    //phone required
    if(document.getElementById('phone').value==""){
        window.alert("Please input your phone number!");
        return false;
    }
    //use regular expression to validate the phone number
    if(!(phoneReg.test(document.getElementById('phone').value))){
        window.alert("Your phone number does not match the requested format 123-123-1234. Your phone number should not start with 0. Please enter a valid phone number.");
        return false;
    }
    //zipcode required
    if(document.getElementById('zipcode').value==""){
        window.alert("Please input your zipcode!");
        return false;
    }
    //use regular expression to validate the zipcode
    if(!(zipReg.test(document.getElementById('zipcode').value))){
        window.alert("Your zipcode does not match the requested format 99999 or 99999-9999. Please enter a valid zipcode.");
        return false;
    }
    //date of birth required
    if(document.getElementById('birth').value==""){
        window.alert("Please input your date of birth!");
        return false;
    }
    //validate date of birth
    if(!agevalid(document.getElementById('birth').value)){
        console.log(document.getElementById('birth').value);
        window.alert("Sorry! Only individuals 18 years of age or older on the day of registration are allowed to register.");
        return false;
    }
    //password required
    if(document.getElementById('password').value==""){
        window.alert("Please input your password!");
        return false;
    }
    //password confirmation required
    if(document.getElementById('pass_conf').value!=document.getElementById('password').value){
        window.alert("Your password confirmation is not as same as your password!");
        return false;
    }
    window.alert("Register success!");
    return true;
    
}


function setTime(){//the set page loading time
    //get time stamp
    var d = new Date();
    console.log(Date.parse(d));
    document.getElementById('time').value=Date.parse(d);
    //set month and date array
    var month=["01","02","03","04","05","06","07","08","09","10","11","12"];
    var date=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17",
    "18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    //change time stamp to readable string
    var timestr=d.getFullYear()+"-"+month[parseInt(d.getMonth())]+"-"+date[parseInt(d.getDate())-1];
    //save readable string
    document.getElementById('timedisplay').value=timestr;
    setwidth();
    //window.alert(document.getElementById('time').value);
    
    
    
}
function agevalid(birth){//validate 18 years old
    var now = document.getElementById('timedisplay').value;
    now=now.split("-");
    var now_Year=parseInt(now[0]);
    var now_Month=parseInt(now[1]);
    var now_Date=parseInt(now[2]);
    birth=birth.split("-");
    var birth_Year=parseInt(birth[0]);
    var birth_Month=parseInt(birth[1]);
    var birth_Date=parseInt(birth[2]);

    if(now_Year-birth_Year<18) return false;
    else if(now_Month-birth_Month<0) return false;
    else if(now_Date-birth_Date<0) return false;
    else return true; 

}
function validatelogin(){//function to validate the login information
    if(document.getElementById("log_username").value=="")//usename
    {
        window.alert("Please input your username to login!");
        return false;
    }
    if(document.getElementById("log_password").value=="")//password
    {
        window.alert("Please input your password to login!");
        return false;
    }
    //set url
    var url="./main.html?log_username="+document.getElementById("log_username").value+"&log_password="+document.getElementById("log_password").value;
    window.location.replace(url);
}
function setwidth(){
    //set the width of the birth input
    document.getElementById("birth").style.width=document.getElementById("zipcode").clientWidth+"px";

}
window.onresize = function(){
    //resize
    setwidth();
}
