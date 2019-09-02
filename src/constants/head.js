const createMetaElement = ({ hid, content }) => {
  return { hid, property: hid, content }
}
const fallbackImgUrl = `${
  process.env.appBaseUrl
}${require('~/assets/og_image_common.png')}`

export const head = ({ currentTitle, currentUrl, imagePath }) => {
  const title = currentTitle
    ? `${process.env.baseTitle} | ${currentTitle}`
    : process.env.baseTitle
  const ogUrl = currentUrl
    ? `${process.env.appBaseUrl}${currentUrl}`
    : process.env.appBaseUrl
  const ogImgUrl = imagePath || fallbackImgUrl
  return {
    title,
    meta: [
      createMetaElement({ hid: 'og:url', content: ogUrl }),
      createMetaElement({ hid: 'og:image', content: ogImgUrl })
    ]
  }
}
