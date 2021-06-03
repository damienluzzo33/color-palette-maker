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
        flexWrap: "wrap"
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
        }
    },
	palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    }
};

export default AllColorPaletteStyles;