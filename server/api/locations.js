const {Location} = require('../db/models')

module.exports = require('express').Router()
    .get('/', (req, res, next) =>
        Location.findAll({
            attributes: ['city', 'state', 'country']
        })
            .then(locations => res.json(locations))
            .catch(next))
    .post('/', (req, res, next) => {
        console.log('Adding location to DB...')
        Location.findOrCreate(
            {
                where: {
                    city: req.body.city,  
                    state: req.body.state,
                    country: req.body.country
                }
            }
        )
            .then(location => {
                console.log('Location saved to DB', location)
                res.status(201).json(location)
            })
            .catch(next)
    })
	.get('/:id', (req, res, next) =>
		Location.findById(req.params.id)
			.then(location=> res.json(location))
			.catch(next))