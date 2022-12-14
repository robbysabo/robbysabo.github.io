'use strict';



;define("project5-ember/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("project5-ember/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "project5-ember/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"project5-ember/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("project5-ember/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("project5-ember/components/general-container", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route='cart' class='cart-link'>
    <i class='fa-solid fa-cart-shopping'></i>
    {{#if this.shoppingCart.itemList.length}}
      <span
        class='cart-count d-inline-flex justify-content-center align-items-center'
      >{{this.itemCount}}</span>
    {{/if}}
  </LinkTo>
  <main class='container mt-5'>
    {{yield}}
  </main>
  */
  {
    "id": "v2ItViSi",
    "block": "[[[8,[39,0],[[24,0,\"cart-link\"]],[[\"@route\"],[\"cart\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"i\"],[14,0,\"fa-solid fa-cart-shopping\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"shoppingCart\",\"itemList\",\"length\"]],[[[1,\"    \"],[10,1],[14,0,\"cart-count d-inline-flex justify-content-center align-items-center\"],[12],[1,[30,0,[\"itemCount\"]]],[13],[1,\"\\n\"]],[]],null]],[]]]]],[1,\"\\n\"],[10,\"main\"],[14,0,\"container mt-5\"],[12],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13]],[\"&default\"],false,[\"link-to\",\"if\",\"yield\"]]",
    "moduleName": "project5-ember/components/general-container.hbs",
    "isStrictMode": false
  });
  let GeneralContainerComponent = (_class = class GeneralContainerComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "shoppingCart", _descriptor, this);
    }
    get itemCount() {
      return this.shoppingCart.itemList.reduce((total, item) => {
        return total += item.count;
      }, 0);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "shoppingCart", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = GeneralContainerComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GeneralContainerComponent);
});
;define("project5-ember/components/product", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route='item' @model={{@product.id}} class='product'>
    <Product::Image @src={{this.productImage}} />
    <Product::Details @name={{@product.name}} @price={{@product.price}} />
  </LinkTo>
  */
  {
    "id": "uA7ulhEl",
    "block": "[[[8,[39,0],[[24,0,\"product\"]],[[\"@route\",\"@model\"],[\"item\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@src\"],[[30,0,[\"productImage\"]]]],null],[1,\"\\n  \"],[8,[39,2],null,[[\"@name\",\"@price\"],[[30,1,[\"name\"]],[30,1,[\"price\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@product\"],false,[\"link-to\",\"product/image\",\"product/details\"]]",
    "moduleName": "project5-ember/components/product.hbs",
    "isStrictMode": false
  });
  class ProductComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "productImage", this.args.product.colors[0].image);
    }
  }
  _exports.default = ProductComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProductComponent);
});
;define("project5-ember/components/product/details", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='product-details'>
    <section>
      {{! Header }}
      <h3>{{@name}}</h3>
      <div class='text-warning'>
        <i class='fa-solid fa-star'></i>
        <i class='fa-solid fa-star'></i>
        <i class='fa-solid fa-star'></i>
        <i class='fa-solid fa-star'></i>
        <i class='fa-regular fa-star-half-stroke'></i>
      </div>
    </section>
  
    {{! Price }}
    <section class={{unless @isDetails 'h4'}}>
      <del class='small text-black-50'>{{currency @price.original}}</del>
      <i class='text-danger fw-bold'>{{currency @price.current}}</i>
    </section>
  
    {{! Colors}}
    {{#if @isDetails}}
      <div class='d-flex justify-content-between align-items-end'>
        <div>
          <h5>Color</h5>
          <div class='product-colors active-{{@color}}'>
            {{#each @colors as |colorInfo|}}
              <span
                class='product-color {{concat "color-" colorInfo.color}}'
                {{on 'click' (fn @onChangeColor colorInfo.color)}}
              ></span>
            {{/each}}
          </div>
        </div>
        <button class='btn btn-info' type='button' {{on 'click' this.addToCart}}>
          <i class='fa-solid fa-cart-shopping me-1'></i>
          Add to cart
        </button>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "wfiOsbRo",
    "block": "[[[10,0],[14,0,\"product-details\"],[12],[1,\"\\n  \"],[10,\"section\"],[12],[1,\"\\n\"],[1,\"    \"],[10,\"h3\"],[12],[1,[30,1]],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-warning\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-regular fa-star-half-stroke\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[1,\"  \"],[10,\"section\"],[15,0,[52,[51,[30,2]],\"h4\"]],[12],[1,\"\\n    \"],[10,\"del\"],[14,0,\"small text-black-50\"],[12],[1,[28,[35,1],[[30,3,[\"original\"]]],null]],[13],[1,\"\\n    \"],[10,\"i\"],[14,0,\"text-danger fw-bold\"],[12],[1,[28,[35,1],[[30,3,[\"current\"]]],null]],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,2],[[[1,\"    \"],[10,0],[14,0,\"d-flex justify-content-between align-items-end\"],[12],[1,\"\\n      \"],[10,0],[12],[1,\"\\n        \"],[10,\"h5\"],[12],[1,\"Color\"],[13],[1,\"\\n        \"],[10,0],[15,0,[29,[\"product-colors active-\",[30,4]]]],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,5]],null]],null],null,[[[1,\"            \"],[11,1],[16,0,[29,[\"product-color \",[28,[37,5],[\"color-\",[30,6,[\"color\"]]],null]]]],[4,[38,6],[\"click\",[28,[37,7],[[30,7],[30,6,[\"color\"]]],null]],null],[12],[13],[1,\"\\n\"]],[6]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-info\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"addToCart\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"fa-solid fa-cart-shopping me-1\"],[12],[13],[1,\"\\n        Add to cart\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"@name\",\"@isDetails\",\"@price\",\"@color\",\"@colors\",\"colorInfo\",\"@onChangeColor\"],false,[\"unless\",\"currency\",\"if\",\"each\",\"-track-array\",\"concat\",\"on\",\"fn\"]]",
    "moduleName": "project5-ember/components/product/details.hbs",
    "isStrictMode": false
  });
  let ProductDetailsComponent = (_dec = (0, _service.inject)('shopping-cart'), (_class = class ProductDetailsComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    addToCart() {
      const {
        name,
        color,
        colors,
        price
      } = this.args;
      this.cart.addItem({
        name,
        color,
        image: colors.find(colorInfo => colorInfo.color === color).image,
        price: price.current
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addToCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addToCart"), _class.prototype)), _class));
  _exports.default = ProductDetailsComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProductDetailsComponent);
});
;define("project5-ember/components/product/image", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='product-image' {{on 'click' @toggleZoom}}>
    <img src={{@src}} alt='' />
  </div>
  */
  {
    "id": "hal5hlW7",
    "block": "[[[11,0],[24,0,\"product-image\"],[4,[38,0],[\"click\",[30,1]],null],[12],[1,\"\\n  \"],[10,\"img\"],[15,\"src\",[30,2]],[14,\"alt\",\"\"],[12],[13],[1,\"\\n\"],[13]],[\"@toggleZoom\",\"@src\"],false,[\"on\"]]",
    "moduleName": "project5-ember/components/product/image.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("project5-ember/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("project5-ember/controllers/cart", ["exports", "@ember/controller", "@ember/service", "@ember/object"], function (_exports, _controller, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let CartController = (_dec = (0, _service.inject)('shopping-cart'), (_class = class CartController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    get subtotal() {
      return this.cart.itemList.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    }
    get tax() {
      return Number(0.065 * Number(this.subtotal)).toFixed(2);
    }
    get total() {
      return (Number(this.subtotal) + Number(this.tax)).toFixed(2);
    }
    updateItemCount(item, event) {
      const count = event.target.value;
      if (count >= 0) {
        item.count = count;
      } else {
        item.count = 0;
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateItemCount", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateItemCount"), _class.prototype)), _class));
  _exports.default = CartController;
});
;define("project5-ember/controllers/item", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ItemController = (_class = class ItemController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "color", _descriptor, this);
      _initializerDefineProperty(this, "isZoomed", _descriptor2, this);
    }
    get productImage() {
      return this.model.colors.find(_ref => {
        let {
          color
        } = _ref;
        return color === this.color;
      }).image;
    }
    onChangeColor(newColor) {
      this.color = newColor;
    }
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "color", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.model.colors[0].color;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isZoomed", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onChangeColor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onChangeColor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleZoom", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleZoom"), _class.prototype)), _class);
  _exports.default = ItemController;
});
;define("project5-ember/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("project5-ember/data/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.products = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* eslint-disable prettier/prettier */
  const products = [{
    id: '1',
    name: 'Raycon Everyday Headphones',
    description: 'With up to 38 hours of battery life, Raycon Everyday is your perfect everyday headphone',
    price: {
      original: 199.95,
      current: 99.98
    },
    features: ['Advanced Active Noise Cancellation, helps you tune out the noise.', 'Awareness mode: Hear the world around you.', 'IPX5 Water and Splash resistance', '3 Sound Profiles for a personalized listening experience.', '6 Built in microphones for crystal clear phone calls.', '38 Hours of battery life'],
    colors: [{
      color: 'black',
      image: '/assets/images/Raycon_Everyday_black.jpg'
    }, {
      color: 'white',
      image: '/assets/images/Raycon_Everyday_white.jpg'
    }, {
      color: 'rosegold',
      image: '/assets/images/Raycon_Everyday_rosegold.jpg'
    }]
  }, {
    id: '2',
    name: 'Nike Aire Force 1',
    description: 'Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world.',
    price: {
      original: 109.95,
      current: 89.98
    },
    features: ['Full-grain leather in the upper adds a premium look and feel.', 'Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.', 'The padded, low-cut collar looks sleek and feels great.'],
    colors: [{
      color: 'white',
      image: '/assets/images/nike-af1-white.png'
    }]
  }];
  _exports.products = products;
});
;define("project5-ember/helpers/app-version", ["exports", "@ember/component/helper", "project5-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"project5-ember/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("project5-ember/helpers/currency", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f
  var _default = (0, _helper.helper)(function currency(positional) {
    let named = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const [number] = positional;
    const {
      sign = '$'
    } = named;
    const dollars = Math.floor(number);
    let cents = Math.floor(number * 100 % 100);
    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }
    return `${sign}${dollars}.${cents}`;
  });
  _exports.default = _default;
});
;define("project5-ember/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("project5-ember/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("project5-ember/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("project5-ember/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("project5-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "project5-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"project5-ember/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("project5-ember/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("project5-ember/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("project5-ember/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("project5-ember/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("project5-ember/router", ["exports", "@ember/routing/router", "project5-ember/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"project5-ember/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('item', {
      path: '/item/:item_id'
    });
    this.route('not-found', {
      path: '/*path'
    });
    this.route('cart', {
      path: 'shopping-cart'
    });
  });
});
;define("project5-ember/routes/cart", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class CartRoute extends _route.default {
    model() {
      const items = [{
        price: 10
      }, {
        price: 15
      }];
      return items;
    }
  }
  _exports.default = CartRoute;
});
;define("project5-ember/routes/index", ["exports", "@ember/routing/route", "project5-ember/data/products"], function (_exports, _route, _products) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"project5-ember/data/products"eaimeta@70e063a35619d71f
  class IndexRoute extends _route.default {
    model() {
      return _products.products;
    }
  }
  _exports.default = IndexRoute;
});
;define("project5-ember/routes/item", ["exports", "@ember/routing/route", "project5-ember/data/products"], function (_exports, _route, _products) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"project5-ember/data/products"eaimeta@70e063a35619d71f
  class ItemRoute extends _route.default {
    model(params) {
      const {
        item_id
      } = params;
      const product = _products.products.find(_ref => {
        let {
          id
        } = _ref;
        return id === item_id;
      });
      return product;
    }
    setupController(controller, model) {
      super.setupController(controller, model);
      controller.color = model.colors[0].color;
    }
  }
  _exports.default = ItemRoute;
});
;define("project5-ember/routes/not-found", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class NotFoundRoute extends _route.default {}
  _exports.default = NotFoundRoute;
});
;define("project5-ember/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("project5-ember/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("project5-ember/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("project5-ember/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("project5-ember/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("project5-ember/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("project5-ember/services/shopping-cart", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _class3, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let Item = (_class = class Item {
    constructor(item) {
      _initializerDefineProperty(this, "count", _descriptor, this);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "color", void 0);
      _defineProperty(this, "image", void 0);
      _defineProperty(this, "price", void 0);
      this.count = item.count;
      this.name = item.name;
      this.color = item.color;
      this.image = item.image;
      this.price = item.price;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  let ShoppingCartService = (_class3 = class ShoppingCartService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "itemList", _descriptor2, this);
    }
    addItem(item) {
      const existingItem = this.itemList.find(_ref => {
        let {
          name,
          color
        } = _ref;
        return name === item.name && color === item.color;
      });
      if (existingItem) {
        existingItem.count += 1;
      } else {
        this.itemList = [...this.itemList, new Item({
          ...item,
          count: 1
        })];
      }
    }
  }, (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "itemList", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class3);
  _exports.default = ShoppingCartService;
});
;define("project5-ember/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("project5-ember/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Project5 EmberJs"}}
  
  
  
  {{outlet}}
  */
  {
    "id": "Cbq8vGZf",
    "block": "[[[1,[28,[35,0],[\"Project5 EmberJs\"],null]],[1,\"\\n\\n\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "project5-ember/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("project5-ember/templates/cart", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <main class='container mt-5'>
    <h1>Shopping Cart</h1>
    <ol class='breadcrumb bg-light'>
      <li class='breadcrumb-item'>
        <LinkTo @route='index'>
          Home
        </LinkTo>
      </li>
      <li class='breadcrumb-item'>Shopping Cart</li>
    </ol>
  
    {{#each this.cart.itemList as |item|}}
      <div class='cart-item d-flex align-items-center'>
        <div class='cart-item-thumbnail'>
          <img src={{item.image}} alt='' />
        </div>
        <div class='ms-3'>
          <h4>{{item.name}}</h4>
          <i class='fw-bold'>{{currency item.price}}</i>
        </div>
        <input
          type='number'
          class='ms-auto'
          value={{item.count}}
          {{on 'input' (fn this.updateItemCount item)}}
        />
      </div>
    {{/each}}
  
    <section class='w-50 ms-auto text-end mb-5'>
      <div class='row'>
        <span class='col'>Subtotal</span>
        <span class='col'>{{currency this.subtotal}}</span>
      </div>
      <div class='row'>
        <span class='col'>Tax</span>
        <span class='col'>{{currency this.tax}}</span>
      </div>
      <div class='row'>
        <span class='col'>Total</span>
        <span class='col'>{{currency this.total}}</span>
      </div>
    </section>
  
    <button class='btn btn-success float-end' type='button'>
      Check out
    </button>
  </main>
  */
  {
    "id": "ldQIHHP4",
    "block": "[[[10,\"main\"],[14,0,\"container mt-5\"],[12],[1,\"\\n  \"],[10,\"h1\"],[12],[1,\"Shopping Cart\"],[13],[1,\"\\n  \"],[10,\"ol\"],[14,0,\"breadcrumb bg-light\"],[12],[1,\"\\n    \"],[10,\"li\"],[14,0,\"breadcrumb-item\"],[12],[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n        Home\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"li\"],[14,0,\"breadcrumb-item\"],[12],[1,\"Shopping Cart\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"cart\",\"itemList\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"cart-item d-flex align-items-center\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"cart-item-thumbnail\"],[12],[1,\"\\n        \"],[10,\"img\"],[15,\"src\",[30,1,[\"image\"]]],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"ms-3\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n        \"],[10,\"i\"],[14,0,\"fw-bold\"],[12],[1,[28,[35,3],[[30,1,[\"price\"]]],null]],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"input\"],[24,0,\"ms-auto\"],[16,2,[30,1,[\"count\"]]],[24,4,\"number\"],[4,[38,4],[\"input\",[28,[37,5],[[30,0,[\"updateItemCount\"]],[30,1]],null]],null],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[1]],null],[1,\"\\n  \"],[10,\"section\"],[14,0,\"w-50 ms-auto text-end mb-5\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,\"Subtotal\"],[13],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,[28,[35,3],[[30,0,[\"subtotal\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,\"Tax\"],[13],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,[28,[35,3],[[30,0,[\"tax\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,\"Total\"],[13],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,[28,[35,3],[[30,0,[\"total\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"button\"],[14,0,\"btn btn-success float-end\"],[14,4,\"button\"],[12],[1,\"\\n    Check out\\n  \"],[13],[1,\"\\n\"],[13]],[\"item\"],false,[\"link-to\",\"each\",\"-track-array\",\"currency\",\"on\",\"fn\"]]",
    "moduleName": "project5-ember/templates/cart.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("project5-ember/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <GeneralContainer>
    <h1 class='title d-inline'>Day-Lee Look</h1>
    <hr />
    <div class='d-lg-flex justify-content-center align-items-center'>
      {{#each this.model as |product|}}
        <Product @product={{product}} />
      {{/each}}
    </div>
  </GeneralContainer>
  */
  {
    "id": "qrBOCURw",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h1\"],[14,0,\"title d-inline\"],[12],[1,\"Day-Lee Look\"],[13],[1,\"\\n  \"],[10,\"hr\"],[12],[13],[1,\"\\n  \"],[10,0],[14,0,\"d-lg-flex justify-content-center align-items-center\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"      \"],[8,[39,3],null,[[\"@product\"],[[30,1]]],null],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"product\"],false,[\"general-container\",\"each\",\"-track-array\",\"product\"]]",
    "moduleName": "project5-ember/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("project5-ember/templates/item", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <GeneralContainer>
    <div class='product item-details-page {{if this.isZoomed "is-zoomed"}}'>
      <Product::Image
        @src={{this.productImage}}
        @toggleZoom={{this.toggleZoom}}
      />
      <Product::Details
        @isDetails={{true}}
        @name={{this.model.name}}
        @price={{this.model.price}}
        @colors={{this.model.colors}}
        @color={{this.color}}
        @onChangeColor={{this.onChangeColor}}
      />
    </div>
    <h5 class='mt-5'>Features</h5>
    <ul>
      {{#each this.model.features as |feature|}}
        <li>{{feature}}</li>
      {{/each}}
    </ul>
  </GeneralContainer>
  */
  {
    "id": "2oKz9Yx5",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,0],[15,0,[29,[\"product item-details-page \",[52,[30,0,[\"isZoomed\"]],\"is-zoomed\"]]]],[12],[1,\"\\n    \"],[8,[39,2],null,[[\"@src\",\"@toggleZoom\"],[[30,0,[\"productImage\"]],[30,0,[\"toggleZoom\"]]]],null],[1,\"\\n    \"],[8,[39,3],null,[[\"@isDetails\",\"@name\",\"@price\",\"@colors\",\"@color\",\"@onChangeColor\"],[true,[30,0,[\"model\",\"name\"]],[30,0,[\"model\",\"price\"]],[30,0,[\"model\",\"colors\"]],[30,0,[\"color\"]],[30,0,[\"onChangeColor\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"h5\"],[14,0,\"mt-5\"],[12],[1,\"Features\"],[13],[1,\"\\n  \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,0,[\"model\",\"features\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"feature\"],false,[\"general-container\",\"if\",\"product/image\",\"product/details\",\"each\",\"-track-array\"]]",
    "moduleName": "project5-ember/templates/item.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("project5-ember/templates/not-found", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "404 Not Found"}}
  404 not found
  {{outlet}}
  */
  {
    "id": "VuUNf+b5",
    "block": "[[[1,[28,[35,0],[\"404 Not Found\"],null]],[1,\"\\n404 not found\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "project5-ember/templates/not-found.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("project5-ember/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("project5-ember/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("project5-ember/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("project5-ember/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('project5-ember/config/environment', [], function() {
  var prefix = 'project5-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("project5-ember/app")["default"].create({"name":"project5-ember","version":"0.0.0"});
          }
        
//# sourceMappingURL=project5-ember.map
