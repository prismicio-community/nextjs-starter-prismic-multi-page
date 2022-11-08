import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes: [
      { type: "page", path: "/:uid" },
      { type: "page", path: "/", uid: "home" },
      { type: "settings", path: "/" },
      { type: "navigation", path: "/" },
    ],
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
