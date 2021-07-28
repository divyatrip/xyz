import { createMuiTheme } from '@material-ui/core/styles';

const blue = "#0B7289"
const orange = "#ffB460"

export default createMuiTheme ({
    palette: {
        common:{
            blue: '$(arcblue)',
            orange: '$(arcorange)'
        },
    
    primary: {
        main: '$(arcBlue)'
    },
    secondary: {
        main: '$(arcOrange)'
    }
    },
    typography: {
        tab:{
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        signUp:{
            textTransform:"none",
            fontSize:"1rem",
            color:"white"
        }
    }
})