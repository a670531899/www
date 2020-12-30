$(function () {
    $('#main-nav a').click(function () {
        $(".mega-menu:not([data-menu='" + $(this).data('menu') + "'])").each(function () {
            if ($(this).is(':visible')) {
                $(this).slideToggle(500);
            }
        });
        $(".mega-menu[data-menu='" + $(this).data('menu') + "']").slideToggle(500);
    });

    $('.close-menu').click(function () {
        $(".mega-menu:visible").slideToggle(500);
    });

    $('#responsive-menu-button').click(function () {
        $('#responsive-menu').slideToggle(500);
    });
    /*若无对应内容，则隐藏该标签*/
    var pre = document.getElementsByTagName("pre");
    for(var i=0; i<pre.length ;i++){
        if(pre[i].innerText== ""){
            pre[i].parentNode.style.display="none";
        }
    }

    var row = document.getElementsByClassName("rightbox");

    for(var j=0; j<row.length ;j++){
        if(row[j].innerText== ""){
            row[j].parentNode.style.display="none";
        }
    }


    /*过滤字符串“标签”*/
    var span = document.getElementsByTagName("span");
    for(var i=0; i<span.length ;i++){
        if(span[i].innerText== "\"标签\""){
            span[i].style.display="none";
        }
    }

});