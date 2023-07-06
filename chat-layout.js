System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.0/base", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "@aimpact/ailearn-estrada@0.0.2/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "@aimpact/ailearn-estrada@0.0.2/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.0/hooks", "@aimpact/ailearn-estrada@0.0.2/ui/manager", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-estrada@0.0.2/shared/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, Conversations, Sidebar, AsideMenu, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-api/entities/models', dependency_4], ['@aimpact/ailearn-estrada/wrapper', dependency_5], ['@aimpact/ailearn-estrada/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-estrada/shared/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/link', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-estrada/ui/manager', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-estrada/shared/icons', dependency_16]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEM3QixvQkFBQ3VGLFdBQUk7Y0FBQzNELElBQUksRUFBQyxLQUFLO2NBQUNFLE9BQU8sRUFBRSxNQUFNMUIsT0FBTyxDQUFDLEtBQUs7WUFBQyxFQUFJLEVBQ2xESiwyQ0FBZ0IsQ0FDWixDQUNDLEVBQ1BBO2NBQUk2QixTQUFTLEVBQUM7WUFBMkIsR0FDeEM3QixvQkFBQzhGLHlCQUFhLE9BQUcsQ0FDYixFQUNMOUY7Y0FBSTZCLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ0MsT0FBTyxFQUFFK0Q7WUFBTSxHQUN4RDdGO2NBQUs2QixTQUFTLEVBQUM7WUFBMkIsR0FDekM3QixvQkFBQ3VGLFdBQUk7Y0FBQzNELElBQUksRUFBQztZQUFLLEVBQUcsRUFDbkI1Qix3Q0FBYSxDQUNSLENBQ0YsQ0FDRCxDQUNJLENBQ0Q7VUFFWiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInNhdmUiLCJuYW1lIiwia25vd2xlZGdlQm94SWQiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJwdWJsaXNoIiwic3RhdHVzIiwiZWRpdCIsImlkIiwibG9hZCIsInNhdmVkQ2hhdCIsIkFkZENoYXQiLCJkaWFsb2dSZWYiLCJzZXROYW1lIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJyb3V0ZUtiSWQiLCJyb3V0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJrYklkIiwic2V0S2JJZCIsInNlbGVjdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwic3RvcmUiLCJjbG9zZURpYWxvZyIsInNldE9wZW4iLCJvbkNsb3NlIiwiY3VycmVudCIsInZhbHVlIiwic2F2ZUNoYXQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ1cmwiLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsImtiT3B0aW9ucyIsIml0ZW1zIiwibWFwIiwia2IiLCJpIiwia2V5IiwicGF0aCIsInNoYXJlZEtiT3B0aW9ucyIsImRpc2FibGVkIiwiaGFuZGxlS2JDaGFuZ2UiLCJ0YXJnZXQiLCJyZWYiLCJJY29uQnV0dG9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGF5b3V0Q29udGV4dCIsInVzZUNvbnRleHQiLCJGb290ZXIiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsImxvZ2dlZCIsIm9wZW4iLCJzZXRSZWFkeSIsIm9wZW5EaWFsb2ciLCJzaG93TW9kYWwiLCJjbG9zZSIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsIlByb3ZpZGVyIiwidG90YWxDaGF0cyIsIlNpZGViYXIiLCJUb2FzdHMiLCJDb252ZXJzYXRpb25zIiwidG9nZ2xlU2lkZWJhciIsInNvcnRDaGF0cyIsIm5hdmlnYXRlSG9tZSIsIklDT05TIiwiQ2hhdExpc3QiLCJBc2lkZU1lbnUiLCJJdGVtQWN0aW9ucyIsIml0ZW0iLCJjaGF0SWQiLCJpc0N1cnJlbnQiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibmV3TmFtZSIsInNldE5ld05hbWUiLCJ0b2dnbGVFZGl0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25EZWxldGUiLCJoYW5kbGVOYW1lQ2hhbmdlIiwic3VibWl0TmFtZUNoYW5nZSIsIkljb24iLCJDaGF0TGlzdEl0ZW0iLCJwYXRobmFtZSIsInNwbGl0Iiwic2V0SXRlbXMiLCJjaGF0TGlzdCIsImxvZ291dCIsIlRoZW1lU3dpdGNoZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXcvY2hhdC1mb3JtLnRzeCIsInRzL3ZpZXcvY29udGV4dC50c3giLCJ0cy92aWV3L2Zvb3Rlci50c3giLCJ0cy92aWV3L2xheW91dC50c3giLCJ0cy92aWV3L3NpZGViYXIvY29udmVyc2F0aW9ucy50c3giLCJ0cy92aWV3L3NpZGViYXIvaW5kZXgudHN4IiwidHMvdmlldy9zaWRlYmFyL2l0ZW0tYWN0aW9ucy50c3giLCJ0cy92aWV3L3NpZGViYXIvaXRlbS50c3giLCJ0cy92aWV3L3NpZGViYXIvbGlzdC50c3giLCJ0cy92aWV3L3NpZGViYXIvbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19