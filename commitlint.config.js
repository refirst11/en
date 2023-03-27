module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      // [
      //   "Submit", // refactor
      //   "Update", // sure
      //   "Change", // parameter
      //   "Adjust", // anything
      //   "BugFix", // sure
      //   "Remove", // sure
      //   "Add", // sure
      //   "Create", // new file
      //   "Delete", // trash file
      //   "Test", // sure
      //   "Revert", // sure
      //   "Style", // sure
      //   "Patch", // pre release
      // ],
    ],
  },
};
