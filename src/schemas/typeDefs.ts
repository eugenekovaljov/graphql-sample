import path from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { print } from 'graphql';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const typesArray = loadFilesSync(path.join(__dirname, './'), {
    extensions: ['graphql']
});
const typesMerged = print(mergeTypeDefs(typesArray));
export default typesMerged;
