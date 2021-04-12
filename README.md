**📣 Custom mocks are here! They are still quite basic but will provide a better experience working with generated content! You can start playing with them under each field settings of the Slice Machine UI~**

# Slice Library Next.js Starter

> Looking for the Vue.js counterpart? [Check out the Nuxt.js starter](https://github.com/prismicio-community/slice-library-starter-nuxt#readme).

A starter to create your slice library with [Next.js](https://nextjs.org) and [Slice Machine](https://slicemachine.dev) for [#SliceContest](https://prismic.io/blog/slice-contest-2nd-edition?utm_campaign=devexp&utm_source=github&utm_medium=slicecontestpost). This document is here to help you through the whole process of creating your library but is not comprehensive to what you can do, unleash your creativity!

- [📚 &nbsp;Useful Links](#user-content--useful-links)
- [🏁 &nbsp;Getting Started](#user-content--getting-started)
  - [Setting up Your Project](#setting-up-your-project)
  - [Using the Prismic CLI](#using-the-prismic-cli)
  - [Setting up Prismic and Slice Machine](#setting-up-prismic-and-slice-machine)
- [👩‍💻 &nbsp;Developing](#user-content--developing)
  - [Creating a Slice](#creating-a-slice)
  - [Launching the Slice Builder](#launching-the-slice-builder)
  - [Creating Your Showcase Website](#creating-your-showcase-website)
- [🚀 &nbsp;Deploying Your Storybook and Website](#user-content--deploying-your-storybook-and-website)
  - [Hosting on Netlify](#hosting-on-netlify)
  - [Hosting on Vercel](#hosting-on-vercel)
- [☑️ &nbsp;Submission Checklist](#user-content--submission-checklist)

## 📚 &nbsp;Useful Links

- [📣 &nbsp;Contest Announcement Blog Post](https://prismic.io/blog/slice-contest-2nd-edition?utm_campaign=devexp&utm_source=github&utm_medium=slicecontestpost), check rules and additional information there! (starting soon 👀)
- [🌐 &nbsp;Contest Forum Section](https://community.prismic.io/c/slice-machine/slicecontest), get help and share feedback here~
- [📖 &nbsp;Prismic Next.js Documentation](https://prismic.io/docs/technologies/getting-started-nextjs?utm_campaign=devexp&utm_source=github&utm_medium=nuxtjsdoc), to learn more about Prismic with React
- [🔪 &nbsp;Slice Builder Documentation for Next.js](https://prismic.io/docs/technologies/the-slice-builder-nextjs#using-the-slice-builder?utm_campaign=devexp&utm_source=github&utm_medium=slicebuilderdoc), to learn more about the the Slice Builder

## 🏁 &nbsp;Getting Started

Here's a step-by-step tutorial to get started using this starter.

### Setting up Your Project

Start by [using this repository as a template](https://github.com/prismicio-community/slice-library-starter-next/generate), this will create a copy of this repository on your GitHub account under a name of your choice.

Once the repository is created, you can clone it locally and install its dependencies:

```bash
$ git clone https://github.com/<your_username>/<your_repository_name>
$ cd <your_repository_name>
$ yarn install # if you use npm: `$ npm install`
```

While your package manager installs the dependencies, you can already update the [LICENSE](./LICENSE) file to replace `<copyright holders>` with your name. You can also update the [package.json](./package.json) file to fill the `author` field~

### Using the Prismic CLI

For convenience and to be sure you are running the correct version of Prismic CLI it has been installed as part of `devDependencies` and aliased to the `prismic` script in this project. Thanks to that you can run the CLI as a package script:

```bash
# Using Yarn
$ yarn prismic <command> <options>
# Using npm
$ npm run prismic -- <command> <options>
```

If you still wish to use the CLI installed globally make sure you are running version `3.8.7` or greater:

```bash
# Installing the CLI globally using Yarn (optional)
$ yarn global add prismic-cli@3.8.7
# Installing the CLI globally using npm (optional)
$ npm install --global prismic-cli@3.8.7

# You can then use the CLI globally...
$ prismic <command> <options>
```

> In the following sections only the Yarn version from above (recommended) will be used in the examples for the sake of simplicity.

### Setting up Prismic and Slice Machine

If you do not own a Prismic account yet you can **create one** for free [here](https://prismic.io/dashboard/signup) or by using the CLI:

```bash
$ yarn prismic signup
# The CLI will then guide you through the process...
```

Once you have a Prismic account, or if you already had one, **log in** within the CLI:

```bash
$ yarn prismic login
# The CLI will then guide you through the process...
```

When logged in, you can then **bootstrap** your Slice Machine project, this will create you a Prismic repository for this project:

```bash
$ yarn prismic sm --bootstrap
# The CLI will then prompt you for a Prismic repository name...
```

Finally, and since that's a requirement for this contest, you will want to bootstrap a Storybook project. Thankfully Slice Machine comes with a handy command for that:

```bash
$ yarn prismic sm --add-storybook
```

This should create a simple Storybook inside your project. Bear in mind though that this one is still quite basic, feel free to go fancy by adding [addons](https://storybook.js.org/addons) and more! Here's an example of a more elaborated Storybook documentation of a slice library for inspiration: [pxlsls-story.samuelhorn.com](https://pxlsls-story.samuelhorn.com/?path=/story/partials-thefooter--default)

> ⚠ Storybook is known for being quite picky with its dependencies. If you experience a blank page when running it with a lot of errors in the browser console try deleting your lock file and installing dependencies again, this should fix the issue.

Well done! You are now ready to start developing your slice library with Slice Machine.

## 👩‍💻 &nbsp;Developing

Some quick reminders to help you developing your library with Slice Machine and the Slice Builder. Please refer to the [documentation](https://prismic.io/docs/technologies/the-slice-builder-nextjs#using-the-slice-builder?utm_campaign=devexp&utm_source=github&utm_medium=slicebuilderdoc) if you are looking for more in-depth knowledge.

### Creating a Slice

To create a slice run:

```bash
$ yarn prismic sm --create-slice
# The CLI will then guide you through the process...
```

This will create a new directory inside `./slices` named after the provided slice name. Inside it `index.js` is the slice component itself.

Slices behave just like any regular Next.js component but receives a `slice` prop containing its slice fields. You can install additional dependencies to the project like Tailwind CSS or Theme UI, although you might need to update the Storybook configuration and stories to reflect those.

For comprehensive documentation about creating your own slices check the dedicated [documentation](https://prismic.io/docs/technologies/create-your-own-slices-components-nextjs?utm_campaign=devexp&utm_source=github&utm_medium=createslicedoc).

### Launching the Slice Builder

To launch the Slice Builder you need to run 2 terminals: one for Storybook, one for the Slice Builder itself.

```bash
# On a first terminal
$ yarn storybook # or with npm: `$ npm run storybook`

# On the second terminal
$ yarn prismic sm --develop
```

This will launch Storybook on port `8888` and the Slice Builder on port `9999`, you can open a third terminal to create slices from or launch other commands...

> ℹ We are aware that it will be more convenient to launch Storybook and the Slice Builder with a single command and are working on it~

> ⚠ Storybook is known for being quite picky with its dependencies. If you experience a blank page when running it with a lot of errors in the browser console try deleting your lock file and installing dependencies again, this should fix the issue.

> ⚠ We noticed that in some rare case you can get stuck in a `401 [Unauthorized]` loop prompting you to log in when running the Slice Machine develop command. If this happens to you check if your Prismic repository was created, if not, try running `$ yarn prismic login` and `$ yarn prismic sm --bootstrap` again.

For comprehensive documentation about using the Slice Builder check the dedicated [documentation](https://prismic.io/docs/technologies/the-slice-builder-nextjs#using-the-slice-builder?utm_campaign=devexp&utm_source=github&utm_medium=slicebuilderdoc).

### Creating Your Showcase Website

Once you are done developing your slice library (or in between!) you can start creating your showcase website. This part should involve little to no code!

First make sure you [pushed all your slices to Prismic](https://prismic.io/docs/technologies/the-slice-builder-nextjs#push-and-use-slices-in-custom-types.?utm_campaign=devexp&utm_source=github&utm_medium=pushslicedoc) and that you added them to the default "**page**" custom type.

You can then create a new document, give it the UID of `home` (this starter is configured to use `home` as the index `/` URL). From here you're free to compose your showcase website within the writing room using your very slices! You're also more than welcome to go further, by adding a [header and a footer](https://prismic.io/docs/technologies/navbars-footers-and-menus-nextjs?utm_campaign=devexp&utm_source=github&utm_medium=partialsdoc) for example!

## 🚀 &nbsp;Deploying Your Storybook and Website

One of the requirements of this contest if to have your Storybook documentation and showcase website both hosted somewhere.

If you are not familiar with hosting no worries! We recommend to either use [Netlify](https://netlify.com) **or** [Vercel](https://vercel.com) and have done most of the setup for you already!

You only need to host the documentation and showcase website once. There's no need to have them at multiple location so just pick an hosting platform that works for you~

### Hosting on Netlify

To host your Storybook documentation on Netlify go to: [app.netlify.com/start](https://app.netlify.com/start), you might need to create an account or to log in if not already.

Once on the page click "**GitHub**". After granting access to your account you should now be able to see a list of your repositories. Pick the one you worked on.

On the build options step, scroll down to "**Basic build settings**" and set your "**Build command**" to be `yarn build-storybook`, then proceed to set the "**Publish directory**" right under to `storybook-static`. Once done, click "**Deploy site**" and wait for the magic to happen.

Once the build is finished, head over to the "**Site overview**" tab. The URL of the hosted documentation should be available at the top left of the tab (if Netlify is still building it will display you the build status instead). You can customize it by changing the site name under the "**Site settings**" tab.

Congratulations! You documentation is now hosted and will update itself whenever you commit to your repository.

Now to host your showcase website repeat the above steps another time, but at the build option step set instead your "**Build command**" to be `yarn build && yarn export` and your "**Publish directory**" to be `out`. Click "**Deploy site**", wait another few minutes and you should be good to go!

### Hosting on Vercel

To host your Storybook documentation on Vercel go to: [vercel.com/new](https://vercel.com/new).

Once on the page you might need to create an account or to log in if not already using the "**Continue with GitHub**" button. Once done you should see an "**Import Git Repository**" section, from there browse your repositories to pick the one you worked on and click "**Import**". On the following screen just pick your personal account or a team you want to work in and hit "**Select**".

On the build options, step select "**Other**" under "**Framework Preset**", expand the "**Build and Output Settings**" options and set your "**Build command**" to be `yarn build-storybook`, then proceed to set the "**Output directory**" right under to `storybook-static`. Once done, click "**Deploy site**" and wait for the magic to happen.

Once the build is finished and successful, you should be redirected to a success page. The URL of the hosted documentation should be available through the "**Visit**" button. You can customize it by changing the site name under the "**Settings**" tab of the new site dashboard.

Congratulations! You documentation is now hosted and will update itself whenever you commit to your repository.

Now, to host your showcase website, repeat the above steps another time. At the build option step just pick another project name (as you just claimed `<your_repository_name>`) and set your "**Framework Preset**" to `Next.js`. Click "**Deploy site**", wait another few minutes and you should be good to go!

## ☑️ &nbsp;Submission Checklist

To keep track of your progress and to be sure not to miss anything here's a simple checklist you can use. Once everything ticks you should be ready to submit your library to us by tagging [@prismicio](https://twitter.com/prismicio) with #SliceContest on Twitter.

- [ ] My library contains at least **5 different slices**
- [ ] I have updated the [LICENSE](./LICENSE) to credit myself for my library
- [ ] The Storybook documentation is hosted here: <!-- https://example.com -->
- [ ] The showcase website is fun and hosted here: <!-- https://example.com -->
- [ ] My library does not contain any non-public licensed assets

> ☝️ For comprehensive rules refer to the contest [blog post](https://prismic.io/blog/slice-contest-2nd-edition?utm_campaign=devexp&utm_source=github&utm_medium=slicecontestpost).
