import multer from "multer";
import path from "path";

// Define la configuración de almacenamiento de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/"); // Ruta donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    // Utiliza el nombre original del archivo
    cb(null, file.originalname);
  },
});

// Configura Multer con la configuración de almacenamiento
const upload = multer({ storage: storage });

export default upload;