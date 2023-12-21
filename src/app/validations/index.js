const yup = require('yup');

const customerSchema = yup.object({
    ho: yup.string().required(),
    ten: yup.string().required(),
    gioiTinh: yup.string().required(),
    phone: yup.string().required().matches(/^[0-9]+$/),
    email: yup.string().email("phải là email hợp lệ").required("vui lòng nhập email"),
    address: yup.string().required(),
});

const bookingSchema = yup.object({
    notes: yup.string(),
    date: yup.date().required(),
    time: yup.string().required(),
});

module.exports = {
    customerSchema,
    bookingSchema
}