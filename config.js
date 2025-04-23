// デフォルト設定
const defaultConfig = {
  liff: {
    id: '2006782211-8153KyzZ',
  },
  googleCalendar: {
    apiKey: 'AIzaSyCaTKN_tsSB5dEjhpLFods5FLd3GVhoQj4',
    calendarId: 'ainohot@aino-miya.com',
  }
};

// 設定を取得する関数
async function getConfig() {
  try {
    const response = await fetch('/api/config');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('設定の取得に失敗しました:', error);
  }
  return defaultConfig;
}

export default await getConfig(); 