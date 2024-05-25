---
to: <%= pathname %>/serverless.yml
---
service: <%= name %>
frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs14.x
  memorySize: 512
  timeout: 10
  logRetentionInDays: 90

functions:
  main:
    handler: src/handler.main

plugins:
  - serverless-esbuild
  - serverless-offline