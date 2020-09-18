$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            txtfname:{
                required:true,
                minlength:3,
                maxlength:10

            },
            txtlname:{
                required:true,
                minlength:5

            },
            rdrgender:{
                required:true
            },
            txtemail:{
                required:true,
                email:true

            } ,
            txtday:{
                required:true
            },
            txtpassword:{
              required:true
            },
            confirmpassword:{
            required:true,
            equalTo: "#txtpassword"
            }
            
        },
        messages:{
            txtfname:{
                required:"enter first name",
                minlength:"must write 4 chrater"
            }
        }

    });
});