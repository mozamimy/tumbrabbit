document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login').addEventListener('click', function() {
    var OAuth = require('oauth');

    var oauth = new OAuth.OAuth(
      'https://www.tumblr.com/oauth/request_token',
      'https://www.tumblr.com/oauth/access_token',
      'rfptZOqtuuMy7LpTXH7OAGJmLYkEbUCPNnrvXzzw3u3Tz2oYy9',
      'aCYHiHzRNv2wrSuaTMxuQK2gOTQhtqAQcAeFmWADBq31B9mOWD',
      '1.0A',
      'http://example.com/',
      'HMAC-SHA1'
    );

    oauth.getOAuthRequestToken(function(error, requestToken, requestSecretToken, results) {
      if (error) {
        console.log('error');
      } else {
        var tumblrUrl = 'http://www.tumblr.com/oauth/authorize?';
        var authUrl = tumblrUrl + 'oauth_token=' + requestToken;
        location.href = authUrl;
      }
    });
  });
});
