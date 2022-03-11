const Joi = require('joi')

const fName = Joi.string()
const lName = Joi.string()
const bPlace = Joi.string()
const bDate = Joi.date()
const gender = Joi.string()
const username = Joi.string().min(5).max(20)
const email = Joi.string()
const password = Joi.string().min(5)
const role = Joi.string()

const registerUserSchema = Joi.object({
  fName: fName.required(),
  lName: lName.required(),
  bPlace: bPlace.required(),
  bDate: bDate.required(),
  gender: gender.required(),
  email: email.required(),
  username: username.required(),
  password: password.required(),
  role: role.required()
})

const loginUserSchema = Joi.object({
  username: username.required(),
  password: password.required(),
})

module.exports = { registerUserSchema, loginUserSchema } 