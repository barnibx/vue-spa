webpackJsonp([1],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(61);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(5);
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

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])(['isAuthenticated'])),
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
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [(_vm.isAuthenticated) ? _c('div', [_vm._v("\n      Hello authenticated user!\n      "), _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("\n        logout\n      ")])]) : _c('div', [_c('h2', [_vm._v("Login")]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Your username"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "Your password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_c('div', {
    staticClass: "field-label"
  }), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_vm._v("\n            Login\n            ")])])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Username")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Password")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});