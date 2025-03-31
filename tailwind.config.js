/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    extend: {
      colors: {
        "sys-background": "var(--mat-sys-background)",
        "sys-on-background": "var(--mat-sys-on-background)",
        "sys-primary": "var(--mat-sys-primary)",
        "sys-on-primary": "var(--mat-sys-on-primary)",
      },
      texts: {
        "very-large": '2rem',
      }
    },
  },
  plugins: [],
}

