import './main.html'

import '../imports/api/tareas'
import '../imports/api/documentos'
import '../imports/ui/body'

import '../imports/helpers/string.help'
import '../imports/helpers/date.help'

/*
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.hello.onCreated(function () {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/