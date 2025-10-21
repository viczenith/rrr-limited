// RIGHTEOUS AND RICH REALTY Color Palette
// Based on the logo image - sophisticated gray/silver tones

export const brandColors = {
  // Primary brand colors (from logo)
  primary: {
    50: '#f8f9fa',
    100: '#f1f3f4',
    200: '#e8eaed',
    300: '#dadce0',
    400: '#bdc1c6',
    500: '#9aa0a6', // Main primary color
    600: '#80868b',
    700: '#5f6368', // Darker primary
    800: '#3c4043',
    900: '#202124',
  },
  
  // Accent colors
  accent: {
    silver: '#c0c0c0',
    platinum: '#e5e4e2',
    charcoal: '#36454f',
    steel: '#71797e',
    slate: '#708090',
  },
  
  // Semantic colors
  success: {
    light: '#d4edda',
    main: '#28a745',
    dark: '#155724',
  },
  
  warning: {
    light: '#fff3cd',
    main: '#ffc107',
    dark: '#856404',
  },
  
  error: {
    light: '#f8d7da',
    main: '#dc3545',
    dark: '#721c24',
  },
  
  info: {
    light: '#d1ecf1',
    main: '#17a2b8',
    dark: '#0c5460',
  },
  
  // Neutral grays
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Text colors
  text: {
    primary: '#202124',
    secondary: '#5f6368',
    tertiary: '#9aa0a6',
    inverse: '#ffffff',
    muted: '#708090',
    // Beautiful enhanced text colors
    accent: '#36454f',
    platinum: '#e5e4e2',
    silver: '#c0c0c0',
    gold: '#d4af37',
    rose: '#e8b4b8',
    sky: '#a8c8ec',
    mint: '#b8e6b8',
    lavender: '#c8b8e6',
    coral: '#f0a8a8',
    // Gradient text colors
    gradientPrimary: 'linear-gradient(135deg, #36454f 0%, #5f6368 50%, #9aa0a6 100%)',
    gradientAccent: 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #e8d4a0 100%)',
    gradientElegant: 'linear-gradient(135deg, #36454f 0%, #708090 50%, #a8c8ec 100%)',
    gradientWarm: 'linear-gradient(135deg, #e8b4b8 0%, #f0a8a8 50%, #f8c8c8 100%)',
  },
  
  // Background colors
  background: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    tertiary: '#f1f3f4',
    inverse: '#202124',
    muted: '#e8eaed',
    // New sophisticated brand backgrounds
    hero: '#5f6368', // Main brand color for hero
    heroLight: '#80868b', // Lighter hero variant
    accent: '#36454f', // Charcoal accent for sections
    platinum: '#e5e4e2', // Light platinum for subtle backgrounds
    steelLight: '#f5f6f7', // Very light steel blue
  },
  
  // Border colors
  border: {
    light: '#e8eaed',
    medium: '#dadce0',
    dark: '#bdc1c6',
    primary: '#9aa0a6',
  }
}

// Tailwind CSS custom color classes
export const tailwindColors = {
  primary: {
    50: 'oklch(0.99 0.003 264)',
    100: 'oklch(0.98 0.006 264)',
    200: 'oklch(0.95 0.01 264)',
    300: 'oklch(0.9 0.01 264)',
    400: 'oklch(0.7 0.02 264)',
    500: 'oklch(0.5 0.02 264)', // Main primary
    600: 'oklch(0.4 0.02 264)',
    700: 'oklch(0.25 0.03 264)', // Darker primary
    800: 'oklch(0.15 0.02 264)',
    900: 'oklch(0.12 0.02 264)',
  },
  
  accent: {
    silver: '#c0c0c0',
    platinum: '#e5e4e2',
    charcoal: '#36454f',
    steel: '#71797e',
    slate: '#708090',
  }
}

// CSS custom properties for dynamic theming
export const cssVariables = {
  '--color-primary-50': '#f8f9fa',
  '--color-primary-100': '#f1f3f4',
  '--color-primary-200': '#e8eaed',
  '--color-primary-300': '#dadce0',
  '--color-primary-400': '#bdc1c6',
  '--color-primary-500': '#9aa0a6',
  '--color-primary-600': '#80868b',
  '--color-primary-700': '#5f6368',
  '--color-primary-800': '#3c4043',
  '--color-primary-900': '#202124',
  
  '--color-accent-silver': '#c0c0c0',
  '--color-accent-platinum': '#e5e4e2',
  '--color-accent-charcoal': '#36454f',
  '--color-accent-steel': '#71797e',
  '--color-accent-slate': '#708090',
  
  '--color-text-primary': '#202124',
  '--color-text-secondary': '#5f6368',
  '--color-text-tertiary': '#9aa0a6',
  '--color-text-inverse': '#ffffff',
  '--color-text-muted': '#708090',
  '--color-text-accent': '#36454f',
  '--color-text-platinum': '#e5e4e2',
  '--color-text-silver': '#c0c0c0',
  '--color-text-gold': '#d4af37',
  '--color-text-rose': '#e8b4b8',
  '--color-text-sky': '#a8c8ec',
  '--color-text-mint': '#b8e6b8',
  '--color-text-lavender': '#c8b8e6',
  '--color-text-coral': '#f0a8a8',
  '--color-gradient-text-primary': 'linear-gradient(135deg, #36454f 0%, #5f6368 50%, #9aa0a6 100%)',
  '--color-gradient-text-accent': 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #e8d4a0 100%)',
  '--color-gradient-text-elegant': 'linear-gradient(135deg, #36454f 0%, #708090 50%, #a8c8ec 100%)',
  '--color-gradient-text-warm': 'linear-gradient(135deg, #e8b4b8 0%, #f0a8a8 50%, #f8c8c8 100%)',
  
  '--color-bg-primary': '#ffffff',
  '--color-bg-secondary': '#f8f9fa',
  '--color-bg-tertiary': '#f1f3f4',
  '--color-bg-inverse': '#202124',
  '--color-bg-muted': '#e8eaed',
  '--color-bg-hero': '#5f6368',
  '--color-bg-hero-light': '#80868b',
  '--color-bg-accent': '#36454f',
  '--color-bg-platinum': '#e5e4e2',
  '--color-bg-steel-light': '#f5f6f7',
  
  '--color-border-light': '#e8eaed',
  '--color-border-medium': '#dadce0',
  '--color-border-dark': '#bdc1c6',
  '--color-border-primary': '#9aa0a6',
  
  // Gradient variables
  '--gradient-hero': 'linear-gradient(135deg, #5f6368 0%, #80868b 50%, #9aa0a6 100%)',
  '--gradient-hero-subtle': 'linear-gradient(135deg, #80868b 0%, #9aa0a6 100%)',
  '--gradient-accent-section': 'linear-gradient(135deg, #36454f 0%, #708090 100%)',
  '--gradient-platinum': 'linear-gradient(135deg, #e5e4e2 0%, #f1f3f4 100%)',
  '--gradient-charcoal': 'linear-gradient(135deg, #36454f 0%, #3c4043 100%)',
}

// Helper functions for color manipulation
export const colorUtils = {
  // Get color opacity
  withOpacity: (color: string, opacity: number) => {
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16)
      const g = parseInt(color.slice(3, 5), 16)
      const b = parseInt(color.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
    return color
  },
  
  // Lighten color
  lighten: (color: string, percent: number) => {
    // Simple implementation - in production, use a proper color library
    return color
  },
  
  // Darken color
  darken: (color: string, percent: number) => {
    // Simple implementation - in production, use a proper color library
    return color
  },
  
  // Get contrasting text color
  getContrastColor: (bgColor: string) => {
    // Simple implementation - return black or white based on background
    const color = bgColor.toLowerCase()
    if (color.includes('f') || color.includes('e') || color.includes('d')) {
      return '#202124'
    }
    return '#ffffff'
  }
}

// Brand gradient definitions
export const gradients = {
  primary: 'linear-gradient(135deg, #5f6368 0%, #9aa0a6 100%)',
  primaryLight: 'linear-gradient(135deg, #e8eaed 0%, #f1f3f4 100%)',
  primaryDark: 'linear-gradient(135deg, #202124 0%, #3c4043 100%)',
  accent: 'linear-gradient(135deg, #c0c0c0 0%, #e5e4e2 100%)',
  success: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
  warning: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
  error: 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)',
  info: 'linear-gradient(135deg, #17a2b8 0%, #6610f2 100%)',
  // New sophisticated brand gradients
  hero: 'linear-gradient(135deg, #5f6368 0%, #80868b 50%, #9aa0a6 100%)',
  heroSubtle: 'linear-gradient(135deg, #80868b 0%, #9aa0a6 100%)',
  accentSection: 'linear-gradient(135deg, #36454f 0%, #708090 100%)',
  platinum: 'linear-gradient(135deg, #e5e4e2 0%, #f1f3f4 100%)',
  charcoal: 'linear-gradient(135deg, #36454f 0%, #3c4043 100%)',
}

// Shadow definitions using brand colors
export const shadows = {
  sm: '0 1px 2px 0 rgba(31, 41, 55, 0.05)',
  md: '0 4px 6px -1px rgba(31, 41, 55, 0.1), 0 2px 4px -1px rgba(31, 41, 55, 0.06)',
  lg: '0 10px 15px -3px rgba(31, 41, 55, 0.1), 0 4px 6px -2px rgba(31, 41, 55, 0.05)',
  xl: '0 20px 25px -5px rgba(31, 41, 55, 0.1), 0 10px 10px -5px rgba(31, 41, 55, 0.04)',
  '2xl': '0 25px 50px -12px rgba(31, 41, 55, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(31, 41, 55, 0.06)',
  
  // Brand-specific shadows
  primary: '0 4px 6px -1px rgba(159, 160, 166, 0.3), 0 2px 4px -1px rgba(159, 160, 166, 0.2)',
  accent: '0 4px 6px -1px rgba(192, 192, 192, 0.3), 0 2px 4px -1px rgba(192, 192, 192, 0.2)',
}

const brandConfig = {
  brandColors,
  tailwindColors,
  cssVariables,
  colorUtils,
  gradients,
  shadows,
}

export default brandConfig