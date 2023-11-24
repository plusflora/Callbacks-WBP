
## Step 1:
```javascript
const UserDatabase = {
  users: [],

  addUser: function(name, id, phone) {
    this.users.push({ name, id , phone, hasCoupon: false, isEnrolledInRewards: false});
  },

  loadFromFile: function() {
    const usersFromFile = require("../../util/userDatabase/usersdb.json");
    this.users = usersFromFile;
  },
}
```


## Step 2:
```javascript
const determineCouponRecipients = (users, isEligibleForCoupon) => {
  const eligibleUsers = []
  users.forEach(user => {
    if(isEligibleForCoupon(user)){
      eligibleUsers.push(user)
    }
  })
  return eligibleUsers
}
```

Alternative syntax leveraging implicit return and point-free style composition
```javascript
const determineCouponRecipients = (users, isEligibleForCoupon) => users.filter(isEligibleForCoupon)
```


## Step 3:
```javascript
const sendAllCoupons = (users, canSendCoupon, sendCoupon, updateUserCouponSent) => {
  users.forEach(user => {
    if (canSendCoupon(user)) {
      sendCoupon(user)
      updateUserCouponSent(user)
    }
  })
}
```