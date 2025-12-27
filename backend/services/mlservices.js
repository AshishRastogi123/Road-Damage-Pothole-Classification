import axios from "axios";
import FormData from "form-data";

export const sendImageToML = async (imageBuffer) => {
  const formData = new FormData();
  formData.append("image", imageBuffer, {
    filename: "image.jpg",
  });

  const response = await axios.post(
    "http://localhost:5000/predict",
    formData,
    { headers: formData.getHeaders() }
  );

  return response.data;
};
