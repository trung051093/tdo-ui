export  const CookiesName = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};

export class CookieServices {
  static setCookie(key: string, value: string, expire: number) {
    const cookie = `${key}=${value};expires=${new Date(expire).toUTCString()};path=/;Domain=${window.location.hostname};`;
    document.cookie = cookie;
  }

  static getCookie(key: string): string {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  static deleteCookie(key: string) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;Domain=${window.location.hostname};`;
  }

  static getAccessToken() {
    return this.getCookie(CookiesName.ACCESS_TOKEN);
  }

  static deleteTokens() {
    this.deleteCookie(CookiesName.ACCESS_TOKEN);
    this.deleteCookie(CookiesName.REFRESH_TOKEN);
  }
}
