import './task/task'
import './task/tasks'
import './document/documents'
import './repository/repository'
import './body.html'

import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var';

Template.layout.onCreated(function () {
  this.menu_option = new ReactiveVar(0);
});

Template.layout.helpers({
  menu_option() {
    return Template.instance().menu_option.get();
  }
});

Template.layout.events({
  'click nav ul li a'(event, instance) {
    console.log("Click menu", event)

    const selected = (event.target.innerText || '').toLowerCase()
    switch (selected) {
      case 'inicio':
        instance.menu_option.set(0)
        break;
      case 'repositorios':
        instance.menu_option.set(1)
        break;
      default:
        // instance.menu_option.set(0)
        break;
    }
  }
})