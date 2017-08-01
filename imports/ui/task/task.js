import { Template } from 'meteor/templating'
import { Tareas } from '../../api/tareas'

import './task.html'

Template.task.events({
  'click .uk-checkbox' () {
    console.log("Check ", this._id)
    Meteor.call('tareas.setChecked', this._id, !this.checked)    
  },
  'click .delete' () {
    Meteor.call('tareas.remove', this._id)
  }
})