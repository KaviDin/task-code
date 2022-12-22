	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				// country: "GB",
				// lang: "en"
				country: $('#selCountry').val() ? $('#selCountry').val() : "GB",
				lang: $('#selLanguage').val() ? $('#selLanguage').val() :"en"
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

					$('#result').html(JSON.stringify(result['data'][0], undefined, 2))

				}
				
				// var element = $("#json");
				// var obj = JSON.parse(element.text());
				// element.html(JSON.stringify(obj, undefined, 2));
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#btnTimeZone').click(function() {

		$.ajax({
			url: `http://api.geonames.org/timezoneJSON?lat=${$('#latitude').val()}&lng=${$('#longitude').val()}&username=flightltd`,
			type: 'POST',
			dataType: 'json',
			data: {
				// country: "GB",
				// lang: "en"
				// country: $('#selCountry').val() ? $('#selCountry').val() : "GB",
				// lang: $('#selLanguage').val() ? $('#selLanguage').val() :"en"
			},
			success: function(result) {

				console.log(JSON.stringify(result));
				$('#result').html(JSON.stringify(result, undefined, 2))
				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

					$('#result').html(JSON.stringify(result['data'][0], undefined, 2))

				}
				
				// var element = $("#json");
				// var obj = JSON.parse(element.text());
				// element.html(JSON.stringify(obj, undefined, 2));
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#btnPostCode').click(function() {
		console.log("clicked postcode")
		$.ajax({
			url: `http://api.geonames.org/streetNameLookupJSON?q=${$('#queryStreet').val()}&username=flightltd`,
			type: 'POST',
			dataType: 'json',
			data: {
				// country: "GB",
				// lang: "en"
				// q: $('#queryStreet').val() ? $('#queryStreet').val() : "",
				// country: $('#selCountryCode').val() ? $('#selCountryCode').val() :"GB"
			},
			success: function(result) {

				console.log(JSON.stringify(result));
				$('#result').html(JSON.stringify(result, undefined, 2))
				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

					$('#result').html(JSON.stringify(result['data'][0], undefined, 2))

				}
				
				// var element = $("#json");
				// var obj = JSON.parse(element.text());
				// element.html(JSON.stringify(obj, undefined, 2));
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$(window).on('load', function () {
		if ($('#preloader').length) {
		$('#preloader').delay(1000).fadeOut('slow', function () {
		$(this).remove();
		});
		}
		});
		