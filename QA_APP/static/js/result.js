/*https://dribbble.com/shots/2434240-Daily-Design-049-Google-Search-Page-Redesign-Concept-Part-2*/
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

    //实现加载更多的功能
    // var showMoreNChildren = function ($children, n) {
    //     //显示某jquery元素下的前n个隐藏的子元素
    //     var $hiddenChildren = $children.filter(":hidden");
    //     var cnt = $hiddenChildren.length;
    //     for (var i = 0; i < n && i < cnt ; i++) {
    //       $hiddenChildren.eq(i).show();
    //     }
    //     return cnt - n;//返回还剩余的隐藏子元素的数量
    // }
    //
    // jQuery.showMore = function (selector) {
    //     if (selector == undefined) { selector = ".showMoreNChildren" }
    //     //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
    //     $(selector).each(function () {
    //       var pagesize = $(this).attr("pagesize") || 10;
    //       var $children = $(this).children();
    //       if ($children.length > pagesize) {
    //         for (var i = pagesize; i < $children.length; i++) {
    //           $children.eq(i).hide();
    //         }
    //
    //         $("<button class='btn showMorehandle btn-success btn-more'>加载更多</button>").insertAfter($(this)).click(function () {
    //           if (showMoreNChildren($children, pagesize) <= 0) {
    //             //如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
    //             $(this).hide();
    //           };
    //         });
    //       }
    //     });
    // }
    // //调用显示更多插件。参数是标准的 jquery 选择符
    // $.showMore(".showMoreNChildren");


    /*右侧知识卡片显示更多*/
    function show(box) {
       // var box = document.getElementById("box");
        var text = box.innerHTML;
        var newBox = document.createElement("div");
        var btn = document.createElement("p");
        newBox.innerHTML = text.substring(0, 365);
        btn.innerHTML = text.length > 365 ? "显示全部" : "";
        btn.href = "###";
        btn.style="font-size: 14px;color: #AAAAAA;";
        btn.onclick = function () {
            if (btn.innerHTML == "显示全部") {
                btn.innerHTML = "收起";
                newBox.innerHTML = text;
            } else {
                btn.innerHTML = "显示全部";
                newBox.innerHTML = text.substring(0, 365);
            }
            return false;
        }
        box.innerHTML = "";
        box.appendChild(newBox);
        box.appendChild(btn);
    }
    var divs = document.getElementsByTagName('div')
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].className == 'box') show(divs[i]);
    }
});
