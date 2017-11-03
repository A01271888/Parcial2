import Ember from 'ember';


export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions: {
    guardar(){
      let test = this.get('model');
      //test.save();
      test.save().then(()=>{
        return Ember.RSVP.all(test.get('questions').invoke('save')).then((arrOpt)=>{
                for(var i = 0, len = arrOpt.length;i<len; i++){
                    return Ember.RSVP.all(arrOpt[i].get('options').invoke('save')).then(()=>{
                    })
                }
        }).then(()=>{
            alert("Guardado");
            this.sendAction('didSave');
        })
       });
    },
    agregar(){
      let question = this.get('store').createRecord('question', {
       test: this.get('model')   });
      let respuesta1 = question.get('options').createRecord({
        nombre: "option 1",
        question: question,
        correcta: false
      });
      let respuesta2 = question.get('options').createRecord({
        nombre: "option 2",
        question: question,
        correcta: false
      });
      let respuesta3 = question.get('options').createRecord({
        nombre: "option 3",
        question: question,
        correcta: true
      });
      let respuesta4 = question.get('options').createRecord({
        nombre: "option 4",
        question: question,
        correcta: false
      });
    },
    editable(){

    }
  }
});
