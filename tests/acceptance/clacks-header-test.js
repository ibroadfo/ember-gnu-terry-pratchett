import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | clacks header');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal($("meta[http-equiv='X-Clacks-Overhead']").attr('content'), 'GNU Terry Pratchett');
  });
});

test('visiting /foobar', function(assert) {
  visit('/foobar');

  andThen(function() {
    assert.equal(currentURL(), '/foobar');
    assert.equal($("meta[http-equiv='X-Clacks-Overhead']").attr('content'), 'GNU Terry Pratchett');
  });
});
