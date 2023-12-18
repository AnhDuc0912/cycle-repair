const Course = require('../models/Course')
const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose')


class CourseConttroller {
    //[GET] /course
    async index(req, res) {
        await Course.find({})
            .then(courses => {
                res.render('course', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(err => next(err));

    }
    //[GET] /course/:slug
    async detail(req, res, next) {
        await Course.findOne({
                slug: req.params.slug
            })
            .then(course => {
                if (!course) {
                    res.status(404).render('404');
                } else {
                    res.render('course-detail', {
                        course: mongooseToObject(course)
                    })
                }
            })
            .catch(err => next(err))
    }
    //[GET] /course/create
    create(req, res, next) {
        res.render('course-add')
    }
    //[POST] /course/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${req.body.image}.png`;
        const course = new Course(formData);

        await course.save()
            .then(() => res.redirect('/'))
            .catch(err => next(err));
    }

    async edit(req, res, next) {
        await Course.findOne({
                _id: req.params.id,
            }).then(course => {
                if (!course) {
                    res.status(404).render('404');
                } else {
                    res.render('course-edit', {
                        course: mongooseToObject(course)
                    })
                }
            })
            .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({
                _id: req.params.id
            }, req.body)
            .then(() => res.redirect('/course'))
            .catch(next);
    }

    destroy(req, res, next) {
        Course.deleteOne({
                _id: req.params.id
            })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseConttroller();