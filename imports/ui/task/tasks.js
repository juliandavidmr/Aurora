import {
  Template
} from 'meteor/templating'
import {
  Tareas
} from '../../api/tareas'
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './tasks.html'

Template.tasks.onCreated(function () {
  this.option = new ReactiveVar(0);
});

Template.tasks.helpers({
  option() {
    return Template.instance().option.get();
  },
  ltasks() {
    return Tareas.find({
      checked: false
    }, {
      sort: {
        createdAt: -1
      }
    }).map(item => {
      item.createdAt = moment(item.createdAt).fromNow();
      return item
    });
  },
  ltasks_pendientes() {
    return Tareas.find({
      checked: {
        $eq: true
      }
    }, {
      sort: {
        createdAt: -1
      }
    }).map(item => {
      // item.createdAt = moment(item.createdAt).fromNow();
      return item
    });
  }
})

Template.tasks.events({
  'click #pendiente' (event, instance) {
    instance.option.set(0);
  },
  'click #terminados' (event, instance) {
    instance.option.set(1);
  },
  'submit .forml' (event) {

    event.preventDefault();

    const target = event.target;
    const text = target[1].value

    Tareas.insert({
      text,
      createdAt: new Date(),
      checked: false
    })

    target[1].value = ''
  }
})