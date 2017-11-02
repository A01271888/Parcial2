import Component from '@ember/component';

export default Component.extend({
  actions: {
    borrar(id){
      alert("Borrando..." + id);
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
