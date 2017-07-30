import { Template } from 'meteor/templating'
import { Tareas } from '../../api/tareas'

import './task.html'

Template.task.events({
  'click .toggle-checked' () {
    Tareas.update(this._id, {
      $set: {
        checked: !this.checked
      }
    })
  },
  'click .delete' () {
    Tareas.remove(this._id)
  }
})