import multer from "multer"
import sharp from "sharp"

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb( null, file.originalname.trim().replace(" ", "_") )
})
const upload = multer({
    storage: storage
})

async function resizeImage(req, res, next){
    return sharp( req.file.path )
            .resize(500)
            .webp()
            .toFile( "uploads/"+( new Date().getTime() )+".webp" )
            .then( () => next() )
}

export { upload, resizeImage }