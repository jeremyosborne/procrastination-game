# me@www

Home of my web page and experiments.

Gets built and published to `jeremyosborne.github.io`.

## Configuration

* `NODE_PATH=src/apps:src` - applications will namespace due to allow for common names across different applications, root level modules are considered common.
* `BUILD_TYPE=development` - valid values {`development` | `production`}, defaults to `production`.
    * Editorial: avoid the nuanced behavior and occasional conflicts between libs caused by setting NODE_ENV and the magic of webpack env. `development` means debug(gable). `production` means optimized, and if not optimal, it is a bug. However, we do appropriate the vernacular because they map well to other libs that adopt them with the semantic meanings defined above.

## Toolchain notes

Modern JS needs a tool chain and build process. The tools included in this project should stick to their job and be runnable as a distinct process as much as possible.

* `package.json.scripts` define build tasks via env vars and executables.
* `webpack.config.js` consumes build time variables and translates them into a suitable `webpack` configuration.
* `webpack` acts as build orchestrator, linker, and packager. We use just enough of its magic to keep ourselves productive.
* `postcss` tools have the job of CSS compiler since, to this day, Douglas Crawford is right about the meaning of `C` in `CSS`. Plus it also allows us to think of and pack our components as modules and separate out global CSS applied to all pages of our application from module specific CSS that should be managed by webpack.
* `babel` has the job of JS code compiler and it's configuration should be good enough to take source code and turn it into intermediate style code that is handed off to other steps in the build process.

### Publishing

```
npm run build
# clean cruft out of jeremyosborne.github.io, then
cp dist/* ../jeremyosborne.github.io
```

## TODO

- [X] Style and organize achievement code so it's working as it should on the main website, even if not perfect.
- [X] Test out website locally, making sure the application is seeded as appropriate (the app should load async one way or another).
- [X] Make this the basis for my website.
    - [X] Add styling and assets to static, copy to dist via copy plugin in webpack.
- [X] Hide hacked up dev tools in prod build.
- [X] Toast/notifications for achievements.
- [X] Unlock Achievements Unlocked
    - [X] The blocked achievements need to be made visual.
    - Note: decided to make the blocking visual only. If someone really wants an achievement, they can get the achievement.
    * Requirement: Spend a bit of time procastinating on the site.
- [X] Achievement: WebCrawler
    * Requirement: Click/tap a social link.
- [X] Achievement: Cookie clicker
    * Requirement: click a bunch of times.
    - [X] Basic code done.
    - [X] Reward: Display a cookie on the screen where a click will open the page to "cookie clicker". Use `static/cookie-for-clicking.png`, and a link to https://orteil.dashnet.org/cookieclicker/
- [X] Achievement: Stayin' Alive
    * Requirement: Input the konami code.
- [X] change build, and repo, to publish to the `docs/` folder. `docs/` folder will become source and cannot be `.gitignore`d.
- [ ] Do first publish back to jeremyosborne.com.
- [ ] 404 page
- [ ] Save/reload state on page unload/load.
- [ ] Attribute cookie image with the following and make it visible in the app. Leave in README for now.

```html
<p style="font-size: 0.9rem;font-style: italic;">
  <img style="display: block;" src="https://farm3.staticflickr.com/2491/3721266801_3e5cc5ca6e.jpg" alt="Cookie Trials and tribulations">
  <a href="https://www.flickr.com/photos/12940611@N07/3721266801">"Cookie Trials and tribulations"</a>
  <span> by <a href="https://www.flickr.com/photos/12940611@N07">cakespy</a></span> is licensed under
  <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-ND 2.0</a>
  <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;">
    <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" />
    <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" />
    <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" />
    <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nd_icon.svg" />
  </a>
</p>
```
