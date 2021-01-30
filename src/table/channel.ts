/* eslint-disable @typescript-eslint/naming-convention */
import AWS from "aws-sdk";

export const params: AWS.DynamoDB.CreateTableInput = {
  TableName : "Channel",
  KeySchema: [
    { AttributeName: "channelID", KeyType: "HASH"},
    { AttributeName: "randID", KeyType: "RANGE" }
  ],
  AttributeDefinitions: [
    { AttributeName: "channelID", AttributeType: "S" },
    { AttributeName: "randID", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};
