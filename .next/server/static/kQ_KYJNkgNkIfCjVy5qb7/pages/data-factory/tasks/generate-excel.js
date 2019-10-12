module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1wiH":
/***/ (function(module, exports) {

module.exports = require("react-xml-viewer");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Tl5H");


/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "Tl5H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Bjmp");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BjFw");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("30mr");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ai9N");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("TWtx");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("iDDF");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_xml_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("1wiH");
/* harmony import */ var react_xml_viewer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_xml_viewer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const input = '<Generate-Excel><File><File-Name>products.xlsx</File-Name><Sheets><Sheet><Sheet-Name>products</Sheet-Name><Cells><Cell line="1" column="1"><![CDATA[EAN]]></Cell><Cell line="1" column="2"><![CDATA[Image]]></Cell><Cell line="1" column="3"><![CDATA[Link]]></Cell><Cell line="2" column="1"><![CDATA[1234567890123]]></Cell><Cell line="2" column="2" type="image"><![CDATA[https://host.com/28a01a76849106eb.jpg?preset=small]]></Cell><Cell line="2" column="3" url="http://product-live.com" link-type="URL"><![CDATA[Link to product-live website]]></Cell></Cells></Sheet></Sheets></File></Generate-Excel>';
const ouput = '<Files><File><File-Name>Output.xlsx</File-Name><Url>https://pl.com/output.xlsx</Url></File></Files>';
const customTheme = {
  "textColor": "#bbbbbb",
  "commentColor": "#bbbbbb",
  "tagColor": "#e06c75",
  "attributeKeyColor": "#d19a66",
  "attributeValueColor": "#89c36e",
  "cdataColor": "#d9c07b",
  "separatorColor": "#abb2b2"
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  gridItem: {
    height: '90vh',
    overflowX: 'auto'
  }
}));

function GenerateExcel() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 3
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 7,
    className: classes.gridItem
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.paper
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h2",
    gutterBottom: true
  }, "Generate Excel"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h4",
    gutterBottom: true
  }, "Description"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    paragraph: true
  }, "You need to to generate one or multiple .xlsx file. The .xlsx file can be generated with formatting and images. A template file with the extension .xslx must be created with a software like Microsoft Excel or Google Sheets."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h4",
    gutterBottom: true
  }, "Inputs"), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.table,
    size: "small"
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Param"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Description"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Input"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "You can select between Output or File.Select Output if you want to use the output of another action.Select File if you to use always the same file.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Template"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "You must select a .xlsx file.")))), __jsx("br", null), __jsx("br", null), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h4",
    gutterBottom: true
  }, "Expected input"), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.table,
    size: "small"
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "XPath"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Description"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Generate-Excel"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Root of the document")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./File"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "For each files you want to generate.You can generate multiple files.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./File/File-Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "File name")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./Sheets"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Sheets block")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./Sheets/Sheet"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "For each sheet you want to generate")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./Sheets/Sheet/Sheet-Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Name of the sheet.Either the sheet already exists and it writes in it,or it does not exist and it is created.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./Sheets/Sheet/Cells"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Cells block")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "./Sheets/Sheet/Cells/Cell"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Content of the cell. For IMAGE type cells put the original url. Always put a CDATA.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "../Cell/@line"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Coordinate of the line. The index starts at 1.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "../Cell/@column"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Coordinate of the column. The index starts at 1.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "../Cell/@type"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Set type=\"IMAGE\" if you want to output an image in the cell. The image will be automtically resized to fit the cell.")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "../Cell/@url"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Only when you write a link. A valid url")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "../Cell/@link-type"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, null, "URL | FILE | EMAIL | DOCUMENT", __jsx("br", null), "URL : open a valid url on your default web browser", __jsx("br", null), "FILE: open a file on your local system , the url attribute must be a valid path", __jsx("br", null), "EMAIL: open your default email program, the url attribute must be a valid email", __jsx("br", null), "DOCUMENT: reference another cell in the document, the url attribute must be like : 'Sheet1'!A1")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: true,
    className: classes.gridItem
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h4",
    gutterBottom: true
  }, "Expected input - Example"), __jsx("div", {
    style: {
      padding: 10,
      backgroundColor: "#282c34",
      width: "100%",
      overflowY: "auto"
    }
  }, __jsx(react_xml_viewer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    xml: input,
    theme: customTheme,
    indentSize: 5
  })), __jsx("br", null), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h4",
    gutterBottom: true
  }, "Ouput - Example"), __jsx("div", {
    style: {
      padding: 10,
      backgroundColor: "#282c34",
      width: "100%",
      overflowY: "auto"
    }
  }, __jsx(react_xml_viewer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    xml: ouput,
    theme: customTheme,
    indentSize: 5
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])()(GenerateExcel));

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ })

/******/ });