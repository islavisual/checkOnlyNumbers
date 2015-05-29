// Check only numbers 1.0 (https://github.com/islavisual/checkOnlyNumbers). 
// Copyright 2015 Islavisual. Licensed under MIT (https://github.com/islavisual/checkOnlyNumbers/blob/master/LICENSE). 
// Author: Pablo E. Fernández (islavisual@gmail.com). 
// Last update: 29/05/2015
jQuery.fn.checkOnlyNumbers = function(){ return this.each(function() { if(('ontouchstart' in document.documentElement)){$(this).prop("type", 'number'); return;}; $(this).keydown(function(e) { var key = e.which || 0; return ( key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key >= 112 && key <= 123)); }); }); };