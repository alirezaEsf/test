module.exports = {
  name: 'data-kit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-kit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
