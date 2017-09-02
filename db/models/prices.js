const db = require('../');

const Price = db.Model.extend({
  tableName: 'prices',
  products: function() {
    return this.belongsTo('Product');
  },
  vendors: function() {
    return this.belongsTo('Vendor');
  }
});

module.exports = db.model('Price', Price);
