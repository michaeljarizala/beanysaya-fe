module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          customFont: ['"Open Sans']
        },
        backgroundSize: {
          'size-200': '200% 200%',
        },
        backgroundPosition: {
          'pos-100': '0% 0%',
          'pos-50': '50% 50%',
          'pos-0': '100% 100%',
        },
      },
    },
    plugins: [],
  }