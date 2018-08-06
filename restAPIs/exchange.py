from flask import Flask, abort, jsonify, request
from flask_restful import Resource, reqparse
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

## DUMMY DATA ##
currencies = [
    {
        "name": "btc",
        "balance": "0.65448",
        "address": "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
        "seeds": "slim sugar lizard predict state cute awkward asset inform blood civil sugar"
    },
    {
        "name": "tft",
        "balance": "742",
        "address": "019314d28462f0c15bc900c47afeb456e1db234418eccf17c913260386d73a736f097130677a5b",
        "seeds": "nut blossom milk special answer best school joke tree ice enhance trend spoil fabric cereal display nurse axis champion hill enough cigar evidence rigid"
    },
    {
        "name": "eth",
        "balance": "3.14785",
        "address": "0xe99356bde974bbe08721d77712168fa070aa8da4",
        "seeds": "gravity trophy shrimp suspect sheriff avocado label trust dove tragic pitch title network myself spell task protect smooth sword diary brain blossom under bulb"
    },
    {
        "name": "xrp",
        "balance": "2541",
        "address": "rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn",
        "seeds": "avoid theory group elder tennis dentist wheat machine motion settle valid alter balcony deliver clog pipe antenna clutch route debate screen tomato obey keen"
    }
]

wallets = [
]

orders = [
    {
        "id":"0",
        "currencyBuy":"tft",
        "currencySell":"btc",
        "amountBuy":"100",
        "amountSell":"0.1"
    },
    {
        "id":"1",
        "currencyBuy":"eth",
        "currencySell":"btc",
        "amountBuy":"12",
        "amountSell":"4"
    },
    {
        "id":"2",
        "currencyBuy":"btc",
        "currencySell":"tft",
        "amountBuy":"1",
        "amountSell":"10000"
    },
    {
        "id":"3",
        "currencyBuy":"xrp",
        "currencySell":"eth",
        "amountBuy":"1000",
        "amountSell":"5"
    }
]


    ## CURRENCY ##

@app.route('/<string:cur>/balance', methods=['GET'])
def get_currency_balance(cur):
    # return a JSON with specific currency balance

    ## method for testing with dummy data ##
    for c in currencies:
        if(cur == c["name"]):
            return jsonify({'balance' : c['balance']})

@app.route('/<string:cur>/address', methods=['GET'])
def get_currency_address(cur):
    # return a JSON with specific currency address

    ## method for testing with dummy data ##
    for c in currencies:
        if(cur == c["name"]):
            return jsonify({'address' : c['address']})


    ## WALLET ##
@app.route('/<string:cur>/wallet', methods=['GET'])
def get_currency_wallet(cur):
    # return a JSON with 
    # a url to download an encrypted file
    # with the specified currency wallet seeds
    # and a randomly generated decryption password

    ## method for testing with dummy data ##
    for c in currencies:
        if(cur == c["name"]):
            return jsonify({'key':'randomlyGeneratedSuperStrongPassword', 'url':'/download/14548745642sdwe'})
    return abort(404)

@app.route('/<string:cur>/wallet', methods=['POST'])
def create_currency_wallet(cur):
    # decrypts seed file in JSON using key
    # recovers specified currency wallet from seeds

    ## method for testing with dummy data ##
    if not request.json or not 'key' in request.json or not 'file' in request.json:
        abort(400)
    for c in currencies:
        if(cur == c["name"]):
            wallet = {
                'key': request.json['key'],
                'file': request.json['file'],
            }
            wallets.append(wallet)
            return jsonify({"wallet": wallet}), 201
    return abort(404)


## ORDERS ##
@app.route('/orders', methods=['GET'])
def get_orders():
    # return JSON with array of orders
    return jsonify({'orders': orders})

@app.route('/orders', methods=['POST'])
def create_order():
    # creates order in orderbook with
    # currencyBuy (the currency that the user creating the order wants)
    # currencySell (the currency that the user creating the order has)
    # amountBuy (the amount of currencyBuy the user wants)
    # amountSell (the amount of currencySell the user is offering)

    ## method for testing with dummy data ##
    if not request.json or not 'currencyBuy' in request.json:
        abort(400)
    order = {
        'currencyBuy': request.json['currencyBuy'],
        'currencySell': request.json['currencySell'],
        'amountBuy': request.json['amountBuy'],
        'amountSell': request.json['amountSell']
    }
    orders.append(order)
    return jsonify({'order': order}), 201

@app.route('/orders/<string:order_id>', methods=['GET'])
def get_order(order_id):
    # returns a JSON of order matching order ID

    ## method for testing with dummy data ##
    for o in orders:
        if(order_id == o["id"]):
            return jsonify({'order':o})
    return abort(404)

app.run(debug=True)