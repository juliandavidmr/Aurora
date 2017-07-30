import { Template} from 'meteor/templating'
import { Tareas } from '../../api/tareas'

import './tasks.html'

Template.tasks.helpers({
  ltasks() {
    return Tareas.find({}, {
      sort: {
        createdAt: -1
      }
    }).map(item => {
      item.createdAt = moment(item.createdAt).fromNow();
      return item
    });
  }
})

Template.tasks.events({
  'submit .forml' (event) {
    event.preventDefault();

    const target = event.target;
    const text = target[1].value

    Tareas.insert({
      text,
      createdAt: new Date()
    })

    target.text.value = ''
  }
})