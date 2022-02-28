import { createPrismicClient, linkResolver } from 'prismicio'
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'

export default async (req, res) => {
  const client = createPrismicClient({ req })
  await setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client, linkResolver })

  return true
}
