/*!
 * vue-hotel-datepicker v0.1.0
 * (c) 2018-2018 Brian Lee
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue-property-decorator'), require('@fortawesome/vue-fontawesome'), require('vuejs-datepicker'), require('v-tooltip'), require('dayjs'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons')) :
    typeof define === 'function' && define.amd ? define(['vue-property-decorator', '@fortawesome/vue-fontawesome', 'vuejs-datepicker', 'v-tooltip', 'dayjs', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons'], factory) :
    (global.vueHotelDatePicker = factory(global['vue-property-decorator'],null,null,null,null,null,null));
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
    var VueHotelDatePicker = /** @class */ (function (_super) {
        __extends(VueHotelDatePicker, _super);
        function VueHotelDatePicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'VueHotelDatePicker';
            _this.results = [];
            _this.searching = false;
            return _this;
        }
        Object.defineProperty(VueHotelDatePicker.prototype, "range", {
            get: function () {
                return {
                    start: dayjs__default(this.startDate),
                    end: dayjs__default(this.endDate)
                };
            },
            enumerable: true,
            configurable: true
        });
        VueHotelDatePicker.prototype.onSearch = function (dates) {
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
        VueHotelDatePicker.prototype.onClose = function () {
            this.results.splice(0, this.results.length);
        };
        __decorate([
            vuePropertyDecorator.Prop({ type: Request, required: true }),
            __metadata("design:type", Request)
        ], VueHotelDatePicker.prototype, "request", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Date, required: true }),
            __metadata("design:type", Date)
        ], VueHotelDatePicker.prototype, "startDate", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: Date, required: true }),
            __metadata("design:type", Date)
        ], VueHotelDatePicker.prototype, "endDate", void 0);
        VueHotelDatePicker = __decorate([
            vuePropertyDecorator.Component({
                components: {
                    HotelDatePicker: HotelDatePicker$1,
                    SearchOverlay: SearchOverlay$1,
                    FontAwesomeIcon: vueFontawesome.FontAwesomeIcon,
                    ResultsModal: ResultsModal$1
                }
            })
        ], VueHotelDatePicker);
        return VueHotelDatePicker;
    }(vuePropertyDecorator.Vue));

    /* script */
                var __vue_script__$4 = VueHotelDatePicker;
                
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
        inject("data-v-7bd41ecb_0", { source: "\n* {\n    border-radius: 0 !important;\n}\n", map: {"version":3,"sources":["/var/workspace/projects/vue-hotel-datepicker/src/components/VueHotelDatePicker.vue"],"names":[],"mappings":";AAyGA;IACA,4BAAA;CACA","file":"VueHotelDatePicker.vue","sourcesContent":["<template>\n    <div class=\"d-flex justify-content-center\">\n        <transition-group name=\"fade\" mode=\"out-in\">\n            <hotel-date-picker\n                    v-if=\"!results.length\"\n                    key=\"date-picker\"\n                    :searching=\"searching\"\n                    :start-date=\"range.start\"\n                    :end-date=\"range.end\"\n                    @search=\"onSearch\">\n            </hotel-date-picker>\n            <slot name=\"results\" v-else>\n                <results-modal\n                        @close=\"onClose\"\n                        key=\"results-list\"\n                        :items=\"results\">\n                </results-modal>\n            </slot>\n        </transition-group>\n    </div>\n</template>\n\n<script lang=\"ts\">\n  import { Component, Prop, Vue } from 'vue-property-decorator'\n  import dayjs, { Dayjs } from 'dayjs'\n  import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'\n  import { faArrowLeft, faCalendar, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'\n  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'\n  import HotelDatePicker from './HotelDatePicker.vue'\n  import SearchOverlay from './SearchOverlay.vue'\n  import ResultsModal from './ResultsModal.vue'\n\n  const icons: { [key: string]: IconDefinition } = {\n    ArrowLeft: faArrowLeft,\n    Calendar: faCalendar,\n    Search: faSearch,\n    Spinner: faSpinner,\n    Times: faTimes\n  }\n\n  library.add(icons.ArrowLeft)\n  library.add(icons.Calendar)\n  library.add(icons.Search)\n  library.add(icons.Spinner)\n  library.add(icons.Times)\n\n  @Component({\n    components: {\n      HotelDatePicker,\n      SearchOverlay,\n      FontAwesomeIcon,\n      ResultsModal\n    }\n  })\n  export default class VueHotelDatePicker extends Vue {\n    public name: string = 'VueHotelDatePicker'\n    public results: any[] = []\n    protected searching: boolean = false\n\n    @Prop({type: Request, required: true})\n    protected request: Request\n\n    @Prop({type: Date, required: true})\n    protected startDate: Date\n\n    @Prop({type: Date, required: true})\n    protected endDate: Date\n\n    get range (): { [key: string]: Dayjs } {\n      return {\n        start: dayjs(this.startDate),\n        end: dayjs(this.endDate)\n      }\n    }\n\n    protected async onSearch (dates: { [key: string]: Date }) {\n      this.searching = !this.searching\n\n      await fetch(this.request)\n        .then((response: Response) => {\n          return response.json()\n        })\n        .catch((error: any) => {\n          console.log(Object.keys(error))\n          console.log(error.response)\n          console.log(error.config)\n          console.log(error.request)\n          return error\n        })\n        .then((data: any) => {\n          this.searching = !this.searching\n\n          if (Array.isArray(data)) {\n            this.results = data\n          }\n        })\n    }\n\n    protected onClose () {\n      this.results.splice(0, this.results.length)\n    }\n  }\n</script>\n\n<style>\n    * {\n        border-radius: 0 !important;\n    }\n</style>\n"]}, media: undefined });

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
          component.__file = "/var/workspace/projects/vue-hotel-datepicker/src/components/VueHotelDatePicker.vue";
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
      

      
      var VueHotelDatePicker$1 = __vue_normalize__$4(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        __vue_create_injector__$4,
        undefined
      );

    return VueHotelDatePicker$1;

})));
