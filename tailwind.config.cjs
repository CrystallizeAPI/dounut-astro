/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,tsx}'],
    theme: {
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1600px",
        },
        container: {
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
        },
        colors: {
          primary: "#FFF7F0",
          secondary: "#FEE8F0",
          topicBackground: "#rgba(0, 0, 0, 0.05)",
          text: "#373567",
          white: "#FFFFFF",
          background1: "#F0EFEB",
          background2: "#C5DEDD",
          background3: "#D6E2E9",
          background4: "#EDDCD2",
          background5: "#FAD2E1",
          grey: "rgba(0, 0, 0, 0.03);",
        },
        fontFamily: {
          text: ["Raleway", "sans-serif"],
        },
        spacing: {
          auto: "auto",
          full: "100%",
          screenWidth: "100vw", //1920px
          screenHeight: "100vh", //1920px
          min: "min-content",
          max: "max-content",
          layout: "1600px",
          content: "1040px",
          auth: "730px",
        },
        extend: {
          spacing: {
            0: "0px",
            0.5: "0.125rem", //2px
            1: "0.25rem", //4px
            1.5: "0.375rem", //6px
            2: "0.5rem", //8px
            2.5: "0.625rem", //10px
            3: "0.75rem", //12px
            3.5: "0.875rem", //14px
            4: "1rem", //16px
            5: "1.25rem", //20px
            6: "1.5rem", //24px
            7: "1.75rem", //28px
            8: "2rem", //32px
            9: "2.25rem", //36px
            10: "2.5rem", //40px
            11: "2.75rem", //44px
            12: "3rem", //48px
            14: "3.5rem", //56px
            16: "4rem", //64px
            20: "5rem", //80px
            24: "6rem", //96px
            28: "7rem", //112px
            32: "8rem", //128px
            36: "9rem", //144px
            40: "10rem", //160px
            44: "11rem", //176px
            48: "12rem", //192px
            52: "13rem", //208px
            56: "14rem", //224px
            60: "15rem", //240px
            64: "16rem", //256px
            72: "18rem", //288px
            80: "20rem", //320px
            96: "24rem", //384px
            106: "28rem",
            128: "32rem",
            144: "36rem",
            1660: "1600px",
          },
          borderRadius: {
            "lg": "15px",
            full: "600px",
          },
        },
      },
	plugins: [],
}
