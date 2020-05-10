/**
 * @param {*} v
 * @return {boolean}
 */
exports.isObject = (v) => typeof v === "object" && v !== null;

/**
 * This callback is displayed as part of the Requester class.
 * @callback eachCb
 * @param {*} item
 * @param {number|string} index
 */
/**
 * @param {*[]|object} v
 * @param {eachCb} cb
 */
exports.each = (v, cb) => {
  // v.forEach(cb)
  // for (let i = 0, len = v.length; i < len; i++) {
  //   cb(v[i]);
  // }
  if (Array.isArray(v)) {
    let i = 0;
    while (i < v.length) {
      cb(v[i], i);
      i++;
    }
  } else if (this.isObject(v)) {
    const entries = Object.entries(v);
    let i = 0;
    while (i < v.length) {
      cb(entries[i][1], entries[i][0]);
      i++;
    }
  }
};

/**
 * @param {number} v
 * @return {string}
 */
exports.rem = (v) => v / 16 + "rem";
