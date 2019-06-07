import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance: <%= friendlyTestName %>', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    await authenticateSession({
      access_token: 'TEST-ACCESS-TOKEN'
    });
  });

  test('happy path', async function(assert) {
    await visit('/');
    assert.ok(false, 'time to write some real assertions');
  });
});
