define(["jquery","jquery-cookie"],function($){
    
        function xx(){
            $(function(){
                sc_num();
                $.ajax({
                    type:"get", 
                    url:"../data/list.json",
                    success:function(arr){
                        var grade = getQueryVariable("id");
                        $(`<li id="${grade}" class="sc_btn">
                        <a><img src="https://mall.haval.com.cn/ccweb/images/second/images/gc.png" width="22" height="22">加入购物车</a>
                    </li>
                    <li>
                        <a href=""><img src="https://mall.haval.com.cn/ccweb/images/second/images/mone.png" width="22" height="22">立即购买</a>
                    </li>`).appendTo(".x_x_pint ul");
                        
                        insert(arr,grade);
                            
                    },
                    error:function(msg){
                        console.log(msg);
                    }
                })


            $("#ul").on("click", "li", function(){
				$(this).addClass("on").siblings("li").removeClass("on");
                $("#picBox").find("ul").stop().animate({left: - ($(this).index()) * 500},500).siblings("ul").hide();
               })

            


            //加入购物车事件
            $("#ul2").on("click",".sc_btn",function(){
                var id = this.id;
                //判断是否第一次添加
                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    //第一次添加
                    var arr = [{id:id,num:1}];
                    $.cookie("goods",JSON.stringify(arr),{
                        expires:7
                    })
                }else{
                    //是否之前添加过
                    var cookieStr = $.cookie("goods");
                    var cookieArr = JSON.parse(cookieStr);
                    var same = false; //假设没有添加过
                    for(var i = 0; i < cookieArr.length; i++){
                        if(cookieArr[i].id == id){
                            //添加过，数量加一
                            same = true;
                            cookieArr[i].num++;
                            break;
                        }
                    }
                    //如果没有添加过，新增一条数据
                    if(!same){
                        var obj = {id:id,num:1};
                        cookieArr.push(obj);
                    }
                    $.cookie("goods",JSON.stringify(cookieArr),{
                        expires:7
                    })
                }
                 sc_num();
            })
           
            //
        })
    }
        //放大镜

    function loupe(){
        $(function(){
            $(".cf").mouseenter(function(){
                $("#mark,#loupe").show();
            }).mouseleave(function(){
                $("#mark,#loupe").hide();
            }).mousemove(function(ev){
                var l = ev.pageX - $("#small").offset().left - 100;
                //限制出界
                if(l <= 0){
                    l = 0;
                }
                if(l >= 300){
                    l = 300;
                }
                var t = ev.pageY - $("#small").offset().top - 100;
                if(t <= 0){
                    t = 0;
                }
                if(t >= 300){
                    t = 300;
                }
                $("#mark").css({
                    left: l,
                    top: t
                })

                //右边的大图片反方向对应放大倍数移动
                $("#loupe img").css({
                    left: -2 * l,
                    top: -2 * t
                })
            })
        })
    }
       


    function insert(node,index){
        $(`<span class="j_p_black">${node[index].title}</span>`).appendTo(".j_p_title");
        $(`<span>${node[index].padspan[0]}</span>`).appendTo(".lixx_div");
        $(`<span>${node[index].padspan[1]}</span>`).appendTo(".lixx_div1");
        $(`<span>${node[index].xlspan}</span>`).appendTo(".x_x_lxleft");
        var mimg = node[index].Mimg; 
      //   alert(mimg);
        for(var i = 0; i < mimg.length; i++){
            $(`<li><img src="${mimg[i]}" alt=""></li>`).appendTo(".cf1");
        } 
        for(var i = 0; i < node[index].Dimg.length; i++){
            $(`<li id ="small"><img src="${node[index].Dimg[i]}" alt=""><div id="${node[i].did}"></div></li>
              `).appendTo(".cf")
        }
        
        for(var i = 0; i < 1; i++){
            $(`<div id ="loupe"><img src="${node[index].Dimg[0]}" alt=""></div>
              `).appendTo(".x_x_tit")
        }


        for(var i = 0; i < node[index].list.length; i++){
            $(`<dl>
                  <dd>${node[index].list[i]}</dd>
              </dl>`).appendTo(".x_x_bix"); 
        }
    }
    function getQueryVariable(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
            }
            return(false);
        }
        //计算购物车中的商品数量
        function sc_num(){
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);

                var sum = 0;
                for(var i = 0; i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                }

                $(".right #num").html(sum);
            }else{
                $(".right #num").html(sum);
            }
         }
         
    function changeCars(){ 
        $(".ttt").on("click","button",function(){
         
            var id = $(this).closest("tr").attr("id");
                //更新cookie中的数据   
                var cookieArr = JSON.parse($.cookie("goods"));
                //找出符合条件的数据的下标
                var index = cookieArr.findIndex(item => item.id == id);
                
                if(this.innerHTML == "+"){ 
                    cookieArr[index].num++;
                   
                }else{
                    cookieArr[index].num == 1 ? alert("数量已经到1了") : cookieArr[index].num--;
                }
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })

               //更改页面上的数据
               $(this).siblings("span").html(cookieArr[index].num);
                sc_num();
        })
    }


    function sc_msg(){
        $(function(){
            $.ajax({
                
                type:"get",
                url:"../data/list.json",
                success:function(arr){              
                    var cookieStr = $.cookie("goods");
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);

                        var newArr = [];
                        for(var i = 0; i < arr.length; i++){
                            for(var j = 0; j < cookieArr.length; j++){
                                if(cookieArr[j].id == arr[i].id){
                                    //说明这个数据加载购物车里了
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                    break;
                                }

                            }
                        }
                        var mmm = $(".ttt").find(".inp");
                        mmm.val();
                        var str = ``;
                        for(var i = 0; i < newArr.length; i++){                           
                            str += `
                            <tr id="${newArr[i].id}" class="item-row">
                            <td class="td1">
                            <input type="checkbox" name="checkGoods_2187" id="checkGoods_2187_41542" class="checkbox-goods"  value="41542" checked="checked">
                          </td>
                            <td class="td2">
                            <span><img src="https://img.haval.com.cn/otherimg/goods/2020/01/16/10/1579141511762_56.png"></span>
                            <span class="img_hover">${arr[i].xlspan}</span>                  
                        </td>
                        <td class="td3">${arr[i].xhao}</td>
                        <td class="td4">${arr[i].padspan[1]}</td>
                        <td class="td5 tdbtn">
                                <div class="amount">
                                    <button class="reduce" style="color:#ccc;">-</button>
                                    <span type="text"  class="inp" >${arr[i].num}</span>
                                    <button href="" class="add" >+</button>
                                </div>
                        </td>
                        <td class="td6" style="color: #d7000f;"></td>
                        
                        <td class="td7" >
                            <span id="money">${newArr[i].padspan[0]*arr[i].num}元</span>   
                        </td>
                        <td class="td9">
                            <a style="display:inline-block" class="icon-Delete" href=""><i class="iconfont">&#xe636;</i></a>
                        </td>
                        </tr>`;
                        sc_num();
                        }
                        $(".ttt").html(str);
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        })
        
    }

    function remove(){
        $(".ttt").on("click",".iconfont",function(){
             //清空购物车的数据  1、清空cookie中的这个值  2、清空页面的节点
             var id = $(this).closest("tr").remove().attr("id");
             // alert(id);
             var cookieArr = JSON.parse($.cookie("goods"));
             for(var i = 0; i < cookieArr.length; i++){
                 if(cookieArr[i].id == id){
                     cookieArr.splice(i, 1);
                     break;
                 }
             }
             //判断数组是否为空
             if(!cookieArr.length){
                 $.cookie("goods", null);
             }else{
                 $.cookie("goods", JSON.stringify(cookieArr), {
                     expires: 7
                 })
             }

             //更新购物车商品数量
             sc_num();
        })
    }
    return{
        xx:xx,
        getQueryVariable:getQueryVariable,
        sc_num:sc_num,
        sc_msg:sc_msg,
        changeCars:changeCars,
        remove:remove,
        loupe:loupe
    }
})