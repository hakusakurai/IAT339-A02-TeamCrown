'use strict';

var count = 1;
var countEl = document.getElementById("count");
function plus(){
	count++;
	countEl.value = count;
}
function minus(){
	if (count > 1) {
		count--;
		countEl.value = count;
	}  
}


var count1 = 1;
var countEl1 = document.getElementById("count1");
function plus1(){
	count1++;
	countEl1.value = count1;
}
function minus1(){
	if (count1 > 1) {
		count1--;
		countEl1.value = count1;
	}  
}

var count2 = 1;
var countEl2 = document.getElementById("count2");
function plus2(){
	count2++;
	countEl2.value = count2;
}
function minus2(){
	if (count2 > 1) {
		count2--;
		countEl2.value = count2;
	}  
}


