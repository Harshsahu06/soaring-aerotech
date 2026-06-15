export const logger = {
  info: (obj, msg) => {
    if (msg === undefined) {
      console.log(`[INFO]`, obj);
    } else {
      console.log(`[INFO] ${msg}`, JSON.stringify(obj));
    }
  },
  warn: (obj, msg) => {
    if (msg === undefined) {
      console.warn(`[WARN]`, obj);
    } else {
      console.warn(`[WARN] ${msg}`, JSON.stringify(obj));
    }
  },
  error: (obj, msg) => {
    if (msg === undefined) {
      console.error(`[ERROR]`, obj);
    } else {
      console.error(`[ERROR] ${msg}`, JSON.stringify(obj));
    }
  }
};
