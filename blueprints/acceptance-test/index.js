'use strict';

const { dasherize, capitalize } = require('ember-cli-string-utils');

module.exports = {
  description:
    'Generates an acceptance test for a feature, tailored to lyra-console',

  locals(options) {
    const friendlyTestName = capitalize(
      dasherize(options.entity.name).replace(/[-]/g, ' ')
    );

    return { friendlyTestName };
  }
};
