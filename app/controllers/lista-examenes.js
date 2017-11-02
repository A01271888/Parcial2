import Controller from '@ember/controller';

export default Controller.extend({
  show: false,
  actions:{
    nuevo(){
      //this.show = true;
      var test = this.store.createRecord('test', {
        nombre: "Exam",
        fecha: "02-11-2017",
        
        // questions: [
        //   {
        //     nombre: "",
        //     options: [
        //       {},{},{},{}
        //     ]
        //   },
        //   {
        //     nombre: "",
        //     options: [
        //       {},{},{},{}
        //     ]
        //   }
        // ]
      });
      test.save();
      console.log(test);
    }
  }
});
