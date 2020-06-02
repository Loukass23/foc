import { red, teal, purple, deepPurple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import Quicksand from './Quicksand-VariableFont_wght.ttf';

const quicksand = {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 50,
    src: `
    local('Quicksand'),
    local('Quicksand-Regular'),
    url(${Quicksand}) format('ttf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};



const defaultTheme = createMuiTheme({})

const theme = createMuiTheme({
    ...defaultTheme,
    typography: {
        fontFamily: 'Montserrat',
        // fontWeightRegular: '900',
    },
    // overrides: {
    //     MuiCssBaseline: {
    //         '@global': {
    //             '@font-face': [quicksand],
    //         },
    //     },
    // },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1400,
            xl: 1700,
        },
    },
    palette: {
        primary: {
            // main: teal[600],
            main: '#4D8286',
        },
        secondary: {
            main: "#E4E8C1",
            // main: '#ffcdd2',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
theme.typography.h1 = {
    fontSize: '2rem',
    fontWeight: 100,
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4rem',
    },
};
theme.typography.h2 = {
    fontSize: '1.5rem',
    fontWeight: 100,
    [theme.breakpoints.up('sm')]: {
        fontSize: '3.75rem',
    },
};
// theme.typography.h3 = {
//     fontSize: '1.5rem',
//     fontWeight: 100,
//     [theme.breakpoints.up('sm')]: {
//         fontSize: '2.5rem',
//     },
// };
theme.typography.h4 = {
    fontSize: '1.2rem',
    fontWeight: 100,
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
};
theme.typography.h6 = {
    fontSize: '0.9rem',
    fontWeight: 100,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.2rem',
    },
};
export default theme;
