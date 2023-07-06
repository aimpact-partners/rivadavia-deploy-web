System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/empty", "dayjs@1.11.8", "pragmate-ui@0.0.36/form", "@aimpact/ailearn-estrada@0.0.2/shared/components", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-estrada@0.0.2/config", "@aimpact/ailearn-estrada@0.0.2/session", "@aimpact/media-manager@1.0.0/uploader-code", "@beyond-js/react-18-widgets@1.0.0/page", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "@beyond-js/react-18-widgets@1.0.0/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Empty) {
      dependency_4 = _pragmateUi0036Empty;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_7 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_pragmateUi0036Toast) {
      dependency_8 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnEstrada002Config) {
      dependency_9 = _aimpactAilearnEstrada002Config;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_10 = _aimpactAilearnEstrada002Session;
    }, function (_aimpactMediaManager100UploaderCode) {
      dependency_11 = _aimpactMediaManager100UploaderCode;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_12 = _beyondJsReact18Widgets100Page;
    }, function (_beyondJsReactive101Model) {
      dependency_13 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_14 = _aimpactChatApi100EntitiesModels;
    }, function (_aimpactAilearnEstrada002Wrapper) {
      dependency_15 = _aimpactAilearnEstrada002Wrapper;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_16 = _beyondJsReact18Widgets100Hooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-estrada/shared/components', dependency_7], ['pragmate-ui/toast', dependency_8], ['@aimpact/ailearn-estrada/config', dependency_9], ['@aimpact/ailearn-estrada/session', dependency_10], ['@aimpact/media-manager/uploader-code', dependency_11], ['@beyond-js/react-18-widgets/page', dependency_12], ['@beyond-js/reactive/model', dependency_13], ['@aimpact/chat-api/entities/models', dependency_14], ['@aimpact/ailearn-estrada/wrapper', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztZQUNuRyxNQUFNeUwsT0FBTyxHQUFHLENBQUN6TCxLQUFLLENBQUM2QixLQUFLLENBQUN4RCxNQUFNLEdBQUcwRCwwQkFBWSxHQUFHQyxrQkFBUztZQUM5RCxPQUNDMUQsb0JBQUNpSixzQkFBYSxDQUFDeUIsUUFBUTtjQUFDNUcsS0FBSyxFQUFFQTtZQUFLLEdBQ25DOUQ7Y0FBS2EsU0FBUyxFQUFDO1lBQWdCLEdBQzlCYjtjQUFLYSxTQUFTLEVBQUM7WUFBZSxHQUM3QmIsNENBQWtCLENBQ2IsRUFDTkEsb0JBQUNtTixPQUFPO2NBQUN4SixNQUFNLEVBQUVBLE1BQU07Y0FBRUMsU0FBUyxFQUFFQTtZQUFTLEVBQUksQ0FDNUMsRUFDTjVEO2NBQVFtRCxHQUFHLEVBQUU0SjtZQUFTLEdBQ3JCL00sb0JBQUNvSSxjQUFNO2NBQUNDLFdBQVcsRUFBRUE7WUFBVyxFQUFJLENBQzVCLENBQ2U7VUFFM0IiLCJuYW1lcyI6WyJHcmlkVmlldyIsImZvbGRlciIsImRlbGV0ZUZpbGUiLCJkb2N1bWVudHMiLCJsZW5ndGgiLCJSZWFjdCIsIkVtcHR5IiwibWVzc2FnZSIsImljb24iLCJmb3JtYXR0ZWREYXRlIiwiZGF5IiwiZm9ybWF0IiwiZmlsZXMiLCJtYXAiLCJmaWxlIiwiaSIsImtleSIsIm5hbWUiLCJjbGFzc05hbWUiLCJJY29uIiwiY3JlYXRlZEF0Iiwic2l6ZSIsInR5cGUiLCJvbkNsaWNrIiwiVGFibGVWaWV3IiwiY29sU3BhbiIsIm9yaWdpbmFsbmFtZSIsIkljb25CdXR0b24iLCJGaWxlRGV0YWlscyIsIm9wZW4iLCJ2aWV3Iiwic3RvcmUiLCJyZW1vdmUiLCJWaWV3IiwiRm9sZGVyQWN0aW9ucyIsInZpc2libGUiLCJzZXROZXdWaWV3IiwiYWRkRmlsZSIsIm9wZW5EZWxldGVNb2RhbCIsInNoYXJlRm9sZGVyIiwibWVudVJlZiIsInVzZVJlZiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRvcCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJtZW51RWxlbWVudCIsIm1lbnVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInN0eWxlIiwicmVmIiwiRW1wdHlGaWxlcyIsIm9wZW5EaWFsb2ciLCJ0ZXh0IiwiaXRlbXMiLCJCdXR0b24iLCJFbXB0eUZvbGRlcnMiLCJEb2N1bWVudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJsYWJlbCIsInZhcmlhbnQiLCJGb2xkZXJMaXN0IiwiZm9sZGVycyIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInNldFZpc2libGUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwic3RvcFByb3BhZ2F0aW9uIiwic2hhcmVEaWFsb2ciLCJzaG93TW9kYWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlzRm9sZGVyT3BlbiIsInBhdGgiLCJTaGFyZUZvbGRlciIsIm9uQ2xvc2UiLCJjbG9zZSIsInNldE9wZW5lZEZvbGRlciIsImtub3dsZWRnZUJveCIsInNldEtub3dsZWRnZUJveCIsImNvbmZpcm1hdGlvblJlZiIsIm9wZW5Db25maXJtYXRpb25Nb2RhbCIsImNsb3NlQ29uZmlybWF0aW9uTW9kYWwiLCJmb2xkZXJOYW1lIiwiZGVsZXRlRm9sZGVyIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJmb2xkZXJzTGlzdCIsInNoYXJlZEZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVycyIsIlNoYXJlZEZvbGRlciIsInNoYXJlZEZvbGRlciIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiY29udGVudCIsImNhbmNlbCIsInN1Ym1pdCIsImV4cG9ydHMiLCJwcm9wcyIsImJhc2VVcmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImZvbGRlckxpbmsiLCJpZCIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiVXBsb2FkZXJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlVXBsb2FkZXJNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXBsb2FkZWRGaWxlcyIsInRvdGFsRmlsZXMiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwicHVzaCIsIkl0ZW0iLCJVcGxvYWQiLCJjbG9zZURpYWxvZyIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwidXJsIiwicHJvamVjdCIsImNvbmZpZyIsInBhcmFtcyIsInVwbG9hZEZpbGVzIiwiY2xlYXJGaWxlcyIsImJ1dHRvbiIsImRyYWciLCJtdWx0aXBsZSIsIlVwbG9hZENvbnRleHQiLCJzZXROYW1lIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2VsZWN0UmVmIiwiaGFuZGxlU3VibWl0IiwiaGFzSW52YWxpZEZpbGUiLCJhY2NlcHRlZERvY3VtZW50cyIsImluY2x1ZGVzIiwiY29udGFpbmVyIiwidHJpbSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJzdGF0dXMiLCJsb2FkIiwiY2xlYXJPbkNsb3NlIiwiaGFuZGxlS2JDaGFuZ2UiLCJrYiIsImtub3dsZWRnZUJveGVzIiwiZmluZCIsImNscyIsImtiT3B0aW9ucyIsIlByb3ZpZGVyIiwib25TdWJtaXQiLCJsb2FkaW5nIiwib25EZWxldGUiLCJ1c2VVcGxvYWRDb250ZXh0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsImZvcm1hdEJ5dGVzIiwiYnl0ZXMiLCJkZWNpbWFscyIsImsiLCJkbSIsInNpemVzIiwiTWF0aCIsImZsb29yIiwibG9nIiwicGFyc2VGbG9hdCIsInBvdyIsInRvRml4ZWQiLCJSZWFjdGl2ZU1vZGVsIiwiQXBwV3JhcHBlciIsImNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIktub3dsZWRnZUJveGVzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZWFkeSIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsImRpYWxvZ1JlZiIsIktCIiwiUHJlbG9hZFNjcmVlbiIsInRvdGFsSXRlbXMiLCJDb250cm9sIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29tcG9uZW50cy9maWxlcy9kZXRhaWxzL2dyaWQtdmlldy50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9maWxlcy9kZXRhaWxzL3RhYmxlLXZpZXcudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZmlsZXMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9hY3Rpb25zLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvZW1wdHktZmlsZXMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9lbXB0eS1mb2xkZXJzLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9pdGVtLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvbGlzdC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL3NoYXJlLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvc2hhcmVkLWZvbGRlcnMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2NvbnRleHQudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2ZpbGVzLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL3VwbG9hZC9pbmRleC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy91cGxvYWQvaXRlbS50c3giLCJ3aWRnZXQvdHMvY29udGV4dC50cyIsIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL2Zvcm1hdC1ieXRlcy50cyIsIndpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==