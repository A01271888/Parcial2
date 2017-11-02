import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),

  options: DS.hasMany('option'),
  test: DS.belongsTo('test')
});
