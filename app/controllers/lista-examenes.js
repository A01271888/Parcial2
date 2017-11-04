import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    nuevo(){
      var test = this.store.createRecord('test', {
        nombre: "",
        fecha: "",
      });
      test.save();
      this.transitionToRoute('detalles-examen', test.id)
    }
  },
  totalExamenes: Ember.computed('model.[]',{
      get: function(){
        return `Mostrando ${this.get('model.length')} exam(s)`;
      },
      set: function(key, value){
        // cualquier tipo de acción

        return value;
      }
  })

});
