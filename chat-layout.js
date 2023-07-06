System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.0/base", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "@aimpact/ailearn-estrada@0.0.2/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "@aimpact/ailearn-estrada@0.0.2/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.0/hooks", "@aimpact/ailearn-estrada@0.0.2/ui/manager", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-estrada@0.0.2/shared/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Conversations, Sidebar, AsideMenu, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Conversations: void 0,
    Sidebar: void 0,
    AsideMenu: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets100Base) {
      dependency_2 = _beyondJsReact18Widgets100Base;
    }, function (_beyondJsReactive101Model) {
      dependency_3 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_4 = _aimpactChatApi100EntitiesModels;
    }, function (_aimpactAilearnEstrada002Wrapper) {
      dependency_5 = _aimpactAilearnEstrada002Wrapper;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_6 = _aimpactAilearnEstrada002Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_8 = _pragmateUi0036Form;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_9 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_11 = _pragmateUi0036Link;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_13 = _beyondJsReact18Widgets100Hooks;
    }, function (_aimpactAilearnEstrada002UiManager) {
      dependency_14 = _aimpactAilearnEstrada002UiManager;
    }, function (_pragmateUi0036Toast) {
      dependency_15 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnEstrada002SharedIcons) {
      dependency_16 = _aimpactAilearnEstrada002SharedIcons;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/chat-layout"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-api/entities/models', dependency_4], ['@aimpact/ailearn-estrada/wrapper', dependency_5], ['@aimpact/ailearn-estrada/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-estrada/shared/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/link', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-estrada/ui/manager', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-estrada/shared/icons', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-layout",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/chat-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/chat-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2953813515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _layout = require("./view/layout");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _layout.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2022459633,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/chat-api/entities/models");
          var _wrapper = require("@aimpact/ailearn-estrada/wrapper");
          var _session = require("@aimpact/ailearn-estrada/session");
          class StoreManager extends _model.ReactiveModel {
            get chats() {
              return _wrapper.AppWrapper.chats;
            }
            get knowledgeBoxes() {
              return _wrapper.AppWrapper.knowledgeBoxes;
            }
            get sharedKnowledgeBoxes() {
              return _wrapper.AppWrapper.sharedKnowledgeBoxes;
            }
            get currentChat() {
              return _wrapper.AppWrapper.currentChat;
            }
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.triggerEvent);
            }
            isReady() {
              return _wrapper.AppWrapper.ready;
            }
            save = async (name, knowledgeBoxId) => {
              const chat = new _models.Chat();
              const userId = _session.sessionWrapper.userId;
              let specs = {
                name,
                userId
              };
              knowledgeBoxId && (specs = {
                ...specs,
                knowledgeBoxId
              });
              await chat.publish(specs);
              return {
                status: true,
                chat
              };
            };
            edit = async (id, name) => {
              const chat = new _models.Chat();
              await chat.load({
                id
              });
              const savedChat = await chat.save({
                name
              });
              return {
                status: true,
                savedChat
              };
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./view/chat-form
      ********************************/

      ims.set('./view/chat-form', {
        hash: 2351514294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _link = require("pragmate-ui/link");
          var _routing = require("@beyond-js/kernel/routing");
          const AddChat = ({
            dialogRef
          }) => {
            const [name, setName] = (0, _react.useState)('');
            const [error, setError] = (0, _react.useState)('');
            const [fetching, setFetching] = (0, _react.useState)(false);
            const routeKbId = _routing.routing.uri.qs.get('id');
            const [kbId, setKbId] = (0, _react.useState)(routeKbId ?? '');
            const selectRef = _react.default.useRef(null);
            const {
              store,
              closeDialog,
              setOpen,
              knowledgeBoxes,
              sharedKnowledgeBoxes
            } = (0, _context.useLayoutContext)();
            const onClose = () => {
              setName('');
              setError('');
              setFetching(false);
              selectRef.current.value = '';
              closeDialog();
            };
            const saveChat = async () => {
              try {
                setFetching(true);
                const response = await store.save(name, kbId);
                if (!response.status) {
                  setError(response.message);
                  return;
                }
                let url = `/${response.chat.id}`;
                _routing.routing.pushState(url);
                closeDialog();
                setOpen(false);
                setName('');
              } catch (e) {
                console.error(e);
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const kbOptions = knowledgeBoxes?.items.map((kb, i) => _react.default.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const sharedKbOptions = sharedKnowledgeBoxes?.map((kb, i) => _react.default.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const disabled = {
              disabled: !name || fetching
            };
            const handleKbChange = e => {
              setKbId(e.target.value);
            };
            return _react.default.createElement("dialog", {
              ref: dialogRef,
              onClose: onClose
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), error && _react.default.createElement("div", {
              className: 'error error-container'
            }, error), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Create New Chat")), _react.default.createElement(_form.Form, {
              onSubmit: saveChat,
              className: 'chat__form'
            }, _react.default.createElement(_components.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              disabled: fetching,
              placeholder: 'Add a name to your chat'
            }), _react.default.createElement("select", {
              ref: selectRef,
              value: kbId,
              onChange: handleKbChange
            }, _react.default.createElement("option", {
              value: ''
            }, "Chat with model"), [...kbOptions, ...sharedKbOptions]), !kbOptions.length && _react.default.createElement("h4", {
              className: 'dialog__info'
            }, _react.default.createElement("strong", null, " You don't have any Knowledge Box yet."), _react.default.createElement("br", null), "You can create a new one in", ' ', _react.default.createElement(_link.Link, {
              onClick: onClose,
              href: '/documents/home'
            }, "Documents"), _react.default.createElement("br", null), "or continue creating a new chat ", _react.default.createElement("br", null), " where you can interfaceate with the model."), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              label: 'Cancel',
              variant: 'link',
              onClick: closeDialog
            }), _react.default.createElement(_form.Button, {
              icon: 'save',
              type: 'submit',
              label: 'Save',
              variant: 'primary',
              onClick: saveChat,
              fetching: fetching,
              ...disabled
            }))));
          };
          exports.AddChat = AddChat;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 3787452818,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLayoutContext = exports.LayoutContext = void 0;
          var React = require("react");
          const LayoutContext = React.createContext({});
          exports.LayoutContext = LayoutContext;
          const useLayoutContext = () => React.useContext(LayoutContext);
          exports.useLayoutContext = useLayoutContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/footer
      *****************************/

      ims.set('./view/footer', {
        hash: 668203473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Footer = void 0;
          var _react = require("react");
          const Footer = () => {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "footer-left"
            }, "@copyright AImpact 2023"), _react.default.createElement("div", {
              className: "footer-right"
            }, "Powered by beyond-js (www.beyondjs.com)"));
          };
          exports.Footer = Footer;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 2315505344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _sidebar = require("./sidebar");
          var _chatForm = require("./chat-form");
          var _context = require("./context");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _manager = require("@aimpact/ailearn-estrada/ui/manager");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _toast = require("pragmate-ui/toast");
          const Layout = ({
            store
          }) => {
            const [session, setSession] = (0, _react.useState)(_session.sessionWrapper.logged);
            const [open, setOpen] = (0, _react.useState)(true);
            const [ready, setReady] = (0, _react.useState)(store.isReady());
            const dialogRef = _react.default.useRef(null);
            const openDialog = () => dialogRef.current.showModal();
            const closeDialog = () => {
              dialogRef.current.close();
              _manager.UIManager.modalOpened = false;
            };
            (0, _hooks.useBinder)([_manager.UIManager], () => {
              _manager.UIManager.modalOpened ? openDialog() : closeDialog();
            }, 'modalOpened');
            (0, _hooks.useBinder)([store], () => setReady(store.isReady()));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement(_context.LayoutContext.Provider, {
              value: {
                open,
                setOpen,
                totalChats: store.chats?.items?.length,
                chats: store.chats,
                knowledgeBoxes: store.knowledgeBoxes,
                sharedKnowledgeBoxes: store.sharedKnowledgeBoxes,
                store,
                openDialog,
                closeDialog
              }
            }, _react.default.createElement("div", {
              className: 'layout'
            }, _react.default.createElement(_sidebar.Sidebar, null), _react.default.createElement("div", {
              className: `backdrop ${open ? 'open' : ''}`,
              onClick: () => setOpen(false)
            }), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null), _react.default.createElement(_chatForm.AddChat, {
              dialogRef: dialogRef
            }))));
          };
          exports.Layout = Layout;
        }
      });

      /********************************************
      INTERNAL MODULE: ./view/sidebar/conversations
      ********************************************/

      ims.set('./view/sidebar/conversations', {
        hash: 2065431028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversations = Conversations;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _list = require("./list");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Conversations() {
            const {
              open,
              setOpen,
              openDialog
            } = (0, _context.useLayoutContext)();
            const toggleSidebar = () => {
              setOpen(!open);
            };
            function sortChats() {}
            function navigateHome() {
              _routing.routing.pushState('/');
            }
            return React.createElement("article", null, React.createElement(_icons.IconButton, {
              onClick: navigateHome,
              icon: _icons2.ICONS['logo'],
              className: 'logo md'
            }), React.createElement(_icons.IconButton, {
              icon: _icons2.ICONS['icon-menu'],
              onClick: toggleSidebar,
              className: `toggle-sidebar ${open ? '' : 'close'} md`
            }), React.createElement("header", {
              className: 'sidebar__header'
            }, React.createElement("h3", null, "Chat Rooms"), React.createElement(_icons.IconButton, {
              onClick: sortChats,
              icon: 'sort',
              className: 'md'
            })), React.createElement("div", {
              className: 'sidebar__actions'
            }, React.createElement(_components.Input, {
              label: 'Search Chats',
              icon: 'search',
              required: true
            }), React.createElement(_form.Button, {
              label: 'New Chat',
              onClick: openDialog,
              icon: 'chat'
            })), React.createElement(_list.ChatList, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/sidebar/index
      ************************************/

      ims.set('./view/sidebar/index', {
        hash: 1794266100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var React = require("react");
          var _context = require("../context");
          var _menu = require("./menu");
          var _conversations = require("./conversations");
          /*bundle*/
          function Sidebar() {
            const {
              open
            } = (0, _context.useLayoutContext)();
            return React.createElement("aside", {
              className: `sidebar ${open ? 'open' : ''}`
            }, React.createElement("div", {
              className: 'sidebar-content'
            }, React.createElement(_conversations.Conversations, null), React.createElement(_menu.AsideMenu, null)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./view/sidebar/item-actions
      *******************************************/

      ims.set('./view/sidebar/item-actions', {
        hash: 2347051127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          function ItemActions({
            item,
            chatId,
            isCurrent
          }) {
            const [isEditing, setIsEditing] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const [newName, setNewName] = _react.default.useState('');
            const {
              store
            } = (0, _context.useLayoutContext)();
            const toggleEdit = e => {
              e.stopPropagation();
              setIsEditing(!isEditing);
            };
            const onDelete = e => {
              e.stopPropagation();
            };
            const handleNameChange = e => {
              setNewName(e.target.value);
            };
            const submitNameChange = async e => {
              setLoading(true);
              e.stopPropagation();
              setIsEditing(false);
              await store.edit(chatId, newName);
              setLoading(false);
            };
            (0, _react.useEffect)(() => setIsEditing(false), [isCurrent]);
            return _react.default.createElement("span", {
              className: 'item-label'
            }, _react.default.createElement(_link.Link, {
              href: `/${item.id}`
            }, _react.default.createElement(_icons.Icon, {
              icon: 'chat',
              className: 'xs'
            }), !isEditing ? _react.default.createElement("p", null, item.name) : _react.default.createElement("form", {
              onSubmit: submitNameChange
            }, _react.default.createElement(_components.Input, {
              type: 'text',
              value: newName,
              placeholder: item.name,
              onChange: handleNameChange
            }))), isCurrent && _react.default.createElement("span", {
              className: 'item-actions'
            }, isEditing ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              icon: 'check',
              type: 'submit',
              disabled: !newName?.length,
              onClick: e => submitNameChange(e)
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: e => toggleEdit(e)
            })) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              icon: 'edit',
              onClick: e => toggleEdit(e)
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'delete',
              onClick: e => onDelete(e)
            }))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./view/sidebar/item
      ***********************************/

      ims.set('./view/sidebar/item', {
        hash: 2805287224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatListItem = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _itemActions = require("./item-actions");
          const ChatListItem = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            const chatId = pathname.split('/')[1];
            const isCurrent = chatId === item.id;
            return _react.default.createElement("span", null, _react.default.createElement("li", {
              key: item.id,
              className: `sidebar-item ${isCurrent ? 'current' : ''}`
            }, _react.default.createElement(_itemActions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent
            })));
          };
          exports.ChatListItem = ChatListItem;
        }
      });

      /***********************************
      INTERNAL MODULE: ./view/sidebar/list
      ***********************************/

      ims.set('./view/sidebar/list', {
        hash: 2103859427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatList = ChatList;
          var React = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ChatList() {
            const {
              chats
            } = (0, _context.useLayoutContext)();
            const [items, setItems] = React.useState(chats.items);
            (0, _hooks.useBinder)([chats], () => setItems(chats.items));
            const chatList = items.map((item, i) => React.createElement(_item.ChatListItem, {
              key: i,
              item: item
            }));
            return React.createElement("div", {
              className: 'sidebar__list'
            }, chatList.length ? React.createElement("ul", null, chatList) : React.createElement("h4", {
              className: 'empty__list'
            }, "There are no chats in your profile yet. Please, click on the blue icon above to create a", ' ', React.createElement("strong", null, "new Chat"), "."));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./view/sidebar/menu
      ***********************************/

      ims.set('./view/sidebar/menu', {
        hash: 3148956163,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _context = require("../context");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _link = require("pragmate-ui/link");
          /*bundle*/
          function AsideMenu() {
            const {
              setOpen
            } = (0, _context.useLayoutContext)();
            const logout = () => {
              _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth');
            };
            return React.createElement("article", {
              className: 'user__options'
            }, React.createElement("section", {
              className: 'sidebar-footer sidebar__list'
            }, React.createElement("ul", {
              className: 'list__actions'
            }, React.createElement(_link.Link, {
              href: `/documents/home`
            }, React.createElement("li", {
              className: 'sidebar-item item--action'
            }, React.createElement(_icons.Icon, {
              icon: 'doc',
              onClick: () => setOpen(false)
            }), React.createElement("p", null, "Documents"))), React.createElement("li", {
              className: 'sidebar-item item--action'
            }, React.createElement(_components.ThemeSwitcher, null)), React.createElement("li", {
              className: 'sidebar-item item--action',
              onClick: logout
            }, React.createElement("div", {
              className: 'sidebar-item item--action'
            }, React.createElement(_icons.Icon, {
              icon: 'off'
            }), React.createElement("p", null, "Logout"))))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/sidebar/conversations",
        "from": "Conversations",
        "name": "Conversations"
      }, {
        "im": "./view/sidebar/index",
        "from": "Sidebar",
        "name": "Sidebar"
      }, {
        "im": "./view/sidebar/menu",
        "from": "AsideMenu",
        "name": "AsideMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Conversations') && _export("Conversations", Conversations = require ? require('./view/sidebar/conversations').Conversations : value);
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./view/sidebar/index').Sidebar : value);
        (require || prop === 'AsideMenu') && _export("AsideMenu", AsideMenu = require ? require('./view/sidebar/menu').AsideMenu : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QzdCLG9CQUFDdUYsV0FBSTtjQUFDM0QsSUFBSSxFQUFDLEtBQUs7Y0FBQ0UsT0FBTyxFQUFFLE1BQU0xQixPQUFPLENBQUMsS0FBSztZQUFDLEVBQUksRUFDbERKLDJDQUFnQixDQUNaLENBQ0MsRUFDUEE7Y0FBSTZCLFNBQVMsRUFBQztZQUEyQixHQUN4QzdCLG9CQUFDOEYseUJBQWEsT0FBRyxDQUNiLEVBQ0w5RjtjQUFJNkIsU0FBUyxFQUFDLDJCQUEyQjtjQUFDQyxPQUFPLEVBQUUrRDtZQUFNLEdBQ3hEN0Y7Y0FBSzZCLFNBQVMsRUFBQztZQUEyQixHQUN6QzdCLG9CQUFDdUYsV0FBSTtjQUFDM0QsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUNuQjVCLHdDQUFhLENBQ1IsQ0FDRixDQUNELENBQ0ksQ0FDRDtVQUVaIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJrbm93bGVkZ2VCb3hlcyIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2F2ZSIsIm5hbWUiLCJrbm93bGVkZ2VCb3hJZCIsImNoYXQiLCJDaGF0IiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJzcGVjcyIsInB1Ymxpc2giLCJzdGF0dXMiLCJlZGl0IiwiaWQiLCJsb2FkIiwic2F2ZWRDaGF0IiwiQWRkQ2hhdCIsImRpYWxvZ1JlZiIsInNldE5hbWUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInJvdXRlS2JJZCIsInJvdXRpbmciLCJ1cmkiLCJxcyIsImdldCIsImtiSWQiLCJzZXRLYklkIiwic2VsZWN0UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJzdG9yZSIsImNsb3NlRGlhbG9nIiwic2V0T3BlbiIsIm9uQ2xvc2UiLCJjdXJyZW50IiwidmFsdWUiLCJzYXZlQ2hhdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInVybCIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwia2JPcHRpb25zIiwiaXRlbXMiLCJtYXAiLCJrYiIsImkiLCJrZXkiLCJwYXRoIiwic2hhcmVkS2JPcHRpb25zIiwiZGlzYWJsZWQiLCJoYW5kbGVLYkNoYW5nZSIsInRhcmdldCIsInJlZiIsIkljb25CdXR0b24iLCJpY29uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsIkxpbmsiLCJocmVmIiwiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMYXlvdXRDb250ZXh0IiwidXNlQ29udGV4dCIsIkZvb3RlciIsInNlc3Npb24iLCJzZXRTZXNzaW9uIiwibG9nZ2VkIiwib3BlbiIsInNldFJlYWR5Iiwib3BlbkRpYWxvZyIsInNob3dNb2RhbCIsImNsb3NlIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwiUHJvdmlkZXIiLCJ0b3RhbENoYXRzIiwiU2lkZWJhciIsIlRvYXN0cyIsIkNvbnZlcnNhdGlvbnMiLCJ0b2dnbGVTaWRlYmFyIiwic29ydENoYXRzIiwibmF2aWdhdGVIb21lIiwiSUNPTlMiLCJDaGF0TGlzdCIsIkFzaWRlTWVudSIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsImNoYXRJZCIsImlzQ3VycmVudCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsInRvZ2dsZUVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJzdWJtaXROYW1lQ2hhbmdlIiwiSWNvbiIsIkNoYXRMaXN0SXRlbSIsInBhdGhuYW1lIiwic3BsaXQiLCJzZXRJdGVtcyIsImNoYXRMaXN0IiwibG9nb3V0IiwiVGhlbWVTd2l0Y2hlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlldy9jaGF0LWZvcm0udHN4IiwidHMvdmlldy9jb250ZXh0LnRzeCIsInRzL3ZpZXcvZm9vdGVyLnRzeCIsInRzL3ZpZXcvbGF5b3V0LnRzeCIsInRzL3ZpZXcvc2lkZWJhci9jb252ZXJzYXRpb25zLnRzeCIsInRzL3ZpZXcvc2lkZWJhci9pbmRleC50c3giLCJ0cy92aWV3L3NpZGViYXIvaXRlbS1hY3Rpb25zLnRzeCIsInRzL3ZpZXcvc2lkZWJhci9pdGVtLnRzeCIsInRzL3ZpZXcvc2lkZWJhci9saXN0LnRzeCIsInRzL3ZpZXcvc2lkZWJhci9tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=