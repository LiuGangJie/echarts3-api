var charts=[];$(document).ready(function(){var a=$("#left-chart-nav ul"),t=location.pathname.match(/demo.html/);for(var e in CHART_TYPES)a.append($("<li>").append('<a class="left-chart-nav-link" id="left-chart-nav-'+e+'" href="'+(t?"examples.html":"")+"#chart-type-"+e+'"><div class="chart-icon"></div><div class="chart-name">'+CHART_TYPES[e]+"</div></a>"));$(".chart-area").height($(".chart-area").width()/5*4);var r=null,l=null;$(window).scroll(function(){var a=-$(".chart-list-panel")[0].getBoundingClientRect().top,t=parseInt($("#chart-type-scatter h3").css("margin-top"),10);if(!r){var e=$(".chart-list-panel").children(),h=0;r=[];for(var i=0;i<e.length;++i)h+=$($(".chart-list-panel").children()[i]).height()+t,r.push({height:h,id:$($(".chart-list-panel").children()[i]).attr("id").slice("chart-type-".length)})}for(var i=0;i<r.length;++i)if(r[i].height>a){l!==r[i].id&&($("#left-chart-nav li").removeClass("active"),$("#left-chart-nav-"+r[i].id).parent().addClass("active"),l=r[i].id);break}})});