const {
  canSendCoupon,
  sendCoupon,
  updateUserCouponSent,
  sendAllCoupons,
} = require("../../src/sendCoupons/sendCoupons");

let users = [];

beforeEach(() => {
  users = [
    {
      id: "63d73c8ed75d9ca2eacd0a60",
      name: "Alexander Mullins",
      phone: "+1 (994) 544-3221",
      hasCoupon: false,
      isEnrolledInRewards: true,
    },
    {
      id: "63d73c8e683ab23cd90ee976",
      name: "Key Golden",
      phone: "+1 (968) 523-3272",
      hasCoupon: false,
      isEnrolledInRewards: true,
    },
    {
      id: "63d73c8e2a5c5127d2bbf1f0",
      name: "Horton Mcdonald",
      phone: "",
      hasCoupon: false,
      isEnrolledInRewards: true,
    },
  ];
});

const validPhoneNumberUsersUpdated = [
  {
    id: "63d73c8ed75d9ca2eacd0a60",
    name: "Alexander Mullins",
    phone: "+1 (994) 544-3221",
    hasCoupon: true,
    isEnrolledInRewards: true,
  },
  {
    id: "63d73c8e683ab23cd90ee976",
    name: "Key Golden",
    phone: "+1 (968) 523-3272",
    hasCoupon: true,
    isEnrolledInRewards: true,
  },
  {
    id: "63d73c8e2a5c5127d2bbf1f0",
    name: "Horton Mcdonald",
    phone: "",
    hasCoupon: false,
    isEnrolledInRewards: true,
  },
];

test("it should update all the users who have valid phone numbers", () => {
  sendAllCoupons(users, canSendCoupon, sendCoupon, updateUserCouponSent);
  expect(users).toEqual(validPhoneNumberUsersUpdated);
});
