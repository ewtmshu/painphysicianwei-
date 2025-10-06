// config/site.ts
export const siteConfig = {
  brand: "許哲維醫師",
  doctor: "許哲維",
  contact: {
    // 首頁聯絡資訊主區塊要顯示哪個據點 → 這裡先放土城
    address: "新北市土城區中央路二段304號",
    phone: "02-77287912",
    hours: "（請填門診時間，例如：週一至週六 09:00–18:00）",
    email: "ewtmshu@gmail.com",
  },
  social: {
    facebook:
      "https://www.facebook.com/profile.php?id=100090615120394&mibextid=wwXIfr&rdid=SA2Qa1gjE4QvBPrI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16kNRVGM92%2F%3Fmibextid%3DwwXIfr",
    instagram: "https://www.instagram.com/painphysicianforyou",
    youtube: "https://www.youtube.com/@復健專科_許哲維醫師",
    threads: "",
    line: "",
  },
  locations: [
    {
      name: "土城康澤復健科診所（院長）",
      address: "新北市土城區中央路二段304號",
      phone: "02-77287912",
      time: "（請填門診時間）",
    },
    {
      name: "龜山康澤復健科診所（指導院長）",
      address: "桃園市龜山區萬壽路二段1075號",
      phone: "03-2717161",
      time: "（請填門診時間）",
    },
  ],
} as const;
