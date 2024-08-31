const cloudinary = require('cloudinary').v2;
const fs = require("fs")


// Configuration
cloudinary.config({ 
    cloud_name: 'dfmrenz0g', 
    api_key: '114729859699168', 
    api_secret: 'tJTswMlUYMOzPQmsI7Y0_Lso-LM'
});

const uploadOnCloudinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null

        // upload file on cloud
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"image"
        })

        // console.log("file uploaded on cloud",response);
        fs.unlinkSync(localFilePath)   // after successful uploded on cloud


        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath)  // if failed then remove it
        return null
    }
}


const deleteProfileOnCloudinary = async(publicId) =>{
    try {
        if(!publicId){
            return null
        }

        await cloudinary.uploader.destroy(publicId,{
            resource_type:"image"
        })
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {uploadOnCloudinary,deleteProfileOnCloudinary}