import Component from '@ember/component';

export default Component.extend({
  actions: {
    borrar(){
      this.get('test').destroyRecord();
      // this.get('test')
    },
    // nuevo(){
    //   var test = this.store.createRecord('test', {
    //     nombre: "Desarrollo WEB",
    //     fecha: "10-12-2011"});
    //   test.save();
    //   console.log(test);
    // }
  }
});
