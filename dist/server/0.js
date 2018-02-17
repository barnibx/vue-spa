exports.ids = [0];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(33);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "be3262a4"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
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
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])('postsModule', ['posts'])),
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__(32);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(29),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e458c95e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "3f6e5560"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5)
module.exports.__inject__ = function (context) {
  add("7171e8e8", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".card[data-v-e458c95e]{padding-bottom:40px;height:100%}footer[data-v-e458c95e]{position:absolute;bottom:0;width:100%;left:0}", ""]);

// exports


/***/ }),

/***/ 31:
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<div class=\"card-content\" data-v-e458c95e>", "</div>", [_vm._t("title"), _vm._ssrNode(" "), _vm._t("content")], 2), _vm._ssrNode(" <footer class=\"card-footer\" data-v-e458c95e><a" + (_vm._ssrAttr("href", _vm.link)) + " target=\"_blank\" class=\"card-footer-item\" data-v-e458c95e>Read More</a></footer>")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns"
  }, _vm._l((_vm.posts), function(post, title) {
    return _vm._ssrNode("<div class=\"column is-one-third\">", "</div>", [_c('app-post', {
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

};;
//# sourceMappingURL=0.js.map