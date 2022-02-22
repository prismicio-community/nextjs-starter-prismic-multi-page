import smConfig from './sm.json'

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  )
}

export const apiEndpoint = smConfig.apiEndpoint

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

export const router = {
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
    {
      type: 'home-page',
      path: '/',
    },
  ],
}
