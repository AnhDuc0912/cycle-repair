module.exports = validation = (schema) => async (req, res, next) => {
    const body = req.body;
    try {
        await schema.validate(body);
        next();
    } catch (error) {
        res.locals.error = error;
        return res.status(400).json({error})
    }
}