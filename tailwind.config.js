/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                gradient: "var(--bg-primary)",
            },
            backgroundColor: {
                primary: "var(--bg-primary)",
                secundary: "var(--bg-secundary)",
                decoration: "var(--bg-decoration)",
                decoration_secudary: "var(--bg-decoration-secundary)",
                input: "var(--bg-input)",
                card: "var(--bg-card)",
            },
            textColor: {
                primary: "var(--text-primary)",
                secondary: "var(--text-secundary)",
                secondary_dark: "var(--text-secundary-dark)",
                decoration: "var(--text-decoration)",
            },
            fontFamily: {
                primary: ["Montserrat", "sans-serif"],
                secondary: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
}