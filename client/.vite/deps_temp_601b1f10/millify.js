import {
  __commonJS
} from "./chunk-LFBQMW2U.js";

// node_modules/millify/dist/options.js
var require_options = __commonJS({
  "node_modules/millify/dist/options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultOptions = void 0;
    exports.defaultOptions = {
      lowercase: false,
      precision: 1,
      space: false,
      units: [
        "",
        "K",
        "M",
        "B",
        "T",
        "P",
        "E"
        // Quintillion
      ]
    };
  }
});

// node_modules/millify/dist/utils.js
var require_utils = __commonJS({
  "node_modules/millify/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocales = exports.getFractionDigits = exports.roundTo = exports.parseValue = void 0;
    function parseValue(value) {
      const val = parseFloat(value === null || value === void 0 ? void 0 : value.toString());
      if (isNaN(val)) {
        throw new Error(`Input value is not a number`);
      }
      if (val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER) {
        throw new RangeError("Input value is outside of safe integer range");
      }
      return val;
    }
    exports.parseValue = parseValue;
    function roundTo(value, precision) {
      if (!Number.isFinite(value)) {
        throw new Error("Input value is not a finite number");
      }
      if (!Number.isInteger(precision) || precision < 0) {
        throw new Error("Precision is not a positive integer");
      }
      if (Number.isInteger(value)) {
        return value;
      }
      return parseFloat(value.toFixed(precision));
    }
    exports.roundTo = roundTo;
    function getFractionDigits(num) {
      var _a;
      if (Number.isInteger(num)) {
        return 0;
      }
      const decimalPart = num.toString().split(".")[1];
      return (_a = decimalPart === null || decimalPart === void 0 ? void 0 : decimalPart.length) !== null && _a !== void 0 ? _a : 0;
    }
    exports.getFractionDigits = getFractionDigits;
    function getLocales() {
      var _a;
      if (typeof navigator === "undefined") {
        return [];
      }
      return Array.from((_a = navigator.languages) !== null && _a !== void 0 ? _a : []);
    }
    exports.getLocales = getLocales;
  }
});

// node_modules/millify/dist/millify.js
var require_millify = __commonJS({
  "node_modules/millify/dist/millify.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.millify = void 0;
    var options_1 = require_options();
    var utils_1 = require_utils();
    var DIGIT_GROUPING_BASE = 1e3;
    function* divider(value) {
      let denominator = DIGIT_GROUPING_BASE;
      while (true) {
        const result = value / denominator;
        if (result < 1) {
          return;
        }
        yield result;
        denominator *= DIGIT_GROUPING_BASE;
      }
    }
    function millify(value, options) {
      var _a, _b;
      const opts = options ? { ...options_1.defaultOptions, ...options } : options_1.defaultOptions;
      if (!Array.isArray(opts.units) || !opts.units.length) {
        throw new Error("Option `units` must be a non-empty array");
      }
      let val;
      try {
        val = utils_1.parseValue(value);
      } catch (e) {
        if (e instanceof Error) {
          console.warn(`WARN: ${e.message} (millify)`);
        }
        return String(value);
      }
      const prefix = val < 0 ? "-" : "";
      val = Math.abs(val);
      let unitIndex = 0;
      for (const result of divider(val)) {
        val = result;
        unitIndex += 1;
      }
      const unitIndexOutOfRange = unitIndex >= opts.units.length;
      if (unitIndexOutOfRange) {
        return value.toString();
      }
      let rounded = utils_1.roundTo(val, opts.precision);
      for (const result of divider(rounded)) {
        rounded = result;
        unitIndex += 1;
      }
      const unit = (_a = opts.units[unitIndex]) !== null && _a !== void 0 ? _a : "";
      const suffix = opts.lowercase ? unit.toLowerCase() : unit;
      const space = opts.space ? " " : "";
      const formatted = rounded.toLocaleString((_b = opts.locales) !== null && _b !== void 0 ? _b : utils_1.getLocales(), {
        // toLocaleString needs the explicit fraction digits.
        minimumFractionDigits: utils_1.getFractionDigits(rounded)
      });
      return `${prefix}${formatted}${space}${suffix}`;
    }
    exports.millify = millify;
    exports.default = millify;
  }
});
export default require_millify();
//# sourceMappingURL=millify.js.map
