'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">zto-full-starter documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"' : 'data-target="#xs-components-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"' : 'id="xs-components-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"' : 'data-target="#xs-injectables-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"' : 'id="xs-injectables-links-module-AppModule-e6140a88d659fd000dfdee2ea5978b6d"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/HeaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>HeaderService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/LayoutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LayoutService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ArchModule.html" data-type="entity-link">ArchModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-ComponentsModule-ea8dba2301c24e74a3032f6a78fb3356"' : 'data-target="#xs-components-links-module-ComponentsModule-ea8dba2301c24e74a3032f6a78fb3356"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-ComponentsModule-ea8dba2301c24e74a3032f6a78fb3356"' : 'id="xs-components-links-module-ComponentsModule-ea8dba2301c24e74a3032f6a78fb3356"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/HeaderContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderContainerComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LayoutContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutContainerComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SimpleHeaderPresenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleHeaderPresenterComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SimpleLayoutPresenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleLayoutPresenterComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-PagesModule-beadb0fc6f1cbbed96acf89125a22bf5"' : 'data-target="#xs-components-links-module-PagesModule-beadb0fc6f1cbbed96acf89125a22bf5"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-PagesModule-beadb0fc6f1cbbed96acf89125a22bf5"' : 'id="xs-components-links-module-PagesModule-beadb0fc6f1cbbed96acf89125a22bf5"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AboutPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutPageComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundPageComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/RoutingModule.html" data-type="entity-link">RoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/StoresModule.html" data-type="entity-link">StoresModule</a>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-StoresModule-0cf8911f618ccf8d9cb2590eacb3dd3a"' : 'data-target="#xs-injectables-links-module-StoresModule-0cf8911f618ccf8d9cb2590eacb3dd3a"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-StoresModule-0cf8911f618ccf8d9cb2590eacb3dd3a"' : 'id="xs-injectables-links-module-StoresModule-0cf8911f618ccf8d9cb2590eacb3dd3a"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/HeaderEffects.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>HeaderEffects</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/LayoutEffects.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LayoutEffects</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ToolsModule.html" data-type="entity-link">ToolsModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"') + '>\n                        <span class="icon ion-md-cog"></span>\n                        <span>Components</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="components-links"' : 'id="xs-components-links"') + '>\n                        \n                            <li class="link">\n                                <a href="components/AppComponent.html" data-type="entity-link">AppComponent</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/NavigateAction.html" data-type="entity-link">NavigateAction</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetHeaderAction.html" data-type="entity-link">SetHeaderAction</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetLayoutAction.html" data-type="entity-link">SetLayoutAction</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetLinksAction.html" data-type="entity-link">SetLinksAction</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetTitleAction.html" data-type="entity-link">SetTitleAction</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SimpleHeaderAction.html" data-type="entity-link">SimpleHeaderAction</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SimpleLayoutAction.html" data-type="entity-link">SimpleLayoutAction</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/DialogService.html" data-type="entity-link">DialogService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/HeaderEffects.html" data-type="entity-link">HeaderEffects</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/LayoutEffects.html" data-type="entity-link">LayoutEffects</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/StorageService.html" data-type="entity-link">StorageService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/HeaderState.html" data-type="entity-link">HeaderState</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/LayoutState.html" data-type="entity-link">LayoutState</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Link.html" data-type="entity-link">Link</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                    <li class="link">\n                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));