import { createTheme } from '@mui/material/styles';

export const neutral = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
};

export const success = {
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF',
};

export const info = {
  lightest: '#ECFDFF',
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  darkest: '#164C63',
  contrastText: '#FFFFFF',
};

export const warning = {
  lightest: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#FFFFFF',
};

export const error = {
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF',
};

export const theme = {

  primary: 'rgb(30 64 175)',
  color_secondary: 'rgb(30 58 138)',
  color_accent: 'rgb(30 175 30)',

  text_heading: 'rgb(0 0 0)',
  text_default: 'rgb(16 16 16)',
  text_muted: 'rgb(16 16 16 / 66%)',
  bg_page: 'rgb(255 255 255)',
}

export const defaultStyleGrid = {
  boxShadow: 2,
  p: 2,
  borderRadius: 5,

};  

export const headerAlignProps = {
  headerAlign: 'center',
  align: 'center',
};

const colorsTheme = createTheme({
  palette: {
    neutral,
    success,
    info,
    warning,
    error,
    theme,
    background: {
      default: 'rgb(255 255 255)'
    }
  },
  typography: {
    allVariants: {
      // fontFamily: 'Open Sans, sans-serif',
    }
  },
  components: {
    MuiButton: {
      variants:
        [
          {
            props: { variant: "primary" },
            style: {
              //Change the Font Family?
              borderRadius: 100,
              fontWeight: 'bold',
              fontFamily: "'Open Sans', sans-serif", 
              fontSize: "1rem",
              paddingTop: "2%",
              paddingBottom: "2%",
              px: 3,
              backgroundColor: 'rgb(30 64 175)',
              "&:hover": { backgroundColor: 'rgb(30 58 138)' },
              color: 'rgb(255 255 255)',

            }
          }
        ]
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'grey',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'grey',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey',
              borderRadius: 15,
            },
            '&:hover fieldset': {
              borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'grey',
              borderRadius: 15,
            },
          },
        },
      },
    },
    
  }
});

export default colorsTheme;