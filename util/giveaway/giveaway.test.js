const determineCouponRecipients =
  require("../../src/giveaway/giveaway").determineCouponRecipients;
const isEligibleForCoupon = require("../../src/giveaway/giveaway").isEligibleForCoupon;

let users = [];

beforeEach(() => {
  users = require("../userDatabase/usersdb.json");
});

test("giveaway should return a list of eligible users", () => {
  expect(determineCouponRecipients(users, isEligibleForCoupon)).toEqual(
    [
      {"hasCoupon": false, "id": "63d73c8e19275871d8602093", "isEnrolledInRewards": true, "name": "Victoria Rodriguez", "phone": ""}, 
      {"hasCoupon": false, "id": "63d73c8ed75d9ca2eacd0a60", "isEnrolledInRewards": true, "name": "Alexander Mullins", "phone": "+1 (994) 544-3221"}, 
      {"hasCoupon": false, "id": "63d73c8e683ab23cd90ee976", "isEnrolledInRewards": true, "name": "Key Golden", "phone": "+1 (968) 523-3272"}, 
      {"hasCoupon": false, "id": "63d73c8e2a5c5127d2bbf1f0", "isEnrolledInRewards": true, "name": "Horton Mcdonald", "phone": "+1 (993) 554-3796"}, 
      {"hasCoupon": false, "id": "63d73c8e12261c014c7cd6e5", "isEnrolledInRewards": true, "name": "Bond Slater", "phone": "+1 (995) 522-2127"}
    ]
  )
});
