import { FilesCollection } from 'meteor/ostrio:files';

export const Documentos = new FilesCollection({
  collectionName: 'Documentos',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('files.Documentos.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.Documentos.all', function () {
    return Documentos.find().cursor;
  });
}
// export const Documentos = new Mongo.Collection('documentos');