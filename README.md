# :rocket: [randymorales.dev](https://randymorales.dev)

Randy's personal website using [Next.js](https://nextjs.org/) and [GitHub Pages](https://pages.github.com/). Markdown is rendered via [`remark`](https://remark.js.org/) and [`remark-html`](https://github.com/remarkjs/remark-html), with the Markdown metadata handled via [`gray-matter`](https://github.com/jonschlinkert/gray-matter).

The idea behind this website is to share knowledge and build a community or network around interesting topics in Computer Programming.

Feel free to contribute, I am open to suggestions.


## :office: Project Structure

- `.github/workflows/*`: Scripts to deploy in GitHub Pages.
- `components/*`: Custom react components.
- `lib/*`: Helper functions and constants.
- `pages/*`: Static and dynamic pages.
- `posts/*`: Blog posts content.
- `public/*`: Static files.
- `styles/*`: CSS.


## :wrench: Dev Steps

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## :pencil: TODO List

- [ ] Add navbar
- [ ] Improve CSS styles
- [ ] Improve navbar
- [ ] Add blog post cards in /posts page
- [ ] Add tags per post
- [ ] Add Search bar for posts
- [ ] Add comments section for posts
- [ ] Add SEO component
- [ ] Add multilingual support (spanish)


## :copyright: License

This project is open source and available under the [MIT License](LICENSE).
