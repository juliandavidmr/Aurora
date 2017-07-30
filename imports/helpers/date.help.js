import { Template } from 'meteor/templating'

Template.registerHelper('fromnow', ( value ) => {
  return moment(value).fromNow()
});