/*!
 * vue-hotel-datepicker v0.1.0
 * (c) 2018-2018 Brian Lee
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue-property-decorator'), require('@fortawesome/vue-fontawesome'), require('vuejs-datepicker'), require('v-tooltip'), require('dayjs'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons')) :
    typeof define === 'function' && define.amd ? define(['vue-property-decorator', '@fortawesome/vue-fontawesome', 'vuejs-datepicker', 'v-tooltip', 'dayjs', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons'], factory) :
    (global.VueHotelDatepicker = factory(global['vue-property-decorator'],null,null,null,null,null,null));
}(this, (function (vuePropertyDecorator,vueFontawesome,VueDatepicker,VTooltip,dayjs,fontawesomeSvgCore,freeSolidSvgIcons) { 'use strict';

    VueDatepicker = VueDatepicker && VueDatepicker.hasOwnProperty('default') ? VueDatepicker['default'] : VueDatepicker;
    VTooltip = VTooltip && VTooltip.hasOwnProperty('default') ? VTooltip['default'] : VTooltip;
    var dayjs__default = 'default' in dayjs ? dayjs['default'] : dayjs;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var SearchOverlay = /** @class */ (function (_super) {
        __extends(SearchOverlay, _super);
        function SearchOverlay() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'SearchOverlay';
            return _this;
        }
        Object.defineProperty(SearchOverlay.prototype, "style", {
            get: function () {
                return {
                    position: 'absolute',
                    display: this.searching ? 'block' : 'none',
                    backgroundColor: 'rgba(0,0,0,0.25)',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 10
                };
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            vuePropertyDecorator.Prop({ type: Boolean, default: false }),
            __metadata("design:type", Boolean)
        ], SearchOverlay.prototype, "searching", void 0);
        SearchOverlay = __decorate([
            vuePropertyDecorator.Component
        ], SearchOverlay);
        return SearchOverlay;
    }(vuePropertyDecorator.Vue));

    /* script */
                var __vue_script__ = SearchOverlay;
                
    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { style: _vm.style }, [_vm._m(0)])
    };
    var __vue_staticRenderFns__ = [
      function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          {
            staticClass:
              "d-flex flex-column justify-content-center align-items-center h-100"
          },
          [
            _c("div", { staticClass: "sk-cube-grid" }, [
              _c("div", { staticClass: "sk-cube sk-cube1" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube2" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube3" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube4" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube5" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube6" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube7" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube8" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-cube sk-cube9" })
            ])
          ]
        )
      }
    ];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = undefined;
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* component normalizer */
      function __vue_normalize__(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        {
          component.__file = "/var/workspace/projects/vue-hotel-datepicker/src/components/SearchOverlay.vue";
        }

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      function __vue_create_injector__() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var SearchOverlay$1 = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        __vue_create_injector__,
        undefined
      );

    var HotelDatePicker = /** @class */ (function (_super) {
        __extends(HotelDatePicker, _super);
        function HotelDatePicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'HotelDatePicker';
            _this.selected = {
                start: null,
                end: null
            };
            return _this;
        }
        Object.defineProperty(HotelDatePicker.prototype, "cursor", {
            get: function () {
                return !this.searching && this.checkin && this.checkout ? 'pointer' : 'not-allowed';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "searchIcon", {
            get: function () {
                return this.searching ? 'spinner' : 'search';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "searchText", {
            get: function () {
                return this.searching ? 'Searching...' : 'Search';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "searchDisabled", {
            get: function () {
                return !(this.checkin && this.checkout);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "searchStyle", {
            get: function () {
                return {
                    color: this.searchDisabled ? 'grey' : 'rgba(236,239,241,1)',
                    backgroundColor: this.searchDisabled ? 'rgba(238,238,238,1)' : 'rgba(61,90,254,1)'
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "disabledDates", {
            get: function () {
                return {
                    to: this.startDate.toDate(),
                    from: this.endDate.toDate()
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "highlighted", {
            get: function () {
                return {
                    to: this.checkout,
                    from: this.checkin
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "checkin", {
            get: function () {
                return this.selected.start;
            },
            set: function (value) {
                this.selected.start = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "checkout", {
            get: function () {
                return this.selected.end;
            },
            set: function (value) {
                this.selected.end = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HotelDatePicker.prototype, "search", {
            get: function () {
                return this.$refs.search;
            },
            enumerable: true,
            configurable: true
        });
        HotelDatePicker.prototype.onMouseover = function (event) {
            event.target.style.cursor = this.cursor;
        };
        HotelDatePicker.prototype.onClear = function () {
            this.checkin = null;
            this.checkout = null;
        };
        HotelDatePicker.prototype.onSelected = function (value) {
            var date = !value ? null : value;
            switch (true) {
                case (!!this.checkin && !!this.checkout) || (this.checkin && this.checkin >= date):
                    this.checkout = null;
                    this.checkin = date;
                    break;
                case !this.checkin:
                    this.checkin = date;
                    break;
                default:
                    this.checkout = date;
            }
            this.$emit('checkin', this.checkin);
            this.$emit('checkout', this.checkout);
            this.toggleSearchDisabled();
        };
        HotelDatePicker.prototype.onSearch = function () {
            if (this.searching || this.searchDisabled) {
                return false;
            }
            this.$emit('search', { checkin: this.checkin, checkout: this.checkout });
        };
        HotelDatePicker.prototype.toggleSearchDisabled = function () {
            if (this.searchDisabled) {
                this.search.classList.add('search--disabled');
            }
            else {
                this.search.classList.remove('search--disabled');
            }
        };
        __decorate([
            vuePropertyDecorator.Prop({ type: Boolean, default: true }),
            __metadata("design:type", Boolean)
        ], HotelDatePicker.prototype, "bootstrapStyling", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Boolean, default: false }),
            __metadata("design:type", Boolean)
        ], HotelDatePicker.prototype, "searching", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Boolean, default: false }),
            __metadata("design:type", Boolean)
        ], HotelDatePicker.prototype, "clearButton", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Boolean, default: true }),
            __metadata("design:type", Boolean)
        ], HotelDatePicker.prototype, "inline", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: String, default: 'Select Dates' }),
            __metadata("design:type", String)
        ], HotelDatePicker.prototype, "title", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: String, default: 'MMMM D, YYYY' }),
            __metadata("design:type", String)
        ], HotelDatePicker.prototype, "format", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: dayjs.Dayjs, required: true }),
            __metadata("design:type", dayjs.Dayjs)
        ], HotelDatePicker.prototype, "startDate", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: dayjs.Dayjs, required: true }),
            __metadata("design:type", dayjs.Dayjs)
        ], HotelDatePicker.prototype, "endDate", void 0);
        __decorate([
            vuePropertyDecorator.Prop({
                type: Object, default: function () { return ({
                    color: 'rgba(236,239,241,1)',
                    backgroundColor: 'rgba(0,150,136,1)'
                }); }
            }),
            __metadata("design:type", Object)
        ], HotelDatePicker.prototype, "theme", void 0);
        HotelDatePicker = __decorate([
            vuePropertyDecorator.Component({
                components: {
                    FontAwesomeIcon: vueFontawesome.FontAwesomeIcon,
                    SearchOverlay: SearchOverlay$1,
                    VueDatepicker: VueDatepicker
                },
                directives: {
                    tooltip: VTooltip
                },
                filters: {
                    formatDate: function (value, format) {
                        var date = dayjs__default(value);
                        return date.isValid() ? date.format(format) : 'N/A';
                    }
                }
            })
        ], HotelDatePicker);
        return HotelDatePicker;
    }(vuePropertyDecorator.Vue));

    /* script */
                var __vue_script__$1 = HotelDatePicker;
                
    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "card" },
        [
          _c("search-overlay", { attrs: { searching: _vm.searching } }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "card-header d-flex flex-row justify-content-between",
              style: _vm.theme
            },
            [
              _c(
                "span",
                [
                  _c("font-awesome-icon", { attrs: { icon: "calendar" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "pl-2 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.checkin || _vm.checkout,
                      expression: "checkin || checkout"
                    },
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: { content: "" },
                      expression: "{ content: '' }"
                    }
                  ]
                },
                [
                  _c("font-awesome-icon", {
                    staticStyle: { cursor: "pointer" },
                    attrs: { icon: "times" },
                    on: { click: _vm.onClear }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-0" }, [
            _c(
              "div",
              { staticClass: "d-flex justify-content-center" },
              [
                _c("vue-datepicker", {
                  attrs: {
                    disabledDates: _vm.disabledDates,
                    highlighted: _vm.highlighted,
                    inline: _vm.inline,
                    "clear-button": _vm.clearButton,
                    "bootstrap-styling": _vm.bootstrapStyling
                  },
                  on: { selected: _vm.onSelected }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c(
              "li",
              {
                staticClass:
                  "list-group-item d-flex flex-row justify-content-between",
                style: _vm.theme
              },
              [
                _c("span", { staticClass: "font-weight-light" }, [
                  _vm._v("Check In")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v(_vm._s(_vm._f("formatDate")(_vm.checkin, _vm.format)))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "list-group-item d-flex flex-row justify-content-between",
                style: _vm.theme
              },
              [
                _c("span", { staticClass: "font-weight-light" }, [
                  _vm._v("Check Out")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v(_vm._s(_vm._f("formatDate")(_vm.checkout, _vm.format)))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                ref: "search",
                staticClass: "list-group-item text-center search--disabled",
                style: _vm.searchStyle,
                on: { click: _vm.onSearch, mouseover: _vm.onMouseover }
              },
              [
                _c("font-awesome-icon", {
                  attrs: { icon: _vm.searchIcon, spin: _vm.searching }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "pl-2",
                  domProps: { textContent: _vm._s(_vm.searchText) }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      var __vue_inject_styles__$1 = undefined;
      /* scoped */
      var __vue_scope_id__$1 = undefined;
      /* module identifier */
      var __vue_module_identifier__$1 = undefined;
      /* functional template */
      var __vue_is_functional_template__$1 = false;
      /* component normalizer */
      function __vue_normalize__$1(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        {
          component.__file = "/var/workspace/projects/vue-hotel-datepicker/src/components/HotelDatePicker.vue";
        }

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      function __vue_create_injector__$1() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var HotelDatePicker$1 = __vue_normalize__$1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        __vue_create_injector__$1,
        undefined
      );

    var Hotel = /** @class */ (function (_super) {
        __extends(Hotel, _super);
        function Hotel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            vuePropertyDecorator.Prop({ required: true }),
            __metadata("design:type", String)
        ], Hotel.prototype, "name", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ required: false, default: null }),
            __metadata("design:type", String)
        ], Hotel.prototype, "description", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ required: true }),
            __metadata("design:type", Number)
        ], Hotel.prototype, "rate", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ required: false, default: null }),
            __metadata("design:type", String)
        ], Hotel.prototype, "image", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ required: false, default: null }),
            __metadata("design:type", String)
        ], Hotel.prototype, "imageAlt", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ required: false, default: null }),
            __metadata("design:type", String)
        ], Hotel.prototype, "website", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ required: false, default: null }),
            __metadata("design:type", String)
        ], Hotel.prototype, "cancellationPolicy", void 0);
        Hotel = __decorate([
            vuePropertyDecorator.Component({
                filters: {
                    nightly: function (value) {
                        return "$" + value + " / night";
                    }
                }
            })
        ], Hotel);
        return Hotel;
    }(vuePropertyDecorator.Vue));

    /* script */
                var __vue_script__$2 = Hotel;
                
    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "card", staticStyle: { border: "none" } }, [
        _c("img", {
          staticClass: "card-img-top",
          attrs: { src: _vm.image, alt: _vm.imageAlt }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("h5", {
            staticClass: "card-title",
            domProps: { textContent: _vm._s(_vm.name) }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "card-text",
            domProps: { textContent: _vm._s(_vm.description) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-footer d-flex justify-content-between w-100" },
          [
            _c("span", [_vm._v(_vm._s(_vm._f("nightly")(_vm.rate)))]),
            _vm._v(" "),
            _c("span", [_vm._v("Book Now")])
          ]
        )
      ])
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

      /* style */
      var __vue_inject_styles__$2 = undefined;
      /* scoped */
      var __vue_scope_id__$2 = undefined;
      /* module identifier */
      var __vue_module_identifier__$2 = undefined;
      /* functional template */
      var __vue_is_functional_template__$2 = false;
      /* component normalizer */
      function __vue_normalize__$2(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        {
          component.__file = "/var/workspace/projects/vue-hotel-datepicker/src/components/Hotel.vue";
        }

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      function __vue_create_injector__$2() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var Hotel$1 = __vue_normalize__$2(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        __vue_create_injector__$2,
        undefined
      );

    var ResultsModal = /** @class */ (function (_super) {
        __extends(ResultsModal, _super);
        function ResultsModal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'ResultsModal';
            return _this;
        }
        ResultsModal.prototype.onMouseover = function (event) {
            event.target.style.cursor = 'pointer';
        };
        ResultsModal.prototype.onClose = function () {
            this.$emit('close');
        };
        __decorate([
            vuePropertyDecorator.Prop({ type: Array, required: true }),
            __metadata("design:type", Array)
        ], ResultsModal.prototype, "items", void 0);
        ResultsModal = __decorate([
            vuePropertyDecorator.Component({
                components: {
                    Hotel: Hotel$1,
                    FontAwesomeIcon: vueFontawesome.FontAwesomeIcon
                },
                filters: {
                    results: function (items) {
                        var count = items.length;
                        return count > 1 ? "Found " + count + " results" : "Found " + count + " result";
                    }
                }
            })
        ], ResultsModal);
        return ResultsModal;
    }(vuePropertyDecorator.Vue));

    /* script */
                var __vue_script__$3 = ResultsModal;
                
    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("transition", { attrs: { name: "modal" } }, [
        _c("div", { staticClass: "modal-mask" }, [
          _c("div", { staticClass: "modal-wrapper" }, [
            _c("div", { staticClass: "modal-container" }, [
              _c(
                "div",
                {
                  staticClass:
                    "modal-header d-flex flex-row justify-content-between w-100",
                  staticStyle: {
                    "background-color": "rgba(0,150,136,1)",
                    color: "white"
                  }
                },
                [
                  _c(
                    "div",
                    { on: { click: _vm.onClose, mouseover: _vm.onMouseover } },
                    [
                      _c("font-awesome-icon", { attrs: { icon: "arrow-left" } }),
                      _vm._v("\n                        Back\n                    ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm._f("results")(_vm.items)))])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                _vm._l(_vm.items, function(item, index) {
                  return _c("hotel", {
                    key: index,
                    attrs: {
                      name: item.name,
                      rate: item.rate,
                      image: item.image,
                      description: item.description
                    }
                  })
                })
              )
            ])
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$3 = [];
    __vue_render__$3._withStripped = true;

      /* style */
      var __vue_inject_styles__$3 = undefined;
      /* scoped */
      var __vue_scope_id__$3 = undefined;
      /* module identifier */
      var __vue_module_identifier__$3 = undefined;
      /* functional template */
      var __vue_is_functional_template__$3 = false;
      /* component normalizer */
      function __vue_normalize__$3(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        {
          component.__file = "/var/workspace/projects/vue-hotel-datepicker/src/components/ResultsModal.vue";
        }

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      function __vue_create_injector__$3() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var ResultsModal$1 = __vue_normalize__$3(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        __vue_create_injector__$3,
        undefined
      );

    var icons = {
        ArrowLeft: freeSolidSvgIcons.faArrowLeft,
        Calendar: freeSolidSvgIcons.faCalendar,
        Search: freeSolidSvgIcons.faSearch,
        Spinner: freeSolidSvgIcons.faSpinner,
        Times: freeSolidSvgIcons.faTimes
    };
    fontawesomeSvgCore.library.add(icons.ArrowLeft);
    fontawesomeSvgCore.library.add(icons.Calendar);
    fontawesomeSvgCore.library.add(icons.Search);
    fontawesomeSvgCore.library.add(icons.Spinner);
    fontawesomeSvgCore.library.add(icons.Times);
    var VueHotelDatepicker = /** @class */ (function (_super) {
        __extends(VueHotelDatepicker, _super);
        function VueHotelDatepicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'VueHotelDatepicker';
            _this.results = [];
            _this.searching = false;
            return _this;
        }
        Object.defineProperty(VueHotelDatepicker.prototype, "range", {
            get: function () {
                return {
                    start: dayjs__default(this.startDate),
                    end: dayjs__default(this.endDate)
                };
            },
            enumerable: true,
            configurable: true
        });
        VueHotelDatepicker.prototype.onSearch = function (dates) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.searching = !this.searching;
                            return [4 /*yield*/, fetch(this.request)
                                    .then(function (response) {
                                    return response.json();
                                })
                                    .catch(function (error) {
                                    console.log(Object.keys(error));
                                    console.log(error.response);
                                    console.log(error.config);
                                    console.log(error.request);
                                    return error;
                                })
                                    .then(function (data) {
                                    _this.searching = !_this.searching;
                                    if (Array.isArray(data)) {
                                        _this.results = data;
                                    }
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        VueHotelDatepicker.prototype.onClose = function () {
            this.results.splice(0, this.results.length);
        };
        __decorate([
            vuePropertyDecorator.Prop({ type: Request, required: true }),
            __metadata("design:type", Request)
        ], VueHotelDatepicker.prototype, "request", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Date, required: true }),
            __metadata("design:type", Date)
        ], VueHotelDatepicker.prototype, "startDate", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Date, required: true }),
            __metadata("design:type", Date)
        ], VueHotelDatepicker.prototype, "endDate", void 0);
        VueHotelDatepicker = __decorate([
            vuePropertyDecorator.Component({
                components: {
                    HotelDatePicker: HotelDatePicker$1,
                    SearchOverlay: SearchOverlay$1,
                    FontAwesomeIcon: vueFontawesome.FontAwesomeIcon,
                    ResultsModal: ResultsModal$1
                }
            })
        ], VueHotelDatepicker);
        return VueHotelDatepicker;
    }(vuePropertyDecorator.Vue));

    /* script */
                var __vue_script__$4 = VueHotelDatepicker;
                
    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "d-flex justify-content-center" },
        [
          _c(
            "transition-group",
            { attrs: { name: "fade", mode: "out-in" } },
            [
              !_vm.results.length
                ? _c("hotel-date-picker", {
                    key: "date-picker",
                    attrs: {
                      searching: _vm.searching,
                      "start-date": _vm.range.start,
                      "end-date": _vm.range.end
                    },
                    on: { search: _vm.onSearch }
                  })
                : _vm._t("results", [
                    _c("results-modal", {
                      key: "results-list",
                      attrs: { items: _vm.results },
                      on: { close: _vm.onClose }
                    })
                  ])
            ],
            2
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$4 = [];
    __vue_render__$4._withStripped = true;

      /* style */
      var __vue_inject_styles__$4 = function (inject) {
        if (!inject) { return }
        inject("data-v-acf2acbe_0", { source: "\n.tooltip {\n  display: block !important;\n  z-index: 10000;\n}\n.tooltip .tooltip-inner {\n    background: black;\n    color: white;\n    border-radius: 16px;\n    padding: 5px 10px 4px;\n}\n.tooltip .tooltip-arrow {\n    width: 0;\n    height: 0;\n    position: absolute;\n    margin: 5px;\n    border: solid black;\n    z-index: 1;\n}\n.tooltip[x-placement^='top'] {\n    margin-bottom: 5px;\n}\n.tooltip[x-placement^='top'] .tooltip-arrow {\n      border-width: 5px 5px 0 5px;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n      bottom: -5px;\n      left: calc(50% - 5px);\n      margin-top: 0;\n      margin-bottom: 0;\n}\n.tooltip[x-placement^='bottom'] {\n    margin-top: 5px;\n}\n.tooltip[x-placement^='bottom'] .tooltip-arrow {\n      border-width: 0 5px 5px 5px;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n      border-top-color: transparent !important;\n      top: -5px;\n      left: calc(50% - 5px);\n      margin-top: 0;\n      margin-bottom: 0;\n}\n.tooltip[x-placement^='right'] {\n    margin-left: 5px;\n}\n.tooltip[x-placement^='right'] .tooltip-arrow {\n      border-width: 5px 5px 5px 0;\n      border-left-color: transparent !important;\n      border-top-color: transparent !important;\n      border-bottom-color: transparent !important;\n      left: -5px;\n      top: calc(50% - 5px);\n      margin-left: 0;\n      margin-right: 0;\n}\n.tooltip[x-placement^='left'] {\n    margin-right: 5px;\n}\n.tooltip[x-placement^='left'] .tooltip-arrow {\n      border-width: 5px 0 5px 5px;\n      border-top-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n      right: -5px;\n      top: calc(50% - 5px);\n      margin-left: 0;\n      margin-right: 0;\n}\n.tooltip.popover .popover-inner {\n    background: #f9f9f9;\n    color: black;\n    padding: 24px;\n    border-radius: 5px;\n    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);\n}\n.tooltip.popover .popover-arrow {\n    border-color: #f9f9f9;\n}\n.tooltip[aria-hidden='true'] {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.15s, visibility 0.15s;\n}\n.tooltip[aria-hidden='false'] {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.15s;\n}\n.sk-cube-grid {\n  width: 40px;\n  height: 40px;\n}\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #009688;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n0%,\n  70%,\n  100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n}\n35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n}\n}\n@keyframes sk-cubeGridScaleDelay {\n0%,\n  70%,\n  100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n}\n35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n}\n}\n.modal-mask {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  transition: opacity .3s ease;\n}\n.modal-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.modal-container {\n  width: 500px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header {\n  border: none !important;\n}\n.modal-header h3 {\n  margin-top: 0;\n  color: #42b983;\n}\n.modal-body {\n  margin: 0;\n  padding: 0;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.modal-body div.card-text {\n    font-size: .6rem;\n}\n.modal-default-button {\n  float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter {\n  opacity: 0;\n}\n.modal-leave-active {\n  opacity: 0;\n}\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n* {\n  border-radius: 0 !important;\n  font-family: \"Merriweather Sans\", sans-serif;\n}\n.search--disabled {\n  background-color: #eeeeee;\n  -webkit-transition: background-color 600ms linear;\n  -moz-transition: background-color 600ms linear;\n  -o-transition: background-color 600ms linear;\n  -ms-transition: background-color 600ms linear;\n  transition: background-color 600ms linear;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=VueHotelDatepicker.vue.map */", map: {"version":3,"sources":["VueHotelDatepicker.vue","/var/workspace/projects/vue-hotel-datepicker/src/components/VueHotelDatepicker.vue"],"names":[],"mappings":";AAAA;EACE,0BAA0B;EAC1B,eAAe;CAAE;AACjB;IACE,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,sBAAsB;CAAE;AAC1B;IACE,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;IACpB,WAAW;CAAE;AACf;IACE,mBAAmB;CAAE;AACrB;MACE,4BAA4B;MAC5B,0CAA0C;MAC1C,2CAA2C;MAC3C,4CAA4C;MAC5C,aAAa;MACb,sBAAsB;MACtB,cAAc;MACd,iBAAiB;CAAE;AACvB;IACE,gBAAgB;CAAE;AAClB;MACE,4BAA4B;MAC5B,0CAA0C;MAC1C,2CAA2C;MAC3C,yCAAyC;MACzC,UAAU;MACV,sBAAsB;MACtB,cAAc;MACd,iBAAiB;CAAE;AACvB;IACE,iBAAiB;CAAE;AACnB;MACE,4BAA4B;MAC5B,0CAA0C;MAC1C,yCAAyC;MACzC,4CAA4C;MAC5C,WAAW;MACX,qBAAqB;MACrB,eAAe;MACf,gBAAgB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACpB;MACE,4BAA4B;MAC5B,yCAAyC;MACzC,2CAA2C;MAC3C,4CAA4C;MAC5C,YAAY;MACZ,qBAAqB;MACrB,eAAe;MACf,gBAAgB;CAAE;AACtB;IACE,oBAAoB;IACpB,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,0CAA0C;CAAE;AAC9C;IACE,sBAAsB;CAAE;AAC1B;IACE,mBAAmB;IACnB,WAAW;IACX,4CAA4C;CAAE;AAChD;IACE,oBAAoB;IACpB,WAAW;ICgCf,0BAAA;CAAA;AD7BA;EACE,YAAY;EACZ,aAAa;CAAE;AAEjB;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,YAAY;EACZ,mEAAmE;EACnE,2DAA2D;CAAE;AAE/D;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,4BAA4B;EAC5B,oBAAoB;CAAE;AAExB;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;AACE;;;IAGE,oCAAoC;IACpC,4BAA4B;CAAE;AAChC;IACE,oCAAoC;IACpC,4BAA4B;CAAE;CAAE;AAEpC;AACE;;;IAGE,oCAAoC;IACpC,4BAA4B;CAAE;AAChC;IACE,oCAAoC;IACpC,4BAA4B;CAAE;CAAE;AAEpC;EACE,gBAAgB;EAChB,cAAc;EACd,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,cAAc;EACd,uBAAuB;EACvB,6BAA6B;CAAE;AAEjC;EACE,cAAc;EACd,uBAAuB;CAAE;AAE3B;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;EAC1C,yBAAyB;EACzB,0CAA0C;CAAE;AAE9C;EACE,wBAAwB;CAAE;AAE5B;EACE,cAAc;EACd,eAAe;CAAE;AAEnB;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,iBAAiB;CAAE;AACnB;IACE,iBAAiB;CAAE;AAEvB;EACE,aAAa;CAAE;;AAEjB;;;;;;;GAOG;AACH;EACE,WAAW;CAAE;AAEf;EACE,WAAW;CAAE;AAEf;;EAEE,8BAA8B;EAC9B,sBAAsB;CAAE;AAE1B;EACE,4BAA4B;EAC5B,6CAA6C;CAAE;AAEjD;EACE,0BAA0B;EAC1B,kDAAkD;EAClD,+CAA+C;EAC/C,6CAA6C;EAC7C,8CAA8C;EAC9C,0CAA0C;CAAE;AAE9C;;EAEE,yBAAyB;CAAE;AAE7B;;EAEE,WAAW;CAAE;;AAEf,kDAAkD","file":"VueHotelDatepicker.vue","sourcesContent":[".tooltip {\n  display: block !important;\n  z-index: 10000; }\n  .tooltip .tooltip-inner {\n    background: black;\n    color: white;\n    border-radius: 16px;\n    padding: 5px 10px 4px; }\n  .tooltip .tooltip-arrow {\n    width: 0;\n    height: 0;\n    position: absolute;\n    margin: 5px;\n    border: solid black;\n    z-index: 1; }\n  .tooltip[x-placement^='top'] {\n    margin-bottom: 5px; }\n    .tooltip[x-placement^='top'] .tooltip-arrow {\n      border-width: 5px 5px 0 5px;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n      bottom: -5px;\n      left: calc(50% - 5px);\n      margin-top: 0;\n      margin-bottom: 0; }\n  .tooltip[x-placement^='bottom'] {\n    margin-top: 5px; }\n    .tooltip[x-placement^='bottom'] .tooltip-arrow {\n      border-width: 0 5px 5px 5px;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n      border-top-color: transparent !important;\n      top: -5px;\n      left: calc(50% - 5px);\n      margin-top: 0;\n      margin-bottom: 0; }\n  .tooltip[x-placement^='right'] {\n    margin-left: 5px; }\n    .tooltip[x-placement^='right'] .tooltip-arrow {\n      border-width: 5px 5px 5px 0;\n      border-left-color: transparent !important;\n      border-top-color: transparent !important;\n      border-bottom-color: transparent !important;\n      left: -5px;\n      top: calc(50% - 5px);\n      margin-left: 0;\n      margin-right: 0; }\n  .tooltip[x-placement^='left'] {\n    margin-right: 5px; }\n    .tooltip[x-placement^='left'] .tooltip-arrow {\n      border-width: 5px 0 5px 5px;\n      border-top-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n      right: -5px;\n      top: calc(50% - 5px);\n      margin-left: 0;\n      margin-right: 0; }\n  .tooltip.popover .popover-inner {\n    background: #f9f9f9;\n    color: black;\n    padding: 24px;\n    border-radius: 5px;\n    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1); }\n  .tooltip.popover .popover-arrow {\n    border-color: #f9f9f9; }\n  .tooltip[aria-hidden='true'] {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.15s, visibility 0.15s; }\n  .tooltip[aria-hidden='false'] {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.15s; }\n\n.sk-cube-grid {\n  width: 40px;\n  height: 40px; }\n\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #009688;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; }\n\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s; }\n\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%,\n  70%,\n  100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1); } }\n\n@keyframes sk-cubeGridScaleDelay {\n  0%,\n  70%,\n  100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1); } }\n\n.modal-mask {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  transition: opacity .3s ease; }\n\n.modal-wrapper {\n  display: flex;\n  flex-direction: column; }\n\n.modal-container {\n  width: 500px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif; }\n\n.modal-header {\n  border: none !important; }\n\n.modal-header h3 {\n  margin-top: 0;\n  color: #42b983; }\n\n.modal-body {\n  margin: 0;\n  padding: 0;\n  max-height: 60vh;\n  overflow-y: auto; }\n  .modal-body div.card-text {\n    font-size: .6rem; }\n\n.modal-default-button {\n  float: right; }\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter {\n  opacity: 0; }\n\n.modal-leave-active {\n  opacity: 0; }\n\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1); }\n\n* {\n  border-radius: 0 !important;\n  font-family: \"Merriweather Sans\", sans-serif; }\n\n.search--disabled {\n  background-color: #eeeeee;\n  -webkit-transition: background-color 600ms linear;\n  -moz-transition: background-color 600ms linear;\n  -o-transition: background-color 600ms linear;\n  -ms-transition: background-color 600ms linear;\n  transition: background-color 600ms linear; }\n\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s; }\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0; }\n\n/*# sourceMappingURL=VueHotelDatepicker.vue.map */",null]}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__$4 = undefined;
      /* module identifier */
      var __vue_module_identifier__$4 = undefined;
      /* functional template */
      var __vue_is_functional_template__$4 = false;
      /* component normalizer */
      function __vue_normalize__$4(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        {
          component.__file = "/var/workspace/projects/vue-hotel-datepicker/src/components/VueHotelDatepicker.vue";
        }

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        {
          var hook;
          if (style) {
            hook = function(context) {
              style.call(this, createInjector(context));
            };
          }

          if (hook !== undefined) {
            if (component.functional) {
              // register for functional component in vue file
              var originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__$4() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var VueHotelDatepicker$1 = __vue_normalize__$4(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        __vue_create_injector__$4,
        undefined
      );

    return VueHotelDatepicker$1;

})));
