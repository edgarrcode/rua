$(function(){$(".horizontalTabs").tabs(),$(".accordion").accordion({collapsible:!0,heightStyle:"content"}),$(".fadeIn").animate({opacity:1},500,function(){$(".btnAnimate").animate({top:"0",opacity:1},250)}),$(".slideInBT").animate({top:0,opacity:1},250),$(".mobileNavToggle").click(function(){$(".navigationBar").slideToggle("fast",function(){$(".sideBar").toggleClass("mobileNo")})}),$(".sidebearMobileToggle").click(function(){$(".sideBar").toggleClass("sbExpanded")}),$(".verticalTabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix")}),function(t){t.fn.visible=function(o,i,e){var a=t(this).eq(0),n=a.get(0),l=t(window),c=l.scrollTop(),s=c+l.height(),r=l.scrollLeft(),h=r+l.width(),f=a.offset().top,d=f+a.height(),b=a.offset().left,p=b+a.width(),u=o===!0?d:f,g=o===!0?f:d,m=o===!0?p:b,v=o===!0?b:p,T=i===!0?n.offsetWidth*n.offsetHeight:!0,e=e?e:"both";return"both"===e?!!T&&s>=g&&u>=c&&h>=v&&m>=r:"vertical"===e?!!T&&s>=g&&u>=c:"horizontal"===e?!!T&&h>=v&&m>=r:void 0}}(jQuery),$(window).scroll(function(t){$(".anWV").each(function(t,o){var o=$(o);o.visible(!0)&&o.animate({opacity:1,top:0})})}),$("tr:nth-child(2n)").addClass("even"),$(document).ready(function(){$(".backToTop").click(function(){$("html, body").animate({scrollTop:0},500)})}),$(window).scroll(function(){var t=$(window).scrollTop();t>=300?$("body").addClass("scrolled"):$("body").removeClass("scrolled")});var theScroll=$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})});