from flask import Flask, render_template
from flaskext.wtf import Form, TextField, Required


app = Flask(__name__)

@app.route('/')
def conkystador():
	return render_template('conkystador.html', name='wtf is that name')
	 
    



@app.route('/42')
def about():
    return render_template('42.html')

if __name__ == '__main__':
    
    app.run(debug=True)
