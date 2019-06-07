import config from 'github-triage/config/environment';
import graphQLHandler from './handlers/graphql';

export default function() {
  this.post(config.apollo.apiURL, graphQLHandler);

  this.urlPrefix = 'https://www.herokucdn.com/';
  this.passthrough();
}
