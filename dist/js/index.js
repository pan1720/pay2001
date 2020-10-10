define(["jquery","jquery-cookie"],function($){
    function show(){
        $(function(){
            $.ajax({
                type:"get",
                url:"../data/nv.json",
                success:function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node = $(` <li class="${arr[i].class}"><a href="${arr[i].a}" class="${arr[i].aclass}">${arr[i].value}</a></li>`)

                        node.appendTo(".conter-left");
                    }
                    var node =  $(`<div style="display:none">
                                 <ul class="nv-list">      
                                  </ul>
                           </div>`).appendTo($("#ul1 .nv-nv"));
                    for(var i =0; i< arr.length;i++){
                           var res = arr[i].area;
                           if(res){                            
                               for(var j = 0; j < res.length; j++){ 
                                $(`<li><a href="#">${res[j]}</li></a>`).appendTo(node.find("ul"));
                               }
                           }
                    }                   
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            $("#ul1").on("mouseenter", ".nv-nv", function(){
				$("#ul1").find("div").show();
			})

			$("#ul1").on("mouseleave", function(){
				$("#ul1").find("div").hide();
            })
        })
    }
    function show2(){
        $(function(){
            $.ajax({
                type:"get",
                url:"../data/nvgt.json",
                success:function(arr){
                    for(var i = 0; i < arr.length;i++){
                        var node = $(`
                        <li class="${arr[i].class}">
                        <a href="" class="${arr[i].aclass}">
                            ${arr[i].value}
                            <i class="iconfont">${arr[i].ivalue}</i>
                        </a>
                        </div>
                    </li>             
                        `)
                        node.appendTo(".menu-pull");
                    }                  
                        for(var i =0; i< arr.length;i++){                 
                            var node =$(`<div class = "tao-nv ${arr[i].dclass}">
                                    <ul class="tao-ul"></ul>
                               </div>`).appendTo($(".menu-pull"));
                               var res = arr[i].img; 
                                for(var j = 0; j <res.length; j++){                              
                                    $(` <li><span>${ arr[i].nvalue[j]}</span>
                                        <a href="list.html?id=${arr[i].id[j]}" class="aaa"> <img src="${res[j]}" alt=""></a></li>`).appendTo(node.find("ul")) ;
                                }                                                           
                        }               
                },
                error:function(msg){
                    console.log(msg);
                } 
            })
            $(".menu-pull").on("mouseenter", ".menu-pull-item", function(){

                $(".menu-pull").find("div").hide().eq($(this).index()).show();
			})

			$(".menu-pull").on("mouseleave", function(){
				$(".menu-pull").find("div").hide();
			})

            
        })
    }

    function banner(){
        $(function(){
            var aBtns = $(".home-div").find("ul").find("li");
            var oUl = $(".home-ul");
                var iNow = 0; //代表当前显示的图片的下标
                var timer = null;

                aBtns.click(function(){
                    iNow = $(this).index();
                    tab();
                })

                timer = setInterval(function(){
                    iNow++;
                    tab();
                }, 2000);

                //给整个轮播图添加移入和移出
                $("#play").hover(function(){
                    clearInterval(timer);
                }, function(){
                    timer = setInterval(function(){
                        iNow++;
                        tab();
                    }, 2000);
                })


                function tab(){

                    aBtns.removeClass("on").eq(iNow).addClass("on");

                    //下表为5，让下标为0的按钮显示。
                    if(iNow == aBtns.size()){
                        aBtns.eq(0).addClass("on");
                    }


                    oUl.animate({
                        top: -iNow * 421
                    }, 500, function(){
                        //动画结束，如果是下标识5，切回第0张图片
                        if(iNow == aBtns.size()){
                            iNow = 0;
                            oUl.css("top", 0);
                        }
                    })
                }
               
        
        
        })
    }
    function show3(){
        $(function(){
            $.ajax({
                type:"get",
                url:"../banner.json",
                success:function(arr){
                    var node =  $(`
                                 <ul class="home-ul">      
                                  </ul>
                          `).appendTo($("#play"));
                    for(var i = 0; i < arr.length; i++){
                        $(`<li><a href=""><img src="${arr[i].img}" alt="" /></a></li>`).appendTo(node);
                    } 
                    banner();                    
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        })
    }
    return{
        show:show,
        show2:show2,
        show3:show3,
        banner:banner
    }
})