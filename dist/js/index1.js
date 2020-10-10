define(["jquery","jquery-cookie"],function($){
    function cot(){
        $.ajax({
            type:"get",
            url:"../data/cot.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                  
                    var node = $(`<li class="${arr[i].class}"><a href=""><img src="${arr[i].img}" alt=""></a></li>`);
                    node.appendTo(".cot-activity");
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
        $(".cot-activity").on("mouseenter",".ad-item",function(){
            $(this).addClass("ac-on").siblings(".ad-item").removeClass("ac-on");

        })
        $(".cot-activity").on("mouseleave",function(){
              $(".cot-activity").find(".ad-item").removeClass("ac-on");
        })
    }

    function car(){
        $.ajax({
            type:"get",
            url:"../data/car.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                   if(arr[i].a){
                       $(`  
                 <li class="${arr[i].class}">
                    <div class="${arr[i].title[0]}">
                        <a href="">
                            <img src="${arr[i].img}" alt="">
                        </a>
                    </div>
                    <div class="${arr[i].title[1]}">
                        <div class="dtext-name"><span>${arr[i].dvalue[0]}</span></div>
                        <div class="dtext-name1">${arr[i].dvalue[1]}</div>
                        <div class="dtext-name2">${arr[i].dvalue[2]}</div>
                        <div class="dtext-name3">
                            <a href="" id="a1">${arr[i].a[0]}</a>
                            <a href="" id="a2">${arr[i].a[1]}</a>
                            <a href="" id="a3">${arr[i].a[2]}</a>
                            <a href="" id="a4">${arr[i].a[3]}</a>
                        </div>
                       
                    </div>
            </li>`).appendTo(".ad-list");
                   }else{
                       $(`<li class="${arr[i].class}">
                       <div class="${arr[i].title[0]}">
                           <a href="">
                               <img src="${arr[i].img}" alt="">
                               <ul>
                                    <li>${arr[i].dvalue[0]}</li>
                                    <div>${arr[i].dvalue[1]}</div>
                               </ul>
                           </a>
                       </div>
                       </li>`).appendTo(".ad-list");
                   }
                 
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function car1(){
        $.ajax({
            type:"get",
            url:"../data/car1.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                   if(arr[i].a){
                       $(`  
                 <li class="${arr[i].class}">
                    <div class="${arr[i].title[0]}">
                        <a href="">
                            <img src="${arr[i].img}" alt="">
                        </a>
                    </div>
                    <div class="${arr[i].title[1]}">
                        <div class="dtext-name"><span>${arr[i].dvalue[0]}</span></div>
                        <div class="dtext-name1">${arr[i].dvalue[1]}</div>
                        <div class="dtext-name2">${arr[i].dvalue[2]}</div>
                        <div class="dtext-name3">
                            <a href="" id="a1">${arr[i].a[0]}</a>
                            <a href="" id="a2">${arr[i].a[1]}</a>
                            <a href="" id="a3">${arr[i].a[2]}</a>
                            <a href="" id="a4">${arr[i].a[3]}</a>
                        </div>
                       
                    </div>
            </li>`).appendTo(".ad-list1");
                   }else{
                       $(`<li class="${arr[i].class}">
                       <div class="${arr[i].title[0]}">
                           <a href="">
                               <img src="${arr[i].img}" alt="">
                               <ul>
                                    <li>${arr[i].dvalue[0]}</li>
                                    <div>${arr[i].dvalue[1]}</div>
                               </ul>
                           </a>
                       </div>
                       </li>`).appendTo(".ad-list1");
                   }
                 
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
        $(".car-rightul").on("mouseenter", "li", function(){
            $(".ad-list").hide().eq($(this).index()).show();
        })

        $(".carli1").hover(function(){
            $(".ad-list1").css("display","block");
        },function(){
            $(".ad-list1").css("display","none");
            $(".ad-list").hide().eq(0).show();
        })
    }

    function car2(){
        $.ajax({
            type:"get",
            url:"../data/car2.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                   if(arr[i].title[1] == "dtext"){
                       $(`  
                 <li class="${arr[i].class}">
                    <div class="${arr[i].title[0]}">
                        <a href="">
                            <img src="${arr[i].img}" alt="">
                        </a>
                    </div>
                    <div class="${arr[i].title[1]}">
                        <div class="dtext-name"><span>${arr[i].dvalue[0]}</span></div>
                        <div class="dtext-name1">${arr[i].dvalue[1]}</div>
                        <div class="dtext-name2">${arr[i].dvalue[2]}</div>   
                    </div>
            </li>`).appendTo(".apply-list");
                   }else{
                       $(`<li class="${arr[i].class}">
                       <div class="${arr[i].title[0]}">
                           <a href="">
                               <img src="${arr[i].img}" alt="">
                               <ul>
                                    <li>${arr[i].dvalue[0]}</li>
                                    <div>${arr[i].dvalue[1]}</div>
                               </ul>
                           </a>
                       </div>
                       </li>`).appendTo(".apply-list");
                   }
                 
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })

    }
    function appraise(){
        $.ajax({
            type:"get",
            url:"../data/appraise.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                       $(`  
                       <li class = "${arr[i].class}">
                       <div class="${arr[i].title[0]}"><img src="${arr[i].img}" alt=""></div>
                       <div class="${arr[i].title[1]}">
                           <div class="${arr[i].dclass[0]}"><span>${arr[i].dvlue[0]}</span></div>
                           <div class="${arr[i].dclass[1]}">${arr[i].dvlue[1]}</div>
                           <div class="${arr[i].dclass[2]}">${arr[i].dvlue[2]}</div>
                           <div class="${arr[i].dclass[3]}"><span>${arr[i].dvlue[3]}</span></div>
                       </div>
                       <img src="${arr[i].title[2]}" alt="">
               </li>`).appendTo(".appraise-list");
              
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    return{
        cot:cot,
        car:car,
        car1:car1,
        car2:car2,
        appraise:appraise
    }
})