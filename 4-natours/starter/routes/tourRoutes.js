const express = require("express");

const router = express.Router()
app.use('/api/v1/tours', router)



router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;