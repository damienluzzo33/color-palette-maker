import { MediaQuery } from './MediaQueries';
import chroma from 'chroma-js';

const DraggableColorBoxStyles = {
    root: {
        height:'25%',
        width: '20%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-6px',
        color: "white",
        textAlign: "center",
        padding: "0.5rem",
        "&:hover": {
            "& svg": {
                color: "white",
                transform: "scale(1.5)"
            }
        },
        [MediaQuery.down("lg")]: {
            width: "25%",
            height: "20%"
		},
        [MediaQuery.down("md")]: {
            width: "50%",
            height: "10%"
		},
        [MediaQuery.down("sm")]: {
            width: "100%",
            height: "5%"
		}
    },
    boxContent: {
        position: "absolute",
		padding: "10px",
		width: "100%",
		left: "0px",
		bottom: "0px",
		color: (props) =>
			chroma.contrast('#fff', props.color) / chroma(props.color).luminance() >= 18 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "14px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.5s ease-in-out",
        fontSize: "20px"
    }
};

export default DraggableColorBoxStyles;