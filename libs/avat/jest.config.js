module.exports = {
  name: 'avat',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/avat',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
