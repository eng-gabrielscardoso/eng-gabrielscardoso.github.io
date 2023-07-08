/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('/src/assets/backgrounds/contact.svg')",
        'education': "url('/src/assets/backgrounds/education.svg')",
        'experience': "url('/src/assets/backgrounds/experience.svg')",
        'footer': "url('/src/assets/backgrounds/footer.svg')",
        'introduction': "url('/src/assets/backgrounds/introduction.svg')",
        'resume': "url('/src/assets/backgrounds/resume.svg')",
      }
    },
    screens: {
      'xs': '340px',

      'sm': '620px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}
