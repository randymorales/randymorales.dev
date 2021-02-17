# ☢️ [randymorales.dev](https://randymorales.dev) ☣️

Randy's personal website. The idea behind this website is to share knowledge and build a community or network around interesting topics in Computer Programming.

Feel free to contribute, I am open to suggestions.


## 🏗 Project Structure

- `components/*`: Custom react components.
- `lib/*`: Helper functions and constants.
- `pages/*`: Static and dynamic pages.
- `posts/*`: Blog posts content.
- `public/*`: Static files.
- `styles/*`: CSS.

- `.github/workflows/*`: Scripts to deploy in GitHub Pages. This was stopped since NextJS does not support `i18n` with `next export`. Deploying to vercel by the moment.


## 🔧 Dev Steps

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 📝 TODO List

- [X] Add navbar
- [ ] Add footer
- [X] Improve CSS styles
- [X] Add multilingual support (spanish)
- [X] Add blog post cards in /blog page
- [X] Add tags per post
- [ ] Add Search bar for posts
- [X] Add comments section for posts
- [ ] Views per posts
- [ ] Add SEO component


## 🔨 Built using

* [Next.js](https://nextjs.org/).
* [Vercel](https://vercel.com).
* [remark](https://remark.js.org/), [remark-html](https://github.com/remarkjs/remark-html), [gray-matter](https://github.com/jonschlinkert/gray-matter).
* [Utterances](https://utteranc.es/).


## ©️ License

This project is open source and available under the [MIT License](LICENSE).
