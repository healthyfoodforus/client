$(document).ready(function() {
    $('#login-content').hide();
    $('#home-content').show();

    if(localStorage.getItem('token')){
        isLogin(true);
    } else {
        isLogin(false);
    }

    $('#login_click').click(function() {
        console.log("show form login")
        $('#home-content').hide();
        $('#login-content').show();
        $('#login_form').show();
        $('#register_form').hide();
        $('#google_signin').show();
        
    })

    $('#login_form').submit(function() {
        event.preventDefault()
    })

    $('#register_click').click(function() {
        console.log("show form register")
        $('#home-content').hide();
        $('#login-content').show();
        $('#register_form').show();
        $('#login_form').hide();
    })

    $('#register_form').submit(function() {
        event.preventDefault()
    })

    $('#sign_in').click(function() {
        $('#login-content').show()
        $('#register_form').hide()
        $('#login_form').show()
    })

    $('#home_click').click(function() {
        console.log("show find video")
        $('#home-content').hide();
        $('#video-content').show();
        $('#eatOut-content').hide();
        $('#cookHome-content').hide();
    })

    $('#eatOut_click').click(function() {
        console.log("show find resto")
        $('#home-content').hide();
        $('#video-content').hide()
        $('#eatOut-content').show();
        $('#cookHome-content').hide();
        $('#map').hide();
    })

    $('#cookHome_click').click(function() {
        console.log("show find recipe")
        $('#home-content').hide();
        $('#video-content').hide()
        $('#eatOut-content').hide();
        $('#cookHome-content').show();
    })
})

function register() {
    console.log($('#emailReg').val())
    console.log($('#pwReg').val())
    $.ajax({
        url: 'http://localhost:3000/users/register',
        method: 'POST',
        data: {
            email: $('#emailReg').val(),
            password: $('#pwReg').val()
        }
    })
    .done(data => {
        $('#register_form').hide()
        $('#login_form').show()
    })
    .fail(err => {
        console.log(err)
    }) 
}

function isLogin(input) {
    if(input == false) {
        console.log("login is ===>", input)
        $('#login-content').hide();
        $('#main-content').hide();
        $('#navbar-content-before').show();
        $('#navbar-content-after').hide();
    } else {
        console.log("login is ===>", input)
        $('#main-content').show();
        $('#navbar-content-before').hide();
        $('#navbar-content-after').show();
    }
}