/**
 * @param {*} v
 * @return {boolean}
 */
exports.isObject = (v) => typeof v === "object" && v !== null;

/**
 * This callback is displayed as part of the Requester class.
 * @callback eachCb
 * @param {*} item
 * @param {number|string} [index]
 */
/**
 * @param {*[]|object} v
 * @param {eachCb} cb
 */
exports.each = (v, cb) => {
  // for (let i = 0, len = v.length; i < len; i++) {
  //   cb(v[i]);
  // }
  if (Array.isArray(v)) {
    // for (let i = 0, len = v.length; i < len; i++) {
    //   cb(v[i], i);
    // }
    let i = 0;
    while (i < v.length) {
      cb(v[i], i);
      i++;
    }
  } else if (this.isObject(v)) {
    const entries = Object.entries(v);
    // for (let i = 0, len = entries.length; i < len; i++) {
    //   cb(entries[i][1], entries[i][0]);
    // }
    let i = 0;
    while (i < entries.length) {
      cb(entries[i][1], entries[i][0]);
      i++;
    }
  } else if (Number.isInteger(v)) {
    // for (let i = 0, len = v; i < len; i++) {
    //   cb(i);
    // }
    let i = 0;
    while (i < v) {
      cb(i);
      i++;
    }
  }
};

/**
 * @param {number} v
 * @return {string}
 */
exports.rem = (v) => v / 16 + "rem";
