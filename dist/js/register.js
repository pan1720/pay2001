define(["jquery"], function($){
   
    function registerSend(){
        
        //通过post提交数据到对应的php页面，谨记前后端交互看控制台网络
        //点击注册按钮进行注册，有兴趣的同学可以在这个部分加表单验证
        $("#register-button").click(function(){
            // alert(1)
            $.ajax({
                type: "post",
                url: "../php/register.php",
                data: {
                    username: $("#signupName").val(),
                    password: $("#signupPassword").val(),
                    repassword: $("#signupPasswordRepeat").val(),
                    addTime: (new Date()).getTime()
                },
                success: function(result){
                    // alert(result);
                    //解析拿到的数据
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $("#alert").attr("class", "alert alert-danger")
                    }else{
                        $("#alert").attr("class", "alert alert-success");
                        setTimeout(function(){
                            location.assign("login.html");
                        }, 1000);
                    }
                    $("#alert").attr("style","display:block");
                    $("#alert").html(obj.message);
                    
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        registerSend: registerSend
    }
})