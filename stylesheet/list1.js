define(["jquery","jquery-cookie"],function($){

    //全选按钮 和 单选按钮的点击实现
    function fd(){
        $("#topCheckAll").click(function(){
            var allChecks = $(".ttt").find(".item-row").find(".td1 input");
            
            isCheckAll();
            return false;
        })

          //给每一个商品的复选框设置

          $("#J_cartListBody .J_cartGoods").on("click", ".col-check i", function(){
            if($(this).hasClass("icon-checkbox-selected")){
                $(this).removeClass("icon-checkbox-selected");
            }else{
                $(this).addClass("icon-checkbox-selected");
            }
            isCheckAll();
            return false;
        })
    }


      //判断是否都被选中
    function isCheckAll(){
        var allChecks = $(".list-body").find(".item-row");
        
        var isAll = true;
        var total = 0; 
        var count = 0;//记录被选中的数量
        var totalCount = 0; //记录总数
        allChecks.each(function(index, item){
           
            if(!$(item).find(".col-check i").hasClass("icon-checkbox-selected")){
                isAll = false;
            }else{
                total += parseFloat($(item).find(".col-price").html().trim()) * parseFloat($(item).find(".col-num input").val());
                count += parseInt($(item).find(".col-num input").val());
            }
            totalCount += parseInt($(item).find(".col-num input").val());
        });
        //设置总价
        $("#J_cartTotalPrice").html(total);
        $("#J_selTotalNum").html(count);
        $("#J_cartTotalNum").html(totalCount);

        //判断是否全选
        if(isAll){
            $(".list-head .col-check").find("i").addClass("icon-checkbox-selected");
        }else{
            $(".list-head .col-check").find("i").removeClass("icon-checkbox-selected");
        }
        
    }

    return {
        fd:fd
    }
})