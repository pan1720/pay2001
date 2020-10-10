define(["jquery"], function($){
   
    function loginSend(){
        
        //通过post提交数据到对应的php页面，谨记前后端交互看控制台网络
        //点击注册按钮进行注册，有兴趣的同学可以在这个部分加表单验证
        $(".u-btn-next").click(function(){
            // alert(1)
         
            $.ajax({
                type: "post",
                url: "../php/login.php",
                data: {
                    username: $("#username").val(),
                    password: $("#password").val()
 
                },
                success: function(result){
                    // alert(result);
                    //解析拿到的数据
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $("#alert").attr("class", "alert alert-danger")
                    }else{
                        $("#alert").attr("class", "alert alert-success");
                    }
                    $("#alert").attr("style","display:block");
                    $("#alert").html(obj.message);
                    if(obj.message == "登陆成功"){
                        setTimeout(function(){
                            location.assign("index.html");
                        }, 1000);
                    }
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        loginSend: loginSend
    }
})