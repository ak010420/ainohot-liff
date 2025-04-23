export default function handler(req, res) {
  res.status(200).json({
    liff: {
      id: process.env.LIFF_ID,
    },
    googleCalendar: {
      apiKey: process.env.GOOGLE_CALENDAR_API_KEY,
      calendarId: process.env.GOOGLE_CALENDAR_ID,
    }
  });
} 