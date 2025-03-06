import type { Config } from 'tailwindcss'

import defaultColors from 'tailwindcss/defaultTheme'

const colors = {
    ...defaultColors,
    ...{
        "my-gold": {
            "500": "#EDAE0A",
        },
    },
}

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // (Nepovinné) ak máte šablóny aj v public, pridajte:
    // './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      // Tu si môžete doplniť vlastné farby, breakpoints, fonty...
      colors: colors,

    },
  },
  plugins: [],
} satisfies Config
