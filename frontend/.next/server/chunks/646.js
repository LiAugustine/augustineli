"use strict";
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 8646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);



const LikeButton = (props)=>{
    const { 0: id1 , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.article_id);
    const { 0: likes , 1: setLikes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.likes);
    const { 0: liked1 , 1: setLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.liked);
    const handleClick = (id, liked)=>{
        if (liked == "true") {
            setLikes(likes - 1);
            setLiked("false");
            onClickUnlike(id);
        } else {
            setLikes(likes + 1);
            setLiked("true");
            onClickLike(id);
        }
    };
    function onClickLike(article_id) {
        fetch("/like_article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article_id)
        }).then((response)=>response.json()
        ).then((data)=>{
            alert(data);
        });
    }
    function onClickUnlike(article_id) {
        fetch("/unlike_article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article_id)
        }).then((response)=>response.json()
        ).then((data)=>{
            alert(data);
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: liked1 == "true" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: ()=>handleClick(id1, liked1)
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsHeartFill, {}),
                likes
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: ()=>handleClick(id1, liked1)
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsHeart, {}),
                likes
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButton);


/***/ })

};
;