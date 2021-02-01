export class AppCache {
  private browser: Navigator = Object.create({})

  constructor () {
    this.browser = navigator
  }

  getStorage () {
    return this.applyIfSupported(() => this.browser.storage) as StorageManager
  }

  async getFreeSpace () {
    return this.applyIfSupported(async () => {
      const estimate = await this.getStorage().estimate()
      if (estimate.quota && estimate.usage)
        return estimate.quota - estimate.usage
      else return 0
    })
  }

  applyIfSupported (fn: Function) {
    if ('storage' in this.browser && 'estimate' in this.browser.storage)
      return fn.apply(this)
  }
}
