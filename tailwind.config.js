/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",      // 若沒用 app/ 也可留著
    "./layouts/**/*.{js,ts,jsx,tsx}",  // 若有 layouts/
    "./lib/**/*.{js,ts,jsx,tsx}"       // 若元件放在這也會掃到
  ],
  theme: { extend: {} },
  plugins: []
}

