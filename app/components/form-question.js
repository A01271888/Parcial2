import Component from '@ember/component';

export default Component.extend({
  actions:{
    quitar(){
       this.get('question').deleteRecord();
     }
  }
});
