"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/AllProjects";
exports.ids = ["pages/AllProjects"];
exports.modules = {

/***/ "./pages/AllProjects.js":
/*!******************************!*\
  !*** ./pages/AllProjects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllProjects),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Define the list of projects\nconst projects = [\n    {\n        id: 1,\n        title: \"Private Project 1\",\n        type: \"private\",\n        description: \"This is the description of private project 1\"\n    },\n    {\n        id: 3,\n        title: \"Community Project 1\",\n        type: \"community\",\n        description: \"This is the description of community project 1\"\n    },\n    {\n        id: 2,\n        title: \"Private Project 2\",\n        type: \"private\",\n        description: \"This is the description of private project 2\"\n    },\n    {\n        id: 4,\n        title: \"Community Project 2\",\n        type: \"community\",\n        description: \"This is the description of community project 2\"\n    },\n    {\n        id: 5,\n        title: \"Private Project 3\",\n        type: \"private\",\n        description: \"This is the description of private project 3\"\n    },\n    {\n        id: 6,\n        title: \"Private Project 4\",\n        type: \"private\",\n        description: \"This is the description of private project 4\"\n    },\n    {\n        id: 7,\n        title: \"Community Project 3\",\n        type: \"community\",\n        description: \"This is the description of community project 3\"\n    }\n];\nfunction AllProjects() {\n    // Define state variables for the filter and heading\n    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const { 0: heading , 1: setHeading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Crowd Funding Website\");\n    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFilterChange = (filter)=>{\n        setFilter(filter);\n        if (filter === \"all\") {\n            setHeading(\"All Projects\");\n        }\n        if (filter === \"private\") {\n            setHeading(\"Private Projects\");\n        } else if (filter === \"community\") {\n            setHeading(\"Community Projects\");\n        }\n    };\n    // Filter the projects based on the selected filter\n    const filteredProjects = filter === \"all\" ? projects : projects.filter((project)=>project.type === filter);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleCreateNewProject = ()=>{\n        router.push(\"/newProject\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"All Projects\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/allProjects.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid h-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row profile d-flex justify-content-end align-items-center\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row filter d-flex justify-content-center align-items-center mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-center mb-4 font-weight-bold\",\n                                    children: \"Crowd Funding Website\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: `btn btn-sm btn-primary rounded-pill mr-2\r\n                            ${filter === \"all\" ? \"active\" : \"\"}`,\n                                    onClick: ()=>handleFilterChange(\"all\"),\n                                    children: \"All Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: `btn btn-sm btn-primary rounded-pill mr-2\r\n                            ${filter === \"private\" ? \"active\" : \"\"}`,\n                                    onClick: ()=>handleFilterChange(\"private\"),\n                                    children: \"Private Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: `btn btn-sm btn-primary rounded-pill\r\n                            ${filter === \"community\" ? \"active\" : \"\"}`,\n                                    onClick: ()=>handleFilterChange(\"community\"),\n                                    children: \"Community Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row h-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-6 left-col d-flex flex-column justify-content-center align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"title text-center\",\n                                    children: filter === \"private\" ? \"Private Projects\" : \"Community Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-list d-flex flex-wrap\",\n                                    children: filteredProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card mb-4 mr-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        className: \"card-title\",\n                                                        children: project.title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                                        lineNumber: 141,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"card-text\",\n                                                        children: project.description\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                                        lineNumber: 142,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                                lineNumber: 140,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 134,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"floating-action-button\",\n                        onClick: handleCreateNewProject,\n                        title: \"Create a new project\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Project ? \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                lineNumber: 152,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-plus\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                                lineNumber: 153,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, this),\n                    modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectModal, {\n                        setModalOpen: setModalOpen\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                        lineNumber: 155,\n                        columnNumber: 31\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\prasa\\\\OneDrive\\\\Desktop\\\\Crowdfunding\\\\pages\\\\AllProjects.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQU87MENBQ3ZCO2dDQUFHUixTQUFTLEVBQUM7Ozs7O29DQUFpQjs7Ozs7OzRCQUN6QjtvQkFDUlosU0FBUzt3QkFBa0JDLFlBQVksRUFBRUE7Ozs7OzRCQUFnQjs7Ozs7O29CQUN4RDs7b0JBQ1AsQ0FDTDtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm93ZGZ1bmRpbmcvLi9wYWdlcy9BbGxQcm9qZWN0cy5qcz82ODc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gRGVmaW5lIHRoZSBsaXN0IG9mIHByb2plY3RzXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogJ1ByaXZhdGUgUHJvamVjdCAxJyxcclxuICAgICAgICB0eXBlOiAncHJpdmF0ZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBkZXNjcmlwdGlvbiBvZiBwcml2YXRlIHByb2plY3QgMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6ICdDb21tdW5pdHkgUHJvamVjdCAxJyxcclxuICAgICAgICB0eXBlOiAnY29tbXVuaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIGNvbW11bml0eSBwcm9qZWN0IDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnUHJpdmF0ZSBQcm9qZWN0IDInLFxyXG4gICAgICAgIHR5cGU6ICdwcml2YXRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIHByaXZhdGUgcHJvamVjdCAyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB0aXRsZTogJ0NvbW11bml0eSBQcm9qZWN0IDInLFxyXG4gICAgICAgIHR5cGU6ICdjb21tdW5pdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24gb2YgY29tbXVuaXR5IHByb2plY3QgMidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdGl0bGU6ICdQcml2YXRlIFByb2plY3QgMycsXHJcbiAgICAgICAgdHlwZTogJ3ByaXZhdGUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24gb2YgcHJpdmF0ZSBwcm9qZWN0IDMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIHRpdGxlOiAnUHJpdmF0ZSBQcm9qZWN0IDQnLFxyXG4gICAgICAgIHR5cGU6ICdwcml2YXRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIHByaXZhdGUgcHJvamVjdCA0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICB0aXRsZTogJ0NvbW11bml0eSBQcm9qZWN0IDMnLFxyXG4gICAgICAgIHR5cGU6ICdjb21tdW5pdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24gb2YgY29tbXVuaXR5IHByb2plY3QgMydcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgaWQ6IDgsXHJcbiAgICAvLyAgICAgdGl0bGU6ICdDb21tdW5pdHkgUHJvamVjdCA0JyxcclxuICAgIC8vICAgICB0eXBlOiAnY29tbXVuaXR5JyxcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIGNvbW11bml0eSBwcm9qZWN0IDQnXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGlkOiA5LFxyXG4gICAgLy8gICAgIHRpdGxlOiAnUHJpdmF0ZSBQcm9qZWN0IDUnLFxyXG4gICAgLy8gICAgIHR5cGU6ICdwcml2YXRlJyxcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIHByaXZhdGUgcHJvamVjdCA1J1xyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBpZDogMTAsXHJcbiAgICAvLyAgICAgdGl0bGU6ICdDb21tdW5pdHkgUHJvamVjdCA1JyxcclxuICAgIC8vICAgICB0eXBlOiAnY29tbXVuaXR5JyxcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIGNvbW11bml0eSBwcm9qZWN0IDUnXHJcbiAgICAvLyB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxQcm9qZWN0cygpIHtcclxuICAgIC8vIERlZmluZSBzdGF0ZSB2YXJpYWJsZXMgZm9yIHRoZSBmaWx0ZXIgYW5kIGhlYWRpbmdcclxuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnYWxsJyk7XHJcbiAgICBjb25zdCBbaGVhZGluZywgc2V0SGVhZGluZ10gPSB1c2VTdGF0ZSgnQ3Jvd2QgRnVuZGluZyBXZWJzaXRlJyk7XHJcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IChmaWx0ZXIpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICBpZiAoZmlsdGVyID09PSAnYWxsJykge1xyXG4gICAgICAgICAgICBzZXRIZWFkaW5nKCdBbGwgUHJvamVjdHMnKTtcclxuICAgICAgICB9IGlmIChmaWx0ZXIgPT09ICdwcml2YXRlJykge1xyXG4gICAgICAgICAgICBzZXRIZWFkaW5nKCdQcml2YXRlIFByb2plY3RzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdjb21tdW5pdHknKSB7XHJcbiAgICAgICAgICAgIHNldEhlYWRpbmcoJ0NvbW11bml0eSBQcm9qZWN0cycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRmlsdGVyIHRoZSBwcm9qZWN0cyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgZmlsdGVyXHJcbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gZmlsdGVyID09PSAnYWxsJyA/XHJcbiAgICAgICAgcHJvamVjdHMgOiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudHlwZSA9PT0gZmlsdGVyKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvbmV3UHJvamVjdCcpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbGwgUHJvamVjdHM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvYWxsUHJvamVjdHMuY3NzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHJvZmlsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZpbHRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00IGZvbnQtd2VpZ2h0LWJvbGRcIj5Dcm93ZCBGdW5kaW5nIFdlYnNpdGU8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSByb3VuZGVkLXBpbGwgbXItMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmaWx0ZXIgPT09ICdhbGwnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKCdhbGwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ZpbHRlciA9PT0gJ3ByaXZhdGUnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKCdwcml2YXRlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaXZhdGUgUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc20gYnRuLXByaW1hcnkgcm91bmRlZC1waWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ZpbHRlciA9PT0gJ2NvbW11bml0eScgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDaGFuZ2UoJ2NvbW11bml0eScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tdW5pdHkgUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbGVmdC1jb2wgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlclwiPntmaWx0ZXIgPT09ICdwcml2YXRlJyA/ICdQcml2YXRlIFByb2plY3RzJyA6ICdDb21tdW5pdHkgUHJvamVjdHMnfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1saXN0IGQtZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi00IG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2plY3QudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxvYXRpbmctYWN0aW9uLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlTmV3UHJvamVjdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT0nQ3JlYXRlIGEgbmV3IHByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlByb2plY3QgPyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHNldE1vZGFsT3Blbj17c2V0TW9kYWxPcGVufSAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJwcm9qZWN0cyIsImlkIiwidGl0bGUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJBbGxQcm9qZWN0cyIsImZpbHRlciIsInNldEZpbHRlciIsImhlYWRpbmciLCJzZXRIZWFkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJyb3V0ZXIiLCJoYW5kbGVDcmVhdGVOZXdQcm9qZWN0IiwicHVzaCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJtYXAiLCJoNSIsInAiLCJzcGFuIiwiaSIsIlByb2plY3RNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/AllProjects.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/AllProjects.js"));
module.exports = __webpack_exports__;

})();