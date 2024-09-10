// Generate the necessary XML to describe the whole "channel".
const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Randy Morales</title>
      <link>https://randymorales.dev/blog</link>
      <description>Randy Morales Software Blog.</description>
      <language>ENG</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://randymorales.dev/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`

// Generate the necessary XML to describe a single blog post according to the
// W3C specification. See:
// https://validator.w3.org/feed/docs/rss2.html#hrelementsOfLtitemgt
const generateRssItem = post => `
  <item>
    <guid>https://randymorales.dev/blog/${post.id}</guid>
    <title>${post.title}</title>
    <link>https://randymorales.dev/blog/${post.id}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`

export default generateRss
