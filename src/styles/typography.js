export const fonts = {
  primary: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  secondary: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export const typography = {
  head: {
    xs: `
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem; 
    letter-spacing: 0.00938rem;
    `,
    sm: `
    font-size: 1.5rem;
    font-weight: 400;
    `,
    md: `
    font-size: 2.125rem;
    font-weight: 400;  
    letter-spacing: 0.01563rem;
    `,
    lg: `
    font-size: 3rem;
    font-weight: 400;
    `,
    xl: `
    font-size: 3.8125rem;
    font-weight: 300;
    letter-spacing: -0.03125rem;
    `,
    xxl: `
    font-size: 6.0625rem;
    font-weight: 300;
    letter-spacing: -0.09375rem;
    `,
  },

  subtitle: {
    sm: `
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.125rem;
    letter-spacing: 0.00625rem;
    `,

    md: `
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.00938rem;
    `,
  },

  body: {
    sm: `
    font-family: Inter;
    font-size: 0.875rem;
    line-height: 1.25rem; 
    letter-spacing: 0.01563rem;
    `,
    md: `
    font-size: 1rem; 
    line-height: 1.5rem; 
    letter-spacing: 0.03125rem;
    `,
  },

  button: `
  font-family: ${fonts.secondary}
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem; 
  letter-spacing: 0.07813rem;
  text-transform: uppercase;
  `,

  caption: `
  font-family: ${fonts.secondary}
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem; 
  letter-spacing: 0.025rem;
  `,

  overline: `
  font-family: ${fonts.secondary}
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
  `,
};

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.primary};
  line-height: normal;
  `;
}

for (const size in typography.subtitle) {
  typography.subtitle[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.body) {
  typography.body[size] += `
  font-family: ${fonts.secondary};
  font-weight: 400;
  `;
}


