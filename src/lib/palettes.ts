export type PaletteType = {
	[key: string]: {
		one: string;
		two: string;
		three: string;
		four: string;
	};
};

// taken from https://www.canva.com/colors/color-palettes/

export const palettes: PaletteType = {
	'Mountain-Haze': {
		one: '#C3CEDA',
		two: '#738FA7',
		three: '#0C4160',
		four: '#071330'
	},
	'Summer-Splash': {
		one: '#05445E',
		two: '#189AB4',
		three: '#75E6DA',
		four: '#D4F1F4'
	},
	'Retro-Punch': {
		one: '#2FF3E0',
		two: '#F8D210',
		three: '#FA26A0',
		four: '#F51720'
	},
	'Icy-Gradient': {
		one: '#EEB5EB',
		two: '#C26DBC',
		three: '#C8F4F9',
		four: '#3CACAE'
	},
	'Warm-Sunset': {
		one: '#FD7F20',
		two: '#FC2E20',
		three: '#FDB750',
		four: '#010100'
	},
	'Melted-Ice-Cream': {
		one: '#5BB0BA',
		two: '#C15B78',
		three: '#EBF5F7',
		four: '#F6C8CC'
	},
	'Ripe-Harvest': {
		one: '#FF5C4D',
		two: '#FF9636',
		three: '#FFCD58',
		four: '#DAD870'
	},
	'Gingerbread-Ice-Cream': {
		one: '#6F5B3E',
		two: '#F9F6F0',
		three: '#C4AE78',
		four: '#171515'
	}
};
