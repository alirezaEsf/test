module.exports = {
  name: 'my-ngpro',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-ngpro',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
