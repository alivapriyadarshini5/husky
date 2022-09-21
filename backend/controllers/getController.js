// @desc  Get goals
// @route Get /api/goals
// access Private
const getGoals = (req, res) =>
  res.status(200).json({
    message: 'Get Goals',
  })

// @desc  Post goals
// @route Post /api/goals
// access Private
const setGoals = (req, res) =>
  res.status(200).json({
    message: 'Post Goals',
  })
// @desc  Update goals
// @route Update /api/goals/:id
// access Private
const updateGoals = (req, res) =>
  res.status(200).json({
    message: 'Update Goals',
  })
// @desc  Delete goals
// @route Delete /api/goals/:id
// access Private
const deleteGoals = (req, res) =>
  res.status(200).json({
    message: 'Delete Goals',
  })
module.exports = { getGoals, setGoals, updateGoals, deleteGoals }
