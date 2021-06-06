import { DRAWER_WIDTH } from '../CONSTANTS';

const drawerWidth = DRAWER_WIDTH;

const NewPaletteFormStyles = (theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		alignItems: "center"
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		width: "100%",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
		"& span": {
			color: "rgba(0, 0, 0, 0.54)"
		}
	},
	content: {
		flexGrow: 1,
        height: "calc(100vh - 64px)",
		padding: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	drawerButtons: {
		width: "100%"
	},
	btn: {
		width: "50%"
	},
	drawerContainer: {
		width: "90%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%"
	}
});

export default NewPaletteFormStyles;