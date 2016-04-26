import _ from "lodash";
import { Meteor } from "meteor/meteor";

export function flattenAndCall(values) {
  let flattened = _.flatten(values);
  return Meteor.call("example-method", flattened);
};
