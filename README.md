# :rocket: [randymorales.dev](https://randymorales.dev)

Randy's personal website using [Next.js](https://nextjs.org/) and [GitHub Pages](https://pages.github.com/). Markdown is rendered via [`remark`](https://remark.js.org/) and [`remark-html`](https://github.com/remarkjs/remark-html), with the Markdown metadata handled via [`gray-matter`](https://github.com/jonschlinkert/gray-matter).


## App structure

Here is the basic layout of the app.

```txt
├───components
│   ├───Date.js
│   ├───Header.js
│   └───Layout.js
├───pages
│   ├───posts
│   │   └───[slug].js
│   ├───_app.js
│   ├───404.js
│   ├───about.js
│   ├───index.js
├───public
│   ├───images
│   │   └───profile.png
│   └───favicon.ico
├───styles
│       └───globals.css
│       └───Home.module.css
│       └───layout.module.css
│       └───utils.module.css
├───utils
│   ├───posts.js
├───.gitignore
├───jsconfig.json
├───LICENSE
├───next.config.js
├───package.json
├───README.md
├───siteconfig.json
```

## Dev Steps

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## TODO List

- [ ] Improve CSS styles
- [ ] Improve navbar
- [ ] Add blog post cards in /posts page
- [ ] Add tags per post
- [ ] Add Search bar for posts
- [ ] Add comments section for posts
- [ ] Add SEO component
- [ ] Add multilingual support (spanish)


## License

This project is open source and available under the [MIT License](LICENSE).