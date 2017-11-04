import Component from '@ember/component';

export default Component.extend({
  actions:{
    quitar(){
      this.get('question.options').then((array)=>{
        array.invoke('destroyRecord');
      });
       this.get('question').destroyRecord();
     }
  },
  correctOption: Ember.computed.filter('question.options', function(item){
    return item.get('correcta');
  })
});
