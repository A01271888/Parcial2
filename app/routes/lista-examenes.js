import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // return [
    //   {
    //       id: 1,
    //       nombre: "Desarrollo WEB",
    //       fecha: "10-12-2011"
    //   },
    //   {
    //     id: 2,
    //     nombre: "Desarrollo WEB",
    //     fecha: "10-12-2011"
    //   }
    // ]

    return this.store.findAll('test');
  }
});
