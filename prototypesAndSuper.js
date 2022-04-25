let basketProto = { 
    value: 0,
    addToBasket( itemValue ){
      this.value += itemValue;
    },
    clearBasket() {
      this.value = 0;
    },
    getBasketValue() {
      return this.value;
    },
    pay() {
      console.log( this.getBasketValue() + ' has been paid' ); 
    },
    removeFromBasket(itemValue) {
      this.value - itemValue; 
    }
  };
  
  let myBasket = {
    items: [],
    addToBasket( itemName, itemPrice ) {
      this.items.push( { itemName, itemPrice } );
      super.addToBasket( itemPrice );
     },

    clearBasket() {
      this.items = [];
      super.clearBasket();
    },

    removeFromBasket(index) {
      if ( typeof index !== 'number' || index < 0 || index >= this.items.length ) return;
      this.items.pop(index);
      super.removeFromBasket(this.itemPrice);
    }
  };
  
  Object.setPrototypeOf( myBasket, basketProto );