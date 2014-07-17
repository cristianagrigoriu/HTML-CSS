function show() {
	prompt("Please enter your name", "Harry Potter");
}

function appendRowsToTable() {
	var hotels = buildTable();
	
	var table = document.getElementById("hotelsBody");
	
	for (var i=0; i<hotels.length; i++) {
		var row = table.insertRow(i);
		
		var cell = row.insertCell(0);
		cell.innerHTML = hotels[i].name;
		
		var cell = row.insertCell(1);
		cell.innerHTML = hotels[i].location;
		
		var cell = row.insertCell(2);
		cell.innerHTML = hotels[i].details;
		
		//var oImg=document.createElement("img");
		//oImg.src="star.jpg";
		var cell = row.insertCell(3);
		cell.className = "starPicture";
		for (var j=0; j<hotels[i].stars; j++) {
			var oImg=document.createElement("img");
			oImg.src="star.jpg";
			cell.appendChild(oImg);
		}
		//cell.appendChild(hotels[i]["stars"]);
		
		/*var countColumn = 0;
		for (var prop in hotels[i]) {//(var j=0; j<Object.keys(hotels).length; j++) {
			var cell = row.insertCell(countColumn);
			cell.innerHTML = hotels[i][prop];
			countColumn++;
		}*/
	}
}

function buildTable() {
	var oImg=document.createElement("img");
	//oImg.setAttribute('src', "C:\Users\cristiana.grigoriu\Pictures\star.jpg");
	oImg.src="star.jpg";

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