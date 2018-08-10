module.exports.unauth = (err, req, rsp, next) => {
    return rsp.json({unauthorized: err});
}