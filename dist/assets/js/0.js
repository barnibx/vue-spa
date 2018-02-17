webpackJsonp([0],{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(59);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//


// import appService from '../app.service.js'

var fetchInitialData = function fetchInitialData(store, route) {
  var categoryId = 2;
  if (route.params.id === 'mobile') {
    categoryId = 11;
  }
  return store.dispatch('postsModule/updateCategory', categoryId);
};
/* harmony default export */ __webpack_exports__["a"] = ({
  asyncData: function asyncData(store, route) {
    return fetchInitialData(store, route);
  },

  components: {
    'app-post': __WEBPACK_IMPORTED_MODULE_0__Post_vue__["a" /* default */]
  },
  // data () {
  //   return {
  //     id: this.$route.params.id,
  //     posts: []
  //   }
  // },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('postsModule', ['posts'])),
  methods: {
    loadPosts: function loadPosts() {
      // // font-end category
      // let categoryId = 2
      // // if (this.id === 'mobile') {
      // if (this.$route.params.id === 'mobile') {
      //   categoryId = 11
      // }
      // // appService.getPosts(categoryId).then(data => {
      // //   this.posts = data
      // // })
      // this.$store.dispatch('postsModule/updateCategory', categoryId)
      fetchInitialData(this.$store, this.$route);
    }
  },
  watch: {
    '$route': function $route(to, from) {
      // this.id = to.params.id
      this.loadPosts();
    }
  },
  created: function created() {
    this.loadPosts();
    // console.log(this.$route.query.page)
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__(58);
function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e458c95e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("7171e8e8", content, true, {});

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(undefined);
// imports


// module
exports.push([module.i, ".card[data-v-e458c95e]{padding-bottom:40px;height:100%}footer[data-v-e458c95e]{position:absolute;bottom:0;width:100%;left:0}", ""]);

// exports


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['link']
});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_vm._t("title"), _vm._v(" "), _vm._t("content")], 2), _vm._v(" "), _c('footer', {
    staticClass: "card-footer"
  }, [_c('a', {
    staticClass: "card-footer-item",
    attrs: {
      "href": _vm.link,
      "target": "_blank"
    }
  }, [_vm._v("Read More")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns"
  }, _vm._l((_vm.posts), function(post, title) {
    return _c('div', {
      key: post.id,
      staticClass: "column is-one-third"
    }, [_c('app-post', {
      attrs: {
        "link": post.rest_api_enabler.Link
      }
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(post.title.rendered)
      },
      slot: "title"
    }), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(post.excerpt.rendered)
      },
      slot: "content"
    })])], 1)
  }))
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});