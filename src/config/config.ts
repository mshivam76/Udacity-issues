export const config = {
  // "dev": {
  //   "username": process.env.POSTGRES_USERNAME,
  //   "password": process.env.POSTGRES_USERNAME,
  //   "database": process.env.POSTGRES_USERNAME,
  //   "host": process.env.POSTGRES_HOST,
  //   "dialect": "postgres",
  //   "aws_region": process.env.AWS_REGION,
  //   "aws_profile": process.env.AWS_PROFILE,
  //   "aws_media_bucket": process.env.S3_MEDIA_BUCKET.
  // },
  // "prod": {
  //   "username": "",
  //   "password": "",
  //   "database": "udagram_prod",
  //   "host": "",
  //   "dialect": "postgres"
  // }
  "dev": {
    "username": "udagrammishradev",
    "password": "udagrammishradev",
    "database": "udagrammishradev",
    "host": "udagrammishradev.cm20shuhfzkz.ap-south-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "ap-south-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-mishra-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
