import express from "express";
import bodyParser from "body-parser";
import * as tf from "@tensorflow/tfjs";
import * as tfn from "@tensorflow/tfjs-node";
import { Base64 } from "js-base64";
import * as mobilenet from "@tensorflow-models/mobilenet"; // pre-trained model dari tensorflow js

const router = express.Router();

router.use(bodyParser.json());

router.route("/").post((req, res) => {
  const images = req.body.payload.image.base64img;
  makePredict(res, images);
});

//contoh penggunaan pada libray pre trained model

const makePredict = async (res, images) => {
  try {
    const modelLoad = await mobilenet.load();
    const imageToUintArray = Base64.toUint8Array(images);
    const decodeImage = tfn.node.decodeImage(imageToUintArray);
    const predict = await modelLoad.classify(decodeImage);
    const mappingPrediction = Array.from(predict).map((p) => {
      res.json({ result: p });
    });
  } catch (error) {
    console.log(error);
  }
};

/*  contoh penggunaan pada costum model jika ingin kostumisasi model sendiri*/

// async function makePredict(res, images) {
//   try {
//     // const modelPath = tfnode.io.fileSystem("assets/model/model.json");
//     const modelLoad = await tf.loadLayersModel(
//       "file://assets/model/model.json" // contoh load costum model
//     );
//     console.log("model loaded");
//     //   const EncodedToArray = Base64.toUint8Array(images);
//     //   const decodedImage = tfnode.node.decodeImage(EncodedToArray, 3);
//     //   const ImageReshape = decodedImage
//     //     .resizeBilinear([224, 224])
//     //     .toFloat()
//     //     .div(tf.scalar(255.0))
//     //     .expandDims();
//     //   const prediction = await modelLoad
//     //     .predict(tf.reshape(ImageReshape, [1, 224, 224, 3])) //resize dimensi gambar
//     //     .data();
//     //   const mappingPrediction = Array.from(prediction).map((p, i) => {
//     //     res.json({ prob: p, Classname: Label_Data[i] });
//     //   });
//   } catch (error) {
//     console.log(error);
//   }
// }

export default router;
