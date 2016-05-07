/*
* flexcaljdate 
* v1.0
* flexcaljdate is simple extension for flexcal (http://github.bililite.com/flexcal/)
* flexcaljdate is focusing to jewish clander and gregorian calander only.
* features:
*  - return to the input the date type you choose
*  - auto detection of direction (rtl or ltr) and position the dateppicker to the left or right of input element
*  - flexcal date format.
*  - option for text align (left , right , center).
*  - hide dateppicker when clicking outside the input element (http://benalman.com/projects/jquery-outside-events-plugin/).
* example:
	$("#mycal").flexcaljdate({
		gd_format: "dd/mm/yyyy",
		cal:		"gd,hg",
		align: "center"
	});
* cal:
gd - gregorian date (29/05/2016)
hg - gregorian date in hebrew language (29מאי 2016)
ej - jewish date in english language (22 nisan 5776)
hj - jewish date in hebrew language (כ״ב ניסן תשע״ו)
*
Copyright (c) 2016 Tady Meshesha
*
license : MIT  (as flexcal license)
*/
(function ($){
	$.fn.flexcaljdate = function(options){
		var inputDir = getDirection($(this)[0]);
		if (inputDir=="ltr"){
			drc = "bl";
		}else{ //rtl
			drc = "br";
		}		
		function getDirection(elem) {
			var dir;
			if (window.getComputedStyle) { // all browsers
				dir = window.getComputedStyle(elem, null).getPropertyValue('direction');
			} else {
				dir = elem.currentStyle.direction; // IE5-8
			}
			return dir;
		}		
        var settings = $.extend({
            // These are the defaults.
			cal:		"gd,ej,hj", //hg - hebrew gergorian
			align:		"right", //left , right , center
            gd_format: "dd/mm/yyyy",
            ej_format: "dddd MM YYYY",
			hj_format: "dddd MM YYYY",
			hg_format: "dddd MM YYYY"
        }, options );
		var cld=[
					['en',{
						dateFormat: settings.gd_format
						}], 
					['jewish',{
						dateFormat: settings.ej_format
						}], 
					['he-jewish',{
						dateFormat: settings.hj_format,
						}],
					['hg','לועזי',{
						dateFormat: settings.hg_format,
						monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני',
							'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
						monthNamesShort: ['ינו','פבר','מרץ','אפר','מאי','יונ',
							'יול','אוג','ספט','אוק','נוב','דצמ'],
						dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
						dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
						dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
						isRTL: true
						}]					
				];
		var cld_ary=[];
		var mycal = settings.cal;
		var cal_arry;
		var chek_cal = mycal.indexOf(",");
		var ej_flag = false;
		if (chek_cal == -1){
			switch(mycal) {
				case "gd":
					cld_ary[0] = cld[0];
					break;
				case "ej":
					cld_ary[0] = cld[1];
					ej_flag = true;
					break;
				case "hj":
					cld_ary[0] = cld[2];
					break;
				case "hg":
					cld_ary[0] = cld[3];
					break;					
			}					
		}else{
			cal_arry = mycal.split(",");
			for (var i=0; i<cal_arry.length;i++ ){
				switch(cal_arry[i]) {
					case "gd": //because some bug en date most be first
						cld_ary.unshift(cld[0]);
						break;
					case "ej":
						cld_ary.push(cld[1]);
						ej_flag = true;
						break;
					case "hj":
						cld_ary.push(cld[2]);
						break;
					case "hg":
						cld_ary.push(cld[3]);
						break;						
				}						 
			}
		}
		var fc,dt,tabi=0,fd = $(this),cfd=fd.val() , drc;
		if (inputDir=="rtl" && ej_flag){
			$(this).attr('dir','ltr');
		}		

		$(this).css({'text-align': settings.align}); 
		
		function shh(){
			fd.off('click').on('click', function(){
				fd.flexcal('show');		
			});
		}

	
		
		fc = fd.flexcal({ 
			calendars: cld_ary,
			position: drc,
			duration: 0,
			trigger: null, // no built-in trigger
			create: shh,
			hidden: shh,
			shown: shh,
			set:function (e, d){
				var lng_ary = [];
				for (var i=0; i<cld_ary.length;i++ ){
					lng_ary[i] = $.bililite.flexcal.tol10n(cld_ary[i]); 
				}
				tabi = fc.flexcal('option', 'tab');
				for (var i=0; i<cld_ary.length;i++ ){
					if (tabi==i){
						dt = $(this).flexcal('format', d , lng_ary[i]);
					}			
				}
				fd.val(dt);
					
			}
			
		});
		$(this).bind( "clickoutside", function(event){ //hide calanders when clickin outside the input element
			fd.flexcal('hide');	
		});			
	}
}(jQuery));