const CONSTANTS = {
  assetPath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/184729',
}

export const ASSETS: any = {
  head: `${CONSTANTS.assetPath}/head.svg`,
  waiting: `${CONSTANTS.assetPath}/hand.svg`,
  stalking: `${CONSTANTS.assetPath}/hand-waiting.svg`,
  grabbing: `${CONSTANTS.assetPath}/hand.svg`,
  grabbed: `${CONSTANTS.assetPath}/hand-with-cursor.svg`,
  shaka: `${CONSTANTS.assetPath}/hand-surfs-up.svg`,
}

/* Preload images */
Object.keys(ASSETS).forEach((key) => {
  const img = new Image()
  img.src = ASSETS[key]
})
