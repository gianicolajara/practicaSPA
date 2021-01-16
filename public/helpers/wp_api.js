const WEBSITE = "css-tricks",
  DOMAIN = `https://${WEBSITE}.com`,
  WP_JSON = `${DOMAIN}/wp-json`,
  API_WP = `${WP_JSON}/wp/v2`,
  POST_EMBED = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&search=`,
  POST_SLUG = `${POST_EMBED}&slug=`;

export default {
  WEBSITE,
  DOMAIN,
  WP_JSON,
  API_WP,
  POST_EMBED,
  POST,
  SEARCH,
  POST_SLUG,
};
