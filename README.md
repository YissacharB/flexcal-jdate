flexcaljdate <br>
v1.0<br>
flexcaljdate is simple extension for flexcal (http://github.bililite.com/flexcal/).<br>
flexcaljdate is focusing to jewish clander and gregorian calander only.<br>
features:<br>
  - return to the input the date type you choose
  - auto detection of direction (rtl or ltr) and position the dateppicker to the left or right of input element
  - flexcal date format.
  - option for text align (left , right , center).
  - hide dateppicker when clicking outside the input element (http://benalman.com/projects/jquery-outside-events-plugin/).
<br><br>
example:<br><code>
	$("#mycal").flexcaljdate({ <br>
	       	gd_format: "dd/mm/yyyy", <br>
	       	cal:		"gd,hg", <br>
	       	align: "center" <br>
	});</code><br><br>
cal:<br>
  gd - gregorian date (29/05/2016)<br>
  hg - gregorian date in hebrew language (29 מאי 2016)<br>
  ej - jewish date in english language (22 nisan 5776)<br>
  hj - jewish date in hebrew language (כ״ב ניסן תשע״ו)<br>
<br><br>
Copyright (c) 2016 Tady Meshesha
<br><br>
license : MIT  (as flexcal license)
