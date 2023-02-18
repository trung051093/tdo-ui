
import crypto from 'crypto';

export class CryptoUtil {
  /**
   * generates random string of characters i.e salt
   * @function
   * @param {number} length - Length of the random string.
   */
  public static generateRandomString(length: number): string {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex') /** convert to hexadecimal format */
      .slice(0, length); /** return required number of characters */
  }

  public static get Crypto() {
    return crypto;
  }

  /**
   * hash password with sha512.
   * @function
   * @param {string} stringValue - List of required fields.
   * @param {string} saltKey - Data to be validated.
   */
  public static generateMD5(stringValue: string) {
    const hash = crypto.createHash('md5').update(stringValue);
    return hash.digest('hex');
  }

  /**
   * hash password with sha512.
   * @function
   * @param {string} stringValue - List of required fields.
   * @param {string} saltKey - Data to be validated.
   */
  public static generateSHA512(stringValue: string, saltKey: string) {
    const hash = crypto.createHmac('sha512', saltKey).update(stringValue);
    return hash.digest('hex');
  }

  public static generateSHA256(stringValue: string, saltKey: string) {
    const hash = crypto.createHmac('sha256', saltKey).update(stringValue);
    return hash.digest('hex');
  }

  public static generateSHA1(stringValue: string, saltKey: string) {
    const hash = crypto.createHmac('sha1', saltKey).update(stringValue);
    return hash.digest('hex');
  }

  public static createPwd(password: string, lengthOfRandomString = 12) {
    const salt: string = CryptoUtil.generateRandomString(lengthOfRandomString);
    const sha256: string = CryptoUtil.generateSHA256(password, salt);

    return { salt, sha256 };
  }
}