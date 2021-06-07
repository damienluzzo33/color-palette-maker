import { DRAWER_WIDTH } from '../CONSTANTS';

const drawerWidth = DRAWER_WIDTH;
const CreatePaletteNavStyles = (theme) => ({
	root: {
		display: "flex"
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2),
		"& span": {
			color: "rgba(0, 0, 0, 0.54)"
		}
	},
	hide: {
		display: 'none'
	},
	navButtons: {
		marginRight: "1rem",
		"& a": {
			textDecoration: "none"
		}
	},
	btns: {
		margin: "0 0.5rem"
	}
});

export default CreatePaletteNavStyles;