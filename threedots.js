var cssSetup = function() {
	document.body.style.background="#ECECEC";
	var css = "body{border-top-width: 0px !important;} #header{border-top-width: 0px !important;} #add_from_computer,#add_from_gdrive,#add_from_box{display: none;} /*#google_auth_row{display: none;} #google_auth_separator{display:none;}*/ /*#logo{padding-left: 64px;}*/ ";
	head = document.head || document.getElementsByTagName( 'head' )[ 0 ];
	style = document.createElement( 'style' );
	style.type = 'text/css';
	if ( style.styleSheet ) {
			style.styleSheet.cssText = css;
	} else {
			style.appendChild( document.createTextNode( css ) );
	}
	head.appendChild( style );
};
cssSetup();

(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init("12e9fe31a4a57d38f6c826728b73844e");mixpanel.track("App launched");

var disableGoogleLogin = function () {
    var gauth_button = document.getElementById("google_auth_button");
    gauth_button.onclick = function (event) {
        alert("Threedots does not currently support Google login.\nPlease open app.asana.com in Safari, log in, and then relaunch threedots.");
    };
}
disableGoogleLogin();