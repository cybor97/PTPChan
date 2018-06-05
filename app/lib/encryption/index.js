import crypto from "crypto";
import elliptic from "elliptic";

const curve = new elliptic.eddsa("ed25519");
const SALT =
  "34a242d21752ab003982e001da397f997507a6df7211df520870ea2675c2e1d0a56112e969ac9df";

class Encryption {
  static generateRandomId() {
    crypto.randomBytes(64).toString("hex");
  }

  static generateSecret(password) {
    return crypto
      .pbkdf2Sync(password, SALT, 1000, 256, "sha256")
      .toString("hex");
  }

  static generateKeyPair(secretKey) {
    return curve.keyFromSecret(secretKey);
  }

  static checkPublicKey(publicKey, secretKey) {
    return (
      elliptic.utils.toHex(curve.keyFromSecret(secretKey).getPublic()) ==
      publicKey
    );
  }

  static signHash(keyPair, messageHash) {
    return keyPair
      .sign(messageHash)
      .toHex()
      .toLowerCase();
  }

  static validateSignature(publicKey, signature, messageHash) {
    return curve.keyFromPublic(publicKey, "hex").verify(messageHash, signature);
  }
}
