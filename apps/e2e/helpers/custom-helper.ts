/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    _e2eData: Record<string, unknown>
  }
}

class CustomHelper extends Helper {
  printMessage(message: string) {
    // eslint-disable-next-line no-console
    console.log(message)
  }

  async setNewContext() {
    await this.helpers.Playwright.page.newContext()
  }
}

export = CustomHelper
