module.exports = {
	outputStyle: 'sass',
	columns: 12,
	container: {
		maxWidth: '1660px', /* max-width оn very large screen */
		fields: '30px' /* side fields */
	},
	breakPoints: {
		lg: {
			width: '1200px', /* -> @media (max-width: 1200px) */
		},
		md: {
			width: '1024px'
		},
		sm: {
			width: '768px',
			fields: '15px'
		},
		xsm: {
			width: '600px',
			fields: '15px'
		},
		xs: {
			width: '480px'
		}
	}
};