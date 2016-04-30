import { expect } from 'chai';
import td from 'testdouble';

describe("example-module", function() {

  let Meteor = td.object(["call"]);
  let ExampleCollection = td.object(["insert"]);
  let flattenAndCall, exampleInsert;

  before(function() {
    td.replace("meteor/meteor", { Meteor });
    td.replace("../imports/example-collection", { ExampleCollection });

    flattenAndCall = require("../imports/hello-module").flattenAndCall;
    exampleInsert = require("../imports/hello-module").exampleInsert;
  });

  after(function() {
    td.reset();
  });

  it("calls a meteor method", function() {
    flattenAndCall([1, 2, [3, 4, [5]]]);
    td.verify(Meteor.call("example-method", [1, 2, 3, 4, 5]));
  });

  it("inserts a value", function() {
    exampleInsert(123);
    td.verify(ExampleCollection.insert({ value: 123 }));
  });

});
