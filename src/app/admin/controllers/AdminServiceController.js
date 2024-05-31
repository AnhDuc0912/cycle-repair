const cheerio = require('cheerio');
const axios = require('axios')

class AdminServiceController {
    async index(req, res) {
        return res.render('admin/pages/service/service', {
            layout: 'admin-layout'
        });
    }

    async scrape(req, res, next) {
        console.log("vào");
        const url = req.body.url;

        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            console.log($);

            let data = {};
            $('h1').each((index, element) => {
                const title = $(element).text();
                const parentElement = $(element).parent();

                let content = [];
                parentElement.find('p').each((idx, pElement) => {
                    content.push($(pElement).text());
                });
                data = {
                    title,
                    content
                }
            });

            res.json({
                data
            });
        } catch (error) {
            next(error);
        }
    };

    async create(req, res, next) {
        return res.render('admin/pages/service/add-service', {
            layout: 'admin-layout'
        });
    }
}


module.exports = new AdminServiceController();