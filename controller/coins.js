const provider = require('../helpers/provider.helper');

module.exports.get_accounts = (req, rsp, next) => {
    provider.__get(process.env.account_url, (err, res, body) => {  
        if(err) return rsp.json({error:err});
        let json = JSON.parse(body);
        console.log(json);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            rsp.json({
                success: true, 
                account: json['crypto-accounts'][0]
            });
        }
    })
}

module.exports.get_mobile_networks = (req, rsp, next) => {
    provider.__get(process.env.mobile_network_url, (err, res, body) => {  
        if(err) return rsp.json({error: err});

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
    provider.__get(process.env.gaming_pins_url, (err, res, body) => {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.bills_payment_category, function(err, res, body) {  
        if(err) return rsp.json({error:err});
        let json = JSON.parse(body);
        if(json.errors) {
            rsp.json({success: false, message: json.errors[0]})
        }else{
            const newOutlets = [];
            const outlets = json["payout-outlet-categories"];
            outlets.forEach(outlet => {
                newOutlets.push({
                    id: outlet.id,
                    outlet: outlet,
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
    provider.__get(process.env.bills_payment_category_id + req.params.cat_id, function(err, res, body) {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.cash_out_categories, function(err, res, body) {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.cash_out_featured, function(err, res, body) {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.cash_out_outlet + req.params.cat_id, function(err, res, body) {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.cash_in_categories, function(err, res, body) {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.cash_in_featured, function(err, res, body) {  
        if(err) return rsp.json({error:err});
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
    provider.__get(process.env.cash_in_outlet + req.params.cat_id, function(err, res, body) {  
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

module.exports._check_api_route = (req, rsp, next) => {
    const url = req.query.url || null;
    const body_params = req.body || null;
    const type = req.method;
    if(type==='GET') {
        provider.__get(url, (err, res, body) => {
            if(err) return rsp.json({error:err});
            const data = JSON.parse(body);
            rsp.json(data);
        });
    }else{
        provider.__post(url, body_params, (err, res, body) =>{
            if(err) return rsp.json({error: err});
            const data = JSON.parse(body);
            rsp.json(data);
        });
    }
}