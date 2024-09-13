const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');

// Configure AWS S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to upload a file to S3
async function uploadToS3(file) {
  try {
    const upload = new Upload({
      client: s3, // Pass the S3 client instance here
      params: {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now().toString()}-${file.originalname}`, // Generate a unique file name
        Body: file.buffer, // The file data
        ACL: 'public-read', // Optional: Set access permissions
      },
    });

    const response = await upload.done(); // Complete the upload process
    return response.Location || `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${response.Key}`; // Return the file URL
  } catch (error) {
    throw new Error(`Error uploading to S3: ${error.message}`);
  }
}

module.exports = { uploadToS3 };
