console.log("加载成功");

require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "index":"index",
        "index1":"index1",
        "list":"list"
    },
    shim:{
        "jquery-cookie":["jquery"],

    }
})



require(["index","index1","list"],function(index,index1,list){

    index.show();
    index.show2();
    index.show3();
    index.banner();

    index1.cot();
    index1.car();
    index1.car1();
    index1.car2();
    index1.appraise();

    list.sc_num();
})