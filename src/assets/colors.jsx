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

export const indigo = {
  lightest: '#F5F7FF',
  light: '#EBEEFE',
  main: '#6366F1',
  dark: '#4338CA',
  darkest: '#312E81',
  contrastText: '#FFFFFF',
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

export const extra ={
  blue: '#5e72e4',
  indigo: '#5603ad',
  purple: '#8965e0',
  pink: '#f3a4b5',
  red: '#f5365c',
  orange: '#fb6340',
  yellow: '#ffd600',
  green: '#2dce89',
  teal: '#11cdef',
  cyan: '#2bffc6',
  white: '#fff',
  gray: '#8898aa',
  grayDark: '#32325d',
  light: '#ced4da',
  lighter: '#e9ecef',
  primary: '#5e72e4',
  secondary: '#f4f5f7',
  success: '#2dce89',
  info: '#11cdef',
  warning: '#fb6340',
  danger: '#f5365c',
  light: '#adb5bd',
  dark: '#212529',
  default: '#172b4d',
  white: '#fff',

}


export const customShadows = {
  medium: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}

export const customGradient = {
  orange : 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(242,175,92,1) 0%, rgba(242,224,92,0.5648460067620799) 100%)',
  green : 'linear-gradient(143deg, rgba(65,217,174,1) 0%, rgba(65,217,189,0.5732493681066176) 100%)',
  green2 : 'linear-gradient(48deg, rgba(21,186,14,0.7861345221682423) 0%, rgba(21,186,14,0.5732493681066176) 100%);',
  blue : 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(92,172,242,1) 0%, rgba(0,212,255,0.5508404045211834) 100%)',
  yellow: 'linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(255,212,59,1) 0%, rgba(229,255,59,0.5620448863139005) 100%)',
  main: '#10B981',
}

const colorsTheme = createTheme({
  palette: {
    neutral,
    indigo,
    success,
    info,
    warning,
    error,
    extra,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Puedes personalizar la fuente según tus preferencias
  },
  customGradient,
  customShadows,

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          p: 2,
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
        },
      },
    },
  },
  
});

export default colorsTheme;