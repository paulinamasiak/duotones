const fontSizes = {
  sm: '12px',
  md: '14px',
  lg: '18px',
};

const variants = {
  h1: {
    fontSize: '2.5rem',
  },
  h2: {
    fontSize: '2rem',
  },
  h3: {
    fontSize: '1.75rem',
  },
  h4: {
    fontSize: '1.5rem',
  },
  h5: {
    fontSize: '1.25rem',
  },
  h6: {
    fontSize: '1rem',
  },
  body: {
    fontSize: '0.875rem',
  },
};

const typography = {
  fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  fontSizes,
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightBold: '600',
  ...variants,
};

export default typography;
