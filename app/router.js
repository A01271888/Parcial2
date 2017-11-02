import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-examenes');
  this.route('detalles-examen', {path: '/detalles-examen/:id'});
});

export default Router;
