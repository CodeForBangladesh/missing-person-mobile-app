Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var __1 = require("./..");
var page_1 = require("tns-core-modules/ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
var sideDrawerModule = require("./..");
var TKDRAWERCONTENT = "TKDrawerContent";
var TKMAINCONTENT = "TKMainContent";
/**
* This is the SideDrawer component. It separates your mobile app's screen
* into a main part and a menu part whereby the menu part is shown upon a swipe
* gesture using a transition effect.
*/
var RadSideDrawerComponent = /** @class */ (function () {
    function RadSideDrawerComponent(elementRef, page, viewContainer) {
        this.elementRef = elementRef;
        this.page = page;
        this.viewContainer = viewContainer;
        this.sideDrawerMovedToPage = false;
        this.drawerOpening = new core_1.EventEmitter();
        this.drawerOpen = new core_1.EventEmitter();
        this.drawerClosing = new core_1.EventEmitter();
        this.drawerClosed = new core_1.EventEmitter();
        this.sideDrawer = this.elementRef.nativeElement;
    }
    Object.defineProperty(RadSideDrawerComponent.prototype, "transition", {
        set: /**
              * [Deprecated: Please use the 'drawerTransition' property instead].
              */
        function (transition) {
            this.sideDrawer.drawerTransition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "nativeElement", {
        get: function () {
            return this.sideDrawer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "drawerContentSize", {
        /**
          * Defines either the width or the height
          * of the menu pane depending on the location of the SideDrawer.
          * Top or Bottom - height, Right or Left - width.
          */
        set: /**
              * Defines either the width or the height
              * of the menu pane depending on the location of the SideDrawer.
              * Top or Bottom - height, Right or Left - width.
              */
        function (value) {
            this._drawerContentSize = value;
            this.updateContentSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "gesturesEnabled", {
        set: function (value) {
            this._gesturesEnabled = value;
            this.updateGesturesEnabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "drawerTransition", {
        set: function (value) {
            this._drawerTransition = value;
            this.updateDrawerTransition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "drawerLocation", {
        set: function (value) {
            this._drawerLocation = value;
            this.updateDrawerLocation();
        },
        enumerable: true,
        configurable: true
    });
    RadSideDrawerComponent.prototype.updateDrawerLocation = function () {
        this.sideDrawer.drawerLocation = this._drawerLocation;
    };
    RadSideDrawerComponent.prototype.updateDrawerTransition = function () {
        this.sideDrawer.drawerTransition = this._drawerTransition;
    };
    RadSideDrawerComponent.prototype.updateGesturesEnabled = function () {
        this.sideDrawer.gesturesEnabled = this._gesturesEnabled;
    };
    RadSideDrawerComponent.prototype.updateContentSize = function () {
        this.sideDrawer.drawerContentSize = this._drawerContentSize;
    };
    RadSideDrawerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'RadSideDrawer',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    RadSideDrawerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
        { type: page_1.Page, decorators: [{ type: core_1.Inject, args: [page_1.Page,] },] },
        { type: core_1.ViewContainerRef, decorators: [{ type: core_1.Inject, args: [core_1.ViewContainerRef,] },] },
    ]; };
    RadSideDrawerComponent.propDecorators = {
        "drawerOpening": [{ type: core_1.Output },],
        "drawerOpen": [{ type: core_1.Output },],
        "drawerClosing": [{ type: core_1.Output },],
        "drawerClosed": [{ type: core_1.Output },],
        "transition": [{ type: core_1.Input },],
    };
    return RadSideDrawerComponent;
}());
exports.RadSideDrawerComponent = RadSideDrawerComponent;
/**
 * Directive identifying the drawer content.
 */
var TKDrawerContentDirective = /** @class */ (function () {
    function TKDrawerContentDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._elementRef.nativeElement.id = TKDRAWERCONTENT;
    }
    TKDrawerContentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkDrawerContent]"
                },] },
    ];
    /** @nocollapse */
    TKDrawerContentDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKDrawerContentDirective;
}());
exports.TKDrawerContentDirective = TKDrawerContentDirective;
/**
 * Directive identifying the main content.
 */
var TKMainContentDirective = /** @class */ (function () {
    function TKMainContentDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._elementRef.nativeElement.id = TKMAINCONTENT;
    }
    TKMainContentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkMainContent]"
                },] },
    ];
    /** @nocollapse */
    TKMainContentDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKMainContentDirective;
}());
exports.TKMainContentDirective = TKMainContentDirective;
var ɵ0 = function (parent, child) {
    var drawer = parent;
    var childView = child;
    if (childView.id === TKMAINCONTENT) {
        drawer.mainContent = childView;
    }
    if (childView.id === TKDRAWERCONTENT) {
        drawer.drawerContent = childView;
    }
}, ɵ1 = function (parent, child) {
    var drawer = parent;
    var childView = child;
    if (childView.id === TKMAINCONTENT) {
        drawer.mainContent = null;
    }
    if (childView.id === TKDRAWERCONTENT) {
        drawer.drawerContent = null;
    }
};
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
var sideDrawerMeta = {
    insertChild: ɵ0,
    removeChild: ɵ1,
};
/**
 * Directives identifying the RadSideDrawer.
 */
exports.SIDEDRAWER_DIRECTIVES = [RadSideDrawerComponent, TKDrawerContentDirective, TKMainContentDirective];
if (!global.isSideDrawerRegistered) {
    element_registry_1.registerElement("RadSideDrawer", function () { return __1.RadSideDrawer; }, sideDrawerMeta);
    global.isSideDrawerRegistered = true;
}
/**
 * NgModule containing all of the RadSideDrawer directives.
 */
var NativeScriptUISideDrawerModule = /** @class */ (function () {
    function NativeScriptUISideDrawerModule() {
    }
    NativeScriptUISideDrawerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exports.SIDEDRAWER_DIRECTIVES],
                    exports: [exports.SIDEDRAWER_DIRECTIVES]
                },] },
    ];
    return NativeScriptUISideDrawerModule;
}());
exports.NativeScriptUISideDrawerModule = NativeScriptUISideDrawerModule;
