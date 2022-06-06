import multer from 'multer';
import {
    dirname
} from 'path';
import path from 'path';
import {
    fileURLToPath
} from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + files.originalname);
    }
})

const uploader = multer({
    storage: storage
})

export default uploader;