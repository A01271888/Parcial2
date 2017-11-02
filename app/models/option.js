import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  correcta: DS.attr('boolean'),

  question: DS.belongsTo('question')
});
