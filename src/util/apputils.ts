export function isSafari() {
  return navigator.vendor.includes('Apple')
}

export function isSupported(feature: unknown) {
  return !!feature;
}
