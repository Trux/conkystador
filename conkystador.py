from flask import Flask
app = Flask(__name__)

@app.route('/')
def conkystador():
    return 'Hasta la victoria siempre!'


@app.route('/about')
def about():
    return 'so long and thanks for all the fish'

if __name__ == '__main__':
    app.run()
