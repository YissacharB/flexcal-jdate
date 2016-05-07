flexcaljdate 
v1.0
flexcaljdate is simple extension for flexcal (http://github.bililite.com/flexcal/)
flexcaljdate is focusing to jewish clander and gregorian calander only.
features:
  - return to the input the date type you choose
  - auto detection of direction (rtl or ltr) and position the dateppicker to the left or right of input element
  - flexcal date format.
  - option for text align (left , right , center).
  - hide dateppicker when clicking outside the input element (http://benalman.com/projects/jquery-outside-events-plugin/).
example:
	$("#mycal").flexcaljdate({
		gd_format: "dd/mm/yyyy",
		cal:		"gd,hg",
		align: "center"
	});
cal:
  gd - gregorian date (29/05/2016)
  hg - gregorian date in hebrew language (29 מאי 2016)
  ej - jewish date in english language (22 nisan 5776)
  hj - jewish date in hebrew language (כ״ב ניסן תשע״ו)

Copyright (c) 2016 Tady Meshesha

license : MIT  (as flexcal license)
