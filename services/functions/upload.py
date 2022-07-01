import logging
from os import environ
import uuid
import boto3
from datetime import datetime

def main(event, context):
  db_resource = boto3.resource('dynamodb')
  user_id = str(uuid.uuid4())
  file_id = str(uuid.uuid4())
  date_time = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
  logging_level = 'info'
  item = {
    'user_id' : user_id,
    'file_id' : file_id,
    'file_name' : 'test.txt',
    'file_size' : 0,
    'date_time' : date_time,
    'type' : 'txt'
  }

  try:
    db_resource.Table(environ['table_name']).put_item(
      Item = item
    )
    return item
  except Exception as e:
    return {
      'error' : '{}'.format(e)
    }