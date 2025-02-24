// stolen wholesale from Zeldman, Willison, and others
//  with thanks

function videoPopup(url, width, height, mp4) {
    if (navigator.userAgent.indexOf('Android') >= 0 ||
	navigator.userAgent.indexOf('iPhone') >= 0 ||
	navigator.userAgent.indexOf('iPad') >= 0 ||
	navigator.userAgent.indexOf('iPod') >= 0 ||
	navigator.userAgent.indexOf('webOS') >= 0) {
	// don't wrap it in HTML, just point it at the H.264 bits and get the full-screen
	//  video player.
	window.location = mp4;
    }
    else {
	// 640x480 should fit on most screens, but won't in my blog layout, so make a
	//  popup for the video
	width += 20;
	height += 20;
	newwindow=window.open(url,'videopopup','height=' + height + ',width=' + width);
	if (window.focus) {newwindow.focus()}
    }
    return false;
}

function addpLinks() {
    var paras = document.getElementsByTagName('p');
    for (var i = 0; i < paras.length; i++) {
	var current = paras[i];
	if (/^p-/.test(current.id)) {
	    // It's a purple link paragraph
	    var plink = document.createElement('a');
	    plink.href = document.location.href.split('#')[0] + 
		'#' + current.id;
	    plink.className = 'plink';
	    plink.appendChild(document.createTextNode(' ¶'));
	    current.appendChild(plink);
	}
    }
}

function createCookie(name,value,days) {
    if (days) {
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var picInfoReq;

function doThumbnail() 
{
    var url = "/ongoing/picInfo.xml";
    
    if (window.XMLHttpRequest) 
        picInfoReq = new XMLHttpRequest();
    else
        picInfoReq = new ActiveXObject("Microsoft.XMLHTTP");
    
    if (picInfoReq) {
	picInfoReq.onreadystatechange = gotPicInfo;
	picInfoReq.open("GET", url + "?o=" + document.URL, true);
	picInfoReq.send(null);
    }
}

function gotPicInfo() 
{
    // only if picInfoReq shows "complete"
    if (picInfoReq.readyState != 4 || picInfoReq.status != 200) 
	return;
    
    var xml = picInfoReq.responseXML.documentElement;
    var fUri = xml.getElementsByTagName('fragment')[0].firstChild.data;
    var title = xml.getElementsByTagName('title')[0].firstChild.data;
    var tnA = document.getElementById("tnA");
    if (tnA)
	tnA.setAttribute("href", fUri);
    var tnI = document.getElementById("tnI");
    if (tnI)
	tnI.setAttribute("title", title);
}

var inFeedListReq;

function commentsOK()
{
    var url = "/ongoing/in-feed.xml";
    
    if (window.XMLHttpRequest) 
	inFeedListReq = new XMLHttpRequest();
    else
	inFeedListReq = new ActiveXObject("Microsoft.XMLHTTP");
    
    if (inFeedListReq) {
	inFeedListReq.onreadystatechange = gotInFeedList;
	inFeedListReq.open("GET", url, true);
	inFeedListReq.send(null);
    }
}

function gotInFeedList()
{
    // only if inFeedListReq shows "complete"
    if (inFeedListReq.readyState != 4 || inFeedListReq.status != 200) 
	return;
    
    var xml = inFeedListReq.responseXML.documentElement;
    var allInFeed = xml.getElementsByTagName('o');
    var canComment = false;
    for (var i = 0; i < allInFeed.length; i++) {
	if (allInFeed[i].firstChild.nodeValue == document.location.pathname) {
	    // comments allowed
	    canComment = true;
	}
    }
    
    var commentHere = document.getElementById("commentHere");
    if (commentHere) {
	if (canComment) {
	    titleEl = document.getElementsByTagName('title');
	    title = titleEl.item(0).innerHTML.substring(10);
	    commentHere.innerHTML = "<p>Please feel free to " +
		"<a href='/atompub/comment?frag=" +
		document.location.pathname + "&amp;title=" +
		title +
		"'>contribute a comment</a> on this fragment.</p>";
	}
	else
	    commentHere.innerHTML = "<p>Comments on this fragment are closed.</p>";
    }
}

window.onload = function(e) {
    
    // which homepage
    home = 'ongoing';
    if (document.URL.indexOf("home=the-world") != -1 ||
	document.URL.indexOf("ongoing/the-world") != -1) {
	home = 'the world';    
    }
    cookie = readCookie("home");
    if (cookie == 'the world')
	home = 'the world';
    
    var toHome;
    toHome = document.getElementById("home");
    if (toHome != null) {
	toHome.innerHTML = home;
    }
    
    addpLinks();
    doThumbnail();
    commentsOK();

}

window.onunload = function(e) {
    createCookie("home", home);
}

var title;

// which homepage
home = 'ongoing';
if (document.URL.indexOf("home=the-world") != -1 ||
    document.URL.indexOf("ongoing/the-world") != -1) {
    home = 'the world';    
}
cookie = readCookie("home");
if (cookie == 'the world')
    home = 'the world';

var toHome;
toHome = document.getElementById("home");
if (toHome != null) {
    toHome.innerHTML = home;
}


addpLinks();
var home;
