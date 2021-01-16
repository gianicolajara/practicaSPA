const WEBSITE = "css-tricks",
  PER_PAGE = 10,
  DOMAIN = `https://${WEBSITE}.com`,
  WP_JSON = `${DOMAIN}/wp-json`,
  API_WP = `${WP_JSON}/wp/v2`,
  POST_EMBED = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`,
  POST_SLUG = `${POST_EMBED}&slug=`;

let page = 1;

export default {
  WEBSITE,
  DOMAIN,
  WP_JSON,
  API_WP,
  POST_EMBED,
  POST,
  SEARCH,
  POST_SLUG,
  page,
  PER_PAGE,
};
