export aws_website_s3bucket=$(aws ssm get-parameter --name "/{{projectName}}/s3/website/bucket_name" --query 'Parameter.Value' --output text)
export aws_cloud_front_id=$(aws ssm get-parameter --name "/{{projectName}}/cloudfront/website/id" --query 'Parameter.Value' --output text)

aws s3 sync ./dist/client s3://$aws_website_s3bucket --delete --cache-control max-age=900
aws cloudfront create-invalidation --distribution-id $aws_cloud_front_id --paths "/*"
