import os
from flask import Flask, render_template

app = Flask(__name__, static_folder = 'some-react/build/static', template_folder = 'some-react/build')

# Serve React App
@app.route('/')
def serve():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host = '0.0.0.0')