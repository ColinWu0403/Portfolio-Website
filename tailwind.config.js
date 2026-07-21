// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        primary: "#040112",
        light: "#FFFAFE",
        secondary: "#17FFC4",
        tertiary: "#ffd627",
        blueish: "#4361EE",
        magenta: "#E80F58",
        pink: "#FF91D5",
        lime: "#45F414",
        slate: "#aaa6c3",
        dark_slate: "#4b4959",
        darker_slate: "#161320",
        plum: "#5E4E5A",

        orange: "#fb5607",
        light_blue: "#4cc9f0",
        violet: "#AD49E1",
        red: "#ff0000",
        purple: "#7900ff",
        "magenta-100": "#db195b",
        gold: "#CFB991",
        pastel_white: "#fefae0",
        white: "#ffffff",
        "white-100": "#f3f3f3",
        "white-200": "#f8f8f8",
        "white-300": "#f5f5f5",
        "gray-100": "#f7f7f7",
        "gray-200": "#e8e8e8",
        "gray-300": "#d1d1d1",
        "gray-400": "#bcbcbc",
        "gray-500": "#8c8c8c",
        "gray-600": "#6c6c6c",
        "gray-700": "#4c4c4c",
        "gray-800": "#2d2d2d",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#0d0d0d",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#4b4959",
            "--tw-prose-headings": "#040112",
            "--tw-prose-bold": "#040112",
            "--tw-prose-links": "#e80f58",
            "--tw-prose-code": "#e80f58",
            "--tw-prose-quotes": "#4b4959",
            "--tw-prose-quote-borders": "#e80f58",
            "--tw-prose-bullets": "#e80f58",
            "--tw-prose-counters": "#e80f58",
            "--tw-prose-hr": theme("colors.gray.200"),
            "--tw-prose-th-borders": theme("colors.gray.300"),
            "--tw-prose-td-borders": theme("colors.gray.200"),
            "--tw-prose-pre-bg": "#040112",
            "--tw-prose-pre-code": "#e80f58",

            // Link hover
            a: {
              transition: "color 0.2s ease",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            },
            "a:hover": {
              color: "#4361EE",
            },

            // Image margin
            img: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },

            // Inline code: strip the default backtick content, style as a pill
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              backgroundColor: "#f1eff9",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            // Reset that pill inside fenced code blocks — pre already has its own bg
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              borderRadius: "0",
              fontWeight: "400",
            },

            // Strikethrough
            del: {
              opacity: "0.6",
            },

            // Remove auto-inserted smart quotes around blockquotes
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },

            ".footnote-ref a": {
              color: "#e80f58",
            },
            ".footnote-ref a:hover": {
              color: "#4361EE",
            },
            ".footnote-backref": {
              color: "#e80f58",
              textDecoration: "none",
              marginLeft: "0.4em",
            },
            ".footnote-backref:hover": {
              color: "#4361EE",
            },
            ".footnotes a": {
              overflowWrap: "break-word",
              wordBreak: "break-word",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-invert-body": theme("colors.gray.300"),
            "--tw-prose-invert-headings": "#ffffff",
            "--tw-prose-invert-bold": "#ffffff",
            "--tw-prose-invert-links": "#17ffc4",
            "--tw-prose-invert-code": "#17ffc4",
            "--tw-prose-invert-quotes": theme("colors.gray.300"),
            "--tw-prose-invert-quote-borders": "#17ffc4",
            "--tw-prose-invert-bullets": "#17ffc4",
            "--tw-prose-invert-counters": "#17ffc4",
            "--tw-prose-invert-hr": theme("colors.gray.700"),
            "--tw-prose-invert-th-borders": theme("colors.gray.600"),
            "--tw-prose-invert-td-borders": theme("colors.gray.700"),
            "--tw-prose-invert-pre-bg": "#161320",
            "--tw-prose-invert-pre-code": "#17ffc4",

            a: {
              transition: "color 0.2s ease",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            },
            "a:hover": {
              color: "#ffd627",
            },

            // Image margin
            img: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },

            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
            "pre code": {
              backgroundColor: "transparent",
            },

            del: {
              opacity: "0.6",
            },

            // Remove auto-inserted smart quotes around blockquotes
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },

            ".footnote-ref a": {
              color: "#17ffc4",
            },
            ".footnote-ref a:hover": {
              color: "#ffd627",
            },
            ".footnote-backref": {
              color: "#17ffc4",
              textDecoration: "none",
              marginLeft: "0.4em",
            },
            ".footnote-backref:hover": {
              color: "#ffd627",
            },
            ".footnotes a": {
              overflowWrap: "break-word",
              wordBreak: "break-word",
            },
          },
        },
      }),
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "850px",
        md: "1024px",
        lg: "1280px",
      },
      fontSize: {
        xxs: "0.5rem",
        xs: "0.6rem",
        sm: "0.8rem",
        md: "0.9rem",
        base: "1rem",
        lg: "1.1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "4rem",
        "8xl": "4.5rem",
        "9xl": "5rem",
        "10xl": "6rem",
        "11xl": "7rem",
        "12xl": "8rem",
        "13xl": "9rem",
        "14xl": "10rem",
        "15xl": "11rem",
      },
      transitionProperty: {
        filter: "filter",
      },
      dropShadow: {
        vite: "0 0 2em #646cffaa",
        vue: "0 0 2em #61dafbaa",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow infinite 20s linear",
      },
    },
  },
};
