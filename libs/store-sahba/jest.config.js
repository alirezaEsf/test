module.exports = {
  name: 'store-sahba',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/store-sahba',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
