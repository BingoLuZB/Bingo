$(function () {
    //首页

    var shouye = document.getElementById("shouye");
    var shouyeli = shouye.children;
    var down = document.getElementsByClassName("down");
    for(var i = 1;i<shouyeli.length;i++){
        shouyeli[i].index = i -1 ;
        shouyeli[i].onmouseover = function () {
            for(var i = 0;i<down.length;i++){
                down[i].style.display = "none";
            }
            down[this.index].style.display = "block";
        }
    }

    shouyeli[0].onmouseover = function () {
        for(var i = 0;i<down.length;i++){
            down[i].style.display = "none";
        }
    }
    bannerdown.onmouseleave = function () {
            for(var i = 0;i<down.length;i++){
                down[i].style.display = "none";
            }
    };

    //点击左右移动动画
    function slideshow(zuo,kuang,box,you) {
        var i = 0;
        // console.log(kuang.position().left)
       you.on("click",function () {
            kuang.stop();
            i = i - 1;
           if(box.last().position().left + kuang.position().left - box.width() < kuang.parent().width()){
               console.log("123321")
               i = -box.length + 3
           }
            kuang.animate({"left": i*box.width()+"px"});
           // console.log(kuang.children().last().position().left)
        });
         zuo.on("click",function () {
             kuang.stop();
             // var flag = true
             if(kuang.position().left >= 0){
                 i = 0;
             }
             else {
                 i = i + 1;
                 if( i >= box.length){
                     i = box.length
                 }
             }
             kuang.animate({"left": i*box.width()+"px"});
             if(kuang.position().left >= 0){
                 kuang.animate({"left": 0+"px"})
             }
        })
    }
    slideshow($(".L"),$(".slideshow"),$(".slide"),$(".R"));

   // 盒子升高变色
    function box(objbox) {
        objbox.on({
            mouseenter:function () {
                $(this).stop(true,true)
                        .animate(
                            {top:"-10px"

                            },300
                        )
                        .find(".more").css("background-color","#f3d633");
            },
            mouseleave:function () {
                $(this).stop(true,true)
                        .animate(
                            {top:"0"},300
                        )
                        .find(".more").css("background-color","#414143");
            }
        })
    }
    box($(".box").parent().parent());
    box($(".jianglibox"));
    box($(".point-smallbox"));
//产品
    //nav小角旋转
    $(".area").on("click",function () {
        $(this).siblings("ul").stop();
        $(this).siblings("ul").slideToggle(600);
        $son = $(this).children().eq(1);
        if($son.hasClass("zhuan")){
            $son.removeClass("zhuan")
                .addClass("yuanlai")
        }else{
            $son.removeClass("yuanlai")
                .addClass("zhuan")
        }
    });
    //页数变色
    function fontcolor() {
        $a = $(".ye").find("a");
        // console.log($a);
        $a.on("mouseenter",function () {
            $a.parent().css("backgroundColor","#414143");
            $(this).parent().css("backgroundColor","#f3d633");
        })
        //以上悬停也可用css  :hover实现
        // $a.on("click",function () {
        //     $a.css("backgroundColor","#414143");
        //     $(this).parent().css("backgroundColor","#f3d633");
        // })
        // 点击版本

    }
    fontcolor();

    //bigbox出现
    function bigbox() {
        $bigboxli = $(".bigbox").find("li");
        $smallboxli = $(".small-box").find("li");
        for(var i = 0;i<$smallboxli.length;i++){
            // console.log($smallboxli.length);
            $smallboxli[i].index = i;
            $smallboxli.eq(i).on("click",function () {
                $bigboxli.eq(this.index).show()
                    .siblings().hide();
                $smallboxli.css("border","");
                $(this).css("border","solid #ffe102 1px")
            })
        }

    }
    bigbox();


    //相关下载
    function change() {
        $li = $(".xia-title").find("li");
        $show = $(".gaibian").children();
        for(var i = 0;i<$li.length;i++){
            $li[i].index = i;
            // console.log(i);
            $li.eq(i).on("click",function () {
                $(this).css({
                    "borderBottom":"solid black 1px",
                    "margin-bottom":"-1px"
                })
                        .siblings().css("borderBottom","");
                $show.eq(this.index).show()
                        .siblings().hide();
            })
        }
    }
    change();

    //support
    function showdown(upli,downul) {
        $upli = upli.find("li");
        // console.log($upli);
        $downul = downul.find("ul");
        for(var i = 0;i<$upli.length;i++){
            $upli[i].index = i;
            $upli.eq(i).on("mouseenter click",function () {
                $(this).css({
                    "color": "#e9c24c",
                "border-bottom": "solid #e9c24c 2px"
                })
                    .siblings().css({
                    "color":"#ffffff",
                    "border-bottom":""
                });
                $downul.eq(this.index).show()
                    .siblings().hide()
            });
        }
        $(".jiangli-yulan").parent().on("click",function () {
            $(".support-zhong-box,.support-ye").hide();
            $(".bigyulan").show();
        })
        $(".back").on("click",function () {
            $(".support-zhong-box,.support-ye").show();
            $(".bigyulan").hide();
        })

    }
    showdown($(".support-up"),$(".support-down"));

    //Q&A
    function questionArrow() {
        $(".question-anniu").on("click",function () {
            if($(this).hasClass("question-zhuan")){
                $(this).removeClass("question-zhuan")
                    .addClass("question-yuanlai")
            }else{
                $(this).removeClass("question-yuanlai")
                    .addClass("question-zhuan")
            }
            $(this).parent().siblings(".answer").stop()
                .slideToggle(600);
        })
    }
    questionArrow();
});