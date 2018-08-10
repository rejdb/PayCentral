const request = require('request');
const crypto = require('crypto');

const signature = (url, body='') => {
    new_nonce = ('2' + new Date().getTime().toString() + Math.floor(Math.random(),9999)).padEnd(16,'0');
    query = new_nonce + url + body;
    hmac = crypto.createHmac("sha256", process.env.secret_key).update(query).digest("hex");
    return {
        ACCESS_KEY: process.env.coinsapi,
        ACCESS_NONCE: new_nonce,
        ACCESS_SIGNATURE: hmac
    };
}

const _get = (url) => {
    return {
        url: url,
        method: 'GET',
        headers: signature(url)
    }
}

const _send = (url, body) => {
    return {
        url: url,
        method: 'POST',
        headers: signature(url),
        form: body
    }
}

module.exports.__get = (url, callback) => {
    request(_get(url), callback);
}

module.exports.__post = (url, body, callback) => {
    request(_send(url, body), callback);
}