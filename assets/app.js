$(function(){return $(".btn").on("mouseenter",function(){return $(this).addClass("is-hovered")}).on("mouseout",function(){return setTimeout(function(e){return function(){return $(e).removeClass("is-hovered")}}(this),250)}),$("[data-block='download']").on("change",function(){var e;return e=$(this).val(),$(this).prop("selectedIndex",-1),location.href=e,ga("send","event","button","click","download",e)}),$("[data-block='readme']").on("click",function(){return ga("send","event","button","click","readme")}),$("[data-block='em']").on("click",function(){return ga("send","event","button","click","Evil Martians")})}),$(function(){var e;return window.devicePixelRatio&&devicePixelRatio>=2&&(e=$("<div>",{id:"testElem",css:{border:".5px solid transparent"}}),$("body").append(e),1===e[0].offsetHeight&&$("html").addClass("hairlines"),e.remove("#testElem")),-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0?$("body").addClass("ie"):void 0}),$(function(){var e,n,t,o,i;return o="red yellow green emerald blue purple",i=o.split(" "),t=8e3,n=1,e=function(){return $("body").removeClass(o).addClass(i[n]),++n===i.length?n=0:void 0},setInterval(e,t)}),$(function(){var e,n,t;return n=$(".icons .icon"),t=$(".icons"),e=$(".icons__btn"),e.on("click",function(){var o;return o=$(this).data("size"),n.removeClass("icon--s icon--m icon--l"),n.addClass("icon--"+o),t.removeClass("icons--s icons--m icons--l"),t.addClass("icons--"+o),e.removeClass("is-active"),$(this).addClass("is-active")})}),$(window).load(function(){var e,n,t,o,i,s,r;for(e="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=858281727538787&version=v2.0",t="//platform.twitter.com/widgets.js",s=[e,t],r=[],o=0,i=s.length;i>o;o++)n=s[o],r.push($("<script>",{src:n}).appendTo("body"));return r});