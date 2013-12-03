$(document).ready(function() {
	$(".globalnav").tinyNav();

	$('html').addClass('js');

	$('.sproduct__title').click(function(event) {
		$(this).parent().toggleClass('is-opened')
	});
	$('.sproduct__showmore').click(function(event) {
		$(this).closest('.sproduct').toggleClass('is-showmore')
	});

	$('.product__nav').click(function(event) {
		$(this).find('a').toggleClass('is-active');
		return false;
	});

	$(".js-tabs-pane").removeClass("is-visible");
	$(".js-tabs-nav li:first").addClass("is-active");
	$(".js-tabs-pane:first").addClass("is-visible");

	$(".js-tabs-nav li").click(function() {
		$(".js-tabs-nav li").removeClass("is-active");
		$(this).addClass("is-active");
		$(".js-tabs-pane").removeClass("is-visible");
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).addClass("is-visible");
		return false;
	});

	$('.contact__hide').click(function() {
		if ($(this).parent().hasClass('is-active')) {
			$(this).parent().removeClass('is-active');
			$(this).html('Показать на карте<i></i>');
		}
		else {
			$('.contact__fields').removeClass('is-active');
			$('.contact__hide').html('Показать на карте<i></i>');
			$(this).parent().addClass('is-active');
			$(this).html('Скрыть карту<i></i>');
		}
	});

	$('.brands__btn-collapse').click(function() {
		if ($(this).parents('.brands__item').hasClass('is-active')) {
			$(this).parents('.brands__item').removeClass('is-active');
		}
		else {
			$('.brands__item').removeClass('is-active');
			$(this).parents('.brands__item').addClass('is-active');
		}
	});

	$('.showmore').click(function() {
		$('.prods_done tr').removeClass('is-hidden');
		$(this).css('display', 'none');
	});

	jQuery('body').click(function(event) {
		jQuery('.popup').addClass('is-active');
		jQuery('.overlay').addClass('is-active');
	});
	jQuery('.popup__close, .overlay').click(function(event) {
		jQuery('.popup').removeClass('is-active');
		jQuery('.overlay').removeClass('is-active');
	});




	function initMap(maptype, markers, data){

		
		
	    //var $ = jQuery;

	    $('#focus-single').click(function(){
	      $('#map1').vectorMap('set', 'focus', 'AU');
	    });
	    $('#focus-multiple').click(function(){
	      $('#map1').vectorMap('set', 'focus', ['AU', 'JP']);
	    });
	    $('#focus-init').click(function(){
	      $('#map1').vectorMap('set', 'focus', 1, 0, 0);
	    });
	    $('#map1').vectorMap({
	      map: maptype,
	      backgroundColor: '#ffffff',
	      regionStyle:{
	     	  initial: {
	     		    fill: 'white',
	     		    "fill-opacity": 1,
	     		    stroke: 'none',
	     		    "stroke-width": 0,
	     		    "stroke-opacity": 1
	     		  },
	     		  hover: {
	     		    "fill-opacity": 0.8
	     		  },
	     		  selected: {
	     		    fill: '#7b246e'
	     		  },
	     		  selectedHover: {
	     		  }
	     		},
	     	selectedRegions:["UA"],
	      focusOn: {
	        x: 0.71,
	        y: 0.4,
	        scale: 2
	      },
	      markers: markers,
	      markerStyle: {
	      	  initial: {
	      		    fill: '#ecb42c',
	      		    stroke: '#5b0d4e',
	      		    "fill-opacity": 1,
	      		    "stroke-width": 1,
	      		    "stroke-opacity": 1,
	      		    r: 4
	      		  },
	      		  hover: {
	      		    stroke: 'black',
	      		    "stroke-width": 2
	      		  },
	      		  selected: {
	      		    fill: 'blue'
	      		  },
	      		  selectedHover: {
	      		  }
	      		},
	      series: {
	        regions: [{
	          scale: ['#e0e0e0', '#b780ae'],
	          normalizeFunction: 'polynomial',
	          values: {
	            "AF": 0,
	            "AL": 0,
	            "DZ": 0,
	            "AO": 0,
	            "AG": 0,
	            "AR": 0,
	            "AM": 10,
	            "AU": 0,
	            "AT": 0,
	            "AZ": 10,
	            "BS": 0,
	            "BH": 0,
	            "BD": 0,
	            "BB": 0,
	            "BY": 0,
	            "BE": 0,
	            "BZ": 0,
	            "BJ": 0,
	            "BT": 0,
	            "BO": 0,
	            "BA": 0,
	            "BW": 0,
	            "BR": 0,
	            "BN": 0,
	            "BG": 0,
	            "BF": 0,
	            "BI": 0,
	            "KH": 0,
	            "CM": 0,
	            "CA": 0,
	            "CV": 0,
	            "CF": 0,
	            "TD": 0,
	            "CL": 0,
	            "CN": 0,
	            "CO": 0,
	            "KM": 0,
	            "CD": 0,
	            "CG": 0,
	            "CR": 0,
	            "CI": 0,
	            "HR": 0,
	            "CY": 0,
	            "CZ": 0,
	            "DK": 0,
	            "DJ": 0,
	            "DM": 0,
	            "DO": 0,
	            "EC": 0,
	            "EG": 10,
	            "SV": 0,
	            "GQ": 0,
	            "ER": 0,
	            "EE": 0,
	            "ET": 0,
	            "FJ": 0,
	            "FI": 0,
	            "FR": 0,
	            "GA": 0,
	            "GM": 0,
	            "GE": 10,
	            "DE": 0,
	            "GH": 0,
	            "GR": 0,
	            "GD": 0,
	            "GT": 0,
	            "GN": 0,
	            "GW": 0,
	            "GY": 0,
	            "HT": 0,
	            "HN": 0,
	            "HK": 0,
	            "HU": 0,
	            "IS": 0,
	            "IN": 0,
	            "ID": 0,
	            "IR": 0,
	            "IQ": 0,
	            "IE": 0,
	            "IL": 10,
	            "IT": 0,
	            "JM": 0,
	            "JP": 0,
	            "JO": 10,
	            "KZ": 0,
	            "KE": 0,
	            "KI": 0,
	            "KR": 0,
	            "KW": 10,
	            "KG": 0,
	            "LA": 0,
	            "LV": 0,
	            "LB": 0,
	            "LS": 0,
	            "LR": 0,
	            "LY": 0,
	            "LT": 0,
	            "LU": 0,
	            "MK": 0,
	            "MG": 0,
	            "MW": 0,
	            "MY": 10,
	            "MV": 0,
	            "ML": 0,
	            "MT": 0,
	            "MR": 0,
	            "MU": 0,
	            "MX": 0,
	            "MD": 0,
	            "MN": 0,
	            "ME": 0,
	            "MA": 0,
	            "MZ": 0,
	            "MM": 0,
	            "NA": 0,
	            "NP": 0,
	            "NL": 0,
	            "NZ": 0,
	            "NI": 0,
	            "NE": 0,
	            "NG": 0,
	            "NO": 0,
	            "OM": 0,
	            "PK": 0,
	            "PA": 0,
	            "PG": 0,
	            "PY": 0,
	            "PE": 0,
	            "PH": 0,
	            "PL": 10,
	            "PT": 0,
	            "QA": 0,
	            "RO": 0,
	            "RU": 10,
	            "RW": 0,
	            "WS": 0,
	            "ST": 0,
	            "SA": 0,
	            "SN": 0,
	            "RS": 0,
	            "SC": 0,
	            "SL": 0,
	            "SG": 0,
	            "SK": 0,
	            "SI": 0,
	            "SB": 0,
	            "ZA": 0,
	            "ES": 0,
	            "LK": 0,
	            "KN": 0,
	            "LC": 0,
	            "VC": 0,
	            "SD": 0,
	            "SR": 0,
	            "SZ": 0,
	            "SE": 0,
	            "CH": 0,
	            "SY": 0,
	            "TW": 0,
	            "TJ": 0,
	            "TZ": 0,
	            "TH": 0,
	            "TL": 0,
	            "TG": 0,
	            "TO": 0,
	            "TT": 0,
	            "TN": 0,
	            "TR": 0,
	            "TM": 10,
	            "UG": 0,
	            "UA": 10,
	            "AE": 0,
	            "GB": 0,
	            "US": 0,
	            "UY": 0,
	            "UZ": 0,
	            "VU": 0,
	            "VE": 0,
	            "VN": 0,
	            "YE": 0,
	            "ZM": 0,
	            "ZW": 0
	          }
	        }]
	      }
	    });
	    
	    for(var d in data){
	    	jvm["WorldMap"]["maps"]["world_mill_en"]["paths"][d]["name"] = data[d]["name"];
	    }
	}

	function initYMap(){
		//alert(Pl)
		 myMap = new ymaps.Map ("map", {
	         center: [38.00, 64.00],
	         zoom: 2
	     });
		 myMap.controls.add('smallZoomControl');
		for(var i in dataPlaces){
			
			myPlacemark = new ymaps.Placemark([dataPlaces[i]["latLng"][0], dataPlaces[i]["latLng"][1]], { 
		        hintContent: dataPlaces[i]["name"], 
		        balloonContent: dataPlaces[i]["balloonContent"] 
		    },{iconImageHref: dataPlaces[i]["img"],
		        iconImageSize: [12, 18],
		        iconImageOffset: [-6, -18]});
			myMap.geoObjects.add(myPlacemark);
		}
		$(".ymaps-copyrights-pane").hide()
	}


});


