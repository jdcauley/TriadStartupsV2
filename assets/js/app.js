// Maps
		var map = L.map('map', {
			center: [36.097661, -80.023384],
			zoom: 10,
			scrollWheelZoom: false,
		});
		
	L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
    key: 'd887d48dc38d41cfb032d35987d34118',
    styleId: 77922,
    maxZoom: 18,
    minZoom: 8,
}).addTo(map);
