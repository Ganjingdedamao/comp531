function updateStatus(){//update new status

	document.getElementById("fun_status").innerHTML="<span class='glyphicon glyphicon-pencil'></span> "+document.getElementById("new_status").value;
	document.getElementById("new_status").value="";
}
function cancelarticle(){//cancle the new post
	document.getElementById("article").value="";
	document.getElementById("upfile").value="";
}
function getQueryStr(name)//get value of parameter by parameter's name
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  unescape(r[2]); 
    return null;
}
function setinfor(){//set values for user's display name
    
    if(getQueryStr("disp_name")!=""&&getQueryStr("disp_name")!=null){
        document.getElementById("Username_nav").innerHTML=getQueryStr("disp_name");
        document.getElementById("Username").innerHTML=getQueryStr("disp_name");
    }
    if(getQueryStr("log_username")!=""&&getQueryStr("log_username")!=null){
        document.getElementById("Username_nav").innerHTML=getQueryStr("log_username");
        document.getElementById("Username").innerHTML=getQueryStr("log_username");
    }

}