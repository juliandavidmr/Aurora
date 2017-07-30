import { Template } from 'meteor/templating'
import { Documentos } from '../../api/documentos'
import fs from 'fs'

import './document'
import './documents.html'


Template.documents.helpers({
  ldocuments() {
    return Documentos.find({}, {
      sort: {
        createdAt: -1
      }
    }).map(item => {
      item.createdAt = moment(item.createdAt).fromNow();
      return item
    });
  }
})

Template.documents.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.documents.helpers({
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});

Template.documents.events({
  'change #fileInput'(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload = Documentos.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
});