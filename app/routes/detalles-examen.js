import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    let id = params.id;
    let test = {
      id: null,
      id:null
    };

    if(id == 1){
        test = {
          id: 1,
          nombre: "Desarrollo WEB",
          fecha: "10-12-2011",
          questions: [
            {
              id: 1,
              nombre: "Que es ember?",
              options: [
                {
                  nombre: "option1",
                  correcta: false
                },
                {
                  nombre: "option2",
                  correcta: false
                },
                {
                  nombre: "option3",
                  correcta: false
                },
                {
                  nombre: "option4",
                  correcta: true
                }
              ]
            },
            {
              id: 2,
              nombre: "Que es node?"
            }
          ]

        };
    }else{

        test = {
          id: 2,
          nombre: "Desarrollo WEB",
          fecha: "10-12-2011"
        }
    }
    return test;

    // return this.store.find('test', id);
  }
});
