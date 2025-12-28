import axios from "axios";

export const sendImageToML = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(
    "https://YOUR-NGROK-URL.ngrok-free.dev/predict",
    formData,
    {
      headers: {
        "ngrok-skip-browser-warning": "true"
        // ❌ Content-Type mat set karo
      }
    }
  );

  return response.data;
};
