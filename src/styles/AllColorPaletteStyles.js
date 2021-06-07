import { MediaQuery } from './MediaQueries';

const AllColorPaletteStyles = {
	root: {
		backgroundColor: 'blue',
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
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
            background: "#0965bb",
            fontWeight: "bold",
            paddingBottom: "6px"
        },
        [MediaQuery.down("xs")]: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "20px"
        }
    },
	palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "2.5rem 2.5rem",
        [MediaQuery.down("lg")]: {
            gridTemplateColumns: "repeat(3,30%)"
        },
        [MediaQuery.down("md")]: {
            gridTemplateColumns: "repeat(2,46.5%)",
            gridGap: "2rem 2rem"
        },
        [MediaQuery.down("xs")]: {
            gridTemplateColumns: "repeat(1, 87%)",
            gridGap: "1rem 0rem",
            justifyContent: "center"
        }
    }
};

export default AllColorPaletteStyles;