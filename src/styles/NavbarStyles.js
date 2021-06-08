import { MediaQuery } from './MediaQueries';

const NavbarStyles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "5vh",
        width: "100%",
        "& span": {
            fontSize: "0.92rem",
            fontWeight: "600",
            marginRight: "0.5rem",
            [MediaQuery.down("xs")]: {
                marginRight: "0.5rem"
            },
            [MediaQuery.down("cell")]: {
                display: "none"
            }
        }
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        },
        [MediaQuery.down("xs")]: {
            display: props => props.allPaletteColors ? "none" : "flex"
		}
    },
    navbarSlider: {
        width: "350px",
        margin: "0 10px",
        display: "inline-block",
		"& .rc-slider-rail": {
			height: "8px"
		},
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
			backgroundColor: "green",
			outline: "none",
			border: "2px solid green",
			boxShadow: "none",
			width: "12px",
			height: "12px",
			top: "8px"
		},
        [MediaQuery.down("md")]: {
			width: "300px"
		},
        [MediaQuery.down("sm")]: {
			width: "140px"
		},
        [MediaQuery.down("xs")]: {
			width: "120px"
		},
        [MediaQuery.down("cell")]: {
            width: "100px",
            marginLeft: "1rem"
        }
    },
	ColorFormatSelector: {
        marginRight: "1rem",
        marginLeft: "auto",
    },
    select: {
        [MediaQuery.down("cell")]: {
            fontSize: "0.75rem"
        }
    }
}

export default NavbarStyles;
