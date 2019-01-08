import jsf from 'json-schema-faker';
import {
    schema
} from './mockDataSchema';
import faker from "faker"
import fs from 'fs';
import {
    red as r,
    green as g
} from 'chalk';

/* eslint-disable no-console */

const outputFile = './src/api/db.json';


jsf.extend("faker", function () {
    return faker
});

jsf.resolve(schema).then(function (result) {
    fs.writeFile(outputFile, JSON.stringify(result, null, 2), function (err) {
        if (err) {
            return (console.log(r(err)));
        } else {
            console.log(g(`Mock Data Generated Here: ${outputFile}`));
        }
    });
});