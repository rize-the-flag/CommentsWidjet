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

  removeRecord( index ) {
    this._storage.splice( index, 1 );
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
