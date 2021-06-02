const NavbarStyles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        width: "100%"
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
        }
    },
    navbarSlider: {
        width: "350px",
        margin: "0 10px",
        display: "inline-block"
    },
    ColorFormatSelector: {
        marginRight: "1rem",
        marginLeft: "auto"
    }
    ,
    rcSliderTrack: {
        backgroundColor: "transparent"
    },
    rcSliderRail: {
        height: "8px"
    },
    rcSliderHandle: {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "12px",
        height: "12px",
        top: "8px",
        "&:active": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "12px",
            height: "12px",
            top: "8px"
        },
        "&:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "12px",
            height: "12px",
            top: "8px"
        },
        "&:focus": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "12px",
            height: "12px",
            top: "8px"
        }
    }
}

export default NavbarStyles;
