mergeInto(LibraryManager.library, {
    /*CheckCode: function (tableName, code) {
        var params = {
            TableName: Pointer_stringify(tableName),
            Key: {
                "code": Pointer_stringify(code)
            }
        };

        var awsConfig =
        {
            region: "us-east-2",
            endpoint: "http://dynamodb.us-east-2.amazonaws.com",
            accessKeyId: "AKIAJEYCS2LUFFYLGJXQ",
            secretAccessKey: "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"
        };

        AWS.config.update(awsConfig);
        var docClient = new AWS.DynamoDB.DocumentClient();
        var returnStr = "Error";
        docClient.get(params, function (err, data) {
            if (err) {
                returnStr = "Error: " + JSON.stringify(err, undefined, 2);
                SendMessage('Main Camera', 'StringCallback',
                    returnStr);
            }
            else {
                returnStr = "Inserted: " + JSON.stringify(data, undefined,
                    2);
                SendMessage('Main Camera', 'StringCallback',
                    returnStr);
            }
        });
    },*/
    InsertData: function (tableName, code, age, race, gender, attentionData, recallData) {
        var params =
        {
            TableName: Pointer_stringify(tableName),
            Item:
            {
                "code": Pointer_stringify(code),
                "age": Pointer_stringify(age),
                "race": Pointer_stringify(race),
                "gender": Pointer_stringify(gender)
            }
        }

        var awsConfig =
        {
            region: "us-east-2",
            endpoint: "http://dynamodb.us-east-2.amazonaws.com",
            accessKeyId: "AKIAJEYCS2LUFFYLGJXQ",
            secretAccessKey: "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"
        }


        AWS.config.update(awsConfig);
        var docClient = new AWS.DynamoDB.DocumentClient();
        var returnStr = "Error";
        docClient.put(params, function (err, data) {
            if (err) {
                returnStr = "Error: " + JSON.stringify(err, undefined, 2);
                SendMessage('Main Camera', 'StringCallback',
                    returnStr);
            }
            else {
                returnStr = "Inserted: " + JSON.stringify(data, undefined,
                    2);
                SendMessage('Main Camera', 'StringCallback',
                    returnStr);
            }
        });
    }
});