System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/empty", "dayjs@1.11.8", "pragmate-ui@0.0.36/form", "@aimpact/ailearn-estrada@0.0.2/shared/components", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-estrada@0.0.2/config", "@aimpact/ailearn-estrada@0.0.2/session", "@aimpact/media-manager@1.0.0/uploader-code", "@beyond-js/react-18-widgets@1.0.0/page", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "@beyond-js/react-18-widgets@1.0.0/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Empty) {
      dependency_5 = _pragmateUi0036Empty;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_pragmateUi0036Form) {
      dependency_7 = _pragmateUi0036Form;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_8 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_pragmateUi0036Toast) {
      dependency_9 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnEstrada002Config) {
      dependency_10 = _aimpactAilearnEstrada002Config;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_11 = _aimpactAilearnEstrada002Session;
    }, function (_aimpactMediaManager100UploaderCode) {
      dependency_12 = _aimpactMediaManager100UploaderCode;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_13 = _beyondJsReact18Widgets100Page;
    }, function (_beyondJsReactive101Model) {
      dependency_14 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_15 = _aimpactChatApi100EntitiesModels;
    }, function (_aimpactAilearnEstrada002Wrapper) {
      dependency_16 = _aimpactAilearnEstrada002Wrapper;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_17 = _beyondJsReact18Widgets100Hooks;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/pages/documents/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/empty', dependency_5], ['dayjs', dependency_6], ['pragmate-ui/form', dependency_7], ['@aimpact/ailearn-estrada/shared/components', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/ailearn-estrada/config', dependency_10], ['@aimpact/ailearn-estrada/session', dependency_11], ['@aimpact/media-manager/uploader-code', dependency_12], ['@beyond-js/react-18-widgets/page', dependency_13], ['@beyond-js/reactive/model', dependency_14], ['@aimpact/chat-api/entities/models', dependency_15], ['@aimpact/ailearn-estrada/wrapper', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-home",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/pages/documents/home.widget",
        "is": "page",
        "route": "/documents/home",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/pages/documents/home.widget');
      ims = new Map();
      /****************************************************
      INTERNAL MODULE: ./components/files/details/grid-view
      ****************************************************/
      ims.set('./components/files/details/grid-view', {
        hash: 3566871809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GridView = GridView;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _empty = require("pragmate-ui/empty");
          var _dayjs = require("dayjs");
          function GridView({
            folder,
            deleteFile
          }) {
            if (!folder.documents?.length) {
              return _react.default.createElement(_empty.Empty, {
                message: 'Esta carpeta est\u00E1 vac\u00EDa',
                icon: 'info'
              });
            }
            // Format the date
            const formattedDate = day => (0, _dayjs.default)(day).format('YYYY/MM/DD HH:mm');
            const files = folder.documents?.map((file, i) => {
              return _react.default.createElement("span", {
                key: `${file.name}-${i}`,
                className: 'file-card'
              }, _react.default.createElement("div", {
                className: 'card-top'
              }, _react.default.createElement(_icons.Icon, {
                icon: 'doc',
                className: 'lg'
              }), _react.default.createElement("span", null, _react.default.createElement("h4", null, file.name), _react.default.createElement("p", null, " ", formattedDate(file.createdAt)))), _react.default.createElement("div", {
                className: 'card-bottom'
              }, _react.default.createElement("p", null, file.size, " bytes"), file.type, _react.default.createElement(_icons.Icon, {
                icon: 'delete',
                onClick: () => deleteFile(file.name)
              })));
            });
            return _react.default.createElement("div", {
              className: 'file-details-grid'
            }, files);
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./components/files/details/table-view
      *****************************************************/

      ims.set('./components/files/details/table-view', {
        hash: 779151052,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TableView = TableView;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _empty = require("pragmate-ui/empty");
          var _formatBytes = require("../../../format-bytes");
          var _dayjs = require("dayjs");
          function TableView({
            folder,
            deleteFile
          }) {
            if (!folder.documents?.length) {
              return _react.default.createElement(_empty.Empty, {
                message: 'Esta carpeta est\u00E1 vac\u00EDa',
                icon: 'info'
              });
            }
            // Format the date
            const formattedDate = day => (0, _dayjs.default)(day).format('DD.MM.YY');
            return _react.default.createElement("table", {
              className: 'file-details-table'
            }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Fecha"), _react.default.createElement("th", {
              colSpan: 2
            }, "Informaci\u00F3n del documento"), _react.default.createElement("th", null, "Tama\u00F1o"), _react.default.createElement("th", null, "Acciones"))), _react.default.createElement("tbody", null, folder.documents?.map((file, i) => {
              return _react.default.createElement("tr", {
                key: `${file.name}-${i}`
              }, _react.default.createElement("td", null, formattedDate(file.createdAt)), _react.default.createElement("td", {
                colSpan: 2
              }, file.originalname), _react.default.createElement("td", null, (0, _formatBytes.formatBytes)(file.size), " "), _react.default.createElement("td", null, _react.default.createElement(_icons.IconButton, {
                icon: 'delete',
                onClick: () => deleteFile(file.name)
              })));
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./components/files/index
      ****************************************/

      ims.set('./components/files/index', {
        hash: 2173544439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FileDetails = FileDetails;
          var _react = require("react");
          var _gridView = require("./details/grid-view");
          var _tableView = require("./details/table-view");
          var _context = require("../../context");
          function FileDetails({
            folder,
            open,
            view
          }) {
            const {
              store
            } = (0, _context.useUploadContext)();
            async function deleteFile(name) {
              await store.remove(name);
            }
            const View = view === 'grid' ? _gridView.GridView : _tableView.TableView;
            return _react.default.createElement("div", {
              className: `folder-container ${open ? 'open' : ''}`
            }, _react.default.createElement(View, {
              folder: folder,
              deleteFile: deleteFile
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./components/folders/actions
      ********************************************/

      ims.set('./components/folders/actions', {
        hash: 3395069738,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FolderActions = FolderActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function FolderActions({
            visible,
            setNewView,
            addFile,
            openDeleteModal,
            shareFolder
          }) {
            const menuRef = _react.default.useRef(null);
            const [position, setPosition] = _react.default.useState({
              top: '0'
            });
            _react.default.useEffect(() => {
              if (menuRef.current) {
                const menuElement = menuRef.current;
                const menuRect = menuElement.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                if (menuRect.bottom > viewportHeight) setPosition({
                  bottom: '0'
                });
              }
            }, [visible]);
            return _react.default.createElement("span", {
              style: {
                ...position
              },
              ref: menuRef,
              className: `folder-buttons ${visible ? 'visible' : ''}`
            }, _react.default.createElement("span", {
              className: 'menu-item',
              "data-type": 'list',
              onClick: setNewView
            }, _react.default.createElement(_icons.Icon, {
              icon: 'list'
            }), _react.default.createElement("p", {
              className: 'label'
            }, "List view")), _react.default.createElement("span", {
              className: 'menu-item',
              "data-type": 'grid',
              onClick: setNewView
            }, _react.default.createElement(_icons.Icon, {
              icon: 'grid'
            }), _react.default.createElement("p", {
              className: 'label'
            }, "Grid view")), _react.default.createElement("span", {
              className: 'menu-item',
              onClick: addFile
            }, _react.default.createElement(_icons.Icon, {
              icon: 'upload-file'
            }), _react.default.createElement("p", {
              className: 'label'
            }, "Upload file")), _react.default.createElement("span", {
              className: 'menu-item',
              onClick: openDeleteModal
            }, _react.default.createElement(_icons.Icon, {
              icon: 'delete'
            }), _react.default.createElement("p", {
              className: 'label'
            }, "Delete folder")), _react.default.createElement("span", {
              className: 'menu-item',
              onClick: shareFolder
            }, _react.default.createElement(_icons.Icon, {
              icon: 'share-folder'
            }), _react.default.createElement("p", {
              className: 'label'
            }, "Share folder")));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./components/folders/empty-files
      ************************************************/

      ims.set('./components/folders/empty-files', {
        hash: 1220980381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyFiles = EmptyFiles;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          function EmptyFiles() {
            const {
              openDialog,
              store
            } = (0, _context.useUploadContext)();
            const text = store.items.length ? 'No folder found.' : 'You have no folders!';
            return _react.default.createElement("div", {
              className: 'documents empty'
            }, _react.default.createElement("h1", null, text), _react.default.createElement(_form.Button, {
              icon: 'folder',
              onClick: () => openDialog('')
            }, "Upload your folder here"));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./components/folders/empty-folders
      **************************************************/

      ims.set('./components/folders/empty-folders', {
        hash: 3043353212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyFolders = EmptyFolders;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          function EmptyFolders() {
            const {
              openDialog,
              store
            } = (0, _context.useUploadContext)();
            return _react.default.createElement("div", {
              className: 'empty'
            }, _react.default.createElement("h1", null, "Let's start now!"), _react.default.createElement("p", null, _react.default.createElement("strong", null, "There are no knowledge box in your space yet."), _react.default.createElement("br", null), " You can start by creating your first knowledge box now."), _react.default.createElement(_form.Button, {
              icon: 'folder',
              onClick: () => openDialog('')
            }, "Upload Content"));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./components/folders/index
      ******************************************/

      ims.set('./components/folders/index', {
        hash: 2615168342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Documents = Documents;
          var _react = require("react");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _list = require("./list");
          function Documents({
            search,
            setSearch
          }) {
            const {
              openDialog,
              store
            } = (0, _context.useUploadContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'view__header'
            }, _react.default.createElement(_components.Input, {
              type: 'search',
              name: 'documentName',
              value: search,
              onChange: e => setSearch(e.target.value),
              required: true,
              label: 'Search Documents'
            }), _react.default.createElement(_form.Button, {
              icon: 'upload-file',
              label: 'Upload Documents',
              variant: 'primary',
              onClick: () => openDialog({})
            })), _react.default.createElement(_list.FolderList, {
              folders: store.items
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/folders/item
      *****************************************/

      ims.set('./components/folders/item', {
        hash: 2059659089,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Folder = Folder;
          var _react = require("react");
          var _files = require("../files");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../../context");
          var _share = require("./share");
          var _actions = require("./actions");
          function Folder({
            folder,
            openedFolder,
            handleFolderClick,
            openDeleteModal
          }) {
            const [view, setView] = _react.default.useState('list');
            const [visible, setVisible] = _react.default.useState(false);
            const toggleVisibility = e => {
              e.stopPropagation();
              setVisible(!visible);
            };
            const shareDialog = _react.default.useRef(null);
            const {
              openDialog
            } = (0, _context.useUploadContext)();
            function addFile(e) {
              e.stopPropagation();
              openDialog(folder);
            }
            function shareFolder(e) {
              e.stopPropagation();
              shareDialog.current.showModal();
            }
            const setNewView = e => {
              e.stopPropagation();
              const {
                type
              } = e.currentTarget.dataset;
              setView(type);
            };
            const isFolderOpen = openedFolder === folder.path;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              key: folder.path,
              className: `folder ${isFolderOpen ? 'open' : ''}`
            }, _react.default.createElement("header", {
              className: "folder__header",
              onClick: () => handleFolderClick(folder.path)
            }, _react.default.createElement(_icons.Icon, {
              icon: "folder"
            }), _react.default.createElement("h3", null, folder.path), _react.default.createElement(_actions.FolderActions, {
              visible: visible,
              setNewView: setNewView,
              addFile: addFile,
              openDeleteModal: e => openDeleteModal(e, folder),
              shareFolder: shareFolder
            }), _react.default.createElement(_icons.Icon, {
              icon: "list-menu",
              className: "mobile-menu",
              onClick: toggleVisibility
            })), _react.default.createElement(_files.FileDetails, {
              folder: folder,
              open: isFolderOpen,
              view: view
            })), _react.default.createElement(_share.ShareFolder, {
              ref: shareDialog,
              folder: folder,
              onClose: () => shareDialog.current.close()
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/folders/list
      *****************************************/

      ims.set('./components/folders/list', {
        hash: 608415171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FolderList = void 0;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _emptyFiles = require("./empty-files");
          var _item = require("./item");
          var _sharedFolders = require("./shared-folders");
          const FolderList = ({
            folders
          }) => {
            const [openedFolder, setOpenedFolder] = (0, _react.useState)(null);
            const {
              knowledgeBox,
              setKnowledgeBox,
              store
            } = (0, _context.useUploadContext)();
            const confirmationRef = _react.default.useRef(null);
            const openConfirmationModal = () => confirmationRef.current.showModal();
            const closeConfirmationModal = () => confirmationRef.current.close();
            function handleFolderClick(folderName) {
              setOpenedFolder(folderName === openedFolder ? null : folderName);
            }
            function openDeleteModal(e, folder) {
              e.stopPropagation();
              setKnowledgeBox(folder);
              openConfirmationModal();
            }
            async function deleteFolder() {
              try {
                const response = await store.remove(knowledgeBox.name);
              } catch (error) {
                console.error(error);
              }
            }
            const foldersList = folders.map((folder, i) => _react.default.createElement(_item.Folder, {
              key: `${folder.path}-${i}`,
              handleFolderClick: handleFolderClick,
              folder: folder,
              openedFolder: openedFolder,
              openDeleteModal: openDeleteModal
            }));
            const sharedFoldersList = store.sharedFolders.map((folder, i) => _react.default.createElement(_sharedFolders.SharedFolder, {
              key: `${folder.path}-${i}`,
              sharedFolder: folder
            }));
            return _react.default.createElement("div", {
              className: 'folder-list'
            }, !!folders.length ? [...foldersList, ...sharedFoldersList] : _react.default.createElement(_emptyFiles.EmptyFiles, null), _react.default.createElement(_components.ConfirmationModal, {
              ref: confirmationRef,
              content: `Are you sure you want to delete ${knowledgeBox.path}?`,
              cancel: closeConfirmationModal,
              submit: deleteFolder
            }));
          };
          exports.FolderList = FolderList;
        }
      });

      /******************************************
      INTERNAL MODULE: ./components/folders/share
      ******************************************/

      ims.set('./components/folders/share', {
        hash: 2400471112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareFolder = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          const ShareFolder = (0, _react.forwardRef)((props, ref) => {
            const {
              folder,
              onClose
            } = props;
            const baseUrl = window.location.origin;
            const folderLink = `${baseUrl}/documents/access?id=${folder.id}`;
            function copyToClipboard() {
              navigator.clipboard.writeText(folderLink);
              _toast.toast.success('Link copied to clipboard');
              onClose();
            }
            return _react.default.createElement("dialog", {
              ref: ref
            }, _react.default.createElement("div", {
              className: 'share__modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Share your Documents")), _react.default.createElement("div", {
              className: 'share__details'
            }, _react.default.createElement("h3", null, "Share your documents with others."), _react.default.createElement("p", null, " Copy the link and share it so they can access your knowledge folder.")), _react.default.createElement(_components.Input, {
              value: folderLink,
              disabled: true,
              className: 'share__input'
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link',
              onClick: onClose
            }, "Close"), _react.default.createElement(_form.Button, {
              icon: 'copy-link',
              variant: 'primary',
              onClick: copyToClipboard
            }, "Copy link"))));
          });
          exports.ShareFolder = ShareFolder;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./components/folders/shared-folders
      ***************************************************/

      ims.set('./components/folders/shared-folders', {
        hash: 3992482150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SharedFolder = SharedFolder;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function SharedFolder({
            sharedFolder
          }) {
            return _react.default.createElement("div", {
              key: sharedFolder.id,
              className: `folder`
            }, _react.default.createElement("header", {
              className: 'folder__header'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'shared-folder'
            }), _react.default.createElement("h3", null, sharedFolder.path)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./components/upload/context
      *******************************************/

      ims.set('./components/upload/context', {
        hash: 3069086577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploaderModalContext = exports.UploaderModalContext = void 0;
          var React = require("react");
          const UploaderModalContext = React.createContext({});
          exports.UploaderModalContext = UploaderModalContext;
          const useUploaderModalContext = () => React.useContext(UploaderModalContext);
          exports.useUploaderModalContext = useUploaderModalContext;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/upload/files
      *****************************************/

      ims.set('./components/upload/files', {
        hash: 3216781521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploadedFiles = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _item = require("./item");
          const UploadedFiles = () => {
            const {
              files,
              totalFiles
            } = (0, _context.useUploaderModalContext)();
            if (!totalFiles) return null;
            const items = [];
            files.forEach((item, index) => items.push(_react.default.createElement(_item.Item, {
              key: index,
              index: index,
              item: item
            })));
            return _react.default.createElement("ul", {
              className: 'list__upload-items'
            }, items);
          };
          exports.UploadedFiles = UploadedFiles;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/upload/index
      *****************************************/

      ims.set('./components/upload/index', {
        hash: 3400690288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Upload = Upload;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-estrada/config");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _uploaderCode = require("@aimpact/media-manager/uploader-code");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _context = require("../../context");
          var _context2 = require("./context");
          var _files = require("./files");
          function Upload({
            closeDialog
          }) {
            const {
              userId
            } = _session.sessionWrapper;
            const {
              url,
              project
            } = _config.default.params;
            const {
              uploadFiles,
              clearFiles,
              files,
              button,
              drag,
              deleteFile,
              totalFiles
            } = (0, _uploaderCode.useUploader)({
              url,
              multiple: true
            });
            const {
              store,
              knowledgeBox,
              setKnowledgeBox
            } = React.useContext(_context.UploadContext);
            const [name, setName] = React.useState(knowledgeBox?.path ?? '');
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState(false);
            const selectRef = React.useRef(null);
            React.useEffect(() => setName(knowledgeBox.path ?? ''), [knowledgeBox.path]);
            const handleSubmit = async () => {
              setError('');
              setFetching(true);
              let hasInvalidFile = false;
              files.forEach(file => {
                if (!store.acceptedDocuments.includes(file.type)) {
                  setError('Only text files are allowed!');
                  clearFiles();
                  hasInvalidFile = true;
                }
              });
              if (hasInvalidFile) return setFetching(false);
              let container = knowledgeBox.path ? knowledgeBox.path.trim() : name;
              container = container.toLowerCase().trim().replace(/\s/g, '-');
              const specs = {
                project,
                type: 'files',
                container,
                userId
              };
              knowledgeBox.id && (specs.knowledgeBoxId = knowledgeBox.id);
              const response = await uploadFiles(specs);
              if (!response.status) {
                setError('An error occurred while upfetching your files!');
              }
              await store.load();
              setFetching(false);
              clearFiles();
              closeDialog && closeDialog();
            };
            const clearOnClose = () => {
              clearFiles();
              setError('');
              selectRef.current.value = '';
              setName('');
              closeDialog && closeDialog();
            };
            const handleKbChange = e => {
              const {
                value
              } = e.target;
              const kb = !value ? {} : store.knowledgeBoxes.items.find(kb => kb.id === value);
              setKnowledgeBox(kb);
            };
            const value = {
              deleteFile,
              clearFiles,
              files,
              totalFiles
            };
            const cls = `upload-modal ${fetching ? ' is-fetching' : ''}`;
            const kbOptions = store.knowledgeBoxes?.items.map(kb => React.createElement("option", {
              key: kb.id,
              value: kb.id
            }, kb.path));
            return React.createElement(_context2.UploaderModalContext.Provider, {
              value: value
            }, React.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              disabled: fetching,
              onClick: clearOnClose
            }), React.createElement("div", {
              className: cls
            }, React.createElement("header", null, React.createElement("h1", null, "Upload Content")), React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement("select", {
              ref: selectRef,
              value: knowledgeBox.id,
              onChange: handleKbChange
            }, React.createElement("option", {
              value: ''
            }, "Create a new Knowledge Box"), kbOptions), !knowledgeBox.id && React.createElement(_components.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              label: 'Name of the folder'
            }), React.createElement("div", {
              ref: drag,
              className: 'documents-drag'
            }, React.createElement("p", {
              ref: button
            }, React.createElement("strong", null, "Drag and drop or upload a document to the folder to create it."), " ", React.createElement("br", null), " You can upload documents in PDF, TXT, DOC formats. Remember that the maximum allowed file size is 10 MB."), React.createElement(_form.Button, {
              ref: button,
              disabled: fetching,
              icon: 'upload-file',
              variant: 'link'
            }, "Upload file")), !!error?.length && React.createElement("div", {
              className: 'error'
            }, error), React.createElement(_files.UploadedFiles, null), React.createElement("footer", {
              className: 'modal__actions'
            }, React.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link',
              label: 'Cancel',
              onClick: clearOnClose,
              disabled: fetching
            }), React.createElement(_form.Button, {
              icon: 'save',
              variant: 'primary',
              label: 'Save',
              disabled: !name || !totalFiles || fetching,
              onClick: handleSubmit,
              loading: fetching,
              type: 'submit'
            })))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./components/upload/item
      ****************************************/

      ims.set('./components/upload/item', {
        hash: 3583024444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item,
            index
          }) {
            const {
              deleteFile
            } = (0, _context.useUploaderModalContext)();
            const {
              name
            } = item;
            const onDelete = e => {
              e.stopPropagation();
              deleteFile(index);
            };
            return React.createElement("li", {
              key: `${name}.${index}`
            }, React.createElement("span", null, React.createElement(_icons.Icon, {
              icon: "file"
            }), " ", name), React.createElement("section", {
              className: "item__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: onDelete
            })));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2039200944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploadContext = exports.UploadContext = void 0;
          var React = require("react");
          const UploadContext = React.createContext({});
          exports.UploadContext = UploadContext;
          const useUploadContext = () => React.useContext(UploadContext);
          exports.useUploadContext = useUploadContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3149080382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./format-bytes
      ******************************/

      ims.set('./format-bytes', {
        hash: 2475202177,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatBytes = formatBytes;
          function formatBytes(bytes, decimals = 2) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 3494087522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/chat-api/entities/models");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _wrapper = require("@aimpact/ailearn-estrada/wrapper");
          const acceptedDocuments = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'];
          class StoreManager extends _model.ReactiveModel {
            #kb;
            #documents;
            #acceptedDocuments = acceptedDocuments;
            #sharedFolders = [];
            get acceptedDocuments() {
              return this.#acceptedDocuments;
            }
            get documents() {
              return this.#documents;
            }
            #knowledgeBoxes = _wrapper.AppWrapper.knowledgeBoxes;
            get knowledgeBoxes() {
              return this.#knowledgeBoxes;
            }
            #items = [];
            get items() {
              return this.#items;
            }
            get collection() {
              return this.#kb;
            }
            get sharedFolders() {
              return this.#sharedFolders;
            }
            constructor() {
              super();
              this.#kb = new _models.KnowledgeBoxes();
              this.load();
            }
            async load() {
              try {
                this.fetching = true;
                await this.#kb.load({
                  userId: _session.sessionWrapper.user.id
                });
                this.#items = this.#kb.items;
                this.#sharedFolders = JSON.parse(localStorage.getItem('sharedFolders')) || [];
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
                this.ready = true;
              }
            }
            async remove(path) {
              try {
                return this.#documents.remove({
                  path,
                  userId: _session.sessionWrapper.userId
                });
              } catch (e) {
                console.log(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3735402716,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _context = require("../context");
          var _upload = require("../components/upload");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _emptyFolders = require("../components/folders/empty-folders");
          var _folders = require("../components/folders");
          /*bundle*/
          function View({
            store
          }) {
            const [knowledgeBox, setKnowledgeBox] = React.useState({});
            const [isReady, setIsReady] = React.useState(store.ready);
            const [totalKbs, setTotalKbs] = React.useState(store.ready);
            const [search, setSearch] = React.useState('');
            const dialogRef = React.useRef(null);
            const openDialog = (KB = {}) => {
              setKnowledgeBox(KB);
              dialogRef.current.showModal();
            };
            const closeDialog = () => {
              setKnowledgeBox({});
              dialogRef.current.close();
            };
            (0, _hooks.useBinder)([store], () => {
              setIsReady(store.ready);
              setTotalKbs(store.items.length);
            });
            if (!isReady) return React.createElement(_components.PreloadScreen, null);
            const value = {
              knowledgeBox,
              setKnowledgeBox,
              closeDialog,
              openDialog,
              totalItems: totalKbs,
              store
            };
            const Control = !store.items.length ? _emptyFolders.EmptyFolders : _folders.Documents;
            return React.createElement(_context.UploadContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: 'view-container'
            }, React.createElement("div", {
              className: 'section-title'
            }, React.createElement("h1", null, "Documents")), React.createElement(Control, {
              search: search,
              setSearch: setSearch
            })), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_upload.Upload, {
              closeDialog: closeDialog
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1lBQ25HLE1BQU15TCxPQUFPLEdBQUcsQ0FBQ3pMLEtBQUssQ0FBQzZCLEtBQUssQ0FBQ3hELE1BQU0sR0FBRzBELDBCQUFZLEdBQUdDLGtCQUFTO1lBQzlELE9BQ0MxRCxvQkFBQ2lKLHNCQUFhLENBQUN5QixRQUFRO2NBQUM1RyxLQUFLLEVBQUVBO1lBQUssR0FDbkM5RDtjQUFLYSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJiO2NBQUthLFNBQVMsRUFBQztZQUFlLEdBQzdCYiw0Q0FBa0IsQ0FDYixFQUNOQSxvQkFBQ21OLE9BQU87Y0FBQ3hKLE1BQU0sRUFBRUEsTUFBTTtjQUFFQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUM1QyxFQUNONUQ7Y0FBUW1ELEdBQUcsRUFBRTRKO1lBQVMsR0FDckIvTSxvQkFBQ29JLGNBQU07Y0FBQ0MsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDNUIsQ0FDZTtVQUUzQiIsIm5hbWVzIjpbIkdyaWRWaWV3IiwiZm9sZGVyIiwiZGVsZXRlRmlsZSIsImRvY3VtZW50cyIsImxlbmd0aCIsIlJlYWN0IiwiRW1wdHkiLCJtZXNzYWdlIiwiaWNvbiIsImZvcm1hdHRlZERhdGUiLCJkYXkiLCJmb3JtYXQiLCJmaWxlcyIsIm1hcCIsImZpbGUiLCJpIiwia2V5IiwibmFtZSIsImNsYXNzTmFtZSIsIkljb24iLCJjcmVhdGVkQXQiLCJzaXplIiwidHlwZSIsIm9uQ2xpY2siLCJUYWJsZVZpZXciLCJjb2xTcGFuIiwib3JpZ2luYWxuYW1lIiwiSWNvbkJ1dHRvbiIsIkZpbGVEZXRhaWxzIiwib3BlbiIsInZpZXciLCJzdG9yZSIsInJlbW92ZSIsIlZpZXciLCJGb2xkZXJBY3Rpb25zIiwidmlzaWJsZSIsInNldE5ld1ZpZXciLCJhZGRGaWxlIiwib3BlbkRlbGV0ZU1vZGFsIiwic2hhcmVGb2xkZXIiLCJtZW51UmVmIiwidXNlUmVmIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInVzZVN0YXRlIiwidG9wIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIm1lbnVFbGVtZW50IiwibWVudVJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3cG9ydEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYm90dG9tIiwic3R5bGUiLCJyZWYiLCJFbXB0eUZpbGVzIiwib3BlbkRpYWxvZyIsInRleHQiLCJpdGVtcyIsIkJ1dHRvbiIsIkVtcHR5Rm9sZGVycyIsIkRvY3VtZW50cyIsInNlYXJjaCIsInNldFNlYXJjaCIsIklucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImxhYmVsIiwidmFyaWFudCIsIkZvbGRlckxpc3QiLCJmb2xkZXJzIiwiRm9sZGVyIiwib3BlbmVkRm9sZGVyIiwiaGFuZGxlRm9sZGVyQ2xpY2siLCJzZXRWaWV3Iiwic2V0VmlzaWJsZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwicGF0aCIsIlNoYXJlRm9sZGVyIiwib25DbG9zZSIsImNsb3NlIiwic2V0T3BlbmVkRm9sZGVyIiwia25vd2xlZGdlQm94Iiwic2V0S25vd2xlZGdlQm94IiwiY29uZmlybWF0aW9uUmVmIiwib3BlbkNvbmZpcm1hdGlvbk1vZGFsIiwiY2xvc2VDb25maXJtYXRpb25Nb2RhbCIsImZvbGRlck5hbWUiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJzaGFyZWRGb2xkZXJzIiwiU2hhcmVkRm9sZGVyIiwic2hhcmVkRm9sZGVyIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJjb250ZW50IiwiY2FuY2VsIiwic3VibWl0IiwiZXhwb3J0cyIsInByb3BzIiwiYmFzZVVybCIsImxvY2F0aW9uIiwib3JpZ2luIiwiZm9sZGVyTGluayIsImlkIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJVcGxvYWRlck1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVcGxvYWRlck1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJVcGxvYWRlZEZpbGVzIiwidG90YWxGaWxlcyIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJwdXNoIiwiSXRlbSIsIlVwbG9hZCIsImNsb3NlRGlhbG9nIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1cmwiLCJwcm9qZWN0IiwiY29uZmlnIiwicGFyYW1zIiwidXBsb2FkRmlsZXMiLCJjbGVhckZpbGVzIiwiYnV0dG9uIiwiZHJhZyIsIm11bHRpcGxlIiwiVXBsb2FkQ29udGV4dCIsInNldE5hbWUiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZWxlY3RSZWYiLCJoYW5kbGVTdWJtaXQiLCJoYXNJbnZhbGlkRmlsZSIsImFjY2VwdGVkRG9jdW1lbnRzIiwiaW5jbHVkZXMiLCJjb250YWluZXIiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInN0YXR1cyIsImxvYWQiLCJjbGVhck9uQ2xvc2UiLCJoYW5kbGVLYkNoYW5nZSIsImtiIiwia25vd2xlZGdlQm94ZXMiLCJmaW5kIiwiY2xzIiwia2JPcHRpb25zIiwiUHJvdmlkZXIiLCJvblN1Ym1pdCIsImxvYWRpbmciLCJvbkRlbGV0ZSIsInVzZVVwbG9hZENvbnRleHQiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiZm9ybWF0Qnl0ZXMiLCJieXRlcyIsImRlY2ltYWxzIiwiayIsImRtIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJwYXJzZUZsb2F0IiwicG93IiwidG9GaXhlZCIsIlJlYWN0aXZlTW9kZWwiLCJBcHBXcmFwcGVyIiwiY29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiS25vd2xlZGdlQm94ZXMiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlYWR5IiwiaXNSZWFkeSIsInNldElzUmVhZHkiLCJ0b3RhbEticyIsInNldFRvdGFsS2JzIiwiZGlhbG9nUmVmIiwiS0IiLCJQcmVsb2FkU2NyZWVuIiwidG90YWxJdGVtcyIsIkNvbnRyb2wiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb21wb25lbnRzL2ZpbGVzL2RldGFpbHMvZ3JpZC12aWV3LnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZpbGVzL2RldGFpbHMvdGFibGUtdmlldy50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9maWxlcy9pbmRleC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL2FjdGlvbnMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9lbXB0eS1maWxlcy50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL2VtcHR5LWZvbGRlcnMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9pbmRleC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL2l0ZW0udHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9saXN0LnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvc2hhcmUudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9zaGFyZWQtZm9sZGVycy50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy91cGxvYWQvY29udGV4dC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy91cGxvYWQvZmlsZXMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2luZGV4LnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL3VwbG9hZC9pdGVtLnRzeCIsIndpZGdldC90cy9jb250ZXh0LnRzIiwid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvZm9ybWF0LWJ5dGVzLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19