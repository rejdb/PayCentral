const request = require('request');
const crypto = require('crypto');
const config = require('../config/database');

const signature = (url, body='') => {
    new_nonce = new Date().getTime();
    query = new_nonce.toString() + url + body;
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

const _send = (url, body='', method="POST") => {
    return {
        url: url,
        method: method,
        headers: signature(url),
        form: body
    }
}

module.exports.get_accounts = (req, rsp, next) => {
    request(_get(process.env.account_url), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            rsp.json({
                success: true, 
                account: json['crypto-accounts'][0]
            });
        }
    });
}

module.exports.get_mobile_networks = (req, rsp, next) => {
    request(_get(process.env.mobile_network_url), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlets"];
            outlets.forEach(outlet => {
                if(outlet.importance === 1) {
                    newOutlets.push(outlet);
                }
            });
            rsp.json({
                success: true, 
                payouts: newOutlets
            });
        }
    });
}

module.exports.get_gaming_pins = (req, rsp, next) => {
    request(_get(process.env.gaming_pins_url), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlets"];
            outlets.forEach(outlet => {
                if(outlet.importance === 1) {
                    newOutlets.push(outlet);
                }
            });
            rsp.json({
                success: true, 
                payouts: newOutlets
            });
        }
    });
}

module.exports.get_bills_category = (req, rsp, next) => {
    request(_get(process.env.bills_payment_category), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlet-categories"];
            outlets.forEach(outlet => {
                newOutlets.push({
                    id: outlet.id,
                    name: outlet.name,
                    amount_limit: outlet.amount_limit,
                    request: {
                        method: 'GET',
                        description: "Get all child outlets",
                        url: process.env.base_url + "/api/coins/bills-category/" + outlet.id
                    }
                })
            })
            rsp.json({
                success: true, 
                count: newOutlets.length,
                payouts_categories: newOutlets
            });
        }
    });
}

module.exports.get_bills_category_id = (req, rsp, next) => {    
    request(_get(process.env.bills_payment_category_id + req.params.cat_id), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlets"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

module.exports.get_cashout_category = (req, rsp, next) => {    
    request(_get(process.env.cash_out_categories), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlet-categories"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

module.exports.get_cashout_featured = (req, rsp, next) => {    
    request(_get(process.env.cash_out_featured), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlets"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

module.exports.get_cashout_outlet = (req, rsp, next) => {    
    request(_get(process.env.cash_out_outlet + req.params.cat_id), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlets"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

// Cash-In API

module.exports.get_cashin_category = (req, rsp, next) => {    
    request(_get(process.env.cash_in_categories), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payin-outlet-categories"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

module.exports.get_cashin_featured = (req, rsp, next) => {    
    request(_get(process.env.cash_in_featured), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payin-outlets"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

module.exports.get_cashin_outlet = (req, rsp, next) => {    
    request(_get(process.env.cash_in_outlet + req.params.cat_id), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payin-outlets"];
            rsp.json({
                success: true, 
                count: outlets.length,
                payouts: outlets
            });
        }
    });
}

module.exports.get_auth = (url, cb) => {
    request(_get(url), function(err, res, body) {  
        if(err) { throw err; }
        let json = JSON.parse(body);
        cb(json);
    });
}