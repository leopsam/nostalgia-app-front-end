import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // eslint-disable-next-line quotes
        'custom-image': "url('/images/background.jpg')",

        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1),  rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        alt: ['var(--font-bai-jamjuree)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
