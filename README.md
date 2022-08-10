# Goldman Sachs Engagement Layer

https://gspensions.co.uk

https://staging.gspensions.co.uk

## Gatsby

This is a [GatsbyJs](https://www.gatsbyjs.com) site - so it's a statically generated react site.


### Setup locally

```
yarn
```
Note - it helps to be connected to a non AJG network when running the initial `yarn` install command. And to be very patient.

### Run the site locally

```
yarn run start
```

### Run the tests locally
There's probably a better way of doing this....update this readme if you know it.

Package audit: `npx yarn run js_audit`

Cypress:

* Run the site locally, as above.
* In a new terminal, run `CYPRESS_BASE_URL=http://localhost:8000 npx cypress run`

Note the first time you run this on a mac it'll probably time out while Apple "verifies" Cypress for ages.

### Add a new document to the document library

- add the document file in `src/documents`
- rename it so it is in _kebab-lower-case_ casing
- add an entry in the array in `config/documentExtraData.js` to give the extra detail that is displayed
- reorder the entries in that array if desired
- that's it!

### Remove a document from the document library

- delete the file from `src/documents`
- remove the corresponding entry from the array in `config/documentExtraData.js`

### Add a new page

- add a new React component in `src/pages`, the name will be the URL. You probably want to use `<Layout />` to make it have the header and footer. Look at other files in `src/pages` for an example
- add it to the `navbarItems` object in `src/components/header.tsx`
- add a test in `cypress/integration/axe.spec.js` similar to the others to include it in accessibility testing



## Deploy to staging

Staging site runs from d10-staging02 as www_gspensions at https://staging.gspensions.co.uk

Build the project while on whichever branch you want to use, into the /public dir:
```
npx gatsby build
```

Sync your local /public dir with the staging server:
```
rsync -rzP public/ www_gspensions@d10-staging02:~/current/public
```
where r is recursive, to include folders. z is zip on transfer. P is show progress.


## Deploy to prod
You will need your GCP client tools already configured - https://gitlab.ahc.com/ahc-internal/wiki/-/tree/master/mac_setup#setting-up-google-sdk refer to James V or Dan S for help with this.

Prod runs from a bucket called gs://www-gspensions-co-uk/ in the ahc-static project under the builtoncore.com organisation...

### Build
*Make sure you've got the master branch checked out before doing this!*

Build the project into the /public dir:
```
npx gatsby build
```

Set the default GCP bucket project:
```
gcloud config set project ahc-static
```

### Backup prod files
If nervous - you can create a backup of the current prod files first:
```
mkdir backup_folder
gsutil cp -r gs://www-gspensions-co-uk backup_folder
```
And you can restore these files with:
```
gsutil cp -r backup_folder/ gs://www-gspensions-co-uk
```

### Actual Deploy
Use gsutil cp to copy the build into the bucket, it takes about 5 min to complete:
```
gsutil cp -r public/ gs://www-gspensions-co-uk
```

As a last resort backup - you can view and upload to the bucket though the [web interface](https://console.cloud.google.com/storage/browser/www-gspensions-co-uk;tab=objects?forceOnBucketsSortingFiltering=false&authuser=1&project=ahc-static&prefix=&forceOnObjectsSortingFiltering=false)


## To bear in mind

### Links

Internal links should use `<Link>` imported from `'gatsby'` - this prevents the whole page being reloaded from the server and is what makes the site fast

External links should use `<OutboundLink>` imported from `'gatsy-plugin-google-analytics'` - this tracks clicks for us.

Use of a standard `<a>` tag will fail the CI!


### gsutils

Doesn't seem to play nicely with OSX - ideally the deploy commands would be using `rsync` rather than `cp` but there's a bug somewhere in the python libraries ("module 'sys' has no attribute 'maxint'")...maybe try it again in 2022 and see if it's resolved.

It'll suggest adding the -m flag when using the cp command, but that doesn't seem to speed it up, and sometimes hangs at 99%.