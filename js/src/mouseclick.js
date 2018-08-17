/* 鼠标特效 */
var a_idx = 0;
var rgbM = "green";
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("瓦富强", "瓦民主", "瓦文明", "瓦和谐", "瓦自由", "瓦平等", "瓦公正" ,"瓦法治", "瓦爱国", "瓦敬业", "瓦诚信", "瓦友善");
        var rgbM='#'+Math.floor(Math.random()*0xffffff).toString(16);
		var $i = $("<span />").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": rgbM
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});