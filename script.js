(function($) {
      $.fn.textfill = function(options) { 
        return this.each(function() {
          var text = $(this).html();
          var oldFontSize = parseInt($(this).css("font-size"));
          var contentFontSizes = [];
          $(this).find('*').each(function(i, e){
              contentFontSizes[i] = parseInt($(this).css("font-size"));
          });
          $(this).html('');
          var container = $('<span />').html(text).appendTo($(this));
          var min = 1, max = 200, fontSize, coef;
          do {
            fontSize = (max + min) / 2;
            coef = fontSize / oldFontSize;
            container.css('fontSize', fontSize);
            container.find('*').each(function(i, e){
              $(this).css("font-size", (contentFontSizes[i] * coef) + 'px');
          });
            var multiplier = $(this).height()/container.height();
            if (multiplier == 1) { min = max = fontSize}
            if (multiplier >  1) { min = fontSize}
            if (multiplier <  1) { max = fontSize}
          } while ((max - min) > 1);
          fontSize = min;
          coef = fontSize / oldFontSize;
          if ($(this).width() < container.width()) {
            min = 1;
            do {
              fontSize = (max + min) / 2;
              coef = fontSize / oldFontSize;
              container.css('fontSize', fontSize);
              container.find('*').each(function(i, e){
                  $(this).css("font-size", (contentFontSizes[i] * coef) + 'px');
              });
              var multiplier = $(this).width()/container.width();
              if (multiplier == 1) { min = max = fontSize}
              if (multiplier >  1) { min = fontSize}
              if (multiplier <  1) { max = fontSize}
            } while ((max - min) > 1);
            fontSize = min;
            coef = fontSize / oldFontSize;
          }
          container.remove();
          $(this).html(text);
          var minFontSize = options.minFontPixels;
          var maxFontSize = options.maxFontPixels;
          var newFontSize = minFontSize && (minFontSize > fontSize) ?
                      minFontSize :
                      maxFontSize && (maxFontSize < fontSize) ?
                      maxFontSize :
                      fontSize;
                
          coef = minFontSize && (minFontSize > fontSize) ?
                      minFontSize / oldFontSize :
                      maxFontSize && (maxFontSize < fontSize) ?
                      maxFontSize / oldFontSize :
                      coef;
          $(this).find('*').each(function(i, e){
              $(this).css("font-size", (contentFontSizes[i] * coef) + 'px');
          });
          $(this).css('fontSize', newFontSize);
        }); 
      }; 
})(jQuery);

var marker_gps = null, circle_gps = null, watchID = null;

function addYourLocationButton(map){
  var controlDiv = document.createElement('div');

  var firstChild = document.createElement('button');
  firstChild.className = "location_button";
  firstChild.style.backgroundColor = '#fff';
  firstChild.style.border = 'none';
  firstChild.style.outline = 'none';
  firstChild.style.width = '40px';
  firstChild.style.height = '40px';
  firstChild.style.borderRadius = '2px';
  firstChild.style.boxShadow = '0 1px 4px -1px rgba(0,0,0,0.3)';
  firstChild.style.cursor = 'pointer';
  firstChild.style.marginRight = '10px';
  firstChild.style.padding = '0';
  firstChild.title = 'Twoja lokalizacja';
  controlDiv.appendChild(firstChild);

  var secondChild = document.createElement('div');
  secondChild.style.margin = 'auto';
  secondChild.style.width = '18px';
  secondChild.style.height = '18px';
  secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
  secondChild.style.backgroundSize = '180px 18px';
  secondChild.style.backgroundPosition = '0 0';
  secondChild.style.backgroundRepeat = 'no-repeat';
  firstChild.appendChild(secondChild);

  google.maps.event.addListener(map, 'center_changed', function () {
    secondChild.style['background-position'] = '0 0';
    if($('div.mapa div.add_edit_marker').css('display')=='block' && $('div.mapa div.add_edit_marker').attr('data-marker-index')!='new'){
      if(map.getCenter().equals(markers[$('div.mapa div.add_edit_marker').attr('data-marker-index')].position)){
        $('div.mapa div.add_edit_marker #edit_m_marker i').attr('class','icon-pushpin');
      }
      else{
        $('div.mapa div.add_edit_marker #edit_m_marker i').attr('class','icon-map-marker');
      }
    }  
  });

  firstChild.addEventListener('click', function () {
      var imgX = '0',
          animationInterval = setInterval(function () {
              imgX = imgX === '-18' ? '0' : '-18';
              secondChild.style['background-position'] = imgX+'px 0';
          }, 500);

      if(navigator.geolocation) {
        if(watchID == null){
          var options = {enableHighAccuracy: true,timeout: 10000,maximumAge: 0,desiredAccuracy: 0, frequency: 5000 };
          watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
        
          navigator.geolocation.getCurrentPosition(function(position) {
              var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              map.panTo(latlng);
            if(map.getZoom()<16)
              map.setZoom(16);
              clearInterval(animationInterval);
              secondChild.style['background-position'] = '-144px 0';
              
              if (marker_gps) {
                // Marker already created - Move it
                marker_gps.setPosition(latlng);
                circle_gps.setCenter(latlng);
              }
              else {
                // Marker does not exist - Create it
                var image = {url: './images/location_dot.png', size: new google.maps.Size(14, 14),origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(7, 7)};
                marker_gps = new google.maps.Marker({
                  position: latlng,
                  icon: image,
                  map: map,
                  clickable: false,
                  zIndex: 999,
                  optimized: false
                });
                circle_gps = new google.maps.Circle({
                  strokeWeight: 0,
                  fillColor: '#4285F4',
                  fillOpacity: 0.35,
                  map: map,
                  center: latlng,
                  radius: position.coords.accuracy,
                  clickable: false,
                  zIndex: 997,
                  optimized: false
                });
              }
          });
      }
  });

  controlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);

}


function scrollbarWidth(){//calculate scrollbar size
  var a,b,c;
    if(c===undefined){
      a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
      b=a.children();
      c=b.innerWidth()-b.height(99).innerWidth();
      a.remove();
    }
  return c;
};
  map_in_fullscreeen = false;
function recalculate_maps_buttons(){
  $map_layer_type = $('.left_map_control');
  $map_fullscreen = $('.right_map_control');
  
  if($(window).scrollTop()-$('#maps').position().top>0){
    $($map_layer_type).css({'top':$('.logo').height(),'position':'absolute'});
  }else if($(window).scrollTop()-($('#maps').position().top-$('.logo').height())<=0){
    $($map_layer_type).css({'top':'0px','position':'absolute'});
  }else{
    $($map_layer_type).css({'top':$('.logo').height(),'position':'fixed'});
  }
  
  if($(window).scrollTop()-$('#maps').position().top>0){
    $($map_fullscreen).css({'top':$('header').height(),'position':'absolute'});
  }else if($(window).scrollTop()-($('#maps').position().top-$('header').height())<=0){
    $($map_fullscreen).css({'top':'0px','position':'absolute'});
  }else{
    $($map_fullscreen).css({'top':$('header').height(),'position':'fixed'});
  }
}

//bus position
function resize_bus(){
  if(window.innerWidth < 960){
    width_ = window.innerWidth - 50;
    $('#busy').css({'marginLeft':'20px','width':width_+'px'});
  }else{
    width_ = (window.innerWidth - 910)/2;
    $('#busy').css({'marginLeft':width_+'px','width':'910px'});
  }
}
function setblurtop(){
  steps = $('#ofirmie').height()-window.innerHeight;
  if(steps<0){
    steps = 0;
  }
  steps = steps / 95
  $('#background_float').css('bottom',-100+($(window).scrollTop()/steps));
}
var markers = new Array();
$(document).ready(function(){
  $('div.maps_route').css('height',window.innerHeight-$('header').outerHeight()-$('footer').outerHeight());
  
  if (typeof google === 'object' && typeof google.maps === 'object') {
    map = new google.maps.Map(document.getElementById('maps'), {
      center: {lat: 50.958437916169295, lng: 22.617467008531094},
      zoom: 9,
      scrollwheel: false,
      mapTypeControl: true,
	  styles:[
				{
					"featureType": "all",
					"elementType": "geometry",
					"stylers": [
						{
							"hue": "#ff7d00"
						},
						{
							"saturation": "-51"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"gamma": 0.01
						},
						{
							"lightness": 20
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"saturation": -31
						},
						{
							"lightness": -33
						},
						{
							"weight": 2
						},
						{
							"gamma": 0.8
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 30
						},
						{
							"saturation": 30
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape.natural.landcover",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape.natural.landcover",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "landscape.natural.terrain",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": 20
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 20
						},
						{
							"saturation": -20
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 10
						},
						{
							"saturation": -30
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"saturation": 25
						},
						{
							"lightness": 25
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"lightness": -20
						},
						{
							"visibility": "on"
						}
					]
				}
			]
    });
    addYourLocationButton(map);
    
    points = [
      {'lat':50.69445,'lon':22.98082,'name':'Szczebrzeszyn D.A. ul. Targowa','t':{
        's_l':['5:08 <small>Ea</small>','13:10 <small>Ea</small>','16:25 <small>7a</small>'],
        'l_s':['10:26 <small>Ea</small>','17:47 <small>Ea</small>','21:01 <small>7a</small>']
      },'lp':1},
      {'lat':50.685855,'lon':22.958851,'name':'Szczebrzeszyn ul. Przedm. Błonie II','t':{
        's_l':['5:11 <small>Ea</small>','13:13 <small>Ea</small>','16:28 <small>7a</small>'],
        'l_s':['10:23 <small>Ea</small>','17:44 <small>Ea</small>','20:58 <small>7a</small>']
      },'lp':2},
      {'lat':50.674189,'lon':22.946663,'name':'Kawęczyn III','t':{
        's_l':['5:13 <small>Ea</small>','13:15 <small>Ea</small>','16:30 <small>7a</small>'],
        'l_s':['10:21 <small>Ea</small>','17:42 <small>Ea</small>','20:56 <small>7a</small>']
      },'lp':3},
      {'lat':50.651111,'lon':22.9425,'name':'Topólcza II','t':{
        's_l':['5:16 <small>Ea</small>','13:18 <small>Ea</small>','16:33 <small>7a</small>'],
        'l_s':['10:18 <small>Ea</small>','17:39 <small>Ea</small>','20:53 <small>7a</small>']
      },'lp':4},
      {'lat':50.631667,'lon':22.945278,'name':'Turzyniec 3','t':{
        's_l':['5:18 <small>Ea</small>','13:20 <small>Ea</small>','16:35 <small>7a</small>'],
        'l_s':['10:16 <small>Ea</small>','17:37 <small>Ea</small>','20:15 <small>7a</small>']
      },'lp':5},
      {'lat':50.621111,'lon':22.947222,'name':'Wywłoczka','t':{
        's_l':['5:20 <small>Ea</small>','13:22 <small>Ea</small>','16:37 <small>7a</small>'],
        'l_s':['10:14 <small>Ea</small>','17:35 <small>Ea</small>','20:49 <small>7a</small>']
      },'lp':6},
      {'lat':50.612190,'lon':22.967077,'name':'Zwierzyniec Miasto skrzyż ul. Zamojskiej i Parkowej','t':{
        's_l':['5:22 <small>Ea</small>','13:24 <small>Ea</small>','16:39 <small>7a</small>'],
        'l_s':['10:12 <small>Ea</small>','17:33 <small>Ea</small>','20:47 <small>7a</small>']
      },'lp':7},
      {'lat':50.612190,'lon':22.967077,'name':'Zwierzyniec - skrzyżowanie\\ul. Zamojska','t':{
        's_l':['5:24 <small>Ea</small>','13:26 <small>Ea</small>','16:41 <small>7a</small>'],
        'l_s':['10:10 <small>Ea</small>','17:31 <small>Ea</small>','20:45 <small>7a</small>']
      },'lp':8},
      {'lat':50.602294,'lon':22.877076,'name':'Panasówka skrzyż. na Lipowiec','t':{
        's_l':['5:30 <small>Ea</small>','13:32 <small>Ea</small>','16:47 <small>7a</small>']
      },'lp':9},
      {'lat':50.624540,'lon':22.858394,'name':'Lipowiec I Tereszpolski','t':{
        's_l':['5:33 <small>Ea</small>','13:35 <small>Ea</small>','16:50 <small>7a</small>'],
        'l_s':['10:01 <small>Ea</small>','17:22 <small>Ea</small>','20:36 <small>7a</small>']
      },'lp':10},
      {'lat':50.631637,'lon':22.837014,'name':'Lipowiec II Tereszpolski','t':{
        's_l':['5:35 <small>Ea</small>','13:37 <small>Ea</small>','16:52 <small>7a</small>'],
        'l_s':['9:59 <small>Ea</small>','17:20 <small>Ea</small>','20:34 <small>7a</small>']
      },'lp':11},
      {'lat':50.631637,'lon':22.837014,'name':'Czarnystok III','t':{
        's_l':['5:38 <small>Ea</small>','13:40 <small>Ea</small>','16:55 <small>7a</small>'],
        'l_s':['9:56 <small>Ea</small>','17:17 <small>Ea</small>','20:31 <small>7a</small>']
      },'lp':12},
      {'lat':50.653002,'lon':22.837361,'name':'Czarnystok II','t':{
        's_l':['5:40 <small>Ea</small>','13:42 <small>Ea</small>','16:57 <small>7a</small>'],
        'l_s':['9:54 <small>Ea</small>','17:15 <small>Ea</small>','20:29 <small>7a</small>']
      },'lp':13},
      {'lat':50.666144,'lon':22.853445,'name':'Wólka Czarnystocka I','t':{
        's_l':['5:42 <small>Ea</small>','13:44 <small>Ea</small>','16:59 <small>7a</small>'],
        'l_s':['9:52 <small>Ea</small>','17:13 <small>Ea</small>','20:27 <small>7a</small>']
      },'lp':14},
      {'lat':50.677345,'lon':22.854746,'name':'Gorajec Zagroble I','t':{
        's_l':['5:44 <small>Ea</small>','13:46 <small>Ea</small>','17:01 <small>7a</small>'],
        'l_s':['9:50 <small>Ea</small>','17:11 <small>Ea</small>','20:25 <small>7a</small>']
      },'lp':15},
      {'lat':50.683580,'lon':22.846716,'name':'Gorajec Stara Wieś I','t':{
        's_l':['5:47 <small>Ea</small>','13:49 <small>Ea</small>','17:04 <small>7a</small>'],
        'l_s':['9:47 <small>Ea</small>','17:08 <small>Ea</small>','20:22 <small>7a</small>']
      },'lp':16},
      {'lat':50.703669,'lon':22.847002,'name':'Podborcze I','t':{
        's_l':['5:49 <small>Ea</small>','13:51 <small>Ea</small>','17:06 <small>7a</small>'],
        'l_s':['9:45 <small>Ea</small>','17:06 <small>Ea</small>','20:20 <small>7a</small>']
      },'lp':17},
      {'lat':50.722938,'lon':22.849636,'name':'Zaburze I','t':{
        's_l':['5:53 <small>Ea</small>','13:55 <small>Ea</small>','17:10 <small>7a</small>'],
        'l_s':['9:41 <small>Ea</small>','17:02 <small>Ea</small>','20:16 <small>7a</small>']
      },'lp':18},
      {'lat':50.734339,'lon':22.841269,'name':'Latyczyn I','t':{
        's_l':['5:55 <small>Ea</small>','13:57 <small>Ea</small>','17:12 <small>7a</small>'],
        'l_s':['9:39 <small>Ea</small>','17:00 <small>Ea</small>','20:14 <small>7a</small>']
      },'lp':19},
      {'lat':50.755633,'lon':22.826275,'name':'Radecznica II','t':{
        's_l':['5:58 <small>Ea</small>','14:00 <small>Ea</small>','17:15 <small>7a</small>'],
        'l_s':['9:36 <small>Ea</small>','16:57 <small>Ea</small>','20:11 <small>7a</small>']
      },'lp':20},
      {'lat':50.760275,'lon':22.821930,'name':'Zaporze I','t':{
        's_l':['6:01 <small>Ea</small>','14:03 <small>Ea</small>','17:18 <small>7a</small>'],
        'l_s':['9:33 <small>Ea</small>','16:54 <small>Ea</small>','20:08 <small>7a</small>']
      },'lp':21},
      {'lat':50.777862,'lon':22.812226,'name':'Wólka Czernięcińska','t':{
        's_l':['6:04 <small>Ea</small>','14:06 <small>Ea</small>','17:21 <small>7a</small>'],
        'l_s':['9:30 <small>Ea</small>','16:51 <small>Ea</small>','20:05 <small>7a</small>']
      },'lp':22},
      {'lat':50.803857,'lon':22.812883,'name':'Gaj Czernięciński','t':{
        's_l':['6:06 <small>Ea</small>','14:08 <small>Ea</small>','17:23 <small>7a</small>'],
        'l_s':['9:30 <small>Ea</small>','16:51 <small>Ea</small>','20:05 <small>7a</small>']
      },'lp':23},
      {'lat':50.803117,'lon':22.778110,'name':'Żurawie I','t':{
        's_l':['6:09 <small>Ea</small>','14:11 <small>Ea</small>','17:26 <small>7a</small>'],
        'l_s':['9:25 <small>Ea</small>','16:46 <small>Ea</small>','20:00 <small>7a</small>']
      },'lp':24},
      {'lat':50.811546,'lon':22.756480,'name':'Rokitów I','t':{
        's_l':['6:12 <small>Ea</small>','14:14 <small>Ea</small>','17:29 <small>7a</small>'],
        'l_s':['9:22 <small>Ea</small>','16:43 <small>Ea</small>','19:57 <small>7a</small>']
      },'lp':25},
      {'lat':50.811546,'lon':22.756480,'name':'Załawcze','t':{
        's_l':['6:14 <small>Ea</small>','14:16 <small>Ea</small>','17:31 <small>7a</small>'],
        'l_s':['9:20 <small>Ea</small>','16:41 <small>Ea</small>','19:55 <small>7a</small>']
      },'lp':26},
      {'lat':50.823024,'lon':22.741669,'name':'Turobin ul. Staszica','t':{
        's_l':['6:16 <small>Ea</small>','14:18 <small>Ea</small>','17:33 <small>7a</small>'],
        'l_s':['9:18 <small>Ea</small>','16:39 <small>Ea</small>','19:53 <small>7a</small>']
      },'lp':27},
      {'lat':50.832111,'lon':22.703665,'name':'Tarnawa Mała','t':{
        's_l':['6:20 <small>Ea</small>','14:22 <small>Ea</small>','17:37 <small>7a</small>'],
        'l_s':['9:14 <small>Ea</small>','16:35 <small>Ea</small>','19:49 <small>7a</small>']
      },'lp':28},
      {'lat':50.861173,'lon':22.687749,'name':'Guzówka','t':{
        's_l':['6:23 <small>Ea</small>','14:25 <small>Ea</small>','17:40 <small>7a</small>'],
        'l_s':['9:11 <small>Ea</small>','16:32 <small>Ea</small>','19:46 <small>7a</small>']
      },'lp':29},
      {'lat':50.871867,'lon':22.675123,'name':'Nowy Dwór - stacja paliw','t':{
        's_l':['6:25 <small>Ea</small>','14:27 <small>Ea</small>','17:42 <small>7a</small>'],
        'l_s':['9:09 <small>Ea</small>','16:30 <small>Ea</small>','19:44 <small>7a</small>']
      },'lp':30},
      {'lat':50.909353,'lon':22.665158,'name':'Wysokie plac komunikacji publi.','t':{
        's_l':['6:28 <small>Ea</small>','14:30 <small>Ea</small>','17:45 <small>7a</small>'],
        'l_s':['9:06 <small>Ea</small>','16:27 <small>Ea</small>','19:41 <small>7a</small>']
      },'lp':31},
      {'lat':50.956885,'lon':22.678763,'name':'Gielczew','t':{
        's_l':['6:31 <small>Ea</small>','14:33 <small>Ea</small>','17:48 <small>7a</small>'],
        'l_s':['9:03 <small>Ea</small>','16:24 <small>Ea</small>','19:38 <small>7a</small>']
      },'lp':32},
      {'lat':50.990353,'lon':22.677720,'name':'Giemiak - zajazd','t':{
        's_l':['6:34 <small>Ea</small>','14:36 <small>Ea</small>','17:51 <small>7a</small>'],
        'l_s':['9:00 <small>Ea</small>','16:20 <small>Ea</small>','19:35 <small>7a</small>']
      },'lp':33},
      {'lat':50.997762,'lon':22.673713,'name':'Zielona','t':{
        's_l':['6:37 <small>Ea</small>','14:39 <small>Ea</small>','17:54 <small>7a</small>'],
        'l_s':['8:57 <small>Ea</small>','16:17 <small>Ea</small>','19:32 <small>7a</small>']
      },'lp':34},
      {'lat':51.012160,'lon':22.665164,'name':'Boży Dar','t':{
        's_l':['6:38 <small>Ea</small>','14:40 <small>Ea</small>','17:55 <small>7a</small>'],
        'l_s':['8:56 <small>Ea</small>','16:16 <small>Ea</small>','19:31 <small>7a</small>']
      },'lp':35},
      {'lat':51.031121,'lon':22.648292,'name':'Piotrkówek','t':{
        's_l':['6:40 <small>Ea</small>','14:42 <small>Ea</small>','17:57 <small>7a</small>'],
        'l_s':['8:54 <small>Ea</small>','16:14 <small>Ea</small>','19:29 <small>7a</small>']
      },'lp':36},
      {'lat':51.045372,'lon':22.636481,'name':'Piotrków - szkoła','t':{
        's_l':['6:43 <small>Ea</small>','14:45 <small>Ea</small>','18:00 <small>7a</small>'],
        'l_s':['8:51 <small>Ea</small>','16:11 <small>Ea</small>','19:26 <small>7a</small>']
      },'lp':37},
      {'lat':51.063070,'lon':22.620153,'name':'Piotrków Drugi','t':{
        's_l':['6:46 <small>Ea</small>','14:48 <small>Ea</small>','18:03 <small>7a</small>'],
        'l_s':['8:48 <small>Ea</small>','16:08 <small>Ea</small>','19:23 <small>7a</small>']
      },'lp':38},
      {'lat':51.070411,'lon':22.612605,'name':'Jabłonna - III szkoła','t':{
        's_l':['6:48 <small>Ea</small>','14:50 <small>Ea</small>','18:05 <small>7a</small>'],
        'l_s':['8:46 <small>Ea</small>','16:06 <small>Ea</small>','19:21 <small>7a</small>']
      },'lp':39},
      {'lat':51.097594,'lon':22.578620,'name':'Jabłonna - II Urząd Gminy','t':{
        's_l':['6:51 <small>Ea</small>','14:53 <small>Ea</small>','18:08 <small>7a</small>'],
        'l_s':['8:43 <small>Ea</small>','16:03 <small>Ea</small>','19:18 <small>7a</small>']
      },'lp':40},
      {'lat':51.127488,'lon':22.599794,'name':'Czerniejów - I kościół','t':{
        's_l':['6:55 <small>Ea</small>','14:57 <small>Ea</small>','18:12 <small>7a</small>'],
        'l_s':['8:39 <small>Ea</small>','15:59 <small>Ea</small>','19:14 <small>7a</small>']
      },'lp':41},
      {'lat':51.141544,'lon':22.597673,'name':'Głuszczyzna','t':{
        's_l':['6:58 <small>Ea</small>','15:00 <small>Ea</small>','18:15 <small>7a</small>'],
        'l_s':['8:36 <small>Ea</small>','15:56 <small>Ea</small>','19:11 <small>7a</small>']
      },'lp':42},
      {'lat':51.155053,'lon':22.583475,'name':'Mętów - I szkoła','t':{
        's_l':['7:01 <small>Ea</small>','15:03 <small>Ea</small>','18:18 <small>7a</small>'],
        'l_s':['8:33 <small>Ea</small>','15:53 <small>Ea</small>','19:08 <small>7a</small>']
      },'lp':43},
      {'lat':51.164355,'lon':22.581348,'name':'Ćmiłów','t':{
        's_l':['7:03 <small>Ea</small>','15:05 <small>Ea</small>','18:20 <small>7a</small>'],
        'l_s':['8:31 <small>Ea</small>','15:51 <small>Ea</small>','19:06 <small>7a</small>']
      },'lp':44},
      {'lat':51.186878,'lon':22.585629,'name':'Lublin ul. Abramowicka\\\ Wólka Abramowicka 01\\02','t':{
        's_l':['7:08 <small>Ea</small>','15:10 <small>Ea</small>','18:25 <small>7a</small>'],
        'l_s':['8:26 <small>Ea</small>','15:46 <small>Ea</small>','19:01 <small>7a</small>']
      },'lp':45},
      {'lat':51.221040,'lon':22.577161,'name':'Lublin ul. Kunickiego\\ Mickiewicza 02','t':{
        's_l':['7:10 <small>Ea</small>','15:12 <small>Ea</small>','18:27 <small>7a</small>']
      },'lp':46},
      {'lat':51.224548,'lon':22.574433,'name':'Lublin ul. Kunickiego\\ Mickiewicza 01','t':{
        'l_s':['8:24 <small>Ea</small>','15:44 <small>Ea</small>','18:59 <small>7a</small>']
      },'lp':47},
      {'lat':51.228287,'lon':22.571671,'name':'Lublin ul. Kunickiego\\ Dom Kolejarza 02','t':{
        's_l':['7:12 <small>Ea</small>','15:14 <small>Ea</small>','18:29 <small>7a</small>'],
      },'lp':48},
      {'lat':51.232335,'lon':22.566706,'name':'Lublin Dworzec Południowy ul. Dworcowa 4','t':{
        's_l':['7:14 <small>Ea</small>','15:16 <small>Ea</small>','18:31 <small>7a</small>'],
        'l_s':['8:20 <small>Ea</small>','15:40 <small>Ea</small>','19:55 <small>7a</small>']
      },'lp':49}
    ];
    
    var image = {
      url: './images/busstop.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(32, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(16, 16)
    };
    for(i in points){
      source = '<strong>'+points[i].name+'</strong><br>';
      if(points[i]['t']['s_l']!=undefined){
        source+='<p>Szczebrzeszyn -> Lublin<br>\
        <span class="time">'+points[i]['t']['s_l'].join('</span><span class="time">')+'</span></p>';
      }
      // if(points[i]['t']['s_l']!=undefined && points[i]['t']['l_s']!=undefined){
        // source+='<br>';
      // }
      if(points[i]['t']['l_s']!=undefined){
        source+='<p>Lublin -> Szczebrzeszyn<br>\
        <span class="time">'+points[i]['t']['l_s'].join('</span><span class="time">')+'</span></p>';
      }
      infowindow = new google.maps.InfoWindow({
        content: source
      });
      markers[i] = new google.maps.Marker({
        map: map,
        position: {lat: points[i].lat,lng: points[i].lon},
        title: points[i].name,
        icon: image,
        ids: i,
        content: source
      });
      markers[i].addListener('click', function() {
        infowindow.setContent(this.content);
        infowindow.open(map, this);
      });
    }
    
    /*pathValues = [];
    for (var i = 0; i < points.length; i++) {
      pathValues.push(points[i].lat+','+points[i].lon);
    }
    
    $.get('https://roads.googleapis.com/v1/snapToRoads', {
      interpolate: true,
      key: 'AIzaSyD7NjQL02RILh18oUjHjWqq8cFopRbkXpo',
      path: pathValues.join('|')
    }, function(data) {
      var flightPlanCoordinates = new Array();
      for(i in data.snappedPoints){
        flightPlanCoordinates.push({'lat':data.snappedPoints[i]['location']['latitude'],'lng':data.snappedPoints[i]['location']['longitude']});
      }
      
      var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        strokeOpacity: 1.0,
        strokeWeight: 4
      });

      flightPath.setMap(map);
    });*/
    
    google.maps.event.addListener(map, 'dragend', function () {
      map_center = map.getCenter();
    });
    
    map_center = map.getCenter();
    
        map_mini = new google.maps.Map(document.getElementById('minimap'), {
          center: {lat: 50.703715, lng: 22.985791},
          zoom: 12
        });
    marker = new google.maps.Marker({
      position: {lat: 50.703715, lng: 22.985791},
      map: map_mini,
        });
  }
  $(".top_text").css('height',window.innerHeight-($('.logo').height()+parseInt($('.top_text').css('margin-top'))+parseInt($('.top_text').css('margin-bottom'))+$('#busy').height()+parseInt($('.decription').css('margin-top')))); 
  
  $('body').on('touchstart mouseover', function(e){
    if($(e.target).closest("div.button").length>0){  
      if(!$('div.small_menu div.button').hasClass('hover')){
        $('div.small_menu div.button').addClass('hover');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      else
      {
        $('div.small_menu div.button').addClass('hover');
      }
    }
    else
    {
      $('div.small_menu div.button').removeClass('hover');
    }
  });
  
  $('div.maps_route #maps').css('right',$('div.maps_route #hours').width()+60);
  $('#hours .routelist table').css('margin-bottom', $('#hours .info').height()+1);
  $('#hours .info, #hours .float_info').css('right',scrollbarWidth()+'px');
  $('#ofirmie').css('paddingTop',($('.logo').outerHeight()-2)+'px');
  $(window).trigger('resize');
  setTimeout(function(){
    $(window).trigger('resize');
  },10);
  
  
  $('#hours .routelist').scroll(function(){
    $el = $('#hours .routelist table tr th').eq(1).parent().prev();
    if($el.position().top-$('#szcz_lub').height()-11<0){
      $('#szcz_lub').css('top',$el.position().top-$('#szcz_lub').height()-11);
    }else{
      $('#szcz_lub').css('top',0);
    }
    
    $el2 = $('#hours .routelist table tr th').eq(1);
    if($el2.position().top<0){
      $('#lub_szcz').css('display','block');
    }else{      
      $('#lub_szcz').css('display','none');
    }
  });
  
  $( '.swipebox' ).swipebox();
  
  $('header ul.full li a').click(function(e){
    id_ = $(this).parent().index();
    if(id_ == 0){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    }else if(id_ == 1){
      $('html, body').animate({
        scrollTop: $(".maps_route").offset().top-$('header').height()
      }, 1000);
    }else if(id_ == 2){
      $('html, body').animate({
        scrollTop: $("#galeria").offset().top-$('header').height()
      }, 1000);
    }else if(id_ == 3){
      $('html, body').animate({
        scrollTop: $("#kontakt").offset().top-$('header').height()
      }, 1000);
    }
    e.preventDefault;
    e.stopPropagation;
    return false;
  });
  
  if($('#kontakt').position().top-$(window).scrollTop()-window.innerHeight<0){
    $('footer').removeClass('show');
  }else{
    $('footer').addClass('show');
  }
  
  if($("div.info_cookies").length > 0){
    $('footer').css('bottom',$('div.info_cookies').outerHeight());
    $('body').css('padding-bottom',$('div.info_cookies').outerHeight());
    $('#cookies').submit(function(e) {
      var exdate=new Date();
      exdate.setDate(exdate.getDate() + 4000);
      document.cookie='cookieAlert=1; expires='+exdate.toUTCString();
      
      $('div.info_cookies').remove();
      $('body').css('padding-bottom',0);
      $('footer').css('bottom',0);
      e.preventDefault();
      return false;
    });
  }
  
  navigator.permissions.query({name:'geolocation'}).then(function(result) {
    if(result.state == 'granted'){
      var options = {enableHighAccuracy: true,timeout: 10000,maximumAge: 0,desiredAccuracy: 0, frequency: 5000 };
      watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
      
    }
  });
});
function onSuccess(position) {

var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
  if (marker_gps) {
    // Marker already created - Move it
    marker_gps.setPosition(latlng);
    circle_gps.setCenter(latlng);
  }
  else {
    // Marker does not exist - Create it
    var image = {url: './images/location_dot.png', size: new google.maps.Size(14, 14),origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(7, 7)};
    marker_gps = new google.maps.Marker({
      position: latlng,
      icon: image,
      map: map,
      clickable: false,
      zIndex: 999,
      optimized: false
    });
    circle_gps = new google.maps.Circle({
      strokeWeight: 0,
      fillColor: '#4285F4',
      fillOpacity: 0.35,
      map: map,
      center: latlng,
      radius: position.coords.accuracy,
      clickable: false,
      zIndex: 997,
      optimized: false
    });
  }
}
function onError(error) {

}
$(window).on("scroll",function(){
  setblurtop();
  
  if($(document).height()-$(window).scrollTop()-window.innerHeight<=170){
    $('header ul.full li').eq(3).addClass('active');
    $('header ul.full li').not(':eq(3)').removeClass('active');
    $('header ul.minimal li').eq(3).addClass('active');
    $('header ul.minimal li').not(':eq(3)').removeClass('active');
    history.replaceState(null, "Kontakt", "#kontakt");
    document.title = 'Kontakt - Przewozy Partner';
  }else if($('#galeria').position().top-$(window).scrollTop()-$('header').height()-100<=0){
    $('header ul.full li').eq(2).addClass('active');
    $('header ul.full li').not(':eq(2)').removeClass('active');
    $('header ul.minimal li').eq(2).addClass('active');
    $('header ul.minimal li').not(':eq(2)').removeClass('active');
    history.replaceState(null, "Galeria", "#galeria");
    document.title = 'Galeria - Przewozy Partner';
  }else if($('.maps_route').position().top-$(window).scrollTop()-$('header').height()-100<=0){
    $('header ul.full li').eq(1).addClass('active');
    $('header ul.full li').not(':eq(1)').removeClass('active');
    $('header ul.minimal li').eq(1).addClass('active');
    $('header ul.minimal li').not(':eq(1)').removeClass('active');
    history.replaceState(null, "Rozkład jazdy", "#rozklad-jazdy");
    document.title = 'Rozkład jazdy - Przewozy Partner';
  }else{
    $('header ul.full li').eq(0).addClass('active');
    $('header ul.full li').not(':eq(0)').removeClass('active');
    $('header ul.minimal li').eq(0).addClass('active');
    $('header ul.minimal li').not(':eq(0)').removeClass('active');
    history.replaceState(null, "O firmie", '#');
    document.title = 'O firmie - Przewozy Partner';
  }
  
  if($('#kontakt').position().top-$(window).scrollTop()-window.innerHeight<0){
    $('footer').removeClass('show');
  }else{
    $('footer').addClass('show');
  }
});
$(window).on("resize",function(){
  $('#background_float').css('height',document.documentElement.clientHeight+160-$('footer').height());
  if(window.innerWidth>647){
    $('div.maps_route #maps').css('right',$('div.maps_route #hours').width()+60);
  }
  else{
    $('div.maps_route #maps').css('right','');
  }
  $(".top_text").css('height',window.innerHeight-($('.logo').height()+parseInt($('.top_text').css('margin-top'))+parseInt($('.top_text').css('margin-bottom'))+$('#busy').height()+parseInt($('.decription').css('margin-top')))); 
  
  $('#hours .routelist table').css('margin-bottom', $('#hours .info').height()+1);
  
  $('#maps').css('height',document.documentElement.clientHeight-$('footer').height()+'px');
    setblurtop();
  resize_bus();
  
  $(".top_text").textfill({ minFontPixels: 11 }); 
  
});
