from flask import Flask, abort, jsonify, request
from flask_restful import Resource, reqparse

app = Flask(__name__)

## DUMMY DATA ##
containers = [
    {
        "cid": "0do1q3ss423t"
    }
]

@app.route('/container', methods=['GET'])
def get_container():
    # finds a running container or creates one
    # and returns its ID

    ## method for testing with dummy data ##
    return jsonify({'cid': containers[0]['cid']})

app.run(debug=True)