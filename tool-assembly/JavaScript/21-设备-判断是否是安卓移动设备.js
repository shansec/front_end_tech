const isAndroidMobileDevice = () => {
  return /android/i.test(navigator.userAgent.toLowerCase())
}
