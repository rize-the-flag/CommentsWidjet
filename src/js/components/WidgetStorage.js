export default class WidgetStorage {
  constructor( storageKey = '' ) {
    this.storage = [];
    this.storageKey = storageKey;
    this.init();
  }

  init() {
    const storageItem = localStorage.getItem( this.storageKey );
    if (!storageItem) return;
    const data = JSON.parse( storageItem );
    this.storage = Array.from( data );
  }

  getStorage() {
    return this.storage.slice();
  }

  removeRecord( key ) {
    const idx = this.storage.findIndex( e => e.hash === key );
    this.storage.splice( idx, 1 );
    this.flush();
  }

  getRecordByKey( key ) {
    return this.storage.find( e => {
      return e.hash === key;
    } );
  }

  addRecord( hash, value ) {
    this.storage.push( {hash, value} );
    this.flush();
  }

  *[Symbol.Iterator]() {
    for (const element of this.storage){
      yield element;
    }
  }

  flush() {
    localStorage.setItem( this.storageKey, JSON.stringify( this.storage ) );
  }

}
