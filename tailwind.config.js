module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				vert: "#1DB954",
				dark: "#121212",
				light: "#B3B3B3",
				darkest: "#191414"
			},
			width: {
				mainImage: "10rem",
				musicControls: "30rem"
			},
			height: {
				maincontentheight: "88vh",
				footer: "12vh",
				mainImage: "10rem"
			},
			gridTemplateRows: {
				nav: "repeat(5, 1fr)"
			},
			margin: {
				tiny: "0.05rem"
			}
			// //NEW:
			// screens: {
			// 	fullWithBar: { max: "750px" }
			// }
		}
	},
	variants: {},
	plugins: []
};
