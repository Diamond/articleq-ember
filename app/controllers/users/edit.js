import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    saveUser: function(model) {
      model.save().then(() => {
        this.transitionToRoute('users');
      }).catch((failure) => {
        console.log(failure);
        this.set('errorMessage', failure);
      });
    }
  }
});
