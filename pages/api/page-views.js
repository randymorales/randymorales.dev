import { google } from 'googleapis'

/* <url>/api/page-views?post=<post-id> */
export default async function handler(req, res) {
  const { post } = req.query

  // Load environment variables
  const VIEW_ID = process.env.GOOGLE_ANALYTICS_VIEW_ID
  const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
  const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') // Handle newlines in private key

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  })

  const analytics = google.analyticsdata({ version: 'v1beta', auth })

  try {
    // Request page views for the specific post URL
    const response = await analytics.properties.runReport({
      property: `properties/${VIEW_ID}`,
      requestBody: {
        dateRanges: [{ startDate: '2021-01-01', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        dimensionFilter: {
          filter: {
            fieldName: 'pagePath',
            stringFilter: { matchType: 'EXACT', value: `/blog/${post}` },
          },
        },
      },
    })

    const views = response.data.rows?.[0]?.metricValues?.[0]?.value || '0'
    res.status(200).json({ views })
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch analytics data: ${error}` })
  }
}
