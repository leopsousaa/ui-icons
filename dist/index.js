"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// temp/index.ts
var temp_exports = {};
__export(temp_exports, {
  chevronLeftIconsMaterialUiOutlined: () => chevronLeftIconsMaterialUiOutlined
});
module.exports = __toCommonJS(temp_exports);

// temp/chevronLeftIconsMaterialUiOutlined.ts
var chevronLeftIconsMaterialUiOutlined = {
  "tag": "svg",
  "props": {
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "none",
    "viewBox": "0 0 8 12"
  },
  "children": [
    {
      "tag": "path",
      "props": {
        "fill": "#000",
        "d": "M7.41 1.41 6 0 0 6l6 6 1.41-1.41L2.83 6l4.58-4.59Z"
      }
    }
  ]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  chevronLeftIconsMaterialUiOutlined
});
//# sourceMappingURL=index.js.map