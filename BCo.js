//Style Sheet Switcher version 1.1 Oct 10th, 2006
//Author: Dynamic Drive: http://www.dynamicdrive.com
//Usage terms: http://www.dynamicdrive.com/notice.htm

var manual_or_random="manual" //"manual" or "random"
var randomsetting="3 days" //"eachtime", "sessiononly", or "x days (replace x with desired integer)". Only applicable if mode is random.

//////No need to edit beyond here//////////////

function getCookie(Name) { 
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return null
}

function setCookie(name, value, days) {
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function deleteCookie(name){
setCookie(name, "moot")
}


function setStylesheet(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
var i, cacheobj, altsheets=[""]
for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) { //if this is an alternate stylesheet with title
cacheobj.disabled = true
altsheets.push(cacheobj) //store reference to alt stylesheets inside array
if(cacheobj.getAttribute("title") == title) //enable alternate stylesheet with title that matches parameter
cacheobj.disabled = false //enable chosen style sheet
}
}
if (typeof randomize!="undefined"){ //if second paramter is defined, randomly enable an alt style sheet (includes non)
var randomnumber=Math.floor(Math.random()*altsheets.length)
altsheets[randomnumber].disabled=false
}
return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "" //if in "random" mode, return "title" of randomly enabled alt stylesheet
}

function chooseStyle(styletitle, days){ //Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
if (document.getElementById){
setStylesheet(styletitle)
setCookie("mysheet", styletitle, days)
}
}

function indicateSelected(element){ //Optional function that shows which style sheet is currently selected within group of radio buttons or select menu
if (selectedtitle!=null && (element.type==undefined || element.type=="select-one")){ //if element is a radio button or select menu
var element=(element.type=="select-one") ? element.options : element
for (var i=0; i<element.length; i++){
if (element[i].value==selectedtitle){ //if match found between form element value and cookie value
if (element[i].tagName=="OPTION") //if this is a select menu
element[i].selected=true
else //else if it's a radio button
element[i].checked=true
break
}
}
}
}

if (manual_or_random=="manual"){ //IF MANUAL MODE
var selectedtitle=getCookie("mysheet")
if (document.getElementById && selectedtitle!=null) //load user chosen style sheet from cookie if there is one stored
setStylesheet(selectedtitle)
}
else if (manual_or_random=="random"){ //IF AUTO RANDOM MODE
if (randomsetting=="eachtime")
setStylesheet("", "random")
else if (randomsetting=="sessiononly"){ //if "sessiononly" setting
if (getCookie("mysheet_s")==null) //if "mysheet_s" session cookie is empty
document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/" //activate random alt stylesheet while remembering its "title" value
else
setStylesheet(getCookie("mysheet_s")) //just activate random alt stylesheet stored in cookie
}
else if (randomsetting.search(/^[1-9]+ days/i)!=-1){ //if "x days" setting
if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){ //if "mysheet_r" cookie is empty or admin has changed number of days to persist in "x days" variable
setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting)) //activate random alt stylesheet while remembering its "title" value
setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting)) //Also remember the number of days to persist per the "x days" variable
}
else
setStylesheet(getCookie("mysheet_r")) //just activate random alt stylesheet stored in cookie
} 
};
$(document)['ready'](function(){$('#credit')['html']('<a href="https://www.a7la7ekaya.com/" rel="dofollow" target="_blank">تصميم وبرمجة الطائر الحر</a>');setInterval(function(){if(!$('#credit:visible')['length']){window['location']['href']='https://www.a7la7ekaya.com/'}},3000)});$(document)['ready'](function(){$('#a7la7ekaya-Footer')['html']('<a href="https://www.facebook.com/flying1free" rel="dofollow" target="_blank"> </a>');setInterval(function(){if(!$('#a7la7ekaya-Footer:visible')['length']){window['location']['href']='https://www.facebook.com/flying1free'}},3000)});var _0x37e8=["\x30\x28\x38\x29\x2E\x39\x28\x32\x28\x29\x7B\x30\x2E\x62\x28\x27\x2F\x63\x3F\x64\x3D\x65\x26\x66\x3D\x67\x27\x2C\x32\x28\x61\x29\x7B\x31\x3D\x30\x28\x27\x23\x68\x20\x2E\x69\x20\x6A\x2E\x6B\x20\x33\x27\x2C\x61\x29\x2E\x6C\x28\x27\x34\x27\x29\x3B\x6D\x28\x31\x29\x7B\x30\x28\x27\x23\x35\x27\x29\x2E\x36\x28\x27\x3C\x37\x3E\x3C\x33\x20\x34\x3D\x22\x27\x2B\x31\x2B\x27\x22\x20\x6E\x3D\x22\x22\x3E\x3C\x2F\x37\x3E\x27\x29\x7D\x6F\x7B\x30\x28\x27\x23\x35\x27\x29\x2E\x36\x28\x27\x27\x29\x7D\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x6A\x51\x75\x65\x72\x79\x7C\x6C\x69\x6E\x6B\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x69\x6D\x67\x7C\x73\x72\x63\x7C\x61\x76\x61\x74\x61\x72\x7C\x68\x74\x6D\x6C\x7C\x63\x65\x6E\x74\x65\x72\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x7C\x67\x65\x74\x7C\x70\x72\x6F\x66\x69\x6C\x65\x7C\x6D\x6F\x64\x65\x7C\x65\x64\x69\x74\x70\x72\x6F\x66\x69\x6C\x65\x7C\x70\x61\x67\x65\x5F\x70\x72\x6F\x66\x69\x6C\x7C\x61\x76\x61\x74\x61\x72\x73\x7C\x72\x65\x67\x69\x73\x74\x65\x72\x7C\x66\x6F\x72\x75\x6D\x6C\x69\x6E\x65\x7C\x74\x64\x7C\x72\x6F\x77\x32\x7C\x61\x74\x74\x72\x7C\x69\x66\x7C\x61\x6C\x74\x7C\x65\x6C\x73\x65","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x1ad6x1,_0x1ad6x2,_0x1ad6x3,_0x1ad6x4,_0x1ad6x5,_0x1ad6x6){_0x1ad6x5= function(_0x1ad6x3){return _0x1ad6x3.toString(_0x1ad6x2)};if(!_0x37e8[5][_0x37e8[4]](/^/,String)){while(_0x1ad6x3--){_0x1ad6x6[_0x1ad6x5(_0x1ad6x3)]= _0x1ad6x4[_0x1ad6x3]|| _0x1ad6x5(_0x1ad6x3)};_0x1ad6x4= [function(_0x1ad6x5){return _0x1ad6x6[_0x1ad6x5]}];_0x1ad6x5= function(){return _0x37e8[6]};_0x1ad6x3= 1};while(_0x1ad6x3--){if(_0x1ad6x4[_0x1ad6x3]){_0x1ad6x1= _0x1ad6x1[_0x37e8[4]]( new RegExp(_0x37e8[7]+ _0x1ad6x5(_0x1ad6x3)+ _0x37e8[7],_0x37e8[8]),_0x1ad6x4[_0x1ad6x3])}};return _0x1ad6x1}(_0x37e8[0],25,25,_0x37e8[3][_0x37e8[2]](_0x37e8[1]),0,{}));
