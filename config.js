// 環境変数の設定
const config = {
  liff: {
    id: process.env.LIFF_ID || '2006782211-8153KyzZ', // デフォルト値はフォールバック用
  },
  googleCalendar: {
    apiKey: process.env.GOOGLE_CALENDAR_API_KEY,
    calendarId: process.env.GOOGLE_CALENDAR_ID || 'ainohot@aino-miya.com',
  }
};

export default config; 