const {User} = require('../db/models')

// matches GET requests to /api/users/
module.exports = require('express').Router()
	.get('/', (req, res, next) =>
		User.findAll({
			attributes: ['id', 'firstName', 'lastName', 'email']
		})
			.then(users => res.json(users))
			.catch(next))
	.post('/', (req, res, next) => {
		console.log('Adding user to db...')
		User.findOrCreate(
			{
				where: {
					firstName: req.body.basicInfoSubmit.firstName,
					lastName: req.body.basicInfoSubmit.lastName,
					email: req.body.basicInfoSubmit.email,
					phone: req.body.basicInfoSubmit.phone,
					website: req.body.basicInfoSubmit.website,
					locationId: req.body.locationId
				}
			}
		)
			.then(user => {
				console.log(`Successfully saved user`, user)
				res.status(201).json(user)
			})
			.catch(next)
	})
	.get('/:id', (req, res, next) =>
		User.findById(req.params.id)
			.then(user => res.json(user))
			.catch(next))