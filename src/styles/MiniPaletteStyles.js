const MiniPaletteStyles = {
	root: {
        backgroundColor: "#181b1c",
        border: "0px solid black",
        borderRadius: "5px",
        // padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: "1"
        }
    },
    miniColors: {
        backgroundColor: "#181b1c",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    paletteTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        paddingLeft: "0.5rem",
        paddingTop: "0.5rem",
        fontSize: "1.1rem",
        position: "relative",
        backgroundColor: "#181b1c",
        color: "white"
    },
    paletteEmoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",
        paddingRight: "0.5rem",
        paddingBottom: "0.25rem"
    },
    miniBox: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-6px"
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        top: "0px",
        right: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: "0",
        transition: "all 0.4s ease-in-out"
    }
};

export default MiniPaletteStyles;