export default class LocalStorage {
  constructor( storageKey = '' ) {
    this._storage = [];
    this._storageKey = storageKey;
    this.init();
  }

  init() {
    const storageItem = localStorage.getItem( this._storageKey );
    if (!storageItem) return;
    const data = JSON.parse( storageItem );
    this._storage = Array.from( data );
  }

  getStorage() {
    return this._storage.slice();
  }

  removeRecord( key ) {
    this._storage = this._storage.filter( e => e.hash !== key );
    this.flush();
  }

  getRecordByKey( key ) {
    return this._storage.find( e => e.hash === key );
  }

  addRecord( hash, value ) {
    this._storage.push( {hash, value} );
    this.flush();
  }

  flush() {
    localStorage.setItem( this._storageKey, JSON.stringify( this._storage ) );
  }

}
