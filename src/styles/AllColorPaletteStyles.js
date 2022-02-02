import { MediaQuery } from './MediaQueries';
// import svgBackground from './svgBackground.svg';
import diagonal_stripes from './SVGBGS/diagnal_stripes.svg';
import white_pixels from './SVGBGS/white_pixels.svg';

const AllColorPaletteStyles = {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
	root: {
		height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#1173cb",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${white_pixels})`,
        // backgroundAttachment: "local, scroll",
        backgroundSize: "cover",
        overflow: "scroll"
	},
	container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [MediaQuery.down("xl")]: {
            width: "60%"
        },
        [MediaQuery.down("lg")]: {
            width: "70%"
        },
        [MediaQuery.down("md")]: {
            width: "70%"
        },
        [MediaQuery.down("sm")]: {
            width: "75%"
        },
        [MediaQuery.down("xs")]: {
            width: "85%"
        },
        [MediaQuery.down("xs")]: {
            width: "85%"
        },
        [MediaQuery.down("xs")]: {
            width: "100%"
        }
    },
	nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white",
            textDecoration: "none",
            border: "1px solid white",
            padding: "0.25rem 0.75rem",
            borderRadius: "15px",
            background: "#16264f",
            fontWeight: "bold",
            paddingBottom: "6px",
            [MediaQuery.down("xs")]: {
                padding: "0",
                border: "none",
                background: "none",
                color: "white"
            },
            "& span": {
                [MediaQuery.down("xs")]: {
                    display: "none"
                }
            },
            "& svg": {
                [MediaQuery.up("xs")]: {
                    display: "none"
                },
                [MediaQuery.down("cell")]: {
                    transform: "scale(0.8)"
                }
            }
        },
        [MediaQuery.down("xs")]: {
            justifyContent: "space-around"
        },
        [MediaQuery.up("lg")]: {
            width: "98%"
        }
    },
	allMiniPalettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "2.5rem 2.5rem",
        [MediaQuery.down("lg")]: {
            gridTemplateColumns: "repeat(3,30%)"
        },
        [MediaQuery.down("md")]: {
            gridTemplateColumns: "repeat(2,47.5%)",
            gridGap: "2rem 2rem"
        },
        [MediaQuery.down("xs")]: {
            gridTemplateColumns: "repeat(1, 87%)",
            gridGap: "1rem 0rem",
            justifyContent: "center"
        },
        [MediaQuery.down("cell")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "0.5rem 0rem",
            justifyContent: "center"
        }
    },
    title: {
        fontSize: "2.25rem",
        color: "white",
        textShadow: "2px 2px 2px #16264f",
        [MediaQuery.down("cell")]: {
            fontSize: "1.75rem"
        }
    }
};

export default AllColorPaletteStyles;