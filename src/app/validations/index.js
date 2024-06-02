const yup = require('yup');

async function isEmailUnique(email) {
    const Users = require('../models/Users');
    const existingUser = await Users.findOne({ email });
    return !existingUser;
}

yup.addMethod(yup.string, 'unique', function (message, checkFn) {
    return this.test('unique', message, function (value) {
        const { path, createError } = this;

        return checkFn(value).then(isUnique => {
            return isUnique || createError({ path, message });
        });
    });
});

const customerSchema = yup.object({
    ho: yup.string().required(),
    ten: yup.string().required(),
    gioiTinh: yup.string().required(),
    phone: yup.string().required().matches(/^[0-9]+$/),
    email: yup.string().email("phải là email hợp lệ").required("vui lòng nhập email").unique("email đã tồn tại", isEmailUnique),
    address: yup.string().required(),
});

const bookingSchema = yup.object({
    notes: yup.string(),
    date: yup.date().required(),
    time: yup.string().required(),
});

const loginShema = yup.object({
    email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: yup.string().required('Vui lòng nhập mật khẩu')
})

const blogSchema = yup.object({
    title: yup.string().required('Vui lòng nhập tiêu đề bài viết'),
    description: yup.string().required('Vui lòng nhập nội dung bài viết')
})

const registerSchema = yup.object({
    ho: yup.string().required(),
    ten: yup.string().required(),
    phone: yup.string().required().matches(/^[0-9]+$/),
    email: yup.string().email("phải là email hợp lệ").required("vui lòng nhập email").unique("email đã tồn tại", isEmailUnique),
    password: yup.string().required("vui lòng nhập password")
})

module.exports = {
    customerSchema,
    bookingSchema,
    loginShema,
    blogSchema,
    registerSchema
}