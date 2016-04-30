import _ from "lodash";
import { ExampleCollection } from "./example-collection";
import { Meteor } from "meteor/meteor";

export function exampleInsert(value) {
  return ExampleCollection.insert({
    value
  });
};

export function flattenAndCall(values) {
  let flattened = _.flattenDeep(values);
  return Meteor.call("example-method", flattened);
};
