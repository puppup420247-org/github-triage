# Mirage

For the most part you can refer to [Ember CLI’s Guides] to learn how to use Mirage in tests and development. If you come across something that isn’t covered there, please add it here.

[ember cli’s guides]: https://www.ember-cli-mirage.com/

## Using Mirage in Review Apps

1. Set the `USE_MIRAGE` config var:

   ```sh
   > heroku config:set -a github-triage-tool-pr-123 USE_MIRAGE=true
   ```

2. Add an extra commit to force a new build

   > Mirage’s assets are only added to the vendor bundle if it’s enabled during compilation, and setting a configure var does not trigger a recompilation, so we need to do an extra commit (or rewrite an existing commit) for this to take effect.
