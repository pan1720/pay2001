console.log("加载成功");

require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "index":"index",
        "list":"list",
        "list1":"list1"
    },
    shim:{
        "jquery-cookie":["jquery"],
    }
})


require(["index","list","list1"],function(index,list,list1){

    index.show();
    
    list.xx();
    list.getQueryVariable();
    list.sc_num();
    list.loupe();

    list1.fd();
})