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
  }
});
