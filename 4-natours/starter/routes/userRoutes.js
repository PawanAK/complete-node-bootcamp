const express = require("express");

const router = express.Router()

app.use('/api/v1/users', router)



router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router