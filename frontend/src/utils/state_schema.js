// This isn't actually a source file. It's more of just documentation of the structure of the state of the app

state = {
	foods : {
		12: {
			id: 12,
			name: 'Lasagna',
			description: 'A very meaty lasagna',
			owner: '24518345',
			post_date: 1443456222,
			expiration_date: 1443724200,
			quantity: 3,
			price: 2.00,
			distance: '0.1',

			fetching: false,
		},
		6: {
			id: 6,
			name: 'Brownies',
			description: 'Had some brownies left over after lunch today. They\'ve got M&Ms in them :)',
			owner: '59483366',
			post_date: 1443456222,
			expiration_date: 1443724200,
			quantity: 3,
			price: 2.00,
			distance: '0.2',

			fetching: false,
		},
	},
	users: {
		 '24518345' : {
				id: '24518345',
				name: 'Emily Neal',
				rating: 4.3,
		 },
		 '59483366' : {
			id: '59483366',
			name: 'Trina Walther',
			rating: 4.3,
		 },
		'555508501': {
			id: '555508501',
			name: 'Alex Jones',
			rating: 4.3,
		},
	},
	nearby_foods: {
		nearby: [12, 6],
		fetching: false,
	},
	loggedInUser: '55508501',

	facebookSdk : {
		status: FACEBOOK_INIT_COMPLETE,	 // Constants are defined in actions/facebook.js
	},

	router : {
		// injected by redux-router	
	}
}