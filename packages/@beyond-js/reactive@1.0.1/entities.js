System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/model", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.4", "@beyond-js/reactive@1.0.1/database", "uuid@9.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Collection, CollectionLocalProvider, IProvider, Item, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    CollectionLocalProvider: void 0,
    IProvider: void 0,
    Item: void 0,
    LocalProvider: void 0,
    CollectionProvider: void 0,
    ItemProvider: void 0,
    RegistryFactory: void 0,
    StoreRecords: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Model) {
      dependency_1 = _beyondJsReactive101Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReactive101Database) {
      dependency_4 = _beyondJsReactive101Database;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive", "1.0.1"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.0.1/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['dexie', dependency_3], ['@beyond-js/reactive/database', dependency_4], ['uuid', dependency_5]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/
      ims.set('./collection/index', {
        hash: 285479779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _localProvider = require("./local-provider");
          var _publish = require("./publish");
          var _load = require("./load");
          /*bundle */
          class Collection extends _model.ReactiveModel {
            #items = [];
            localdb = true;
            get items() {
              return this.#items;
            }
            get isOnline() {
              return !this.localProvider ? true : this.localProvider.isOnline;
            }
            set items(value) {
              if (!Array.isArray(value)) {
                return;
              }
              this.#items = value;
              this.triggerEvent();
            }
            counters = {};
            /**
             * Represents the number of elements in the collection
             */
            total = 0;
            next;
            #localProvider;
            get localProvider() {
              return this.#localProvider;
            }
            #saveManager;
            #loadManager;
            provider;
            #initSpecs;
            sortBy = 'id';
            sortDirection = 'asc';
            constructor(specs) {
              super();
              const {
                provider,
                storeName,
                db,
                localdb
              } = specs;
              if (storeName) this.storeName = storeName;
              if (db) this.db = db;
              if (localdb) this.localdb = localdb;
              if (provider) {
                if (typeof provider !== 'function') {
                  throw new Error('Provider must be a class object');
                }
                this.provider = new provider();
              }
              this.reactiveProps(['item', 'next', 'provider']);
              this.init();
            }
            init() {
              const getProperty = property => {
                return this[property];
              };
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              if (this.localdb) {
                this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
                this.#localProvider.on('items.changed', this.#listenItems);
                this.localProvider.init();
              }
              this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
              this.#loadManager = new _load.CollectionLoadManager(this, bridge);
            }
            #listenItems = () => {
              if (!this.localdb) return;
              this.#items = this.#loadManager.processEntries(this.#localProvider.items);
              this.trigger('change');
            };
            setOffline = value => this.localProvider.setOffline(value);
            setItems(values) {
              this.#items = values;
            }
            async store() {
              await this.#localProvider.init();
              return this.#localProvider.store;
            }
            async delete(ids) {
              try {
                if (this.#localProvider) await this.#localProvider.softDelete(ids);
                if (this.provider) {
                  await this.provider.deleteItems(ids);
                }
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Collection = Collection;
        }
      });

      /*********************************
      INTERNAL MODULE: ./collection/load
      *********************************/

      ims.set('./collection/load', {
        hash: 1160765705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLoadManager = void 0;
          var _factory = require("../registry/factory");
          class CollectionLoadManager {
            filter;
            #localProvider;
            #provider;
            #getProperty;
            #parentBridge;
            #localdb;
            #parent;
            #registry;
            get parent() {
              return this.#parent;
            }
            /**
             * Original data obtained in provider.load
             *
             * This property lets the developer access to the original data obtained from the provider in the children object.
             * Only contains the data from the last load.
             *
             */
            remoteData = [];
            constructor(parent, parentBridge) {
              this.#parent = parent;
              this.#parentBridge = parentBridge;
              this.init();
            }
            init() {
              this.#localdb = this.#parentBridge.get('localdb');
              this.#localProvider = this.#parentBridge.get('localProvider');
              this.#provider = this.#parentBridge.get('provider');
              this.#parent.load = this.load;
              this.#parent.filter = this.filter;
              this.#registry = _factory.RegistryFactory.get(this.#parentBridge.get('storeName'));
              if (this.#localProvider) this.#parent.customFilter = this.#localProvider?.customFilter;
            }
            /**
             * metodo general para las consultas de tipo lista para las colecciones
             * @param params Object filters and configuration
             * parameters:
             *  - next
             *  - limit
             *  - update // siguiente pagina de misma consulta
             *
             *
             * - status // 1, 0, -1
             *  {user: [10,30]}
             *
             * {and: [{user:10}, {user:30}]]}
             *
             *  {user: 10}
             *  {user: [10,30,40,50]}
             * {or: [{user:10}, {user:30}]]}
             * {and: [{user:10}, {user:30}]]}
             *  el provider debe devolver:
             *    - next
             *    - entries
             *  - total
             * load({status:1})
             */
            #localLoad = async params => {
              const localData = (await this.#localProvider.load(params)) ?? {
                data: []
              };
              const newItems = this.processEntries(localData.data);
              let items = params.update === true ? this.parent.items.concat(newItems) : newItems;
              const properties = {
                localLoaded: true,
                fetching: false,
                total: localData.total ?? 0,
                next: !!localData.next,
                items
              };
              if (localData.next) properties.next = localData.next;
              this.parent.set(properties);
              return items;
            };
            #localData = [];
            #page = 1;
            #remoteElements = [];
            load = async (params = {}) => {
              try {
                this.parent.fetching = true;
                let {
                  start = 0,
                  update
                } = params;
                params.limit = params.limit ?? 30;
                const {
                  next
                } = this.parent;
                if (update) this.#page++;
                start = update === true && next ? next : start;
                if (update) {
                  params.start = start;
                }
                const {
                  isOnline
                } = this.#parent;
                if (this.#localProvider) {
                  const localItems = await this.#localLoad(params);
                  if (!isOnline || !this.#provider) {
                    return {
                      status: true,
                      data: localItems
                    };
                  }
                }
                const remoteData = await this.#provider.list(params);
                this.remoteData = remoteData;
                const {
                  status,
                  data,
                  error
                } = remoteData;
                if (!status) throw error ?? 'ERROR_LIST_QUERY';
                const items = await this.processRemoteEntries(data);
                // if (this.#localProvider) await this.#localProvider.save(items);
                this.#remoteElements = params.update === true ? this.#remoteElements.concat(items) : items;
                const properties = {
                  items: this.#remoteElements,
                  next: data.next,
                  loaded: true,
                  fetching: false,
                  total: data.total ?? 0
                };
                this.parent.set(properties);
                this.parent.triggerEvent();
                return {
                  status: true,
                  data: items
                };
              } catch (exc) {
                console.error('ERROR LOAD', exc);
                this.#parent.set({
                  loaded: false,
                  fetching: true
                });
                this.parent.triggerEvent();
                return {
                  status: false,
                  error: {
                    message: exc
                  }
                };
              }
            };
            async processRemoteEntries(data) {
              if (!data.entries) {
                throw new Error('The list method must return an object with an entries property');
              }
              if (data.deletedEntries) {
                // todo: unify it in recordsFactory
                this.#localProvider.softDelete(data.deletedEntries);
              }
              await this.#localProvider.save(data.entries);
              return data.entries.map(record => {
                const item = new this.parent.item({
                  id: record.id
                });
                item.set(record);
                return item;
              });
            }
            processEntries = entries => {
              this.#registry.registerList(this.#parentBridge.get('storeName'), entries);
              return entries.map(record => {
                const item = new this.parent.item({
                  id: record.id
                });
                item.set(record);
                return item;
              });
            };
            remoteLoad = async params => {
              const response = await this.#provider.load(params);
              if (!response.status) throw 'ERROR_DATA_QUERY';
              return response.data;
            };
          }
          exports.CollectionLoadManager = CollectionLoadManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./collection/local-provider
      *******************************************/

      ims.set('./collection/local-provider', {
        hash: 3475984694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _dexie = require("dexie");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class CollectionLocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            /**
             * Defines if the collection is using a local database or not.
             */
            #active;
            get active() {
              return this.#active;
            }
            #offline;
            #database;
            #storeName;
            #databaseName;
            #listItems = new Map();
            #items = [];
            #registryFactory;
            get items() {
              return this.#items;
            }
            #exists = false;
            #found = false;
            #ids = new Set();
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
            }
            #parent;
            #bridge;
            constructor(parent, bridge) {
              super();
              const {
                db,
                storeName
              } = parent;
              this.#parent = parent;
              this.#bridge = bridge;
              if (db) {
                this.#registryFactory = _factory.RegistryFactory.get(db);
              }
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            #promiseInit;
            init = async () => {
              try {
                if (this.#promiseInit) return this.#promiseInit;
                this.#promiseInit = new _core.PendingPromise();
                if (!this.#databaseName || !this.#storeName) {
                  this.#active = false;
                  this.#promiseInit.resolve();
                  return;
                }
                const database = await _database.DBManager.get(this.#databaseName);
                this.#database = database;
                this.#store = database.db[this.#storeName];
                this.ready = true;
                this.#promiseInit.resolve();
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            /**
             * @todo: Must validated if some item in the collection is not sync.
             * @param data
             * @returns
             */
            #isUnpublished(data) {}
            #promiseLoad;
            #params;
            #total;
            #page = 0;
            #customWhere;
            #defaultWhere = store => store.orderBy('id');
            #currentLimit;
            #currentOffset;
            where = limit => {
              return () => {
                let store = this.#store;
                const offset = (this.#page - 1) * limit;
                const filter = this.#customWhere ?? this.#defaultWhere;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                return filter(store).filter(i => i.isDeleted !== 1).offset(offset).limit(limit).toArray();
              };
            };
            customFilter = callback => {
              this.#customWhere = callback;
              return this.#parent;
            };
            async load(params) {
              if (this.#promiseLoad) return this.#promiseLoad;
              if (JSON.stringify(this.#params) === JSON.stringify(params)) {
                return this.#promiseLoad;
              }
              this.#promiseLoad = new _core.PendingPromise();
              await this.init();
              const conditions = Object.keys(params);
              const controls = ['and', 'or'];
              conditions.forEach(condition => {
                if (controls.includes(condition)) {
                  this.#processControl(condition, params[condition]);
                }
              });
              try {
                if (!this.#total) this.#total = await this.#store.count();
                let limit = params.limit ?? 30;
                const totalPages = Math.ceil(this.#total / limit);
                if (totalPages <= this.#page) return;
                let first = true;
                const live = (0, _dexie.liveQuery)(this.where(limit));
                this.#page++;
                let currentPage;
                live.subscribe({
                  next: async items => {
                    let sameQuery;
                    if (currentPage == this.#page) {
                      sameQuery = true;
                    } else {
                      currentPage = this.#page;
                    }
                    if (this.#promiseLoad) {
                      first = false;
                      const response = {
                        status: true,
                        data: items,
                        total: this.#total,
                        next: true
                      };
                      if (this.#page + 1 >= totalPages) delete response.next;
                      this.#promiseLoad.resolve(response);
                      this.#promiseLoad = null;
                    }
                    const currentMap = new Set();
                    items.forEach(item => {
                      this.#listItems.set(item.id, item);
                      currentMap.add(item.id);
                    });
                    if (sameQuery) {
                      const removed = [...this.#listItems.keys()].forEach(id => {
                        if (!currentMap.has(id)) {
                          this.#listItems.delete(id);
                        }
                      });
                    }
                    this.#items = [...this.#listItems.values()];
                    items.forEach(item => this.#ids.add(item.id));
                    this.trigger('items.changed');
                  },
                  error: err => {
                    console.error(err);
                  }
                });
                return this.#promiseLoad;
                //return await this.live.toArray();
              } catch (error) {
                console.error('Error al cargar los elementos del store:', error);
                return {
                  status: false,
                  data: []
                };
              }
            }
            async save(data) {
              const process = (entries, offline = 0) => {
                return entries.map(item => {
                  const record = item.getProperties && typeof item.getProperties === 'function' ? item.getProperties() : item;
                  const toSave = {
                    ...record,
                    offline,
                    instanceId: item.instanceId
                  };
                  return toSave;
                });
              };
              data = process(data, this.isOnline ? 0 : 1);
              await this.#registryFactory.init();
              await this.#registryFactory.saveAll(data, this.#storeName);
            }
            #processControl(control, conditions) {
              this.#store[control];
            }
            async upsert(data, originalData) {
              return this.#database.db.transaction('rw', this.store, async () => {
                const instanceIdToIdMap = new Map();
                data.forEach(item => {
                  instanceIdToIdMap.set(item.instanceId, item.id);
                });
                await this.store.bulkPut(data);
              });
            }
            async softDelete(ids) {
              if (!Array.isArray(ids)) {
                console.error('Expected an array of items for soft deletion');
                return {
                  status: false,
                  data: []
                };
              }
              try {
                const records = await this.store.bulkGet(ids);
                const existingRecords = records.filter(record => record !== undefined);
                if (!existingRecords.length) return;
                // // Prepare items for bulk update
                const itemsToUpdate = existingRecords.map(record => ({
                  ...record,
                  isDeleted: 1
                }));
                // // Perform bulk update
                await this.#store.bulkPut(itemsToUpdate);
                return true;
              } catch (error) {
                console.error('Error occurred while performing a soft delete:', error);
                return {
                  status: false,
                  error: error.message
                };
              }
            }
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /************************************
      INTERNAL MODULE: ./collection/publish
      ************************************/

      ims.set('./collection/publish', {
        hash: 3263494497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionSaveManager = void 0;
          class CollectionSaveManager {
            #parent;
            #bridge;
            #localProvider;
            #provider;
            #localdb;
            MAX_RETRIES = 3;
            CHUNK_SIZE = 200;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#bridge = bridge;
              this.init();
            }
            init() {
              this.#parent.save = this.save;
              this.#parent.sync = this.sync;
              this.#parent.publish = this.publish;
              this.#parent.toSync = this.toSync;
              this.#localdb = this.#bridge.get('localdb');
              if (this.#localdb) {
                this.#localProvider = this.#bridge.get('localProvider');
              } else {
                console.warn('la colleccion no usa indexeddb');
              }
              this.#provider = this.#bridge.get('#provider');
            }
            save = async (data = []) => {
              if (!this.#localdb) return true;
              await this.#localProvider.init();
              await this.#localProvider.save(data);
            };
            publish = async (data = []) => {
              try {
                await this.save(data);
                if (!this.#provider || this.#bridge.get('isOffline')) return;
                const response = await this.#provider.bulkSave(data);
                if (!response.status) throw response.error;
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              }
            };
            // Send chunks with retries
            sendChunk = async (chunk, index, retries = 0) => {
              try {
                const response = await this.#provider.bulkSave(chunk);
                if (response.status) {
                  const data = response.data.entries.map(item => ({
                    ...item,
                    offline: 0,
                    instanceId: undefined
                  }));
                  await this.#localProvider.upsert(data, chunk);
                  return {
                    success: true,
                    chunk,
                    response
                  };
                }
                if (retries < this.MAX_RETRIES) {
                  return await this.sendChunk(chunk, retries + 1);
                }
                return {
                  success: false,
                  chunk,
                  response
                };
              } catch (e) {
                console.error(e);
                return {
                  success: false,
                  chunk,
                  error: e
                };
              }
            };
            // Split large datasets into smaller chunks
            splitDataIntoChunks = data => {
              const chunks = [];
              for (let i = 0; i < data.length; i += this.CHUNK_SIZE) {
                chunks.push(data.slice(i, i + this.CHUNK_SIZE));
              }
              return chunks;
            };
            sync = async data => {
              try {
                await this.#localProvider.init();
                if (!data) data = await this.#parent.localProvider.store.where('offline').equals(1).toArray();
                const chunks = this.splitDataIntoChunks(data);
                const failedChunks = [];
                const successChunks = [];
                for (const [index, chunk] of chunks.entries()) {
                  const result = await this.sendChunk(chunk, index);
                  if (!result.success) {
                    failedChunks.push(result);
                  } else successChunks.push(result);
                }
                this.#bridge.set('items', []);
                await this.#parent.load();
                if (failedChunks.length) {
                  const message = failedChunks.length === chunks.length ? 'FAILED_SYNC' : 'INCOMPLETE_SYNC';
                  return {
                    status: false,
                    message,
                    data: {
                      failed: failedChunks,
                      success: successChunks
                    }
                  };
                }
                return {
                  status: true,
                  data: successChunks
                };
              } catch (e) {
                console.error(e);
              }
            };
            toSync = async () => {
              try {
                await this.#localProvider.init();
                return this.#localProvider.store.where('offline').equals(1).toArray();
              } catch (e) {
                console.error(e);
              }
            };
          }
          exports.CollectionSaveManager = CollectionSaveManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/provider
      *************************************/

      ims.set('./interfaces/provider', {
        hash: 2771398495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 3355448523,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _localProvider = require("./local-provider");
          var _save = require("./save");
          var _load = require("./load");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class Item extends _model.ReactiveModel {
            #info = new Map();
            /**
             * Represent the data that is stored in the local database
             */
            #localData = new Map();
            localdb = true;
            provider;
            storeName;
            db;
            #ignoredFields = [];
            #skeleton = [];
            localProvider;
            unique = [];
            get isUnpublished() {
              return this.localProvider.isUnpublished(this.getProperties());
            }
            #saveManager;
            get skeleton() {
              return this.#skeleton;
            }
            __get(property) {
              return this[property];
            }
            #isDeleted = 0;
            get isDeleted() {
              return !!this.#isDeleted;
            }
            get store() {
              return this.localProvider.store;
            }
            get isOnline() {
              return this.localProvider.isOnline && !localStorage.getItem('reactive.offline');
            }
            get instanceId() {
              return this.localProvider.instanceId;
            }
            get landed() {
              return this.localProvider?.landed;
            }
            get isReady() {
              return this.checkReady();
            }
            #loadManager;
            #objectReady = false;
            #promiseReady;
            #initPromise;
            constructor(config = {}) {
              super();
              const {
                db,
                storeName
              } = config;
              if (db) this.db = db;
              if (storeName) this.storeName = storeName;
              if (config.provider) {
                if (typeof config.provider !== 'function') {
                  throw new Error('Provider must be an object');
                }
                this.provider = new config.provider();
              }
              this.on('object.loaded', this.checkReady);
              this.reactiveProps(['found']);
              const getProperty = property => this.__get(property);
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              this.localProvider = new _localProvider.LocalProvider(this, bridge);
              this.#saveManager = new _save.ItemSaveManager(this, bridge);
              this.#loadManager = new _load.ItemLoadManager(this, bridge);
              if (this.db && this.storeName) this.init(config);
            }
            async init(config = {}) {
              try {
                let id;
                if (this.#initPromise) return this.#initPromise;
                this.#initPromise = new _core.PendingPromise();
                if (config.id) id = config.id;
                await this.localProvider.init(id);
                if (this.#skeleton && this.#skeleton.length > 0) {
                  this.properties = this.#skeleton;
                }
                this.ready = true;
                this.#initPromise.resolve(true);
                this.trigger('object.loaded');
              } catch (e) {
                console.error('error initializing', e);
              }
            }
            /**
             * Validates if the object is ready to be used
             *
             * Is implemented internally by methods such as publish or load to avoid errors in cases
             * where could it be called before the object is ready.
             *
             * @returns {Promise<boolean>} A promise that resolves when the object is ready
             */
            checkReady = () => {
              if (this.ready) {
                return this.ready;
              }
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              if (this.objectReady) this.#promiseReady.resolve(this.#objectReady);
              const onReady = () => {
                this.#objectReady = true;
                this.#promiseReady.resolve(this.#objectReady);
              };
              this.on('object.loaded', onReady);
              return this.#promiseReady;
            };
            setOffline = value => this.localProvider.setOffline(value);
            /**
             * Set the data of the object
             *
             * @param data The data to set
             * @param init If true, the data will be stored in the local database
             */
            set(data, init = false) {
              //	If init is true, store the data in localData Map
              if (init) {
                this.#localData = new Map(Object.entries(data));
                this.localProvider.save(data, true);
              }
              // If a property is in the properties array, define it as a public property
              this.properties.forEach(property => {
                if (data.hasOwnProperty(property)) {
                  this[property] = data[property];
                }
              });
              this.triggerEvent();
            }
            /**
             * @deprecated Please use getProperties instead
             * @see ReactiveModel.properties
             */
            getValues() {
              const values = {};
              const toIterate = this.skeleton.length ? this.skeleton : this.properties;
              toIterate.forEach(field => {
                if (this.hasOwnProperty(field)) values[field] = this[field];
              });
              return values;
            }
            getPropertyNames() {
              return this.properties;
            }
            async delete() {
              try {
                this.#isDeleted = 1;
                if (this.localProvider) await this.localProvider.delete();
                if (this.provider) await this.provider.delete(this.id);
                this.triggerEvent();
                return true;
              } catch (e) {
                console.error('error', e);
              }
            }
          }
          exports.Item = Item;
        }
      });

      /****************************************
      INTERNAL MODULE: ./item/interfaces/config
      ****************************************/

      ims.set('./item/interfaces/config', {
        hash: 2972906493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./item/interfaces/item
      **************************************/

      ims.set('./item/interfaces/item', {
        hash: 888494614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./item/load
      ***************************/

      ims.set('./item/load', {
        hash: 3747535548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemLoadManager = void 0;
          class ItemLoadManager {
            #parent;
            #localProvider;
            #provider;
            #getProperty;
            #bridge;
            ready;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
              this.init();
            }
            init = () => {
              this.#localProvider = this.#getProperty('localProvider');
              this.#provider = this.#getProperty('provider');
              this.#parent.load = this.load;
              this.ready = true;
            };
            /**
             * Load the data from the provider and save it in the local database
             *
             * The method returns the data from the provider, if the provider is not set, it returns undefined, if
             * the provider method returns more data than the properties defined in the object, the data will be
             * available in the response.data object returned by the method.
             *
             * @param id
             * @returns
             */
            load = async params => {
              try {
                await this.#getProperty('checkReady')();
                const localdb = await this.#getProperty('localdb');
                if (!params && this.#parent.id) {
                  params = {
                    id: this.#parent.id
                  };
                }
                if (localdb && this.#localProvider) {
                  const localData = await this.#localProvider.load(params);
                  if (localData?.status) this.#parent.set(localData.data, true);
                }
                if (this.#localProvider && !this.#localProvider.isOnline) return {
                  status: true
                };
                if (!this.#provider) return;
                const remoteData = await this.remoteLoad(params);
                if (!remoteData) {
                  this.#parent.found = false;
                } else if (remoteData) {
                  let same = true;
                  Object.keys(remoteData).forEach(key => {
                    let original = this.#localProvider.registry.values;
                    if (original[key] !== remoteData[key]) same = false;
                  });
                  if (!same) await this.#localProvider.save(remoteData);
                  this.#parent.found = true;
                }
                return {
                  status: true,
                  data: remoteData
                };
              } catch (exc) {
                console.error('ERROR LOAD', exc);
                return {
                  status: false,
                  error: exc
                };
              } finally {
                this.#parent.fetching = false;
              }
            };
            remoteLoad = async params => {
              // TODO: CHANGE TO LOAD
              if (!this.#parent.isOnline) return;
              /**
               * The data method is validated to support old providers.
               */
              let loadMethod = this.#provider.data ? this.#provider.data.bind(this.#provider) : this.#provider.load.bind(this.#provider);
              if (typeof loadMethod !== 'function') {
                console.error('The provider object is not defined correctly. It must have a data method');
                return;
              }
              const response = await loadMethod(params);
              if (!response.status) {
                console.error(response);
                throw 'ERROR_DATA_QUERY';
              }
              return response.data;
            };
          }
          exports.ItemLoadManager = ItemLoadManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./item/local-provider
      *************************************/

      ims.set('./item/local-provider', {
        hash: 1739821060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class LocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            #offline;
            #database;
            #storeName;
            #databaseName;
            #originalData;
            #exists = false;
            get originalData() {
              return this.#originalData;
            }
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
            }
            #parent;
            #getProperty;
            /**
             * @type {RegistryFactory}
             */
            #factoryRegistry;
            /**
             * @type {Registry} Database Record
             *
             */
            #registry;
            #localdb;
            #bridge;
            get registry() {
              return this.#registry;
            }
            constructor(parent, bridge) {
              super();
              this.#getProperty = bridge.get;
              const {
                db,
                storeName
              } = parent;
              this.__id = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
              this.#parent = parent;
              if (!db || !storeName) throw new Error('database and store are required');
              this.#databaseName = db;
              this.#storeName = storeName;
              this.#bridge = bridge;
              this.#localdb = bridge.get('localdb');
              this.#factoryRegistry = _factory.RegistryFactory.get(db);
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
              this.load = this.load.bind(this);
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            init = async (id = undefined) => {
              try {
                if (!this.#localdb) return;
                const database = await _database.DBManager.get(this.#databaseName);
                this.#database = database;
                this.#store = database.db[this.#storeName];
                await this.#getRegistry(id);
                return;
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            isUnpublished(data) {
              const properties = Object.keys(data);
              const toCompare = {
                ...this.#registry.values
              };
              return properties.some(prop => {
                if (prop === 'id') return false;
                return toCompare[prop] !== data[prop];
              });
            }
            async load(params = {}) {
              let id = params.id;
              id = id ?? this.#parent.id;
              try {
                if (!id) throw 'ID IS REQUIRED';
                await this.#getRegistry(id);
                this.#parent.localLoaded = true;
                this.#parent.set(this.#registry.values);
                return {
                  status: true,
                  data: this.#registry.values
                };
              } catch (e) {
                console.error(e);
                return e;
              }
            }
            /**
             * Retrieves the record from the local database store
             *
             * Also creates a listener for the record changes
             * @param id id of the record
             * @returns
             */
            #getRegistry = async id => {
              if (this.#factoryRegistry.hasItem(this.#storeName, id)) {
                const item = this.#factoryRegistry.getItem(this.#storeName, id);
                this.#registry = item;
                this.#parent.localLoaded = this.#parent.found = item.values.found;
                return item;
              }
              const getRegistry = data => {
                this.#registry = this.#factoryRegistry.create(this.#storeName, data);
                this.#registry.on('change', this.#listenRegistry);
                this.#parent.set(this.#registry.values);
                this.trigger('change');
              };
              if (!id) {
                getRegistry({
                  found: false
                });
                return this.#registry.values;
              }
              const promise = new _core.PendingPromise();
              this.#store.get(id).then(data => {
                const specs = data ?? {
                  id
                };
                specs.found = !!data;
                getRegistry(specs);
                promise.resolve(this.#registry.values);
              });
              return promise;
              // if (!registry) {
              // 	this.found = false;
              // 	return;
              // }
              // this.#parent.set(registry.values);
              // this.#registry = registry;
              // registry.on('change', this.#listenRegistry);
              // return registry;
            };
            /**
             * Trigger the event to update the component when the registry changes.
             */
            #listenRegistry = async () => {
              if (!this.#registry) return;
              this.#parent.set(this.#registry.values);
              this.trigger('change');
            };
            async save(data, backend = false) {
              try {
                if (!this.isUnpublished(data)) return;
                data.offline = this.isOnline ? 0 : 1;
                // Add validation for unique fields
                const duplicated = await this.validateUniqueFields(data);
                if (duplicated.length) return {
                  error: 'duplicated',
                  fields: duplicated
                };
                await this.#update(data);
                return this;
              } catch (e) {
                console.error('error saving', e.message);
              }
            }
            async validateUniqueFields(data) {
              if (!this.#getProperty('unique').length) return [];
              const checkPromises = this.#getProperty('unique').map(field => this.#store.where(field).equals(data[field]).count().then(count => {
                if (count) {
                  return field;
                }
                return null;
              }));
              const duplicateFields = (await Promise.all(checkPromises)).filter(field => field !== null);
              return duplicateFields;
            }
            delete = async () => {
              const response = await this.#update({
                isDeleted: 1
              });
              return response;
            };
            async #update(data) {
              const updated = this.#registry.setValues(data);
              if (!updated) return;
              await this.#store.put(this.#registry.values);
              this.triggerEvent();
              return true;
            }
          }
          exports.LocalProvider = LocalProvider;
        }
      });

      /***************************
      INTERNAL MODULE: ./item/save
      ***************************/

      ims.set('./item/save', {
        hash: 2953274826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemSaveManager = void 0;
          class ItemSaveManager {
            #parent;
            #getProperty;
            #bridge;
            #provider;
            #localProvider;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
              this.init();
            }
            init() {
              this.#parent.save = this.save;
              this.#parent.publish = this.publish;
              this.#localProvider = this.#getProperty('localProvider');
              this.#provider = this.#getProperty('provider');
              this.#parent.sync = this.sync;
            }
            save = async (data = undefined) => {
              try {
                await this.#getProperty('checkReady')();
                if (data) {
                  this.#parent.set(data);
                }
                if (!this.#parent.isUnpublished) {
                  return;
                }
                const properties = this.#parent.getProperties();
                if (this.#localProvider) {
                  await this.#localProvider.save(properties);
                }
                await this.#publish(properties);
                this.#parent.triggerEvent();
                return {
                  status: true
                };
              } catch (e) {
                console.error('error saving', e);
              }
            };
            #publish = async properties => {
              try {
                if (!this.#provider || !this.#bridge.get('isOnline')) return;
                const response = await this.#provider.publish(properties);
                if (!response?.status) throw response.error;
                if (this.#localProvider) {
                  this.#localProvider.save(response.data, true);
                  this.#localProvider.triggerEvent();
                }
                return {
                  status: true,
                  data: response
                };
              } catch (error) {
                console.error('ERROR PUBLISHING', error);
                return {
                  status: false,
                  error
                };
              }
            };
            publish = this.save;
            sync = () => {
              const provider = this.#getProperty('localProvider');
              if (!provider.registry.values.offline) {
                console.warn('registry already synced');
                return;
              }
              this.#publish(provider.registry.values);
              //const data = this.#getProperty("localProvider").store.where("offline").equals(true).toArray();
            };
          }

          exports.ItemSaveManager = ItemSaveManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./providers/collection
      **************************************/

      ims.set('./providers/collection', {
        hash: 1203865910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionProvider = void 0;
          /*bundle*/
          class CollectionProvider {
            list(specs) {}
            publish(props) {}
            load(specs) {}
          }
          exports.CollectionProvider = CollectionProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./providers/item
      ********************************/

      ims.set('./providers/item', {
        hash: 632847434,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProvider = void 0;
          /*bundle*/
          class ItemProvider {
            delete(id) {}
            publish(props) {}
            load(specs) {}
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /**********************************
      INTERNAL MODULE: ./registry/factory
      **********************************/

      ims.set('./registry/factory', {
        hash: 73028418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _index = require("./index");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          /**
           *
           */
          class RegistryFactory extends _model.ReactiveModel {
            #stores = new Map();
            #database;
            #batches = 200;
            #dbName;
            constructor(dbName) {
              super();
              this.#dbName = dbName;
              this.init();
            }
            #promiseReady;
            async init() {
              if (this.ready) return true;
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              this.#database = await _database.DBManager.get(this.#dbName);
              this.#promiseReady.resolve();
              this.#promiseReady = undefined;
              this.ready = true;
            }
            async load(storeName, id = undefined) {
              const store = this.#database.db[storeName];
              if (!store) throw new Error(`Store ${storeName} does not exists`);
              // if the store map does not exists, create it
              if (!this.#stores.has(storeName)) this.#stores.set(storeName, new Map());
              // if the registry exists, return it
              if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
                const registry = this.#stores.get(storeName).get(id);
                return registry.get();
              }
              const registry = new _index.Registry(store, {
                id
              });
              await registry.get();
              this.#stores.get(storeName).set(registry.instanceId, registry);
              return registry;
            }
            /**
             * Loop a list of items and if they don't exist in memorey, create the registry and add it to the store.
             * @param storeName
             * @param items
             */
            registerList(storeName, items) {
              const registries = items.map(item => {
                if (this.hasItem(storeName, item.id)) {
                  return this.getItem(storeName, item.id);
                }
                return this.create(storeName, item);
              });
            }
            /**
             * Saves a collection of items to the specified store in batches.
             *
             * @param {Array} items - The items to be saved.
             * @param {string} storeName - The name of the store where items will be saved.
             * @returns {Promise<{ status: boolean, failed?: Array }>} An object containing the status of the operation.
             * If the status is true, all batches have been saved successfully. If the status is false, the failed property contains an array with information about failed batches.
             * Each failed batch object has a status, a reason (if the batch is rejected), an index (the original batch position), and data (the failed batch data).
             * @throws Will throw an error if there's an issue with the Promise.allSettled() call itself.
             */
            async saveAll(items, storeName) {
              const elements = items.map(item => {
                const registry = new _index.Registry(storeName);
                if (item.deleted) {
                  registry.isDeleted = true;
                }
                registry.setValues(item);
                return registry;
              });
              const store = this.#database.db[storeName];
              const promises = [];
              const chunks = [];
              while (elements.length > 0) {
                const batch = elements.splice(0, this.#batches);
                const data = batch.map(item => item.getValues());
                chunks.push(data);
                promises.push(store.bulkPut(data));
              }
              try {
                const results = await Promise.allSettled(promises);
                const mappedFn = (result, index) => ({
                  ...result,
                  index,
                  data: chunks[index]
                });
                const failed = results.map(mappedFn).filter(result => result.status === 'rejected');
                if (!failed.length) return {
                  status: true
                };else {
                  return {
                    status: false,
                    failed
                  };
                }
              } catch (e) {
                return {
                  status: false,
                  failed: e
                };
              }
            }
            /**
             * Validates if the specified item exists in the specified store.
             *
             *  This method is used by the LocalProvider to know if a item was already loaded or not.
             *  If the item is not loaded, the LocalProvider will load it from the database and pass the data to the Factory
             *  to create the registry in memory
             * @param storeName store name
             * @param id Id of the item to validate if exists or is loaded
             * @returns
             */
            hasItem(storeName, id) {
              return this.#stores.has(storeName) && this.#stores.get(storeName).has(id);
            }
            getItem(storeName, id) {
              if (!this.hasItem(storeName, id)) throw new Error(`Item ${id} does not exists in store ${storeName}`);
              return this.#stores.get(storeName).get(id);
            }
            #getStore(store) {
              if (!this.#stores.has(store)) this.#stores.set(store, new Map());
              return this.#stores.get(store);
            }
            create(storeName, data) {
              const registry = new _index.Registry(storeName, data);
              registry.setValues(data);
              this.#getStore(storeName).set(registry.values.id, registry);
              return registry;
            }
            static #dbs = new Map();
            /**
             * Returns a RegistryFactory instance for the specified database name.
             *
             * @param dbName IndexedDB database name
             * @returns
             */
            static get(dbName) {
              if (this.#dbs.has(dbName)) return this.#dbs.get(dbName);
              const db = new RegistryFactory(dbName);
              this.#dbs.set(dbName, db);
              return db;
            }
          }
          exports.RegistryFactory = RegistryFactory;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/index
      ********************************/

      ims.set('./registry/index', {
        hash: 1020168055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          class Registry extends _model.ReactiveModel {
            #values = {};
            get values() {
              return this.#values;
            }
            #id;
            #store;
            #instanceId;
            #isDeleted;
            get isDeleted() {
              return this.#isDeleted;
            }
            set isDeleted(value) {
              if (value === this.#isDeleted) return;
              this.#isDeleted = value;
              this.triggerEvent();
            }
            constructor(store, data = {
              id: undefined
            }) {
              super();
              const {
                id
              } = data;
              this.#store = store;
              this.#id = id;
              this.#instanceId = id ?? (0, _uuid.v4)();
              if (!id) this.#id = this.#instanceId;
              if (this.#id) this.#values.id = this.#id;
            }
            setValues = data => {
              const props = Object.keys(data);
              let updated = false;
              if (!data.id) {
                data.id = this.#id;
              }
              const newValues = {
                ...this.#values
              };
              props.forEach(property => {
                if (data[property] === newValues[property]) return;
                newValues[property] = data[property];
                updated = true;
              });
              newValues.isDeleleted = this.isDeleted === 1 ?? 0;
              this.#values = newValues;
              this.triggerEvent();
              return updated;
            };
            getValues() {
              const values = {
                ...this.#values
              };
              if (this.#instanceId) values.instanceId = this.#instanceId;
              //		if (this.offline) values.offline = this.offline; // this line may be removed, the offline value must be set by the localProvider
              return values;
            }
          }
          exports.Registry = Registry;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/store
      ********************************/

      ims.set('./registry/store', {
        hash: 51750468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreRecords = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreRecords extends _model.ReactiveModel {}
          exports.StoreRecords = StoreRecords;
          const storeFactory = new StoreRecords();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection/index",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./collection/local-provider",
        "from": "CollectionLocalProvider",
        "name": "CollectionLocalProvider"
      }, {
        "im": "./interfaces/provider",
        "from": "IProvider",
        "name": "IProvider"
      }, {
        "im": "./item/index",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./item/local-provider",
        "from": "LocalProvider",
        "name": "LocalProvider"
      }, {
        "im": "./providers/collection",
        "from": "CollectionProvider",
        "name": "CollectionProvider"
      }, {
        "im": "./providers/item",
        "from": "ItemProvider",
        "name": "ItemProvider"
      }, {
        "im": "./registry/factory",
        "from": "RegistryFactory",
        "name": "RegistryFactory"
      }, {
        "im": "./registry/store",
        "from": "StoreRecords",
        "name": "StoreRecords"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./collection/index').Collection : value);
        (require || prop === 'CollectionLocalProvider') && _export("CollectionLocalProvider", CollectionLocalProvider = require ? require('./collection/local-provider').CollectionLocalProvider : value);
        (require || prop === 'IProvider') && _export("IProvider", IProvider = require ? require('./interfaces/provider').IProvider : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./item/index').Item : value);
        (require || prop === 'LocalProvider') && _export("LocalProvider", LocalProvider = require ? require('./item/local-provider').LocalProvider : value);
        (require || prop === 'CollectionProvider') && _export("CollectionProvider", CollectionProvider = require ? require('./providers/collection').CollectionProvider : value);
        (require || prop === 'ItemProvider') && _export("ItemProvider", ItemProvider = require ? require('./providers/item').ItemProvider : value);
        (require || prop === 'RegistryFactory') && _export("RegistryFactory", RegistryFactory = require ? require('./registry/factory').RegistryFactory : value);
        (require || prop === 'StoreRecords') && _export("StoreRecords", StoreRecords = require ? require('./registry/store').StoreRecords : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJMkosT0FBTyxHQUFHLEtBQUs7Y0FFbkIsSUFBSSxDQUFDM0osSUFBSSxDQUFDc0IsRUFBRSxFQUFFO2dCQUNidEIsSUFBSSxDQUFDc0IsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHOztjQUduQixNQUFNc0osU0FBUyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDO2NBQU8sQ0FBRTtjQUNyQ2IsS0FBSyxDQUFDekcsT0FBTyxDQUFDdEYsUUFBUSxJQUFHO2dCQUN4QixJQUFJZ0MsSUFBSSxDQUFDaEMsUUFBUSxDQUFDLEtBQUs0TSxTQUFTLENBQUM1TSxRQUFRLENBQUMsRUFBRTtnQkFDNUM0TSxTQUFTLENBQUM1TSxRQUFRLENBQUMsR0FBR2dDLElBQUksQ0FBQ2hDLFFBQVEsQ0FBQztnQkFDcEMyTCxPQUFPLEdBQUcsSUFBSTtjQUNmLENBQUMsQ0FBQztjQUVGaUIsU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDaEksU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDO2NBRWpELElBQUksQ0FBQyxPQUFPLEdBQUcrSCxTQUFTO2NBQ3hCLElBQUksQ0FBQzNOLFlBQVksRUFBRTtjQUVuQixPQUFPME0sT0FBTztZQUNmLENBQUM7WUFFRDlCLFNBQVM7Y0FDUixNQUFNaEosTUFBTSxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDO2NBQU8sQ0FBRTtjQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUVBLE1BQU0sQ0FBQzhGLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVztjQUMxRDtjQUNBLE9BQU85RixNQUFNO1lBQ2Q7O1VBQ0FTOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFRDtVQUdNLE1BQW1Cd0wsWUFBYSxTQUFRck8sb0JBQTRCO1VBQUc2QztVQUU3RSxNQUFNeUwsWUFBWSxHQUFHLElBQUlELFlBQVksRUFBRSIsIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJSZWFjdGl2ZU1vZGVsIiwibG9jYWxkYiIsIml0ZW1zIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJkYiIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJnZXQiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIm9uIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsImZpbHRlciIsInBhcmVudCIsInJlbW90ZURhdGEiLCJwYXJlbnRCcmlkZ2UiLCJsb2FkIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwiZGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJzdGFydCIsImxpbWl0IiwibG9jYWxJdGVtcyIsInN0YXR1cyIsImxpc3QiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImxvYWRlZCIsImV4YyIsIm1lc3NhZ2UiLCJlbnRyaWVzIiwiZGVsZXRlZEVudHJpZXMiLCJzYXZlIiwibWFwIiwicmVjb3JkIiwiaXRlbSIsImlkIiwicmVnaXN0ZXJMaXN0IiwicmVtb3RlTG9hZCIsInJlc3BvbnNlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsImFjdGl2ZSIsIk1hcCIsIlNldCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsImRhdGFiYXNlIiwiREJNYW5hZ2VyIiwicmVhZHkiLCJvcmRlckJ5Iiwid2hlcmUiLCJvZmZzZXQiLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiY29udHJvbHMiLCJmb3JFYWNoIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwic2FtZVF1ZXJ5IiwiY3VycmVudE1hcCIsImFkZCIsInJlbW92ZWQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwib2ZmbGluZSIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJpbnN0YW5jZUlkIiwic2F2ZUFsbCIsImNvbnRyb2wiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiYnVsa1B1dCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiaXRlbXNUb1VwZGF0ZSIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJpbmRleCIsInJldHJpZXMiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsImNodW5rcyIsInB1c2giLCJzbGljZSIsImVxdWFscyIsImZhaWxlZENodW5rcyIsInN1Y2Nlc3NDaHVua3MiLCJyZXN1bHQiLCJmYWlsZWQiLCJJdGVtIiwidW5pcXVlIiwiaXNVbnB1Ymxpc2hlZCIsInNrZWxldG9uIiwiX19nZXQiLCJsYW5kZWQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFZhbHVlcyIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvdW5kIiwic2FtZSIsImtleSIsIm9yaWdpbmFsIiwicmVnaXN0cnkiLCJsb2FkTWV0aG9kIiwiYmluZCIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsInRvQ29tcGFyZSIsInNvbWUiLCJwcm9wIiwiaGFzSXRlbSIsImdldFJlZ2lzdHJ5IiwiY3JlYXRlIiwicHJvbWlzZSIsInRoZW4iLCJiYWNrZW5kIiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsImR1cGxpY2F0ZUZpZWxkcyIsIlByb21pc2UiLCJhbGwiLCJ1cGRhdGVkIiwic2V0VmFsdWVzIiwicHV0IiwiQ29sbGVjdGlvblByb3ZpZGVyIiwicHJvcHMiLCJJdGVtUHJvdmlkZXIiLCJkYk5hbWUiLCJSZWdpc3RyeSIsInJlZ2lzdHJpZXMiLCJlbGVtZW50cyIsImRlbGV0ZWQiLCJwcm9taXNlcyIsImJhdGNoIiwic3BsaWNlIiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2xsZWN0aW9uL2luZGV4LnRzIiwiY29sbGVjdGlvbi9sb2FkLnRzIiwiY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsImNvbGxlY3Rpb24vcHVibGlzaC50cyIsImludGVyZmFjZXMvcHJvdmlkZXIudHMiLCJpdGVtL2luZGV4LnRzIiwiaXRlbS9pbnRlcmZhY2VzL2NvbmZpZy50cyIsIml0ZW0vaW50ZXJmYWNlcy9pdGVtLnRzIiwiaXRlbS9sb2FkLnRzIiwiaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIml0ZW0vc2F2ZS50cyIsInByb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwicHJvdmlkZXJzL2l0ZW0udHMiLCJyZWdpc3RyeS9mYWN0b3J5LnRzIiwicmVnaXN0cnkvaW5kZXgudHMiLCJyZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==