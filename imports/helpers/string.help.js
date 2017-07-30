import { Template } from 'meteor/templating'

Template.registerHelper('short', ( value ) => {
  if ( value ) {
    let length = value.toString().length;
    if ( length === 10 ) {
      return value
    } else {
      return value.substring(0, 10)
    }
  }
});