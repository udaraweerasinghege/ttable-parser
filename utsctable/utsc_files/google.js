// JavaScript Document


/* 

==============================================

Ver. 1.0

Created: Dec. 18 2008

Author: Sebastian Toncu

Descr.: This documents generates dynamic content for google search bar, and allows switching between google technologies

==============================================

*/ 


function act()

{
	

if ((document.utsearch.sitesearch[0].checked == true) || (document.utsearch.sitesearch[1].checked == true)) {
   changeVal2();
   document.utsearch.action = 'http://find.utoronto.ca/search';
   
   }

if(document.utsearch.sitesearch[2].checked == true) {
   changeVal();
   document.utsearch.action = 'http://www.google.com/search';
   document.utsearch.method = 'get';
   }
return true;

}
/*
window.onload = function createWWW() {
	
	var butt3 = document.createElement("input");
	
	butt3.type = "radio";
	butt3.name = "sitesearch";
	butt3.id = "www";
	butt3.value = "";
	var butt3text = document.createTextNode("WWW");
	
	var radios = document.getElementById("radios");
	radios.appendChild(butt3);
	radios.appendChild(butt3text);
	}
*/
function changeVal() {
	var h1 = document.getElementById("hidden1");
	var h2 = document.getElementById("hidden2");
	var h3 = document.getElementById("hidden3");
	var h4 = document.getElementById("hidden4");
	var h5 = document.getElementById("hidden5");
	var h7 = document.getElementById("hidden7");
	
	h1.value = "";
	h2.value = "";
	h3.value = "";
	h4.value = "";
	h5.value = "";
	h7.value = "";
	
	}

function changeVal2() {
	var h1 = document.getElementById("hidden1");
	var h2 = document.getElementById("hidden2");
	var h3 = document.getElementById("hidden3");
	var h4 = document.getElementById("hidden4");
	var h5 = document.getElementById("hidden5");
	var h7 = document.getElementById("hidden7");
	
	h1.value = "default_collection";
	h2.value = "utsc";
	h3.value = "xml_no_dtd";
	h4.value = "utsc";
	h5.value = "i";
	h7.value = "utsc.utoronto.ca";
	
	}
	
	
  function init() {
	
		// Fetch all the a elements in the document.
		

		var links = document.GetElementsByTagName('a');

		// Loop through the a elements in reverse order
		// for speed.
		for (var i = links.length; i != 0; i--) {
			
			// Pull out the element for this iteration.
			var a = links[i-1];
			
			// If the element doesn't have an href, skip it.
			if (!a.href) continue;

			// If the element has a className that contains
			// 'external' attach the onclick handler.			
			if (links.className == "external") a.onclick = PopWin;
		}
	}
	
	function PopWin(e) {
	
		// Accommodate IE's non-standard event handling.
		if (!e) var e = window.event;
		var a = e.target ? e.target : e.srcElement;

		// Open a new window with the link's href.
		var newwin = window.open(a.href);

		// The thought is that if the new window didn't
		// (popups blocked or whatever) we want to return
		// true so the link is follow normally. Not sure
		// if this works, but it doesn't seem to hinder.
		return !newwin;                               
	}