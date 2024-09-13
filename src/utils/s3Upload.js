const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadToS3(file) {
  try {
    const upload = new Upload({
      client: s3,
      params: {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now().toString()}-${file.originalname}`,
        Body: file.buffer,
        // ACL: 'public-read',
      },
    });

    const response = await upload.done();
    return response.Location || `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${response.Key}`;
  } catch (error) {
    throw new Error(`Error uploading to S3: ${error.message}`);
  }
}

module.exports = { uploadToS3 };
