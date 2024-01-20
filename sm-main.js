$(document).ready(function () {

    // $("#userID").focus();
	//$("#loginIncorrect").hide();
    /**
     * Method to Set and Get cookies from browser
     */
	function setCookie(key, value, days) {
        var expires = new Date();
        if (days) {
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        } else {
            document.cookie = key + '=' + value + ';expires=Fri, 30 Dec 9999 23:59:59 GMT;';
        }
    }
	
    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }   
    
    
    /**
     * Client side form validation
     */
    $('#login').click(function (e) {
        e.preventDefault();
        var userID = $('#userID').val();
        var password = $('#password').val();
        var regex = /^[0-9a-zA-Z\_]+$/;
        var flag = true;

        $(".error").remove();
        $('#noErrorUidImg').show();
        $('#errorUidImg').hide();
        $('#noErrorPwdImg').show();
        $('#errorPwdImg').hide();

        
        if (userID.length < 1) {
            $('#userID').after('<div><span class="error" id="uError">Enter your AA ID</span></div>');
            $('#noErrorUidImg').hide();
            $('#errorUidImg').show();
            $('#userID').css("border-bottom", "1px solid #D3270F");
            flag = false;
        }
       
        if (password.length < 1) {
            $('#password').after('<div><span class="error" id="pError">Enter your password</span></div>');            
            $('#noErrorPwdImg').hide();
            $('#errorPwdImg').show();
            $('#password').css("border-bottom", "1px solid #D3270F");
            flag = false;
        }
        console.log("flag is:" + flag);
        if (flag == true) {
            $("#loginForm").submit();
        }
    });

    $("#userID").focus(function () {
        $("#uError").hide()
        $('#noErrorUidImg').show();
        $('#errorUidImg').hide();
        $('#userID').css("border-bottom", "1px solid #9e9e9e");
    });

    $("#password").focus(function () {
        $("#pError").hide()        
        $('#noErrorPwdImg').show();
        $('#errorPwdImg').hide();
        $('#password').css("border-bottom", "1px solid #9e9e9e");
    });

    /* Get current year */

    var today = new Date();
    var year = today.getFullYear();
    $("#currentYear").html(year);

    /* first time user and usage terms */
    $(".first-time-user a").click(function () {
        $("#firstTimeUser").slideToggle();
        $("#usageTerms").hide();
    });

    $(".usage-terms a").click(function () {
        $("#usageTerms").slideToggle();
        $("#firstTimeUser").hide();
    });

    //DUo Terms and conditions
    $('#tc').click(function(event){
        modal.classList.toggle("show-modal");
    });
	
	var modal = document.querySelector(".mymodal");
	if(modal!=null){
	var closeButton = document.querySelector(".close-button");
	function toggleModal() {
		modal.classList.toggle("show-modal");
	}
	closeButton.addEventListener("click", toggleModal);
	}

})