console.log("加载成功");

require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "index":"index",
        "list":"list"
    },
    shim:{
        "jquery-cookie":["jquery"],
    }
})


require(["index","list"],function(index,list){

    index.show();
    list.sc_num();
    list. changeCars();
    list.sc_msg();
    list.remove();

})