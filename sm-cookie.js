console.log("sm-cookie.js loaded !!");
function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }
//Check the Cookie from Browser to display error message for Login Fail with Credentials
/*var FIRST_LOGIN = getCookie("FIRST_LOGIN");
console.log("befor cookie check:"+FIRST_LOGIN);
console.log("JSESSIONID:"+getCookie("JSESSIONID"));
if(FIRST_LOGIN == "NO"){
	console.log("In cookie check");
	$("#loginIncorrect").show();
}*/

var INVALID_CREDENTIALS = getCookie("INVALID_CREDENTIALS");
var INVALID_ID = getCookie("INVALID_ID");
var SM_UID = getCookie("SM_UID");
var PWD_EXPIRED = getCookie("PWD_EXPIRED");
if(INVALID_ID == "YES"){
	/*console.log("In cookie check");
	$("#loginIncorrect").show();*/
	$('#userID').val(SM_UID);
	$('#userID').after('<div><span class="error" id="uError">Incorrect AA ID entered</span></div>');
    $('#noErrorUidImg').hide();
    $('#errorUidImg').show();
    $('#userID').css("border-bottom", "1px solid #D3270F");
} else if(INVALID_CREDENTIALS == "YES"){
	/*console.log("In cookie check");
	$("#loginIncorrect").show();*/
	$('#userID').val(SM_UID);
	$('#password').after('<div><span class="error" id="pError">Incorrect password entered</span></div>');            
    $('#noErrorPwdImg').hide();
    $('#errorPwdImg').show();
    $('#password').css("border-bottom", "1px solid #D3270F");
} else if(PWD_EXPIRED == "YES"){
    $('#userID').val(SM_UID);
    $('#password').after('<div><span class="error" id="pError">Password Expired</span></div>');
    $('#password').css("border-bottom", "1px solid #D3270F");
}
