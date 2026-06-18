# Prismic + Next.js Multi-Page Starter

Want to see an example of a multi-page website using [Prismic][prismic] and [Next.js][nextjs]? Look no further! This project provides all the code you need for a personal website with a homepage, information pages, and navigation.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and Next.js**: [Prismic Next.js Documentation][prismic-docs]

&nbsp;

<img src="https://user-images.githubusercontent.com/8601064/166617932-eaaa1643-f086-4909-9868-56234f8da98d.png" alt="Screenshots of the site seen on deskop and mobile browsers" />

&nbsp;

## 🚀 Quick Start

To start a new project using this starter:

1. Visit <https://prismic.io/dashboard>.
2. Create a new Prismic repository by selecting **Next.js**.
3. Select the **Multi-Page starter**.
4. Fill out your repository details and continue with the steps given in Prismic.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

## Edit content models with the Type Builder

This project uses the [Type Builder](https://prismic.io/docs/type-builder), Prismic's cloud-based interface for modeling your Custom Types and Slices. Model your content in the Type Builder, then use the [Prismic CLI](https://prismic.io/docs/cli) to sync your models into your codebase, where you can save and version them:

```sh
npx prismic pull
```

If you change or add to your Custom Types, you'll need to update your route handling to match. Routes are configured in the `routes` array in `prismic.config.json`.

## Documentation

To learn how to work with your new project, [**see this starter's docs**][starter-docs].

To learn more about working with Prismic, [**see the Prismic docs**][prismic-docs].

## License

```
Copyright 2013-2022 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[starter-docs]: ./docs/README.md
[live-demo]: https://nextjs-starter-prismic-multi-page.vercel.app/
