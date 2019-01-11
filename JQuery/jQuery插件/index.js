var nowIndex = 0;
        var timer = null;
        $(".list-btn li").mouseover(function () {
            $(this).add($(".slider-panner").eq($(this).index())).addClass("active").siblings().removeClass(
                "active")
                console.log($(this).index());
                
        })

        function run() {
            timer = setInterval(function () {
                nowIndex++;
                if (nowIndex == 3) nowIndex = 0;

                $($(".list-btn li")).eq(nowIndex).triggerHandler("mouseover");
            }, 500)
        };
        $(".slider").hover(function () {
            clearInterval(timer);
        }, function () {
            run();
        })
        run();