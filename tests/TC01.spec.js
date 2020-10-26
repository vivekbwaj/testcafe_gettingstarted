fixture `fixture LOGIN`
    .page('https://cotdweb.devcat.ch/')
    .beforeEach(async t => {
      await t.click('svg[data-testid="icon-user"]');
  });

test('01. Enter credentials and submit', async t => {
  await t
        .typeText('input[name="login[email]"]','vivek.bhardwaj+test061020@catch.com.au')
        .typeText('input[name="login[password]"]','Password01')
        .click('button[id="button-login"]')
        .takeElementScreenshot('#__next');
});