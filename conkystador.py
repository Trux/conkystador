from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def conkystador():
	return render_template('conkystador.html')    


@app.route('/42')
def about():
    return render_template('42.html')

if __name__ == '__main__':
    
    app.run(debug=True)
