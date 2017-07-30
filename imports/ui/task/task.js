import { Template } from 'meteor/templating'
import { Tareas } from '../../api/tareas'

import './task.html'

Template.task.events({
  'mouseenter .none' () {
    console.log("Mouse enter")

    Tareas.update(this._id, {
      $set: {
        showoption: true
      }
    })
  },
  'click .uk-checkbox' () {
    console.log("Check ", this._id)
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