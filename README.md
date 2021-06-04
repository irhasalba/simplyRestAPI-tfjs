## Simple Rest API with Nodejs Express include Tensorflow js

## HAL YG PERLU DIPASTIKAN SEBELUMNYA

- sudah terinstall node versi terbaru (reskonmendasi saya yg versi 14 LTS) \*karena saya coba yg versi 16 not supprted dengan tensorflow js

### step 1

clone repo kedalam project menggunakan command "git clone"

### step 2

jalankan "npm install"

### step 3

running dengan cara "npm start"

### step 4

untuk uji coba apps gunakan endpoint /predict dengan request POST type json dengan struktur berikut :

### Request

{
"payload": {
"image": {
"base64img": "encoded image disini"
}
}
}

### Response

{
"result": {
"className": "syringe",
"probability": 0.308394193649292
}
}

## note

untuk update mendatang saya akan buat note untuk deploy di cloud terutama GCP yup jadi tunggu saja

## Resource

tensorflow js : <a href = "https://www.tensorflow.org/js/tutorials/setup">TensorFlow Js </a>
MobileNet Model : <a href = "https://github.com/tensorflow/tfjs-models"> MobileNet Models</a>
Express Js : <a href = "https://expressjs.com/en/starter/installing.html"> Express Js</a>
