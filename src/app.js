import { App } from '@jovotech/framework';
import { GoogleAssistantPlatform } from '@jovotech/platform-googleassistant';

// import { GoogleSheetsCms, TranslationsSheet } from '@jovotech/cms-googlesheets';

import ServiceAccount from './creds/serviceAccount';
// import ServiceAccount from './creds/serviceAccount.json';

import { CorePlatform } from '@jovotech/platform-core';
import { NlpjsNlu } from '@jovotech/nlu-nlpjs';
import { LangEn } from '@nlpjs/lang-en';

import { EchoComponent } from './components/EchoComponent';
import { GlobalComponent } from './components/GlobalComponent';


const nlpjs = new NlpjsNlu({
    input: {
      supportedTypes: ['INTENT', 'TEXT', 'TRANSCRIBED_SPEECH', 'SPEECH'],
    },
    languageMap: { 
      en: LangEn,
    },
    preTrainedModelFilePath: './model.nlp',
    useModel: false,
    modelsPath: './models',
});

const app = new App({

  components: [EchoComponent, GlobalComponent],

  plugins: [
    // Add Jovo plugins here
    new GoogleAssistantPlatform({ plugins: [nlpjs] }),
    new CorePlatform({ plugins: [nlpjs] }),
    // new GoogleSheetsCms({
    //   caching: false,
    //   serviceAccount: ServiceAccount,
    //   spreadsheetId: '1Oe_ZQ',
    //   sheets: {
    //     translations: new TranslationsSheet(),
    //   },
    // }),
  ],

  logging: false,

  routing: {
    // intentMap: {
    //   'actions.intent.MAIN': 'handleAny',
    //   'handleAny': 'handleAny',
    //   'matchAny': 'handleAny',
    //   'actions.intent.NO_MATCH_1': 'noMatch1',
    //   'actions.intent.NO_MATCH_2': 'noMatch2',
    //   'actions.intent.NO_MATCH_3': 'noMatch3',
    //   'actions.intent.NO_INPUT_1': 'noInput1',
    //   'actions.intent.NO_INPUT_2': 'noInput2',
    //   'actions.intent.NO_INPUT_3': 'noInput3',
    //   'actions.intent.CANCEL': 'cancel',

    //   // ...
    // },
    // ...
  },
});


// below, various attempts to call nlpjs directly as $input not containing nluData

// app.hook('after.interpretation.end', async (jovo) => {
//   let utterance = jovo.$input.text;

  // // all references are good entering this next line
  // const nluProcessResult = await jovo.$plugins.CorePlatform.plugins.NlpjsNlu.processText(jovo, utterance);
  // // fails with Cannot read properties of undefined (reading 'toJSON')
  // if (nluProcessResult) {
  //     jovo.$input.nlu = nluProcessResult;
  //     jovo.$entities = nluProcessResult.entities || {};
  // }
// });


  // NlpjsNlu has not ben added to GoogleAssistantPlatform, despite being added as a plugin in app.js
  // let nlu = jovo.$plugins.GoogleAssistantPlatform.plugins.NlpjsNlu.processText(jovo, utterance)

  // always defaults to 'en' because jovo.$request.getLocale is not a property in Google request
  // fails with Cannot read properties of undefined (reading 'toJSON')
  // let nlu = jovo.$plugins.CorePlatform.plugins.NlpjsNlu.processText(jovo, utterance)

  // jovo.$plugins.JovoDebugger.config.nlu.nlpjs.process(jovo, utterance)
  //   .then((nluData) => {
  //     console.log(nluData);
  //   })


module.exports = {
  app,
};
