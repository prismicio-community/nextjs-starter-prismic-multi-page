import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

import smConfig from './sm.json'

export const repositoryName = smConfig.apiEndpoint
export const accessToken = ''

export const client = prismic.createClient(repositoryName, { accessToken })

export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

export const createPrismicClient = (config) => {
  enableAutoPreviews({
    client,
    context: config.context,
    req: config.req,
  })

  return client
}
