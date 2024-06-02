const cheerio = require('cheerio');
const axios = require('axios');
const pLimit = require('p-limit');

const Blogs = require('../../models/Blogs');

class AdminBlogController {
    async index(req, res) {
        return res.render('admin/pages/blog/blog', {
            layout: 'admin-layout'
        });
    }

    async scrape(req, res, next) {
        const url = req.body.url;

        try {
            let response = await axios.get(url);
            let $ = cheerio.load(response.data);

            let blogs = [];
            const hrefs = [];

            $('a').each((index, element) => {
                let href = $(element).attr("href");
                if (href && href.startsWith("https:")) {
                    hrefs.push(href);
                }
            });

            if (hrefs.length > 0) {
                const limit = pLimit(10);
                const fetchPromises = hrefs.map(item => limit(async () => {
                    try {
                        const response = await axios.get(item);
                        const $ = cheerio.load(response.data);

                        const title = $('h1').first().text();
                        const content = $('body').html(); // Bạn có thể tùy chỉnh để lấy nội dung chính xác hơn

                        if (title && content) {
                            blogs.push({
                                title,
                                content
                            });
                        }
                    } catch (err) {
                        console.error(`Error fetching URL ${item}:`, err.message);
                    }
                }));

                await Promise.all(fetchPromises);
            }

            this.#addBlogs(req, data);

            res.json({
                blogs
            });
        } catch (error) {
            next(error);
        }
    };

    async create(req, res, next) {
        return res.render('admin/pages/blog/add-blog', {
            layout: 'admin-layout'
        });
    }

    async store(req, res, next) {
        const formData = req.body;
        const userId = req.session.user.user._id;

        formData.userId = userId;

        const blog = new Blogs(formData);

        try {
            blog.save();

            req.session.notification = {
                type: 'success',
                message: 'Thêm bài viết thành công'
            };

            return res.redirect('back');
        } catch (error) {
            next(error);
        }
    }

     async #addBlogs(req, blogs) {
        try {
            const userId = req.session.user.user._id;

            const blogsToInsert = blogs.map(blog => ({
                ...blog,
                userId: userId
            }));

            const result = await Blogs.insertMany(blogsToInsert);
            
            return result;
        } catch (error) {
            next(error);
        }
    }
}


module.exports = new AdminBlogController();