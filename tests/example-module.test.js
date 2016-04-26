import { expect } from 'chai';
import td from 'testdouble';

describe("example-module", function() {

  let Meteor = td.object(["call"]);
  let flattenAndCall;

  before(function() {
    td.replace("meteor/meteor", { Meteor });

    // `require` must follow `td.replace`.
    // Babel hoists `require` generated from `import` to the top of the file.
    flattenAndCall = require("../imports/hello-module").flattenAndCall;
  });

  after(function() {
    td.reset();
  });

  it("calls a meteor method", function() {
    flattenAndCall([1, 2, [3, 4]]);
    td.verify(Meteor.call("example-method", [1, 2, 3, 4]));
  });

});
