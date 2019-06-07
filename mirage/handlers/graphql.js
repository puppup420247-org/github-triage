import createGraphQLHandler from 'ember-cli-mirage-graphql/handler';
import schema from 'github-triage/schema/schema';

export default createGraphQLHandler(schema);
