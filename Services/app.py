from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

model = tf.keras.models.load_model("model.h5")

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]
    img = Image.open(file).resize((224, 224))
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)[0][0]

    label = "Pothole" if prediction > 0.5 else "Normal Road"

    return jsonify({
        "prediction": label,
        "confidence": float(prediction)
    })

if __name__ == "__main__":
    app.run(port=5000)
