module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        headerbg : "url(/src/Static/bg.svg)",
        p1 : "url(/src/Static/p1.jpg)",
        p2 : "url(/src/Static/p2.jpg)",
        p3 : "url(/src/Static/p3.jpg)",
        p4 : "url(/src/Static/p4.jpg)",
        p5 : "url(/src/Static/p5.jpg)",
        p6 : "url(/src/Static/p6.jpg)"

      }, colors:{
        'primary': "#FE8A01",
        'secondary': "#38322F",
        'dark': "#111111",
        'light': "#E4E4E4"
      }
    },
    
    
  },
  plugins: [],
}
