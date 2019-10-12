webpackHotUpdate("static\\development\\pages\\data-factory\\tasks.js",{

/***/ "./pages/data-factory/tasks.js":
/*!*************************************!*\
  !*** ./pages/data-factory/tasks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CloudDownload */ "./node_modules/@material-ui/icons/CloudDownload.js");
/* harmony import */ var _material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\bertr\\Dev\\DocumentationV3\\pages\\data-factory\\tasks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    card: {
      maxWidth: 300
    },
    media: {
      height: 140
    }
  };
};

var tasks = [{
  "displayName": "FTP",
  "tasks": [{
    "key": "ftp-list",
    "displayName": "FTP List",
    "description": "List all files on a sFTP/FTP server.",
    "image": "/data-factory/tasks/spreadsheet.png",
    "link": "/data-factory/tasks/ftp-list"
  }, {
    "key": "ftp-get",
    "displayName": "FTP Get",
    "description": "Get one file on a sFTP/FTP server.",
    "image": "/data-factory/tasks/spreadsheet.png",
    "link": "/data-factory/tasks/ftp-get"
  }, {
    "key": "ftp-post",
    "displayName": "FTP Post",
    "description": "Post one or many files on a sFTP/FTP server.",
    "image": "/data-factory/tasks/spreadsheet.png",
    "link": "/data-factory/tasks/ftp-post"
  }]
}, {
  "displayName": "Generate files",
  "tasks": [{
    "key": "generate-excel",
    "displayName": "Generate Excel",
    "description": "Generate one or many Excel files.",
    "image": "/data-factory/tasks/spreadsheet.png",
    "link": "/data-factory/tasks/generate-excel"
  }, {
    "key": "generate-pdf",
    "displayName": "Generate PDF",
    "description": "Get one or many PDF files",
    "image": "/data-factory/tasks/spreadsheet.png",
    "link": "/data-factory/tasks/generate-pdf"
  }, {
    "key": "generate-csv",
    "displayName": "Generate CSV",
    "description": "Generate a CSV file.",
    "image": "/data-factory/tasks/spreadsheet.png",
    "link": "/data-factory/tasks/generate-csv"
  }]
}];

function Tasks(props) {
  var classes = props.classes;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, tasks.map(function (groupTask, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, groupTask.displayName), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, groupTask.tasks.map(function (task, idx) {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        xs: 4,
        key: task.key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: task.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.media,
        image: task.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        gutterBottom: true,
        variant: "h5",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, task.displayName), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "body2",
        color: "textSecondary",
        component: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, task.description))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        size: "small",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Learn More muc")))));
    })));
  }))));
}

Tasks.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Tasks));

/***/ })

})
//# sourceMappingURL=tasks.js.67dc5a5e596fed3f2717.hot-update.js.map