const {Education} = require('../db/models')

module.exports = require('express').Router()
    .get('/', (req, res, next) =>
        Education.findAll()
            .then(educations => res.json(educations))
            .catch(next))
    .post('/', (req, res, next) => {
        console.log('Adding education to DB...')
        Education.findOrCreate(
            {
                where: {
                    school: req.body.school
                }
            }
        )
            .then(education => {
                console.log('Education saved to DB', education)
                res.status(201).json(education)
            })
            .catch(next)
    })
	.get('/:id', (req, res, next) =>
		Education.findById(req.params.id)
			.then(location=> res.json(location))
			.catch(next))