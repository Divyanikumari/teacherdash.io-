"use strict";
jQuery(window).on("load", function() {

    /* COUNTER */
    jQuery(".tu-menu").on("click",function(){
      this.classList.toggle('opened');
      this.setAttribute('aria-expanded', this.classList.contains('opened'))
    })
    // onclick=""
    try {
      var _tu_statistics = jQuery('#tu-counter');
      _tu_statistics.appear(function () {
          var _tu_statistics = jQuery('.tu-stats li h4 span');
          _tu_statistics.countTo({
              formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
              }
          });
      });
    } catch (err) {}
    //  Instructor Slider
    var tu_instructorslider = document.getElementById('tu-instructorslider')
    if(tu_instructorslider !== null){
      var splideslider = new Splide( '#tu-instructorslider', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        gap: 24,
        pagination: true,
        arrows: false,
        breakpoints: {
          1400: {
            perPage: 3,
          },
          991: {
            perPage: 2,
          },
          767: {
            perPage: 1,
          }
        }
      } );
      splideslider.mount();
    }
    //  Instructor Slider
    var tu_categoriesslider = document.getElementById('tu-categoriesslider')
    if(tu_categoriesslider !== null){
      var splideslider = new Splide( '#tu-categoriesslider', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        gap: 24,
        pagination: true,
        arrows: false,
        breakpoints: {
          1199: {
            perPage: 3,
          },
          991: {
            perPage: 2,
          },
          575: {
            perPage: 1,
          }
        }
      } );
      splideslider.mount();
    }
    //  Instructor Slider
    var tu_sucesstorslider = document.getElementById('tu-sucesstorslider')
    if(tu_sucesstorslider !== null){
      var splideslider = new Splide( '#tu-sucesstorslider', {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        gap: 100,
        autoplay: true,
        interval: 3000,
        pagination: false,
        arrows: true,
        breakpoints: {
          1199: {
            pagination: true,
            arrows: false,
          }
        }
      } );
      splideslider.mount();
    }
    //  Instructor Slider
    //  Feature Slider
    var tu_featurelist = document.getElementById('tu-featurelist')
    if(tu_featurelist !== null){
      var splideslider = new Splide( '#tu-featurelist', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        gap: 24,
        pagination: true,
        arrows: false,
        breakpoints: {
          1400: {
            perPage: 3,
          },
          991: {
            perPage: 2,
          },
          767 : {
            perPage: 1,
          }
        }
      } );
      splideslider.mount();
    }
    //  Feature Slider
    var tu_sucesstorieslider = document.getElementById('tu-sucesstorieslider')
    if(tu_sucesstorieslider !== null){
      var splideslider = new Splide( '#tu-sucesstorieslider', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        gap: 24,
        pagination: false,
        arrows: true,
        breakpoints: {
          1399: {
            perPage: 2,
            pagination: true,
            arrows: false,
          },
          991: {
            perPage: 1,
            pagination: true,
            arrows: false,
          },
        }
      } );
      splideslider.mount();
    }
  // Service detail sync slider
  jQuery(window).on("resize", function () {
    var tu_splide = document.getElementById('tu_splide_one')
    if (tu_splide !== null) {
      var secondarySlider = new Splide( '#tusyncthumbnail_one', {
        type       : 'loop',
        rewind      : true,
        fixedWidth  : 50,
        fixedHeight : 50,
        isNavigation: true,
        gap         : 10,
        pagination  : false,
        arrows     : false,
        focus  : 'center',
        updateOnMove: true,
        
      } ).mount();
      var primarySlider = new Splide( '#tu_splide_one', {
        type       : 'fade',
        pagination : false,
        cover      : true,
        arrows     : false,
      } )
      primarySlider.sync( secondarySlider ).mount(); 
    }
    var tu_splide = document.getElementById('tu_splide_two')
    if (tu_splide !== null) {
      var secondarySlider = new Splide( '#tusyncthumbnail_two', {
        type       : 'loop',
        rewind      : true,
        fixedWidth  : 50,
        fixedHeight : 50,
        isNavigation: true,
        gap         : 10,
        pagination  : false,
        arrows     : false,
        focus  : 'center',
        updateOnMove: true,
        
      } ).mount();
      var primarySlider = new Splide( '#tu_splide_two', {
        type       : 'fade',
        pagination : false,
        cover      : true,
        arrows     : false,
      } )
      primarySlider.sync( secondarySlider ).mount(); 
    }    
    var tu_splide = document.getElementById('tu_splide_three')
      if (tu_splide !== null) {
        var secondarySlider = new Splide( '#tusyncthumbnail_three', {
          type       : 'loop',
          rewind      : true,
          fixedWidth  : 50,
          fixedHeight : 50,
          isNavigation: true,
          gap         : 10,
          pagination  : false,
          arrows     : false,
          focus  : 'center',
          updateOnMove: true,
          
        } ).mount();
        var primarySlider = new Splide( '#tu_splide_three', {
          type       : 'fade',
          pagination : false,
          cover      : true,
          arrows     : false,
        } )
        primarySlider.sync( secondarySlider ).mount(); 
      }    
      var tu_splide = document.getElementById('tu_splide_four')
      if (tu_splide !== null) {
        var secondarySlider = new Splide( '#tusyncthumbnail_four', {
          type       : 'loop',
          rewind      : true,
          fixedWidth  : 50,
          fixedHeight : 50,
          isNavigation: true,
          gap         : 10,
          pagination  : false,
          arrows     : false,
          focus  : 'center',
          updateOnMove: true,
          
        } ).mount();
        var primarySlider = new Splide( '#tu_splide_four', {
          type       : 'fade',
          pagination : false,
          cover      : true,
          arrows     : false,
        } )
        primarySlider.sync( secondarySlider ).mount(); 
      }    
      var tu_splide = document.getElementById('tu_splide_five')
      if (tu_splide !== null) {
        var secondarySlider = new Splide( '#tusyncthumbnail_five', {
          type       : 'loop',
          rewind      : true,
          fixedWidth  : 50,
          fixedHeight : 50,
          isNavigation: true,
          gap         : 10,
          pagination  : false,
          arrows     : false,
          focus  : 'center',
          updateOnMove: true,
          
        } ).mount();
        var primarySlider = new Splide( '#tu_splide_five', {
          type       : 'fade',
          pagination : false,
          cover      : true,
          arrows     : false,
        } )
        primarySlider.sync( secondarySlider ).mount(); 
      }    
  }).trigger("resize");
  // JRATE STARS
  var jrate1 = document.getElementById('tu-addreview')
  if (jrate1 !== null) {
    jQuery(function () {
      var that = this;
      var toolitup = $("#tu-addreview").jRate({
          rating: 4.0,
          strokeColor: '#DDDDDD',
          precision: 1,
          startColor: "#EAB308",
          endColor: "#EAB308",
          backgroundColor: '#DDDDDD',
          minSelected: 1,
          shapeGap: '6px',
          count: 5,
          width: 22,
          height: 22,
          onChange: function(rating) {
              jQuery('.counter').text(rating + '');
          },
          onSet: function(rating) {
              console.log("OnSet: Rating: "+rating);
          }
      });
    });
  }
  // Loade More
  let classes = [
    '.tu-categorieslist',
    '.tu-commenteditem',
    '.tu-filterselect li',
    '.tu-commentarea'
  ];
  for ( let i = 0; i < classes.length; ++i) {
    if (classes[i].length <= 3) {
      jQuery(".tu-show_more").hide();
    } 
    else if (classes[i].length >= 3) {
      jQuery(".tu-show_more").show();
      jQuery(".tu-categorieslist li:nth-child(n+7)").hide();
      jQuery(".tu-collapseitem .tu-commenteditem:nth-child(n+6)").hide();
      jQuery(".tu-filterselect li:nth-child(n+7)").hide();
      jQuery(".tu-commentarea .tu-commentlist:nth-child(n+5)").hide();
    }
  }
  jQuery(".tu-show_more").on("click", function() {
    jQuery(this).text($(this).text() === "Show less" ? "Show all" : "Show less");
    jQuery(this).closest(".tu-asideitem").find(".tu-categorieslist li:nth-child(n+7)").slideToggle();
    jQuery(this).closest(".tu-asideitem").find(".tu-collapseitem .tu-commenteditem:nth-child(n+6)").slideToggle();
    jQuery(this).closest(".tu-aside-content").find(".tu-filterselect li:nth-child(n+7)").slideToggle();
    jQuery(this).closest(".tu-tabswrapper").find(".tu-commentarea .tu-commentlist:nth-child(n+5)").slideToggle();
    jQuery(this).closest(".tu-boxlg").find(".tu-commentarea .tu-commentlist:nth-child(n+5)").slideToggle();
  });
  // select2
  jQuery(".tu-selectv").select2({
    width: '165' ,
    minimumResultsForSearch: Infinity
  });
  var config = {
    '#selectv1'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv2'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv3'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv4'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv5'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv6'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv10'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv7'  : {allowClear: true},
    '#selectv8'  : {allowClear: true},
    '#selectv9'  : {allowClear: true},
    '#selectv10'  : {allowClear: true},
    '#selectv11'  : {allowClear: true},
    '#tu-selectv5'  : {allowClear: true},
    '#selectv55'  : {allowClear: true, minimumResultsForSearch: Infinity},
    '#selectv56'  : {allowClear: true, minimumResultsForSearch: Infinity},
  }
  jQuery('[data-placeholderinput]').each(function(item){
    var data_placeholder = jQuery('[data-placeholderinput]')[item]
    var tu_id = jQuery(data_placeholder).attr('id')
    var tu_placeholder = jQuery(data_placeholder).attr('data-placeholderinput')
    jQuery('#'+tu_id).on('select2:open', function(e) {
      //jQuery('input.select2-search__field').prop('placeholder', tu_placeholder);
    });
  });
  for (var selector in config) {
    jQuery(selector).select2(config[selector]);
  }
  jQuery('select').on('select2:open', function (e) {
    jQuery('.select2-results__options').mCustomScrollbar('destroy');
    setTimeout(function () {
      jQuery('.select2-results__options').mCustomScrollbar();
    }, 0);
  });
  // range mater collapse
  jQuery(".tu-rangevalue").on("click",function() {
    jQuery("#tu-rangecollapse").collapse("show");
  });
   // RangeSlider
   var softSlider = document.getElementById("tu-rangeslidertwo");
   if (softSlider !== null) {
     noUiSlider.create(softSlider, {
       start: 256,
       connect: "lower",
       range: {
         min: 0,
         max: 500,
       },
       format: wNumb({
         decimals: 0,
       }),
     });
     var slider1Value = document.getElementById("slider1-span");
 
     softSlider.noUiSlider.on("update", function(values, handle) {
       slider1Value.innerHTML = values[handle];
     });
   }
 
   var stepsSlider = document.getElementById("tu-rangeslider");
   if (stepsSlider !== null) {
     var input0 = document.getElementById("tu-min-value");
     var input1 = document.getElementById("tu-max-value");
     var inputs = [input0, input1];
 
     noUiSlider.create(stepsSlider, {
       start: [200, 400],
       connect: true,
       range: {
         min: 0,
         max: 600,
       },
       format: {
         to: (v) => parseFloat(v).toFixed(0),
         from: (v) => parseFloat(v).toFixed(0),
         suffix: " (US $)",
       },
     });
     stepsSlider.noUiSlider.on("update", function(values, handle) {
       inputs[handle].value = values[handle];
     });
     inputs.forEach(function(input, handle) {
       input.addEventListener("change", function() {
         stepsSlider.noUiSlider.setHandle(handle, this.value);
       });
       input.addEventListener("keydown", function(e) {
         var values = stepsSlider.noUiSlider.get();
         var value = Number(values[handle]);
         var steps = stepsSlider.noUiSlider.steps();
         var step = steps[handle];
         var position;
         switch (e.which) {
           case 13:
             stepsSlider.noUiSlider.setHandle(handle, this.value);
             break;
           case 38:
             position = step[1];
             if (position === false) {
               position = 1;
             }
             if (position !== null) {
               stepsSlider.noUiSlider.setHandle(handle, value + position);
             }
           break;
           case 40:
             position = step[0];
             if (position === false) {
               position = 1;
             }
             if (position !== null) {
               stepsSlider.noUiSlider.setHandle(handle, value - position);
             }
           break;
         }
       });
     });
   }
  //  liked 
   jQuery(".tu-iconheart,.tu-linkheart").on("click", function() {
    jQuery(this).children("i.icon-heart").addClass("tu-colorred");
    jQuery(this).children("span").text("Saved");
  });
  // remove
  jQuery(".tu-searchtags li span a, .tu-labels li span a").on("click", function() {
    jQuery(this).closest("li").remove();
  })
  // Particles
  var particle = document.getElementById("tu-particle");
    if (particle !== null) {
      particlesJS("tu-particle", {
      particles: {
      number: {
        value: 10,
      },
      color: {
        value: ["#1DA1F2","#22C55E","#F97316"],
      },
      "opacity": {
        "random": true,
      },
      line_linked: {
        enable: false,
      },
      size: {
        value: 12,
        random: true,
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "auto",
      },
      },
    });
  }
  // particals
  var tu_particle = document.getElementById("tu-particlev2");
    if (tu_particle !== null) {
    // particles.js config 
    particlesJS("tu-particlev2", {
      "particles": {
        "number": {
          "value": 40,
        },
        "color": {
          "value": "#ffffff"
        },
        "opacity": {
          "value": 0.4,
          "random": false,
          
        },
        size: {
          value: 12,
          random: true,
        },
        "line_linked": {
          "enable": false,
        },
        "move": {
          "enable": true,
          "speed": 3,
        }
      },
      "interactivity": {
        "enable": false,
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
        },
      },
    });
  }
  // Service detail sync slider
  jQuery(window).on("resize", function () {
    var tu_splide = document.getElementById('tu_splide')
    if (tu_splide !== null) {
      var secondarySlider = new Splide( '#tu_splidev2', {
        gap: 10,
        // type: "loop",
        arrows: true,
        rewind: false,
        drag: false,
        focus: "center",
        fixedWidth: 100,
        fixedHeight: 100,
        isNavigation: true, 
        pagination: false,
        updateOnMove: true,
        cover      : true,
        breakpoints: {
          1400 : {
            fixedWidth: 96,
            fixedHeight: 96,
          },
          1199 : {
            fixedWidth: 66,
            fixedHeight: 66,
          }
        }
      } ).mount();
      var primarySlider = new Splide( '#tu_splide', {
        type       : "fade",
        pagination : false,
        cover      : true,
        arrows: false,
        breakpoints: {
          767 : {
            pagination : true,
          },
        }
      } )
      primarySlider.sync( secondarySlider ).mount(); 
    }
  }).trigger("resize"); 
  // VenoBox Video Popup
  let venobox = document.querySelector(".tu-themegallery");
  if (venobox !== null) {
    jQuery(".tu-themegallery").venobox({
      spinner : 'cube-grid',
      
    });
  }
  // lite picker
  var pickers = document.querySelectorAll(".tu-datepicker");
  jQuery(pickers).each(function(index) {
    var picker = new Litepicker({
      element: pickers[index],
      singleMode: false,
      start: new Date(),
      maxDate: new Date(),
      tooltipText: {
        one: "night",
        other: "nights",
      },
      tooltipNumber: (totalDays) => {
        return totalDays - 1;
      },
    });
  });
  //toggle two classes on mobile menu
  jQuery(".tu-dbmenu").on("click", function() {
    jQuery(".tu-asidewrapper").toggleClass("tu-opendbmenu");
  });
  //
  jQuery("#selectv5").on("change", function() {
      var data = $(this).val();
      var arr = [];
      //console.log(data);
      var i=0
      $.each(data, function( index, value ) {
        arr[i++] = '<li><span>'+value+' <a href=javascript:void(0);"><i class="icon icon-x"></i></a></span></li>';
      });
      var res= arr.join('<br>');
      $(".tu-labels-lang").html(res);
      //console.log(arr);
  });
  //for teacher clas
  jQuery("#selectv55").on("change", function() {
      var data = $(this).val();
      //console.log(data);
       var path = document.location.href;
       var pathplus = path+''+'?teacherajax=1&catid='+data+'';
      // alert(pathplus);
       $.ajax({
              type: 'POST',
              url: ''+pathplus+'',
              dataType: 'json',
              success: function (r) {
                  //arr += "<option value =null>--Select Courses--</option>";
                   var i=0;
                   var arr = [];
                   $.each(r, function( index, value){
                    arr[i++] = '<li><span>'+value+' <a href=javascript:void(0);"><i class="icon icon-x"></i></a></span></li>';
                     
                   });
                   var repo = arr.join('<br>');
                   //$("#selectv56").find("option").remove();
                   $(".tu-labels-selectv55").html(repo); 
              }
       });

  });
  //for teacher sub
  jQuery("#selectv56").on("change", function() {
      var data = $(this).val();
      //console.log(data);
       var path = document.location.href;
       var pathplus = path+''+'?teacherajax=1&subid='+data+'';
      // alert(pathplus);
       $.ajax({
              type: 'POST',
              url: ''+pathplus+'',
              dataType: 'json',
              success: function (r) {
                  //arr += "<option value =null>--Select Courses--</option>";
                   var i=0;
                   var arr = [];
                   $.each(r, function( index, value){
                    arr[i++] = '<li><span>'+value+' <a href=javascript:void(0);"><i class="icon icon-x"></i></a></span></li>';
                     
                   });
                   var repo = arr.join('<br>');
                   //$("#selectv56").find("option").remove();
                   $(".tu-labels-selectv56").html(repo); 
              }
       });

  });
  //
  // tippy start
  const tu_verifed = document.getElementById("tu-verifed");
  if (tu_verifed !== null) {
    tippy('[data-tippy-html="#tu-verifed"]', {
      content: tu_verifed.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }
  
  const tu_industrypro = document.getElementById("tu-industrypro");
  if (tu_industrypro !== null) {
    tippy('[data-tippy-html="#tu-industrypro"]', {
      content: tu_industrypro.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }
   // RESPONSIVE
  function responsive(){
    var width = jQuery('body').width();
    if (width > 1200){
      jQuery(".menu-item-has-children,.sub-menu .menu-item-has-children").hover(function() {
        var isHovered = jQuery(this).is(":hover");
        if (isHovered) {
          jQuery(this).children("ul").stop().slideDown(450);
        } else {
          jQuery(this).children("ul").stop().slideUp(400);
        }
      });
    }
  }
  responsive()
  jQuery(window).resize(function() {
  responsive()
  });
  function collapseMenu(){
    jQuery('.menu-item-has-children > a,.menu-item-has-children strong').on('click', function() {
      jQuery(this).parent('li').toggleClass('tu-open-menu');
      jQuery(this).next().slideToggle(300);
    });
  }
  collapseMenu();
   // typing animated styling
   let lo_typethree = document.querySelector(".type")
   if( lo_typethree !== null){
     var typed = new Typed(".type", {
       strings:["A bright future", "Equitable societies", "Self confidence"],
       typeSpeed: 100,
       backSpeed:100,
       loop: true,
       showCursor: false,
     });
   };
   jQuery(".tu-pagination > ul").on('click', 'li',function () {
    $('.tu-pagination > ul  li.active').removeClass('active');
    $(this).addClass('active');
    });
});

/* PRELOADER*/
jQuery(window).on("load",function () { 
  jQuery(".tu-preloader").delay(700).fadeOut();
  jQuery(".tu-preloader_holder").delay(500).fadeOut("slow");
})

// calendar script
$(document).ready(function () {
  function c(passed_month, passed_year, calNum) {
      var calendar = calNum == 0 ? calendars.cal1 : calendars.cal2;
      makeWeek(calendar.weekline);
      calendar.datesBody.empty();
      var calMonthArray = makeMonthArray(passed_month, passed_year);
      var r = 0;
      var u = false;
      while (!u) {
          if (daysArray[r] == calMonthArray[0].weekday) {
              u = true
          } else {
              calendar.datesBody.append('<div class="blank"></div>');
              r++;
          }
      }
      for (var cell = 0; cell < 42 - r; cell++) { // 42 date-cells in calendar
          if (cell >= calMonthArray.length) {
              calendar.datesBody.append('<div class="blank"></div>');
          } else {
              var shownDate = calMonthArray[cell].day;
              var iter_date = new Date(passed_year, passed_month, shownDate);
              if (
              (
              (shownDate != today.getDate() && passed_month == today.getMonth()) || passed_month != today.getMonth()) && iter_date < today) {
                  var m = '<div class="past-date">';
              } else {
                  var m = checkToday(iter_date) ? '<div class="today">' : "<div class='futuredays "+shownDate+"'>";
              }
              calendar.datesBody.append(m + shownDate + "</div>");
          }
      }

      var color = "#444444";
      calendar.calHeader.find("h2").text(i[passed_month] + " " + passed_year);
      calendar.weekline.find("div").css("color", color);
      calendar.datesBody.find(".today").css("color", "#00bdaa");

      // find elements (dates) to be clicked on each time
      // the calendar is generated
      var clicked = false;
      selectDates(selected);

      clickedElement = calendar.datesBody.find('div');
      clickedElement.on("click", function () {
          clicked = $(this).text();
          //alert(clicked);
         
          var whichCalendar = calendar.name;
          var selecteddate_pop = getClickedInfo(clicked, calendar);
          var teacherinfoid = $(".teacherinfoid").val();
          $.ajax({
               url: 'ajax.php?action='+teacherinfoid+'',
               type: 'post',
               data: {selecteddate_pop},
               success: function (r) { 
                    // Add response in Modal body
                    // $('#eventpoptitle').html(r.title);

                    // $('#eventpop').html(r.content);

                    // // Display Modal
                    // $('#myModal').modal('show'); 
                  $('.today').removeClass();
                   $('.'+clicked+'').addClass('today');
                 
                  $('.available-space').html(r.content);
                  $('.available_date_date').html(r.title);
               }
         });  
          if (firstClick && secondClick) {
              thirdClicked = getClickedInfo(clicked, calendar);
              var firstClickDateObj = new Date(firstClicked.year,
              firstClicked.month,
              firstClicked.date);
              var secondClickDateObj = new Date(secondClicked.year,
              secondClicked.month,
              secondClicked.date);
              var thirdClickDateObj = new Date(thirdClicked.year,
              thirdClicked.month,
              thirdClicked.date);
              if (secondClickDateObj > thirdClickDateObj && thirdClickDateObj > firstClickDateObj) {
                  secondClicked = thirdClicked;
                  // then choose dates again from the start :)
                  bothCals.find(".calendar_content").find("div").each(function () {
                      $(this).removeClass("selected");
                  });
                  selected = {};
                  selected[firstClicked.year] = {};
                  selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
                  selected = addChosenDates(firstClicked, secondClicked, selected);
              } else { // reset clicks
                  selected = {};
                  firstClicked = [];
                  secondClicked = [];
                  firstClick = false;
                  secondClick = false;
                  bothCals.find(".calendar_content").find("div").each(function () {
                      $(this).removeClass("selected");
                  });
              }
          }
          if (!firstClick) {
              firstClick = true;
              firstClicked = getClickedInfo(clicked, calendar);
              selected[firstClicked.year] = {};
              selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
          } else {
              secondClick = true;
              secondClicked = getClickedInfo(clicked, calendar);

              // what if second clicked date is before the first clicked?
              var firstClickDateObj = new Date(firstClicked.year,
              firstClicked.month,
              firstClicked.date);
              var secondClickDateObj = new Date(secondClicked.year,
              secondClicked.month,
              secondClicked.date);

              if (firstClickDateObj > secondClickDateObj) {

                  var cachedClickedInfo = secondClicked;
                  secondClicked = firstClicked;
                  firstClicked = cachedClickedInfo;
                  selected = {};
                  selected[firstClicked.year] = {};
                  selected[firstClicked.year][firstClicked.month] = [firstClicked.date];

              } else if (firstClickDateObj.getTime() == secondClickDateObj.getTime()) {
                  selected = {};
                  firstClicked = [];
                  secondClicked = [];
                  firstClick = false;
                  secondClick = false;
                  $(this).removeClass("selected");
              }


              // add between dates to [selected]
              selected = addChosenDates(firstClicked, secondClicked, selected);
          }
          selectDates(selected);

          

      });

  }

  function selectDates(selected) {
      if (!$.isEmptyObject(selected)) {
          var dateElements1 = datesBody1.find('div');
          var dateElements2 = datesBody2.find('div');

          function highlightDates(passed_year, passed_month, dateElements) {
              if (passed_year in selected && passed_month in selected[passed_year]) {
                  var daysToCompare = selected[passed_year][passed_month];
                  for (var d in daysToCompare) {
                      dateElements.each(function (index) {
                          if (parseInt($(this).text()) == daysToCompare[d]) {
                              $(this).addClass('selected');
                          }
                      });
                  }

              }
          }

          highlightDates(year, month, dateElements1);
          highlightDates(nextYear, nextMonth, dateElements2);
      }
  }

  function makeMonthArray(passed_month, passed_year) { // creates Array specifying dates and weekdays
      var e = [];
      for (var r = 1; r < getDaysInMonth(passed_year, passed_month) + 1; r++) {
          e.push({
              day: r,
              // Later refactor -- weekday needed only for first week
              weekday: daysArray[getWeekdayNum(passed_year, passed_month, r)]
          });
      }
      return e;
  }

  function makeWeek(week) {
      week.empty();
      for (var e = 0; e < 7; e++) {
          week.append("<div>" + daysArray[e].substring(0, 3) + "</div>")
      }
  }

  function getDaysInMonth(currentYear, currentMon) {
      return (new Date(currentYear, currentMon + 1, 0)).getDate();
  }

  function getWeekdayNum(e, t, n) {
      return (new Date(e, t, n)).getDay();
  }

  function checkToday(e) {
      var todayDate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
      var checkingDate = e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate();
      return todayDate == checkingDate;

  }

  function getAdjacentMonth(curr_month, curr_year, direction) {
      var theNextMonth;
      var theNextYear;
      if (direction == "next") {
          theNextMonth = (curr_month + 1) % 12;
          theNextYear = (curr_month == 11) ? curr_year + 1 : curr_year;
      } else {
          theNextMonth = (curr_month == 0) ? 11 : curr_month - 1;
          theNextYear = (curr_month == 0) ? curr_year - 1 : curr_year;
      }
      return [theNextMonth, theNextYear];
  }

  function b() {
      today = new Date;
      year = today.getFullYear();
      month = today.getMonth();
      var nextDates = getAdjacentMonth(month, year, "next");
      nextMonth = nextDates[0];
      nextYear = nextDates[1];
  }

  var e = 480;

  var today;
  var year,
  month,
  nextMonth,
  nextYear;

  var r = [];
  var i = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"];
  var daysArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"];

  var cal1 = $("#calendar_first");
  var calHeader1 = cal1.find(".calendar_header");
  var weekline1 = cal1.find(".calendar_weekdays");
  var datesBody1 = cal1.find(".calendar_content");

  var cal2 = $("#calendar_second");
  var calHeader2 = cal2.find(".calendar_header");
  var weekline2 = cal2.find(".calendar_weekdays");
  var datesBody2 = cal2.find(".calendar_content");

  var bothCals = $(".calendar");

  var switchButton = bothCals.find(".calendar_header").find('.switch-month');

  var calendars = {
      "cal1": {
          "name": "first",
              "calHeader": calHeader1,
              "weekline": weekline1,
              "datesBody": datesBody1
      },
          "cal2": {
          "name": "second",
              "calHeader": calHeader2,
              "weekline": weekline2,
              "datesBody": datesBody2
      }
  }


  var clickedElement;
  var firstClicked,
  secondClicked,
  thirdClicked;
  var firstClick = false;
  var secondClick = false;
  var selected = {};

  b();
  c(month, year, 0);
  c(nextMonth, nextYear, 1);
  switchButton.on("click", function () {
      var clicked = $(this);
      var generateCalendars = function (e) {
          var nextDatesFirst = getAdjacentMonth(month, year, e);
          var nextDatesSecond = getAdjacentMonth(nextMonth, nextYear, e);
          month = nextDatesFirst[0];
          year = nextDatesFirst[1];
          nextMonth = nextDatesSecond[0];
          nextYear = nextDatesSecond[1];

          c(month, year, 0);
          c(nextMonth, nextYear, 1);
      };
      if (clicked.attr("class").indexOf("left") != -1) {
          generateCalendars("previous");
      } else {
          generateCalendars("next");
      }
      clickedElement = bothCals.find(".calendar_content").find("div");
  });


  //  Click picking stuff
  function getClickedInfo(element, calendar) {
      var clickedInfo = {};
      var clickedCalendar,
      clickedMonth,
      clickedYear;
      clickedCalendar = calendar.name;
      clickedMonth = clickedCalendar == "first" ? month : nextMonth;
      clickedYear = clickedCalendar == "first" ? year : nextYear;
      var clickedMonth_f = clickedMonth + 1;
      // alert(clickedMonth_f);
      clickedInfo = {
          "calNum": clickedCalendar,
              "date": element,
              "month": clickedMonth_f,
              "year": clickedYear
      }
      return clickedInfo;
  }


  // Finding between dates MADNESS. Needs refactoring and smartening up :)
  function addChosenDates(firstClicked, secondClicked, selected) {
      if (secondClicked.date > firstClicked.date || secondClicked.month > firstClicked.month || secondClicked.year > firstClicked.year) {

          var added_year = secondClicked.year;
          var added_month = secondClicked.month;
          var added_date = secondClicked.date;

          if (added_year > firstClicked.year) {
              // first add all dates from all months of Second-Clicked-Year
              selected[added_year] = {};
              selected[added_year][added_month] = [];
              for (var i = 1;
              i <= secondClicked.date;
              i++) {
                  selected[added_year][added_month].push(i);
              }

              added_month = added_month - 1;
              while (added_month >= 0) {
                  selected[added_year][added_month] = [];
                  for (var i = 1;
                  i <= getDaysInMonth(added_year, added_month);
                  i++) {
                      selected[added_year][added_month].push(i);
                  }
                  added_month = added_month - 1;
              }

              added_year = added_year - 1;
              added_month = 11; // reset month to Dec because we decreased year
              added_date = getDaysInMonth(added_year, added_month); // reset date as well

              // Now add all dates from all months of inbetween years
              while (added_year > firstClicked.year) {
                  selected[added_year] = {};
                  for (var i = 0; i < 12; i++) {
                      selected[added_year][i] = [];
                      for (var d = 1; d <= getDaysInMonth(added_year, i); d++) {
                          selected[added_year][i].push(d);
                      }
                  }
                  added_year = added_year - 1;
              }
          }

          if (added_month > firstClicked.month) {
              if (firstClicked.year == secondClicked.year) {
                  selected[added_year][added_month] = [];
                  for (var i = 1;
                  i <= secondClicked.date;
                  i++) {
                      selected[added_year][added_month].push(i);
                  }
                  added_month = added_month - 1;
              }
              while (added_month > firstClicked.month) {
                  selected[added_year][added_month] = [];
                  for (var i = 1;
                  i <= getDaysInMonth(added_year, added_month);
                  i++) {
                      selected[added_year][added_month].push(i);
                  }
                  added_month = added_month - 1;
              }
              added_date = getDaysInMonth(added_year, added_month);
          }

          for (var i = firstClicked.date + 1;
          i <= added_date;
          i++) {
              selected[added_year][added_month].push(i);
          }
      }
      return selected;
  }
});


 
