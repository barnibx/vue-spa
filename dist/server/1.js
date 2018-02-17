exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(35);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "4d952e69"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
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

// import eventBus from '../event-bus.js'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      username: '',
      password: ''
      // isAuthenticated: '',
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['isAuthenticated'])),
  watch: {
    // isAuthenticated: function (val) {
    //   if (val) {
    //     appService.getProfile()
    //       .then(profile => {
    //         this.profile = profile
    //       })
    //   } else {
    //     this.profile = {}
    //   }
    //   eventBus.$emit('authStatusUpdate', val)
    // }
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])({
    logout: 'logout'
  }), {
    login: function login() {
      var _this = this;

      // appService.login({username: this.username, password: this.password})
      //   .then((data) => {
      //     window.localStorage.setItem('token', data.token)
      //     window.localStorage.setItem('tokenExpiration', data.expiration)
      //     // this.isAuthenticated = true
      //     this.username = ''
      //     this.password = ''
      //   })
      //   .catch(() => window.alert('Could not login!'))
      this.$store.dispatch('login', { username: this.username, password: this.password }).then(function () {
        _this.username = '';
        _this.password = '';
      });
    },
    logout: function logout() {
      this.$store.dispatch('logout');
      // window.localStorage.setItem('token', null)
      // window.localStorage.setItem('tokenExpiration', null)
      // this.isAuthenticated = false
    } // ,
    // created () {
    //   let expiration = window.localStorage.getItem('tokenExpiration')
    //   var unixTimestamp = new Date().getTime() / 1000
    //   if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
    //     // this.isAuthenticated = true
    //   }
    // }

  })
});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_vm._ssrNode(((_vm.isAuthenticated) ? ("<div>\n      Hello authenticated user!\n      <button class=\"button is-primary\">\n        logout\n      </button></div>") : ("<div><h2>Login</h2> <div class=\"field is-horizontal\"><div class=\"field-label is-normal\"><label class=\"label\">Username</label></div> <div class=\"field-body\"><div class=\"field\"><div class=\"control\"><input type=\"text\" placeholder=\"Your username\"" + (_vm._ssrAttr("value", (_vm.username))) + " class=\"input\"></div></div></div></div> <div class=\"field is-horizontal\"><div class=\"field-label is-normal\"><label class=\"label\">Password</label></div> <div class=\"field-body\"><div class=\"field\"><div class=\"control\"><input type=\"password\" placeholder=\"Your password\"" + (_vm._ssrAttr("value", (_vm.password))) + " class=\"input\"></div></div></div></div> <div class=\"field is-horizontal\"><div class=\"field-label\"></div> <div class=\"field-body\"><div class=\"field\"><div class=\"control\"><button class=\"button is-primary\">\n            Login\n            </button></div></div></div></div></div>")))])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=1.js.map