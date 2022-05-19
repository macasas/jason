import { UserVerificationStatus } from '@jovotech/platform-googleassistant';

var Ajv = require('ajv');
import {Model} from "model-json-js"; // using mjj schema checker

import models from './models/models';
import schemas from './models/schemas';


import { Belief, Agent, Plan, environment } from 'mac-bdi';

const initBDI = async (user, modelName) => {

    const messages = [];

    const model = models[modelName];
    const schema = schemas[modelName];

    // using ajv schema checker
    var ajv = Ajv({allErrors: true});
    var validate = ajv.compile(schema);
    var valid = validate(model);
    if (!valid) console.log(validate.errors);

    // using mjj schema checker
        // const model = await new Model(models[modelName], schemas[modelName])
        // let isValid = Model.validate(model)
        // isValid = Model.validate(model.test, Model.schema(model).test)
        // const json = JSON.stringify(model)


    return messages.concat(" ");
}

module.exports = initBDI;