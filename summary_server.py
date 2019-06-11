from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def get_translate():
    return request.form['translate']

@app.route('/')
def index():
    return 'Index Page'
