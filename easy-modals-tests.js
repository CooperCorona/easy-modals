// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by easy-modals.js.
import { name as packageName } from "meteor/easy-modals";

// Write your tests here!
// Here is an example.
Tinytest.add('easy-modals - example', function (test) {
  test.equal(packageName, "easy-modals");
});
