let data = require('./data');

module.exports = {
    get: (req, res, next) => {
        res
            .status(200)
            .send({
                books: data
            })

    },
    post: (req, res, next) => {
        console.log(req.body);
        data.push(req.body)
        res
            .status(200)
            .send(data);
    },
    put: (req, res, next) => {
        console.log(req.params)
        data[req.params.index].name = req.params.name;
        res
            .status(200)
            .send(data);
    },
    delete: (req, res, next) => {
        data.splice(req.params.index, 1)
        res.status(200).send(data);
    }
}