import {
  __esm
} from "./chunk-LFBQMW2U.js";

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var init_typeof = __esm({
  "node_modules/@babel/runtime/helpers/esm/typeof.js"() {
  }
});

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var init_toPrimitive = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
    init_typeof();
  }
});

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
var init_toPropertyKey = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
    init_typeof();
    init_toPrimitive();
  }
});

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var init_defineProperty = __esm({
  "node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
    init_toPropertyKey();
  }
});

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var init_objectSpread2 = __esm({
  "node_modules/@babel/runtime/helpers/esm/objectSpread2.js"() {
    init_defineProperty();
  }
});

export {
  _typeof,
  init_typeof,
  _toPropertyKey,
  init_toPropertyKey,
  _defineProperty,
  init_defineProperty,
  _objectSpread2,
  init_objectSpread2
};
//# sourceMappingURL=chunk-NTOZYPWE.js.map
