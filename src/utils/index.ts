const { navigator, innerWidth } = window ?? globalThis
const { userAgent } = navigator
export const isMobileDevice = (): boolean => {
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  return mobile.test(userAgent) || innerWidth <= 768
}
