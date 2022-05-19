import { app } from './app';
import { GoogleAssistantPlatform } from '@jovotech/platform-googleassistant';
import { FileDb } from '@jovotech/db-filedb';
import { JovoDebugger } from '@jovotech/plugin-debugger';

/*
|--------------------------------------------------------------------------
| STAGE CONFIGURATION
|--------------------------------------------------------------------------
|
| This configuration gets merged into the default app config
| Learn more here: www.jovo.tech/docs/staging
|
*/
app.configure({
  plugins: [
    new FileDb({
      pathToFile: '../db/db.json',
    }),
    new JovoDebugger(),
    new GoogleAssistantPlatform(),
  ],
});

export * from './server.express';
