// Updates the Algolia indices
//  (Used to keep indicies up-to-date via CI)

// Don't update on pull requests or branches
if (process.env.CONTEXT !== 'production') { return }

const Algolia = require('algoliasearch');

const client = Algolia(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex('strategies');
const strategiesJSON = require('./strategies.json');

// Set unique objectID for Algolia
for (var i = 0, len = strategiesJSON.length; i < len; i++) {
  strategiesJSON[i]['objectID'] = strategiesJSON[i]['gem']
}

index.saveObjects(strategiesJSON, function(err, content) {
  console.log('Algolia Status:', content, err);
});
