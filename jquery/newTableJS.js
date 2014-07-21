function show() {
	prompt("Please enter your name", "Harry Potter");
}

$(document).ready(function() {
	appendRowsToTable();
	addHotel();
});

function appendRowsToTable() {
	var hotels = buildTable();
	
	for (var i=0; i<hotels.length; i++) {
		var currentRow = $('#hotelsTable > tbody:last');
		var contentRow = '<tr><td>' + hotels[i].name + '</td><td class="location">' + hotels[i].location + '</td><td>' + hotels[i].details + '</td>';
		
		contentRow += '<td class="starPicture">';
		for (var j=0; j<hotels[i].stars; j++) {
			contentRow += '<img src = "star.jpg"/>';
		}
		
		contentRow += '</td><td><button type="button" id="edit">Edit</button>' + '<button type="button" id="delete">Delete</button></td>';
		
		contentRow += '</tr>'
		currentRow.append(contentRow);
	}
}

function buildTable() {
	var hotels = [{
		name: "Hilton Hotel",
		location: "New York, USA",
		details: "The Millenium Hilton hotel is conveniently located right in the heart of New York City.",
		stars: 5
	},
	{
		name: "IceHotel",
		location: "Iceland, Europe",
		details: "Creativity is our lifeblood. Every winter for almost 25 years ICEHOTEL rises again and every time with brand new art and design.",
		stars: 4
	},
	{
		name: "Budapest Grand Hotel",
		location: "Hungary, Europe",
		details: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars.",
		stars: 3
	},
	{
		name: "Holiday Inn Express",
		location: "UK, Europe",
		details: "Step directly from bustling Old Street into Holiday Inn Express London-City's bright and welcoming lobby.",
		stars: 4
	},
	{
		name: "New Hilton Hotel",
		location: "Saudi Arabia, Asia",
		details: "Overlooking the Kaabah, the Haram and the Holy City, the Makkah Hilton Hotel is set in the heart of Makkah, Saudi Arabia.",
		stars: 5
	}];
	
	return hotels;
}

function addHotel() {
	$('#addHotel').click( function() {
		var emptyRow = $('<tr><td><input id="name" type="text" placeholder="Name..."></td>' + '<td><select id="cities"></select></td>' + '<td><textarea id="description" maxlength="200" placeholder="Short description (max. 200 characters)"></textarea></td>' + '<td><select id="stars"></select></td>' + '<td><button type="button" id="save">Save</button>' + '<button type="button" id="cancel">Cancel</button></td></tr>');
		
		$(emptyRow).insertBefore('#hotelsTable > tbody > tr:first');
				
		var cities = ["New York", "Iceland", "Hungary", "UK", "Saudi Arabia"];
		$.each(cities, function(value, index) {
			$('#cities').append('<option>' + index + '</option>');
		});
		
		var stars = [1, 2, 3, 4, 5];
		$.each(stars, function(value, index) {
			$('#stars').append('<option>' + index + '</option>');
		});
		
		saveNewHotel();
		cancelNewHotel();
	});
}

function saveNewHotel() {
	$('#save').click(function ()
	{
		var currentRow = $('#hotelsTable > tbody:last');
		var contentRow = '<tr><td>' + $('#name').val() + '</td><td class="location">' + $('#cities').val() + '</td><td>' + $('#description').val() + '</td>';
		
		contentRow += '<td class="starPicture">';
		for (var j=0; j<$('#stars').val(); j++) {
			contentRow += '<img src = "star.jpg"/>';
		}
		
		contentRow += '</td><td><button type="button" id="edit">Edit</button>' + '<button type="button" id="delete">Delete</button></td>';
		
		contentRow += '</tr>'
		currentRow.append(contentRow);
		
		DeleteFirstRow();
	});
}

function cancelNewHotel() {
	$('#cancel').click (function() 
	{
		DeleteFirstRow();
	});
}

function DeleteFirstRow() {
	$('#hotelsTable tbody tr:first').remove();
}