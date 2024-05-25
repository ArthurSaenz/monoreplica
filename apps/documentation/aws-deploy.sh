aws s3 sync ./build s3://$aws_docs_s3bucket --delete

aws cloudfront create-invalidation --distribution-id $aws_docs_cf_id --paths "/*"
