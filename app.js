import Converter from "api-spec-converter";
import fs from 'fs';
var Dredd = require('dredd');
var configuration = fs.readFileSync('dredd.yml');
var dredd = new Dredd(configuration);

export default function init(callback) {
    Converter.convert({
        from: "openapi_3",
        to: "swagger_2",
        source: './bin/openapi.json'
     }).then(function(converted) {
        converted.validate()
        .then((result) => {
            if (result.errors) {
                console.error(JSON.stringify(result.errors, null, 2));
            }
        
        });

        fs.writeFileSync('swagger2.json', converted.stringify());

        console.log("file written");
        callback();
    })

}