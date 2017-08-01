import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Tareas = new Mongo.Collection('Tareas');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Tareas', function tasksPublication() {
    return Tareas.find();
  });
}

Meteor.methods({
  'tareas.insert'(text) {
    check(text, String)

    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Tareas.insert({
      text,
      checked: false,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    })
  },
  'tareas.remove'(taskId) {
    check(taskId, String)

    Tareas.remove(taskId)
  },
  'tareas.setChecked'(taskId, setChecked) {
    check(taskId, String)
    check(setChecked, Boolean)

    Tareas.update(taskId, {
      $set: {
        checked: setChecked
      }
    })
  }
})