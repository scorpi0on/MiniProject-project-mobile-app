require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _my_rentals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/my_rentals.vue");
/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/sign_in.vue");
/* harmony import */ var _estate_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/estate_search.vue");
/* harmony import */ var _bedroom_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/bedroom_search.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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




/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    Searchestate: function Searchestate(args) {
      this.$navigateTo(_estate_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedEstate: args.item.name,
          $delegate: this
        }
      });
    },
    SearchBedrooms: function SearchBedrooms(args) {
      this.$navigateTo(_bedroom_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedBedroom: args.item.name,
          $delegate: this
        }
      });
    },
    Signin: function Signin(args) {
      this.$navigateTo(_sign_in__WEBPACK_IMPORTED_MODULE_1__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          $delegate: this
        }
      });
    },
    My_rentals: function My_rentals(args) {
      this.$navigateTo(_my_rentals__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          $delegate: this
        }
      });
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      global.rootURL = "http://192.168.3.34:1337";
      var response = yield fetch(global.rootURL, {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.highlights = yield response.json();
        console.log(JSON.stringify(_this.highlights));
      } else {
        console.log(response.statusText);
      }
    })();
  },

  data() {
    return {
      highlights: [],
      estates: [{
        name: "Festival City"
      }, {
        name: "Tin Ma Court"
      }, {
        name: "City One Shatin"
      }],
      bedrooms: [{
        name: "Bedroom <= 2"
      }, {
        name: "Bedroom >= 3"
      }]
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/bedroom_search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/details.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedBedroom", "$delegate"],
  methods: {
    Detail: function Detail(args) {
      this.$navigateTo(_details__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedApartment: args.item,
          $delegate: this
        }
      });
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      global.rootURL = "http://192.168.3.34:1337";
      var response = yield fetch(global.rootURL + "/Apartment/Search/?", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.Getitems = yield response.json();
      } else {
        console.log(response.statusText);
      }

      _this.BedroomS2s = _this.Getitems.filter(function (p) {
        return p.Bedrooms < 3;
      });
      _this.BedroomL3s = _this.Getitems.filter(function (p) {
        return p.Bedrooms > 2;
      });
    })();
  },

  data() {
    return {
      Bedroomname: this.selectedBedroom,
      Getitems: [],
      BedroomS2s: [],
      BedroomL3s: []
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/details.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/maps.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedApartment", "$delegate"],
  methods: {
    showmap: function showmap() {
      this.$navigateTo(_maps__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          onmap: this.selectedApartment.Estate,
          qLatitude: this.selectedApartment.Latitude,
          qLongitude: this.selectedApartment.Longitude,
          $delegate: this
        }
      });
    },

    addtoMine() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield confirm({
          title: "Confirm?",
          message: "This apartment will added to your rentals.",
          okButtonText: "Yes",
          cancelButtonText: "Cancel"
        });

        if (result) {
          global.rootURL = "http://192.168.3.34:1337";
          var response = yield fetch(global.rootURL + "/user/" + 2 + "/rents/add/" + _this.selectedApartment.id, {
            method: "GET",
            credentials: "same-origin"
          });

          if (response.ok) {
            var data = yield response.json();
            alert(data.message);
          } else {
            alert(response.status + ": " + response.statusText);
          }
        }
      })();
    }

  },

  data() {
    return {};
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/estate_search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/details.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedEstate", "$delegate"],
  methods: {
    Detail: function Detail(args) {
      this.$navigateTo(_details__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedApartment: args.item,
          $delegate: this
        }
      });
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      global.rootURL = "http://192.168.3.34:1337";
      var response = yield fetch(global.rootURL + "/Apartment/Search/?Estate=", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.Getitems = yield response.json();
      } else {
        console.log(response.statusText);
      }

      _this.Festival_Citys = _this.Getitems.filter(function (p) {
        return p.Estate == "Festival City";
      });
      _this.Tin_Ma_Courts = _this.Getitems.filter(function (p) {
        return p.Estate == "Tin Ma Court";
      });
      _this.City_One_Shatins = _this.Getitems.filter(function (p) {
        return p.Estate == "City One Shatin";
      });
    })();
  },

  data() {
    return {
      Estatename: this.selectedEstate,
      Getitems: [],
      Festival_Citys: [],
      Tin_Ma_Courts: [],
      City_One_Shatins: []
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/maps.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["onmap", "qLongitude", "qLatitude", "$delegate"],

  data() {
    return {
      currentGeoLocation: {
        latitude: null,
        longitude: null,
        altitude: null,
        direction: null
      }
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/my_rentals.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["$delegate"],

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      global.rootURL = "http://192.168.3.34:1337";
      var response = yield fetch(global.rootURL + "/user/2/rents", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.Myrentals = yield response.json();
        console.log(JSON.stringify(_this.Myrentals));
      } else {
        console.log(response.statusText);
      }
    })();
  },

  data() {
    return {
      Myrentals: []
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/sign_in.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["$delegate"],
  methods: {
    signin() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var formData = new FormData();
        formData.append("username", _this._username);
        formData.append("password", _this._password);
        global.rootURL = "http://192.168.3.34:1337";
        var response = yield fetch(global.rootURL + "/User/Login", {
          method: "POST",
          credentials: "same-origin",
          body: formData
        });

        if (response.ok) {
          var data = yield response.json();
          alert(data.message);

          if (data.isLoggingIn == false) {
            console.log("alert");
            _this.isLoggingIn = false;
          }
        } else if (response.status == 401) {
          var data = yield response.text();
          alert(data.message);
        } else {
          alert(response.statusText);
        }
      })();
    },

    signoff() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        global.rootURL = "http://192.168.31.7:1337";
        var response = yield fetch(global.rootURL + "/User/Logout", {
          method: "POST",
          credentials: "same-origin"
        });

        if (response.ok) {
          var data = yield response.json();
          alert(data.message);

          if (data.isLoggingIn == true) {
            console.log("alert");
            _this2.isLoggingIn = true;
          }
        } else if (response.status == 401) {
          var data = yield response.text();
          alert(data);
        } else {
          alert(response.statusText);
        }
      })();
    }

  },

  data() {
    return {
      isLoggingIn: true,
      _username: "clients",
      _password: "12345678"
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page", attrs: { title: "Home" } },
    [
      _c("ActionBar", { staticClass: "action-bar", attrs: { title: "Home" } }),
      _c(
        "StackLayout",
        [
          _c(
            "BottomNavigation",
            { attrs: { height: "100px" } },
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Home" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Estate" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Bedrooms" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "User" } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    [
                      _c(
                        "StackLayout",
                        { staticClass: "home-panel" },
                        _vm._l(_vm.highlights, function(highlight) {
                          return _c(
                            "CardView",
                            {
                              staticClass: "card",
                              attrs: {
                                elevation: "40",
                                radius: "10",
                                "ios:shadowRadius": "3"
                              }
                            },
                            [
                              _c(
                                "StackLayout",
                                { staticClass: "card-layout" },
                                [
                                  _c("Image", {
                                    attrs: {
                                      src: highlight.Image_URL,
                                      height: "300",
                                      stretch: "aspectFill"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { text: highlight.Property_Title }
                                  }),
                                  _c("Label", {
                                    staticClass: "body",
                                    attrs: {
                                      textWrap: "true",
                                      text: highlight.Estate
                                    }
                                  }),
                                  _c("label", {
                                    staticClass: "body",
                                    attrs: { text: "Rent: $" + highlight.Rent }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.estates, "+alias": "estate" },
                      on: { itemTap: _vm.Searchestate }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var estate = ref.estate
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "50"
                                  }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { text: estate.name }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.bedrooms, "+alias": "bedroom" },
                      on: { itemTap: _vm.SearchBedrooms }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var bedroom = ref.bedroom
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "50"
                                  }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { text: bedroom.name }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "StackLayout",
                    { attrs: { orientation: "vertical" } },
                    [
                      _c(
                        "FlexboxLayout",
                        { attrs: { flexDirection: "row", height: "150" } },
                        [
                          _c("Image", {
                            staticStyle: { width: "40%" },
                            attrs: {
                              src:
                                "http://img1.imgtn.bdimg.com/it/u=3974834430,2578081919&fm=26&gp=0.jpg",
                              stretch: "aspectFill"
                            }
                          }),
                          _c("Label", {
                            staticStyle: { width: "60%" },
                            attrs: { text: "Babe", textAlignment: "center" }
                          })
                        ],
                        1
                      ),
                      _c("Button", {
                        staticClass: "btn btn-primary btn rounded-lg",
                        attrs: {
                          text: " Login/Logoff",
                          textAlignment: "center",
                          height: "100"
                        },
                        on: { tap: _vm.Signin }
                      }),
                      _c("Button", {
                        staticClass: "btn btn-primary btn rounded-lg",
                        attrs: {
                          text: "My Rentals",
                          textAlignment: "center",
                          height: "100"
                        },
                        on: { tap: _vm.My_rentals }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/bedroom_search.vue?vue&type=template&id=e6374234&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Bedroom Search" }
      }),
      _vm.Bedroomname == "Bedroom <= 2"
        ? _c(
            "ListView",
            {
              staticClass: "list-group",
              attrs: { items: _vm.BedroomS2s, "+alias": "BedroomS2" },
              on: { itemTap: _vm.Detail }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var BedroomS2 = ref.BedroomS2
                        var $index = ref.$index
                        var $even = ref.$even
                        var $odd = ref.$odd
                        return _c(
                          "StackLayout",
                          { attrs: { orientation: "vertical", height: "80" } },
                          [
                            _c("label", {
                              staticClass: "h1 font-weight: bold;",
                              attrs: { text: BedroomS2.Property_Title }
                            }),
                            _c("label", { attrs: { text: BedroomS2.Estate } })
                          ],
                          1
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  1825402748
                )
              })
            ],
            1
          )
        : _vm._e(),
      _vm.Bedroomname == "Bedroom >= 3"
        ? _c(
            "ListView",
            {
              staticClass: "list-group",
              attrs: { items: _vm.BedroomL3s, "+alias": "BedroomL3" },
              on: { itemTap: _vm.Detail }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var BedroomL3 = ref.BedroomL3
                        var $index = ref.$index
                        var $even = ref.$even
                        var $odd = ref.$odd
                        return _c(
                          "StackLayout",
                          { attrs: { orientation: "vertical", height: "80" } },
                          [
                            _c("label", {
                              staticClass: "h1 font-weight: bold;",
                              attrs: { text: BedroomL3.Property_Title }
                            }),
                            _c("label", { attrs: { text: BedroomL3.Estate } })
                          ],
                          1
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  146916610
                )
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/details.vue?vue&type=template&id=185631d7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Detail" }
      }),
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "vertical", margin: "10" } },
            [
              _c("Image", {
                attrs: {
                  src: _vm.selectedApartment.Image_URL,
                  height: "300",
                  stretch: "aspectFill"
                }
              }),
              _c("Label", {
                staticClass: "h1",
                attrs: { text: _vm.selectedApartment.Property_Title }
              }),
              _c(
                "GridLayout",
                { attrs: { columns: "auto, auto, auto", rows: "auto, auto" } },
                [
                  _c("Label", {
                    attrs: {
                      col: "0",
                      row: "0",
                      text: "Estate: " + _vm.selectedApartment.Estate + ", "
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      col: "1",
                      row: "0",
                      text: "Bredroom: " + _vm.selectedApartment.Bedrooms
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      col: "0",
                      row: "1",
                      text: "Rent Price: $" + _vm.selectedApartment.Rent + ", "
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      col: "1",
                      row: "1",
                      text:
                        "Tenants: " +
                        _vm.selectedApartment.Expected_Tenants +
                        ", "
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      col: "2",
                      row: "1",
                      text: "Area: " + _vm.selectedApartment.Gross_Area
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "*, *", rows: "50, 50" } },
                [
                  _c("Button", {
                    staticClass: "btn btn-primary btn rounded-lg",
                    attrs: { col: "0", row: "0", text: "Move-in" },
                    on: {
                      tap: function($event) {
                        return _vm.addtoMine()
                      }
                    }
                  }),
                  _c("Button", {
                    staticClass: "btn btn-primary btn rounded-lg",
                    attrs: { col: "1", row: "0", text: "Address" },
                    on: {
                      tap: function($event) {
                        return _vm.showmap()
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/estate_search.vue?vue&type=template&id=65a2b960&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Estate Search" }
      }),
      _vm.Estatename == "Festival City"
        ? _c(
            "ListView",
            {
              staticClass: "list-group",
              attrs: { items: _vm.Festival_Citys, "+alias": "Festival_City" },
              on: { itemTap: _vm.Detail }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var Festival_City = ref.Festival_City
                        var $index = ref.$index
                        var $even = ref.$even
                        var $odd = ref.$odd
                        return _c(
                          "StackLayout",
                          { attrs: { orientation: "vertical", height: "80" } },
                          [
                            _c("label", {
                              staticClass: "h1 font-weight: bold;",
                              attrs: { text: Festival_City.Property_Title }
                            }),
                            _c("label", {
                              attrs: { text: Festival_City.Estate }
                            })
                          ],
                          1
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  2628743951
                )
              })
            ],
            1
          )
        : _vm._e(),
      _vm.Estatename == "Tin Ma Court"
        ? _c(
            "ListView",
            {
              staticClass: "list-group",
              attrs: { items: _vm.Tin_Ma_Courts, "+alias": "Tin_Ma_Court" },
              on: { itemTap: _vm.Detail }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var Tin_Ma_Court = ref.Tin_Ma_Court
                        var $index = ref.$index
                        var $even = ref.$even
                        var $odd = ref.$odd
                        return _c(
                          "StackLayout",
                          { attrs: { orientation: "vertical", height: "80" } },
                          [
                            _c("label", {
                              staticClass: "h1 font-weight: bold;",
                              attrs: { text: Tin_Ma_Court.Property_Title }
                            }),
                            _c("label", {
                              attrs: { text: Tin_Ma_Court.Estate }
                            })
                          ],
                          1
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  2604255905
                )
              })
            ],
            1
          )
        : _vm._e(),
      _vm.Estatename == "City One Shatin"
        ? _c(
            "ListView",
            {
              staticClass: "list-group",
              attrs: {
                items: _vm.City_One_Shatins,
                "+alias": "City_One_Shatin"
              },
              on: { itemTap: _vm.Detail }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var City_One_Shatin = ref.City_One_Shatin
                        var $index = ref.$index
                        var $even = ref.$even
                        var $odd = ref.$odd
                        return _c(
                          "StackLayout",
                          { attrs: { orientation: "vertical", height: "80" } },
                          [
                            _c("label", {
                              staticClass: "h1 font-weight: bold;",
                              attrs: { text: City_One_Shatin.Property_Title }
                            }),
                            _c("label", {
                              attrs: { text: City_One_Shatin.Estate }
                            })
                          ],
                          1
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  979995243
                )
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/maps.vue?vue&type=template&id=e7cdbe5c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "page",
    [
      _c("WebView", {
        attrs: {
          src:
            "https://leafletapi.mtchoy.now.sh/index.html?lat=" +
            _vm.qLatitude +
            "&lng=" +
            _vm.qLongitude +
            "&zoom=17&markerLat=22.341072&marketLng=114.179645&markerTitle=AC%20Hall&locate=true"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/my_rentals.vue?vue&type=template&id=231609b7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "My Rentals" }
      }),
      _c(
        "ListView",
        {
          attrs: { items: _vm.Myrentals, "+alias": "Myrental" },
          on: { itemTap: _vm.Searchestate }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var Myrental = ref.Myrental
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "StackLayout",
                    { attrs: { orientation: "vertical", height: "80" } },
                    [
                      _c("label", {
                        staticClass: "h1 font-weight: bold;",
                        attrs: { text: Myrental.Property_Title }
                      }),
                      _c("label", { attrs: { text: Myrental.Estate } })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/sign_in.vue?vue&type=template&id=4b74c3fc&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { staticClass: "action-bar", attrs: { title: "User" } }),
      _c(
        "FlexboxLayout",
        { attrs: { width: "80%", height: "50%" } },
        [
          _c(
            "StackLayout",
            { staticClass: "form", attrs: { orientation: "vertical" } },
            [
              _vm.isLoggingIn == true
                ? _c(
                    "GridLayout",
                    { attrs: { rows: "auto, auto, auto" } },
                    [
                      _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "0" } },
                        [
                          _c("TextField", {
                            staticClass: "input",
                            attrs: {
                              hint: "username",
                              autocorrect: "false",
                              autocapitalizationType: "none"
                            },
                            model: {
                              value: _vm._username,
                              callback: function($event) {
                                _vm._username = $event.object["text"]
                              },
                              expression: "_username"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "1" } },
                        [
                          _c("TextField", {
                            ref: "password",
                            staticClass: "input",
                            attrs: { hint: "Password", secure: "true" },
                            model: {
                              value: _vm._password,
                              callback: function($event) {
                                _vm._password = $event.object["text"]
                              },
                              expression: "_password"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: {
                  width: "80%",
                  type: "Submit",
                  text: _vm.isLoggingIn ? "Log In" : "Logoff"
                },
                on: {
                  tap: function($event) {
                    return _vm.signin()
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./nativescript-cardview/cardview-common.js": "./nativescript-cardview/cardview-common.js",
	"./nativescript-cardview/cardview.js": "./nativescript-cardview/cardview.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".card"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"color","value":"#4d4d4d"},{"type":"declaration","property":"margin","value":"15 15 0"}]},{"type":"rule","selectors":[".card-layout"],"declarations":[{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".card-layout .h1"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('CardView', () => __webpack_require__("./nativescript-cardview/cardview.js").CardView); // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"])])
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/bedroom_search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/bedroom_search.vue?vue&type=template&id=e6374234&");
/* harmony import */ var _bedroom_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/bedroom_search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bedroom_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e6374234')) {
      api.createRecord('e6374234', component.options)
    } else {
      api.reload('e6374234', component.options)
    }
    module.hot.accept("./components/bedroom_search.vue?vue&type=template&id=e6374234&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/bedroom_search.vue?vue&type=template&id=e6374234&");
(function () {
      api.rerender('e6374234', {
        render: _bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/bedroom_search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/bedroom_search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bedroom_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/bedroom_search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bedroom_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/bedroom_search.vue?vue&type=template&id=e6374234&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/bedroom_search.vue?vue&type=template&id=e6374234&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bedroom_search_vue_vue_type_template_id_e6374234___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/details.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/details.vue?vue&type=template&id=185631d7&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('185631d7')) {
      api.createRecord('185631d7', component.options)
    } else {
      api.reload('185631d7', component.options)
    }
    module.hot.accept("./components/details.vue?vue&type=template&id=185631d7&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/details.vue?vue&type=template&id=185631d7&");
(function () {
      api.rerender('185631d7', {
        render: _details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/details.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/details.vue?vue&type=template&id=185631d7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/details.vue?vue&type=template&id=185631d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_185631d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/estate_search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/estate_search.vue?vue&type=template&id=65a2b960&");
/* harmony import */ var _estate_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/estate_search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _estate_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('65a2b960')) {
      api.createRecord('65a2b960', component.options)
    } else {
      api.reload('65a2b960', component.options)
    }
    module.hot.accept("./components/estate_search.vue?vue&type=template&id=65a2b960&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/estate_search.vue?vue&type=template&id=65a2b960&");
(function () {
      api.rerender('65a2b960', {
        render: _estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/estate_search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/estate_search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estate_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/estate_search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estate_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/estate_search.vue?vue&type=template&id=65a2b960&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/estate_search.vue?vue&type=template&id=65a2b960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_estate_search_vue_vue_type_template_id_65a2b960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/maps.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/maps.vue?vue&type=template&id=e7cdbe5c&");
/* harmony import */ var _maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e7cdbe5c')) {
      api.createRecord('e7cdbe5c', component.options)
    } else {
      api.reload('e7cdbe5c', component.options)
    }
    module.hot.accept("./components/maps.vue?vue&type=template&id=e7cdbe5c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/maps.vue?vue&type=template&id=e7cdbe5c&");
(function () {
      api.rerender('e7cdbe5c', {
        render: _maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/maps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/maps.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/maps.vue?vue&type=template&id=e7cdbe5c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/maps.vue?vue&type=template&id=e7cdbe5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_template_id_e7cdbe5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/my_rentals.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/my_rentals.vue?vue&type=template&id=231609b7&");
/* harmony import */ var _my_rentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/my_rentals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _my_rentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('231609b7')) {
      api.createRecord('231609b7', component.options)
    } else {
      api.reload('231609b7', component.options)
    }
    module.hot.accept("./components/my_rentals.vue?vue&type=template&id=231609b7&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/my_rentals.vue?vue&type=template&id=231609b7&");
(function () {
      api.rerender('231609b7', {
        render: _my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/my_rentals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/my_rentals.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_rentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/my_rentals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_rentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/my_rentals.vue?vue&type=template&id=231609b7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/my_rentals.vue?vue&type=template&id=231609b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_rentals_vue_vue_type_template_id_231609b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/sign_in.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/sign_in.vue?vue&type=template&id=4b74c3fc&");
/* harmony import */ var _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/sign_in.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4b74c3fc')) {
      api.createRecord('4b74c3fc', component.options)
    } else {
      api.reload('4b74c3fc', component.options)
    }
    module.hot.accept("./components/sign_in.vue?vue&type=template&id=4b74c3fc&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/sign_in.vue?vue&type=template&id=4b74c3fc&");
(function () {
      api.rerender('4b74c3fc', {
        render: _sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/sign_in.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/sign_in.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/sign_in.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/sign_in.vue?vue&type=template&id=4b74c3fc&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/sign_in.vue?vue&type=template&id=4b74c3fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_in_vue_vue_type_template_id_4b74c3fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./nativescript-cardview/cardview-common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__("tns-core-modules/color");

var content_view_1 = __webpack_require__("tns-core-modules/ui/content-view");

var view_1 = __webpack_require__("tns-core-modules/ui/core/view");

var view_2 = __webpack_require__("tns-core-modules/ui/core/view");

exports.backgroundColorProperty = view_2.backgroundColorProperty;
exports.backgroundInternalProperty = view_2.backgroundInternalProperty;

var CardViewCommon = function (_super) {
  __extends(CardViewCommon, _super);

  function CardViewCommon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CardViewCommon;
}(content_view_1.ContentView);

exports.CardViewCommon = CardViewCommon;
exports.radiusProperty = new view_1.Property({
  name: "radius",
  valueConverter: function valueConverter(value) {
    return +value;
  }
});
exports.radiusProperty.register(CardViewCommon);
exports.elevationProperty = new view_1.Property({
  name: "elevation",
  valueConverter: function valueConverter(value) {
    return +value;
  }
});
exports.elevationProperty.register(CardViewCommon);
exports.shadowRadiusProperty = new view_1.Property({
  name: "shadowRadius",
  valueConverter: function valueConverter(value) {
    return +value;
  }
});
exports.shadowRadiusProperty.register(CardViewCommon);
exports.shadowOffsetWidthProperty = new view_1.Property({
  name: "shadowOffsetWidth",
  valueConverter: function valueConverter(value) {
    return +value;
  }
});
exports.shadowOffsetWidthProperty.register(CardViewCommon);
exports.shadowOffsetHeightProperty = new view_1.Property({
  name: "shadowOffsetHeight",
  valueConverter: function valueConverter(value) {
    return +value;
  }
});
exports.shadowOffsetHeightProperty.register(CardViewCommon);
exports.shadowColorProperty = new view_1.Property({
  name: "shadowColor",
  valueConverter: function valueConverter(value) {
    return new color_1.Color(value);
  }
});
exports.shadowColorProperty.register(CardViewCommon);
exports.shadowOpacityProperty = new view_1.Property({
  name: "shadowOpacity",
  valueConverter: function valueConverter(value) {
    return +value;
  }
});
exports.shadowOpacityProperty.register(CardViewCommon);

/***/ }),

/***/ "./nativescript-cardview/cardview.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__("tns-core-modules/color");

var platform_1 = __webpack_require__("tns-core-modules/platform");

var cardview_common_1 = __webpack_require__("./nativescript-cardview/cardview-common.js");

var CardView = function (_super) {
  __extends(CardView, _super);

  function CardView() {
    var _this = _super.call(this) || this;

    var width = platform_1.screen.mainScreen.widthDIPs - 20;
    _this.nativeView = new UIView(CGRectMake(10, 30, width, 0));
    _this.nativeView.layer.masksToBounds = false;
    _this.shadowColor = "black";
    _this.radius = 1;
    _this.shadowRadius = 1;
    _this.shadowOpacity = 0.4;
    _this.shadowOffsetHeight = 2;
    _this.shadowOffsetWidth = 0;
    return _this;
  }

  Object.defineProperty(CardView.prototype, "ios", {
    get: function get() {
      return this.nativeView;
    },
    enumerable: true,
    configurable: true
  });

  CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
    this.nativeView.layer.cornerRadius = value;
  };

  CardView.prototype[cardview_common_1.radiusProperty.getDefault] = function () {
    return this.nativeView.layer.cornerRadius;
  };

  CardView.prototype[cardview_common_1.backgroundColorProperty.setNative] = function (value) {
    this.nativeView.backgroundColor = value !== undefined ? value.ios : new color_1.Color("#FFFFFF").ios;
  };

  CardView.prototype[cardview_common_1.backgroundInternalProperty.setNative] = function (value) {
    this.nativeView.backgroundColor = new color_1.Color(value.color !== undefined ? value.color + "" : "#FFFFFF").ios;
  };

  CardView.prototype[cardview_common_1.shadowRadiusProperty.setNative] = function (value) {
    this.nativeView.layer.shadowRadius = value;
  };

  CardView.prototype[cardview_common_1.shadowOffsetWidthProperty.setNative] = function (value) {
    this.nativeView.layer.shadowOffset = CGSizeMake(value, this.nativeView.layer.shadowOffset.height);
  };

  CardView.prototype[cardview_common_1.shadowOffsetHeightProperty.setNative] = function (value) {
    this.nativeView.layer.shadowOffset = CGSizeMake(this.nativeView.layer.shadowOffset.width, value);
  };

  CardView.prototype[cardview_common_1.shadowColorProperty.setNative] = function (value) {
    this.nativeView.layer.shadowColor = value.ios.CGColor;
  };

  CardView.prototype[cardview_common_1.shadowOpacityProperty.setNative] = function (value) {
    this.nativeView.layer.shadowOpacity = value;
  };

  return CardView;
}(cardview_common_1.CardViewCommon);

exports.CardView = CardView;

/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9iZWRyb29tX3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvZGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvZXN0YXRlX3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbWFwcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbXlfcmVudGFscy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvc2lnbl9pbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT9iNjZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmVkcm9vbV9zZWFyY2gudnVlPzQ3MmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kZXRhaWxzLnZ1ZT9jODM0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXN0YXRlX3NlYXJjaC52dWU/MGViOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcHMudnVlPzFkNDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9teV9yZW50YWxzLnZ1ZT84Zjg2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lnbl9pbi52dWU/NjM5NiIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT84MzQyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmVkcm9vbV9zZWFyY2gudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmVkcm9vbV9zZWFyY2gudnVlPzhlZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iZWRyb29tX3NlYXJjaC52dWU/ZmQ5MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RldGFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGV0YWlscy52dWU/MWE0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RldGFpbHMudnVlP2FiMDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lc3RhdGVfc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VzdGF0ZV9zZWFyY2gudnVlPzg2ZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lc3RhdGVfc2VhcmNoLnZ1ZT9hNWNjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFwcy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXBzLnZ1ZT82ODdiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFwcy52dWU/YjZlYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL215X3JlbnRhbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXlfcmVudGFscy52dWU/Y2E2ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL215X3JlbnRhbHMudnVlP2U4MGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWduX2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZ25faW4udnVlP2Y5ZGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWduX2luLnZ1ZT83MTUxIiwid2VicGFjazovLy8uL25hdGl2ZXNjcmlwdC1jYXJkdmlldy9jYXJkdmlldy1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvc3BhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpb24tYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGl2aXR5LWluZGljYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm90dG9tLW5hdmlnYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvbnRlbnQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb3JlL3ZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGF0ZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaHRtbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wbGFjZWhvbGRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zY3JvbGwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWFyY2gtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlZ21lbnRlZC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtZmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RpbWUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3dlYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3V0aWxzL3R5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3htbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJWdWUiLCJyZWdpc3RlckVsZW1lbnQiLCJyZW5kZXIiLCJoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjb2xvcl8xIiwicmVxdWlyZSIsImNvbnRlbnRfdmlld18xIiwidmlld18xIiwidmlld18yIiwiYmFja2dyb3VuZENvbG9yUHJvcGVydHkiLCJiYWNrZ3JvdW5kSW50ZXJuYWxQcm9wZXJ0eSIsIkNhcmRWaWV3Q29tbW9uIiwiX3N1cGVyIiwiX19leHRlbmRzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJDb250ZW50VmlldyIsInJhZGl1c1Byb3BlcnR5IiwiUHJvcGVydHkiLCJuYW1lIiwidmFsdWVDb252ZXJ0ZXIiLCJyZWdpc3RlciIsImVsZXZhdGlvblByb3BlcnR5Iiwic2hhZG93UmFkaXVzUHJvcGVydHkiLCJzaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5Iiwic2hhZG93T2Zmc2V0SGVpZ2h0UHJvcGVydHkiLCJzaGFkb3dDb2xvclByb3BlcnR5IiwiQ29sb3IiLCJzaGFkb3dPcGFjaXR5UHJvcGVydHkiLCJwbGF0Zm9ybV8xIiwiY2FyZHZpZXdfY29tbW9uXzEiLCJDYXJkVmlldyIsIl90aGlzIiwiY2FsbCIsIndpZHRoIiwic2NyZWVuIiwibWFpblNjcmVlbiIsIndpZHRoRElQcyIsIm5hdGl2ZVZpZXciLCJVSVZpZXciLCJDR1JlY3RNYWtlIiwibGF5ZXIiLCJtYXNrc1RvQm91bmRzIiwic2hhZG93Q29sb3IiLCJyYWRpdXMiLCJzaGFkb3dSYWRpdXMiLCJzaGFkb3dPcGFjaXR5Iiwic2hhZG93T2Zmc2V0SGVpZ2h0Iiwic2hhZG93T2Zmc2V0V2lkdGgiLCJwcm90b3R5cGUiLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwic2V0TmF0aXZlIiwiY29ybmVyUmFkaXVzIiwiZ2V0RGVmYXVsdCIsImJhY2tncm91bmRDb2xvciIsInVuZGVmaW5lZCIsImlvcyIsImNvbG9yIiwic2hhZG93T2Zmc2V0IiwiQ0dTaXplTWFrZSIsImhlaWdodCIsIkNHQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx5QkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFDQSx3Q0FEQTtBQUVBO0FBRkE7QUFKQTtBQVNBLEtBWEE7QUFZQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx5QkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFDQSx5Q0FEQTtBQUVBO0FBRkE7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aEIsQ0FBc0JFLFdBQXRCLEdBQW9DeEMsS0FBSyxDQUFDdUQsR0FBTixDQUFVSyxPQUE5QztBQUNILEdBRkQ7O0FBR0FoQyxVQUFRLENBQUNrQixTQUFULENBQW1CbkIsaUJBQWlCLENBQUNGLHFCQUFsQixDQUF3Q3lCLFNBQTNELElBQXdFLFVBQVVsRCxLQUFWLEVBQWlCO0FBQ3JGLFNBQUttQyxVQUFMLENBQWdCRyxLQUFoQixDQUFzQkssYUFBdEIsR0FBc0MzQyxLQUF0QztBQUNILEdBRkQ7O0FBR0EsU0FBTzRCLFFBQVA7QUFDSCxDQW5EZSxDQW1EZEQsaUJBQWlCLENBQUNuQixjQW5ESixDQUFoQjs7QUFvREFULE9BQU8sQ0FBQzZCLFFBQVIsR0FBbUJBLFFBQW5CLEM7Ozs7Ozs7QUN6REEsMkQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLDBFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSx5RTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSx1RTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLGdFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHVGOzs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7QUNBQSxxRjs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxtRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIHRpdGxlPVwiSG9tZVwiIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiSG9tZVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uIGhlaWdodD1cIjEwMHB4XCI+XG4gICAgICAgICAgICAgICAgPFRhYlN0cmlwPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkVzdGF0ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJCZWRyb29tc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJVc2VyXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVmlldyB2LWZvcj1cImhpZ2hsaWdodCBpbiBoaWdobGlnaHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkXCIgZWxldmF0aW9uPVwiNDBcIiByYWRpdXM9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvczpzaGFkb3dSYWRpdXM9XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNhcmQtbGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImhpZ2hsaWdodC5JbWFnZV9VUkxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cImhpZ2hsaWdodC5Qcm9wZXJ0eV9UaXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2R5XCIgdGV4dFdyYXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cImhpZ2hsaWdodC5Fc3RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCInUmVudDogJCcraGlnaGxpZ2h0LlJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJlc3RhdGUgaW4gZXN0YXRlc1wiIEBpdGVtVGFwPVwiU2VhcmNoZXN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImVzdGF0ZS5uYW1lXCIgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImJlZHJvb20gaW4gYmVkcm9vbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XCJTZWFyY2hCZWRyb29tc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCI1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJiZWRyb29tLm5hbWVcIiBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCIgaGVpZ2h0PVwiMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM5NzQ4MzQ0MzAsMjU3ODA4MTkxOSZmbT0yNiZncD0wLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDQwJVwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkJhYmVcIiBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIiBMb2dpbi9Mb2dvZmZcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIiBAdGFwPVwiU2lnbmluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4gcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJNeSBSZW50YWxzXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCIgQHRhcD1cIk15X3JlbnRhbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0biByb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuXG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBteV9yZW50YWxzIGZyb20gXCIuL215X3JlbnRhbHNcIjtcbiAgICBpbXBvcnQgc2lnbl9pbiBmcm9tIFwiLi9zaWduX2luXCI7XG4gICAgaW1wb3J0IGVzdGF0ZV9zZWFyY2ggZnJvbSBcIi4vZXN0YXRlX3NlYXJjaFwiO1xuICAgIGltcG9ydCBiZWRyb29tX3NlYXJjaCBmcm9tIFwiLi9iZWRyb29tX3NlYXJjaFwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgU2VhcmNoZXN0YXRlOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhlc3RhdGVfc2VhcmNoLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFc3RhdGU6IGFyZ3MuaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTZWFyY2hCZWRyb29tczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oYmVkcm9vbV9zZWFyY2gsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJlZHJvb206IGFyZ3MuaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTaWduaW46IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHNpZ25faW4sIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE15X3JlbnRhbHM6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKG15X3JlbnRhbHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgZ2xvYmFsLnJvb3RVUkwgPSBcImh0dHA6Ly8xOTIuMTY4LjMuMzQ6MTMzN1wiO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5oaWdobGlnaHRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRzOiBbXSxcbiAgICAgICAgICAgICAgICBlc3RhdGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGZXN0aXZhbCBDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUaW4gTWEgQ291cnRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNpdHkgT25lIFNoYXRpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGJlZHJvb21zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCZWRyb29tIDw9IDJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZHJvb20gPj0gM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJCZWRyb29tIFNlYXJjaFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XG4gICAgICAgIDxMaXN0VmlldyB2LWlmPVwiQmVkcm9vbW5hbWU9PSdCZWRyb29tIDw9IDInXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCJcbiAgICAgICAgICAgIGZvcj1cIkJlZHJvb21TMiBpbiBCZWRyb29tUzJzXCIgQGl0ZW1UYXA9XCJEZXRhaWxcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiODBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiQmVkcm9vbVMyLlByb3BlcnR5X1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDEgZm9udC13ZWlnaHQ6IGJvbGQ7XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiQmVkcm9vbVMyLkVzdGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPExpc3RWaWV3IHYtaWY9XCJCZWRyb29tbmFtZT09J0JlZHJvb20gPj0gMydcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIlxuICAgICAgICAgICAgZm9yPVwiQmVkcm9vbUwzIGluIEJlZHJvb21MM3NcIiBAaXRlbVRhcD1cIkRldGFpbFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCI4MFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJCZWRyb29tTDMuUHJvcGVydHlfVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoMSBmb250LXdlaWdodDogYm9sZDtcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJCZWRyb29tTDMuRXN0YXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICA8L0xpc3RWaWV3PlxuXG5cblxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZGV0YWlscyBmcm9tIFwiLi9kZXRhaWxzXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW1wic2VsZWN0ZWRCZWRyb29tXCIsIFwiJGRlbGVnYXRlXCJdLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBEZXRhaWw6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKGRldGFpbHMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFwYXJ0bWVudDogYXJncy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuXHRcdFx0IGdsb2JhbC5yb290VVJMID0gXCJodHRwOi8vMTkyLjE2OC4zLjM0OjEzMzdcIjtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgICAgICAgICBcIi9BcGFydG1lbnQvU2VhcmNoLz9cIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0aXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5CZWRyb29tUzJzID0gdGhpcy5HZXRpdGVtcy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLkJlZHJvb21zIDwgMztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLkJlZHJvb21MM3MgPSB0aGlzLkdldGl0ZW1zLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuQmVkcm9vbXMgPiAyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgQmVkcm9vbW5hbWU6IHRoaXMuc2VsZWN0ZWRCZWRyb29tLFxuICAgICAgICAgICAgICAgIEdldGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBCZWRyb29tUzJzOiBbXSxcbiAgICAgICAgICAgICAgICBCZWRyb29tTDNzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJEZXRhaWxcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgbWFyZ2luPVwiMTBcIj5cbiAgICAgICAgPEltYWdlIDpzcmM9XCJzZWxlY3RlZEFwYXJ0bWVudC5JbWFnZV9VUkxcIiBoZWlnaHQ9XCIzMDBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgOnRleHQ9XCJzZWxlY3RlZEFwYXJ0bWVudC5Qcm9wZXJ0eV9UaXRsZVwiIC8+XG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCBhdXRvLCBhdXRvXCIgcm93cz1cImF1dG8sIGF1dG9cIj5cbiAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiA6dGV4dD1cIidFc3RhdGU6ICcrc2VsZWN0ZWRBcGFydG1lbnQuRXN0YXRlKycsICdcIiAvPlxuICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIDp0ZXh0PVwiJ0JyZWRyb29tOiAnK3NlbGVjdGVkQXBhcnRtZW50LkJlZHJvb21zXCIgLz5cbiAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjFcIiA6dGV4dD1cIidSZW50IFByaWNlOiAkJyArIHNlbGVjdGVkQXBhcnRtZW50LlJlbnQrJywgJ1wiIC8+XG4gICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIxXCIgOnRleHQ9XCInVGVuYW50czogJytzZWxlY3RlZEFwYXJ0bWVudC5FeHBlY3RlZF9UZW5hbnRzKycsICdcIiAvPlxuICAgICAgICAgIDxMYWJlbCBjb2w9XCIyXCIgcm93PVwiMVwiIDp0ZXh0PVwiJ0FyZWE6ICcrc2VsZWN0ZWRBcGFydG1lbnQuR3Jvc3NfQXJlYVwiIC8+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiNTAsIDUwXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sPVwiMFwiXG4gICAgICAgICAgICByb3c9XCIwXCJcbiAgICAgICAgICAgIHRleHQ9XCJNb3ZlLWluXCJcbiAgICAgICAgICAgIEB0YXA9XCJhZGR0b01pbmUoKVwiXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4gcm91bmRlZC1sZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2w9XCIxXCJcbiAgICAgICAgICAgIHJvdz1cIjBcIlxuICAgICAgICAgICAgdGV4dD1cIkFkZHJlc3NcIlxuICAgICAgICAgICAgQHRhcD1cInNob3dtYXAoKVwiXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4gcm91bmRlZC1sZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1Njcm9sbFZpZXc+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbWFwcyBmcm9tIFwiLi9tYXBzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJzZWxlY3RlZEFwYXJ0bWVudFwiLCBcIiRkZWxlZ2F0ZVwiXSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dtYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhtYXBzLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG9ubWFwOiB0aGlzLnNlbGVjdGVkQXBhcnRtZW50LkVzdGF0ZSxcbiAgICAgICAgICBxTGF0aXR1ZGU6IHRoaXMuc2VsZWN0ZWRBcGFydG1lbnQuTGF0aXR1ZGUsXG4gICAgICAgICAgcUxvbmdpdHVkZTogdGhpcy5zZWxlY3RlZEFwYXJ0bWVudC5Mb25naXR1ZGUsXG4gICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgYWRkdG9NaW5lKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogXCJDb25maXJtP1wiLFxuICAgICAgICBtZXNzYWdlOiBcIlRoaXMgYXBhcnRtZW50IHdpbGwgYWRkZWQgdG8geW91ciByZW50YWxzLlwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBnbG9iYWwucm9vdFVSTCA9IFwiaHR0cDovLzE5Mi4xNjguMy4zNDoxMzM3XCI7XG4gICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgICAgIFwiL3VzZXIvXCIgK1xuICAgICAgICAgICAgMiArXG4gICAgICAgICAgICBcIi9yZW50cy9hZGQvXCIgK1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFwYXJ0bWVudC5pZCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1cyArIFwiOiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkVzdGF0ZSBTZWFyY2hcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuICAgICAgICA8TGlzdFZpZXcgdi1pZj1cIkVzdGF0ZW5hbWU9PSdGZXN0aXZhbCBDaXR5J1wiIGNsYXNzPVwibGlzdC1ncm91cFwiXG4gICAgICAgICAgICBmb3I9XCJGZXN0aXZhbF9DaXR5IGluIEZlc3RpdmFsX0NpdHlzXCIgQGl0ZW1UYXA9XCJEZXRhaWxcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiODBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiRmVzdGl2YWxfQ2l0eS5Qcm9wZXJ0eV9UaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgxIGZvbnQtd2VpZ2h0OiBib2xkO1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIkZlc3RpdmFsX0NpdHkuRXN0YXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8TGlzdFZpZXcgdi1pZj1cIkVzdGF0ZW5hbWU9PSdUaW4gTWEgQ291cnQnXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCJcbiAgICAgICAgICAgIGZvcj1cIlRpbl9NYV9Db3VydCBpbiBUaW5fTWFfQ291cnRzXCIgQGl0ZW1UYXA9XCJEZXRhaWxcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiODBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiVGluX01hX0NvdXJ0LlByb3BlcnR5X1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDEgZm9udC13ZWlnaHQ6IGJvbGQ7XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiVGluX01hX0NvdXJ0LkVzdGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPExpc3RWaWV3IHYtaWY9XCJFc3RhdGVuYW1lPT0nQ2l0eSBPbmUgU2hhdGluJ1wiIGNsYXNzPVwibGlzdC1ncm91cFwiXG4gICAgICAgICAgICBmb3I9XCJDaXR5X09uZV9TaGF0aW4gaW4gQ2l0eV9PbmVfU2hhdGluc1wiIEBpdGVtVGFwPVwiRGV0YWlsXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjgwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIkNpdHlfT25lX1NoYXRpbi5Qcm9wZXJ0eV9UaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgxIGZvbnQtd2VpZ2h0OiBib2xkO1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIkNpdHlfT25lX1NoYXRpbi5Fc3RhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgIDwvTGlzdFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZGV0YWlscyBmcm9tIFwiLi9kZXRhaWxzXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW1wic2VsZWN0ZWRFc3RhdGVcIiwgXCIkZGVsZWdhdGVcIl0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIERldGFpbDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oZGV0YWlscywge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXBhcnRtZW50OiBhcmdzLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBnbG9iYWwucm9vdFVSTCA9IFwiaHR0cDovLzE5Mi4xNjguMy4zNDoxMzM3XCI7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBnbG9iYWwucm9vdFVSTCArIFwiL0FwYXJ0bWVudC9TZWFyY2gvP0VzdGF0ZT1cIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkZlc3RpdmFsX0NpdHlzID0gdGhpcy5HZXRpdGVtcy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLkVzdGF0ZSA9PSBcIkZlc3RpdmFsIENpdHlcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5UaW5fTWFfQ291cnRzID0gdGhpcy5HZXRpdGVtcy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLkVzdGF0ZSA9PSBcIlRpbiBNYSBDb3VydFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLkNpdHlfT25lX1NoYXRpbnMgPSB0aGlzLkdldGl0ZW1zLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuRXN0YXRlID09IFwiQ2l0eSBPbmUgU2hhdGluXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBFc3RhdGVuYW1lOiB0aGlzLnNlbGVjdGVkRXN0YXRlLFxuICAgICAgICAgICAgICAgIEdldGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBGZXN0aXZhbF9DaXR5czogW10sXG4gICAgICAgICAgICAgICAgVGluX01hX0NvdXJ0czogW10sXG4gICAgICAgICAgICAgICAgQ2l0eV9PbmVfU2hhdGluczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxwYWdlPlxuICAgICAgICA8V2ViVmlld1xuICAgICAgICAgICAgOnNyYz1cIidodHRwczovL2xlYWZsZXRhcGkubXRjaG95Lm5vdy5zaC9pbmRleC5odG1sP2xhdD0nK3FMYXRpdHVkZSsnJmxuZz0nK3FMb25naXR1ZGUrJyZ6b29tPTE3Jm1hcmtlckxhdD0yMi4zNDEwNzImbWFya2V0TG5nPTExNC4xNzk2NDUmbWFya2VyVGl0bGU9QUMlMjBIYWxsJmxvY2F0ZT10cnVlJ1wiIC8+XG4gICAgPC9wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXCJvbm1hcFwiLCBcInFMb25naXR1ZGVcIiwgXCJxTGF0aXR1ZGVcIiwgXCIkZGVsZWdhdGVcIl0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEdlb0xvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGFsdGl0dWRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IFJlbnRhbHNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuXG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJNeXJlbnRhbCBpbiBNeXJlbnRhbHNcIiBAaXRlbVRhcD1cIlNlYXJjaGVzdGF0ZVwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCI4MFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJNeXJlbnRhbC5Qcm9wZXJ0eV9UaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgxIGZvbnQtd2VpZ2h0OiBib2xkO1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIk15cmVudGFsLkVzdGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgPC9MaXN0Vmlldz5cblxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXCIkZGVsZWdhdGVcIl0sXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBnbG9iYWwucm9vdFVSTCA9IFwiaHR0cDovLzE5Mi4xNjguMy4zNDoxMzM3XCI7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnbG9iYWwucm9vdFVSTCArIFwiL3VzZXIvMi9yZW50c1wiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5NeXJlbnRhbHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5NeXJlbnRhbHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIE15cmVudGFsczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiVXNlclwiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XG4gICAgPEZsZXhib3hMYXlvdXQgd2lkdGg9XCI4MCVcIiBoZWlnaHQ9XCI1MCVcIj5cbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgIDxHcmlkTGF5b3V0IHYtaWY9XCJpc0xvZ2dpbmdJbj09dHJ1ZVwiIHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjBcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICBoaW50PVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiX3VzZXJuYW1lXCJcbiAgICAgICAgICAgID48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIl9wYXNzd29yZFwiXG4gICAgICAgICAgICA+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgICAgdHlwZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ0xvZ29mZidcIlxuICAgICAgICAgIEB0YXA9XCJzaWduaW4oKVwiXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCJcbiAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCIkZGVsZWdhdGVcIl0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBzaWduaW4oKSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJuYW1lXCIsIHRoaXMuX3VzZXJuYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIHRoaXMuX3Bhc3N3b3JkKTtcblxuICAgICAgZ2xvYmFsLnJvb3RVUkwgPSBcImh0dHA6Ly8xOTIuMTY4LjMuMzQ6MTMzN1wiO1xuICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi9Vc2VyL0xvZ2luXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICBpZiAoZGF0YS5pc0xvZ2dpbmdJbiA9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxlcnRcIik7XG4gICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2lnbm9mZigpIHtcbiAgICAgIGdsb2JhbC5yb290VVJMID0gXCJodHRwOi8vMTkyLjE2OC4zMS43OjEzMzdcIjtcbiAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvVXNlci9Mb2dvdXRcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgaWYgKGRhdGEuaXNMb2dnaW5nSW4gPT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxlcnRcIik7XG4gICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICBfdXNlcm5hbWU6IFwiY2xpZW50c1wiLFxuICAgICAgX3Bhc3N3b3JkOiBcIjEyMzQ1Njc4XCJcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiwgYXR0cnM6IHsgdGl0bGU6IFwiSG9tZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgdGl0bGU6IFwiSG9tZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkJvdHRvbU5hdmlnYXRpb25cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjEwMHB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJIb21lXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkVzdGF0ZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJCZWRyb29tc1wiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJVc2VyXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lLXBhbmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaGlnaGxpZ2h0cywgZnVuY3Rpb24oaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhcmRWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzaGFkb3dSYWRpdXNcIjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1sYXlvdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGhpZ2hsaWdodC5JbWFnZV9VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBoaWdobGlnaHQuUHJvcGVydHlfVGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBoaWdobGlnaHQuRXN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlbnQ6ICRcIiArIGhpZ2hsaWdodC5SZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZXN0YXRlcywgXCIrYWxpYXNcIjogXCJlc3RhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5TZWFyY2hlc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXN0YXRlID0gcmVmLmVzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogZXN0YXRlLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uYmVkcm9vbXMsIFwiK2FsaWFzXCI6IFwiYmVkcm9vbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLlNlYXJjaEJlZHJvb21zIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlZHJvb20gPSByZWYuYmVkcm9vbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogYmVkcm9vbS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBoZWlnaHQ6IFwiMTUwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI0MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9Mzk3NDgzNDQzMCwyNTc4MDgxOTE5JmZtPTI2JmdwPTAuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjYwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCYWJlXCIsIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4gcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIgTG9naW4vTG9nb2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLlNpZ25pbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0biByb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk15IFJlbnRhbHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uTXlfcmVudGFscyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQmVkcm9vbSBTZWFyY2hcIiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5CZWRyb29tbmFtZSA9PSBcIkJlZHJvb20gPD0gMlwiXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5CZWRyb29tUzJzLCBcIithbGlhc1wiOiBcIkJlZHJvb21TMlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5EZXRhaWwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQmVkcm9vbVMyID0gcmVmLkJlZHJvb21TMlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgaGVpZ2h0OiBcIjgwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMSBmb250LXdlaWdodDogYm9sZDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IEJlZHJvb21TMi5Qcm9wZXJ0eV9UaXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IEJlZHJvb21TMi5Fc3RhdGUgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgMTgyNTQwMjc0OFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLkJlZHJvb21uYW1lID09IFwiQmVkcm9vbSA+PSAzXCJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLkJlZHJvb21MM3MsIFwiK2FsaWFzXCI6IFwiQmVkcm9vbUwzXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLkRldGFpbCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBCZWRyb29tTDMgPSByZWYuQmVkcm9vbUwzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBoZWlnaHQ6IFwiODBcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxIGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogQmVkcm9vbUwzLlByb3BlcnR5X1RpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogQmVkcm9vbUwzLkVzdGF0ZSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAxNDY5MTY2MTBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiRGV0YWlsXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgbWFyZ2luOiBcIjEwXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2VsZWN0ZWRBcGFydG1lbnQuSW1hZ2VfVVJMLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5zZWxlY3RlZEFwYXJ0bWVudC5Qcm9wZXJ0eV9UaXRsZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgYXV0bywgYXV0b1wiLCByb3dzOiBcImF1dG8sIGF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXN0YXRlOiBcIiArIF92bS5zZWxlY3RlZEFwYXJ0bWVudC5Fc3RhdGUgKyBcIiwgXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJCcmVkcm9vbTogXCIgKyBfdm0uc2VsZWN0ZWRBcGFydG1lbnQuQmVkcm9vbXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZW50IFByaWNlOiAkXCIgKyBfdm0uc2VsZWN0ZWRBcGFydG1lbnQuUmVudCArIFwiLCBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUZW5hbnRzOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRBcGFydG1lbnQuRXhwZWN0ZWRfVGVuYW50cyArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcmVhOiBcIiArIF92bS5zZWxlY3RlZEFwYXJ0bWVudC5Hcm9zc19BcmVhXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIqLCAqXCIsIHJvd3M6IFwiNTAsIDUwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0biByb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiTW92ZS1pblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkdG9NaW5lKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuIHJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJBZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93bWFwKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLFxuICAgICAgICBhdHRyczogeyB0aXRsZTogXCJFc3RhdGUgU2VhcmNoXCIgfVxuICAgICAgfSksXG4gICAgICBfdm0uRXN0YXRlbmFtZSA9PSBcIkZlc3RpdmFsIENpdHlcIlxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uRmVzdGl2YWxfQ2l0eXMsIFwiK2FsaWFzXCI6IFwiRmVzdGl2YWxfQ2l0eVwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5EZXRhaWwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgRmVzdGl2YWxfQ2l0eSA9IHJlZi5GZXN0aXZhbF9DaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBoZWlnaHQ6IFwiODBcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxIGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogRmVzdGl2YWxfQ2l0eS5Qcm9wZXJ0eV9UaXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBGZXN0aXZhbF9DaXR5LkVzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDI2Mjg3NDM5NTFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5Fc3RhdGVuYW1lID09IFwiVGluIE1hIENvdXJ0XCJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLlRpbl9NYV9Db3VydHMsIFwiK2FsaWFzXCI6IFwiVGluX01hX0NvdXJ0XCIgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLkRldGFpbCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUaW5fTWFfQ291cnQgPSByZWYuVGluX01hX0NvdXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBoZWlnaHQ6IFwiODBcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxIGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogVGluX01hX0NvdXJ0LlByb3BlcnR5X1RpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFRpbl9NYV9Db3VydC5Fc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAyNjA0MjU1OTA1XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uRXN0YXRlbmFtZSA9PSBcIkNpdHkgT25lIFNoYXRpblwiXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLkNpdHlfT25lX1NoYXRpbnMsXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJDaXR5X09uZV9TaGF0aW5cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0uRGV0YWlsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIENpdHlfT25lX1NoYXRpbiA9IHJlZi5DaXR5X09uZV9TaGF0aW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGhlaWdodDogXCI4MFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDEgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBDaXR5X09uZV9TaGF0aW4uUHJvcGVydHlfVGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogQ2l0eV9PbmVfU2hhdGluLkVzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDk3OTk5NTI0M1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiV2ViVmlld1wiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOlxuICAgICAgICAgICAgXCJodHRwczovL2xlYWZsZXRhcGkubXRjaG95Lm5vdy5zaC9pbmRleC5odG1sP2xhdD1cIiArXG4gICAgICAgICAgICBfdm0ucUxhdGl0dWRlICtcbiAgICAgICAgICAgIFwiJmxuZz1cIiArXG4gICAgICAgICAgICBfdm0ucUxvbmdpdHVkZSArXG4gICAgICAgICAgICBcIiZ6b29tPTE3Jm1hcmtlckxhdD0yMi4zNDEwNzImbWFya2V0TG5nPTExNC4xNzk2NDUmbWFya2VyVGl0bGU9QUMlMjBIYWxsJmxvY2F0ZT10cnVlXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIsXG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIk15IFJlbnRhbHNcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLk15cmVudGFscywgXCIrYWxpYXNcIjogXCJNeXJlbnRhbFwiIH0sXG4gICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLlNlYXJjaGVzdGF0ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBNeXJlbnRhbCA9IHJlZi5NeXJlbnRhbFxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgaGVpZ2h0OiBcIjgwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMSBmb250LXdlaWdodDogYm9sZDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IE15cmVudGFsLlByb3BlcnR5X1RpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogTXlyZW50YWwuRXN0YXRlIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyB0aXRsZTogXCJVc2VyXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB3aWR0aDogXCI4MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIsIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uaXNMb2dnaW5nSW4gPT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uX3VzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3VzZXJuYW1lID0gJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIl91c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiUGFzc3dvcmRcIiwgc2VjdXJlOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLl9wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9wYXNzd29yZCA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJTdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiTG9nIEluXCIgOiBcIkxvZ29mZlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaWduaW4oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL25hdGl2ZXNjcmlwdC1jYXJkdmlldy9jYXJkdmlldy1jb21tb24uanNcIjogXCIuL25hdGl2ZXNjcmlwdC1jYXJkdmlldy9jYXJkdmlldy1jb21tb24uanNcIixcblx0XCIuL25hdGl2ZXNjcmlwdC1jYXJkdmlldy9jYXJkdmlldy5qc1wiOiBcIi4vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jYXJkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0ZDRkNGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNSAxNSAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNhcmQtbGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNhcmQtbGF5b3V0IC5oMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5WdWUucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IHJlcXVpcmUoJy4vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXcpO1xuXG4vLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3Ncbi8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cbm5ldyBWdWUoe1xuXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEhvbWUpXSksXG5cbn0pLiRzdGFydCgpO1xuXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxc5aSH5Lu9XFxcXGNvbXA3MjcwLXByb2plY3QtbW9iaWxlLWFwcC1zY29ycGkwb24tbWFzdGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9iZWRyb29tX3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTYzNzQyMzQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmVkcm9vbV9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9iZWRyb29tX3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXOWkh+S7vVxcXFxjb21wNzI3MC1wcm9qZWN0LW1vYmlsZS1hcHAtc2NvcnBpMG9uLW1hc3RlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlNjM3NDIzNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlNjM3NDIzNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlNjM3NDIzNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYmVkcm9vbV9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU2Mzc0MjM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U2Mzc0MjM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2JlZHJvb21fc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iZWRyb29tX3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iZWRyb29tX3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVkcm9vbV9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU2Mzc0MjM0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODU2MzFkNyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXOWkh+S7vVxcXFxjb21wNzI3MC1wcm9qZWN0LW1vYmlsZS1hcHAtc2NvcnBpMG9uLW1hc3RlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxODU2MzFkNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODU2MzFkNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODU2MzFkNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg1NjMxZDcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTg1NjMxZDcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvZGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODU2MzFkNyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZXN0YXRlX3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVhMmI5NjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZXN0YXRlX3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2VzdGF0ZV9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFzlpIfku71cXFxcY29tcDcyNzAtcHJvamVjdC1tb2JpbGUtYXBwLXNjb3JwaTBvbi1tYXN0ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjVhMmI5NjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjVhMmI5NjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjVhMmI5NjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2VzdGF0ZV9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1YTJiOTYwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1YTJiOTYwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2VzdGF0ZV9zZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VzdGF0ZV9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0YXRlX3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0YXRlX3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVhMmI5NjAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21hcHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3Y2RiZTVjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxc5aSH5Lu9XFxcXGNvbXA3MjcwLXByb2plY3QtbW9iaWxlLWFwcC1zY29ycGkwb24tbWFzdGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2U3Y2RiZTVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U3Y2RiZTVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U3Y2RiZTVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tYXBzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lN2NkYmU1YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlN2NkYmU1YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tYXBzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3Y2RiZTVjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9teV9yZW50YWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzE2MDliNyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9teV9yZW50YWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbXlfcmVudGFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXOWkh+S7vVxcXFxjb21wNzI3MC1wcm9qZWN0LW1vYmlsZS1hcHAtc2NvcnBpMG9uLW1hc3RlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMzE2MDliNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMzE2MDliNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMzE2MDliNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbXlfcmVudGFscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjMxNjA5YjcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjMxNjA5YjcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbXlfcmVudGFscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbXlfcmVudGFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teV9yZW50YWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teV9yZW50YWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzE2MDliNyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2lnbl9pbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI3NGMzZmMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2lnbl9pbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpZ25faW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFzlpIfku71cXFxcY29tcDcyNzAtcHJvamVjdC1tb2JpbGUtYXBwLXNjb3JwaTBvbi1tYXN0ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGI3NGMzZmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGI3NGMzZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGI3NGMzZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NpZ25faW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiNzRjM2ZjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiNzRjM2ZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3NpZ25faW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZ25faW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbl9pbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lnbl9pbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI3NGMzZmMmXCIiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7XG52YXIgY29udGVudF92aWV3XzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7XG52YXIgdmlld18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpO1xudmFyIHZpZXdfMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiKTtcbmV4cG9ydHMuYmFja2dyb3VuZENvbG9yUHJvcGVydHkgPSB2aWV3XzIuYmFja2dyb3VuZENvbG9yUHJvcGVydHk7XG5leHBvcnRzLmJhY2tncm91bmRJbnRlcm5hbFByb3BlcnR5ID0gdmlld18yLmJhY2tncm91bmRJbnRlcm5hbFByb3BlcnR5O1xudmFyIENhcmRWaWV3Q29tbW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FyZFZpZXdDb21tb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2FyZFZpZXdDb21tb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIENhcmRWaWV3Q29tbW9uO1xufShjb250ZW50X3ZpZXdfMS5Db250ZW50VmlldykpO1xuZXhwb3J0cy5DYXJkVmlld0NvbW1vbiA9IENhcmRWaWV3Q29tbW9uO1xuZXhwb3J0cy5yYWRpdXNQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwicmFkaXVzXCIsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMucmFkaXVzUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5lbGV2YXRpb25Qcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwiZWxldmF0aW9uXCIsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuZWxldmF0aW9uUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dSYWRpdXNQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwic2hhZG93UmFkaXVzXCIsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93UmFkaXVzUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJzaGFkb3dPZmZzZXRXaWR0aFwiLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICt2YWx1ZTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd09mZnNldFdpZHRoUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRIZWlnaHRQcm9wZXJ0eSA9IG5ldyB2aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6IFwic2hhZG93T2Zmc2V0SGVpZ2h0XCIsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93T2Zmc2V0SGVpZ2h0UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dDb2xvclByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogXCJzaGFkb3dDb2xvclwiLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG5ldyBjb2xvcl8xLkNvbG9yKHZhbHVlKTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd0NvbG9yUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkgPSBuZXcgdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiBcInNoYWRvd09wYWNpdHlcIixcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FyZHZpZXctY29tbW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKTtcbnZhciBwbGF0Zm9ybV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG52YXIgY2FyZHZpZXdfY29tbW9uXzEgPSByZXF1aXJlKFwiLi9jYXJkdmlldy1jb21tb25cIik7XG52YXIgQ2FyZFZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXJkVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYXJkVmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgdmFyIHdpZHRoID0gcGxhdGZvcm1fMS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLSAyMDtcbiAgICAgICAgX3RoaXMubmF0aXZlVmlldyA9IG5ldyBVSVZpZXcoQ0dSZWN0TWFrZSgxMCwgMzAsIHdpZHRoLCAwKSk7XG4gICAgICAgIF90aGlzLm5hdGl2ZVZpZXcubGF5ZXIubWFza3NUb0JvdW5kcyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgX3RoaXMucmFkaXVzID0gMTtcbiAgICAgICAgX3RoaXMuc2hhZG93UmFkaXVzID0gMTtcbiAgICAgICAgX3RoaXMuc2hhZG93T3BhY2l0eSA9IDAuNDtcbiAgICAgICAgX3RoaXMuc2hhZG93T2Zmc2V0SGVpZ2h0ID0gMjtcbiAgICAgICAgX3RoaXMuc2hhZG93T2Zmc2V0V2lkdGggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXJkVmlldy5wcm90b3R5cGUsIFwiaW9zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVWaWV3O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEucmFkaXVzUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcubGF5ZXIuY29ybmVyUmFkaXVzID0gdmFsdWU7XG4gICAgfTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEucmFkaXVzUHJvcGVydHkuZ2V0RGVmYXVsdF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVZpZXcubGF5ZXIuY29ybmVyUmFkaXVzO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlW2NhcmR2aWV3X2NvbW1vbl8xLmJhY2tncm91bmRDb2xvclByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUuaW9zIDogbmV3IGNvbG9yXzEuQ29sb3IoXCIjRkZGRkZGXCIpLmlvcztcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5iYWNrZ3JvdW5kSW50ZXJuYWxQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JfMS5Db2xvcih2YWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gdmFsdWUuY29sb3IgKyBcIlwiIDogXCIjRkZGRkZGXCIpLmlvcztcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5zaGFkb3dSYWRpdXNQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5sYXllci5zaGFkb3dSYWRpdXMgPSB2YWx1ZTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5zaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UodmFsdWUsIHRoaXMubmF0aXZlVmlldy5sYXllci5zaGFkb3dPZmZzZXQuaGVpZ2h0KTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5zaGFkb3dPZmZzZXRIZWlnaHRQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5sYXllci5zaGFkb3dPZmZzZXQgPSBDR1NpemVNYWtlKHRoaXMubmF0aXZlVmlldy5sYXllci5zaGFkb3dPZmZzZXQud2lkdGgsIHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5zaGFkb3dDb2xvclByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LmxheWVyLnNoYWRvd0NvbG9yID0gdmFsdWUuaW9zLkNHQ29sb3I7XG4gICAgfTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEuc2hhZG93T3BhY2l0eVByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LmxheWVyLnNoYWRvd09wYWNpdHkgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBDYXJkVmlldztcbn0oY2FyZHZpZXdfY29tbW9uXzEuQ2FyZFZpZXdDb21tb24pKTtcbmV4cG9ydHMuQ2FyZFZpZXcgPSBDYXJkVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhcmR2aWV3Lmlvcy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3V0aWxzL3R5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==