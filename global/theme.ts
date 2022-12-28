import { ComponentStyleConfig } from '@chakra-ui/react';

const colors = {
  primary: "#185cff",
  secondary: "#f78b43",
  accent: "#f2557a",
  white: "#ffffff",
  black: "#000000",
  grey: "#A1A3BB",
  green: "#1EA57D",
  lightGrey: "#e4e4e4",
  darkGrey: "#3f4046",
  lightestGrey: "#f6f6f6",
  negative: "#e46464",
  secondaryColor: "#f78b43",
  primaryButton: "#E51837",
  secondaryButton: "rgba(0, 0, 0, 0.4)",
  secondaryButtonHover: "rgba(0, 0, 0, 0.2)",
  hoverOverlay: "rgba(0, 0, 0, 0.1)",
  social: {
    whatsapp: "#00DE5D",
    twitter: "#2EAAF6",
    linkedin: "#0075BC",
    facebook: "#36549E"
  },
  
  modalGrey: "rgba(255, 255, 255, 0.80)",
  
  gradients: {
    primary: {
      default: "linear-gradient(139deg, #f78646 4%, #f3606f 50%, #f2557a)",
      hover:
        "linear-gradient(-137deg, #F78646 0%, #F67E4E 44%, #F3606F 98%, #F2557A 100%);"
    }
  }
};

const fontColors = {
  dark: "#050A31",
  light: colors.grey,
  white: colors.white,
  accent: colors.accent,
  bodyColor: colors.white,
  headerColor: colors.white,
};

const fonts = {
  default:
    "Inter, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif"
};


const background = {
  color: colors.secondary,
};

const button = {
  backgroundColor: colors.primary,
}

const fontSizes = {
  title: {
    small: "1.5rem",
    regular: "2.5rem",
    large: "5rem"
  },
  text: {
    smaller: "0.75rem",
    small: "0.875rem",
    regular: "1rem",
    large: "1.125rem"
  },
  secondaryText: {
    small: "0.625rem",
    regular: "0.75rem",
    large: "1rem"
  }
};

const fontWeights = {
  normal: 400,
  "semi-bold": 500,
  bold: 600,
  "semi-bolder": 700,
  bolder: 800
};

const borderStyle = {
  default: "1px solid rgba(105, 105, 105, 0.9)"
};

const borderRadius = {
  default: "5px",
  image: "0px"
};

const boxShadow = {
  default: "0 0 30px 0 rgba(0, 0, 0, 0.5)",
  button: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
  hover: "0 3px 8px 0 rgba(0, 0, 0, 0.2)",
  bottom: "0px 3px 9px -2px rgba(0,0,0,0.12)",
  right: "3px 0 5px -2px rgba(0, 0, 0, 0.25)",
  click: "0 2px 5px 0 rgba(0, 0, 0, 0.1)",
  glow: `0 0 4px 1px ${colors.primary}`,
  glowActive: `0 0 5px 2px ${colors.primary}`
};

const textShadow = {
  light: `0 0 4px ${colors.black}`,
  medium: `1px 1px 4px ${colors.black}`,
  strong: `2px 2px 4px ${colors.black}`,
}

const transition = {
  extraShort: "0.05s cubic-bezier(0.645, 0.045, 0.355, 1)",
  short: "0.1s cubic-bezier(0.645, 0.045, 0.355, 1)",
  long: "0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  oneSecond: "1s cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const backgroundOpacity = {
  black: "rgba(0, 0, 0, 0.55)",
  cardBackground: "rgba(255, 255, 255, 0.95)",
  carouselCard: "rgba(0, 0, 0, 0.76)",
  darkGrey: "rgba(33, 33, 33, 0.94)",
};

const zIndex = {
  [-2]: -2,
  [-1]: -1,
  [0]: 0,
  [1]: 1,
  [2]: 2,
  [3]: 3,
  [4]: 4,
  [5]: 5,
  [9]: 9,
  medium: 3,
  negative: -2
};

const buttonHeight = {
  smaller: "24px",
  small: "32px",
  regular: "40px",
  large: "48px"
};

const buttonFontSize = {
  small: "0.75rem",
  regular: "0.875rem",
  large: "1rem"
};

const pageToast: {
  [key: string]: {
    borderColor: string;
    background: string;
    iconColor: string;
    textColor: string;
  };
} = {
  info: {
    background: "rgba(204, 227, 250, 0.95)",
    borderColor: "#99C7F6",
    textColor: "#424876",
    iconColor: "#717698"
  },
  warning: {
    background: "#FFF5EA",
    borderColor: "#c9a86a",
    textColor: "#424876",
    iconColor: "#717698"
  },
  alert: {
    background: "#FEEFF9",
    borderColor: "#f5c3c4",
    textColor: "#424876",
    iconColor: "#717698"
  },
  success: {
    background: "#EEFCFD",
    borderColor: "#c5f5d4",
    textColor: "#424876",
    iconColor: "#717698"
  }
};
const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '5px', // <-- border radius is same for all variants and sizes
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'primary',
      color: 'white',
    },
    solid: {
      bg: 'primary',
      color: 'white',
      _hover: {color: 'white', background: 'primary'},
    },
    transparent: {
      color: 'white',
      _hover: {color: 'white', background: 'primary'},
    },
  }
}

const Menu: ComponentStyleConfig = {
  parts: ['menu', 'item'],
  variants: {
    noBackround: {
      item: {
        _focus: { backgroundColor: 'none' },
        _active: { backgroundColor: 'none' }
      },
    }
  },
}
export const GeepayTheme = {
  colors,
  fontColors,
  fonts,
  fontSizes,
  fontWeights,
  borderStyle,
  borderRadius,
  boxShadow,
  textShadow,
  transition,
  backgroundOpacity,
  zIndex,
  buttonFontSize,
  buttonHeight,
  pageToast,
  background,
  button,
  components: {
    Button,
    Menu
  }
};

export default GeepayTheme;