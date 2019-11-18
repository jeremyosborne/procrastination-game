# Procrastination game

Silly, unlockable content for my webpage, a reward for those who loiter.

## Environment configuration

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

## Requirements

* Internals
    * App state -> persisted state manager.
    * Website timer.
    * Event log for when things happened.
    * Achievements as state machine.
        * Input: Heartbeat / timer
        * Input: keypresses
        * Input: clicks / taps
* Views
    * Views will be overlaid onto a website as a floating layer.
        * Action buttons will be configurable.
    * Button + Drawer: Initially hidden, used to show / hide drawer of other nav items.
    * Full page modal: tabular view: achievement badges.
        * What has been accomplished vs. what remains.
    * Full page modal: column view: event history.
        * Chronological history of when things happen.
    * Button: Clickable lootbox.

## TODO

- [ ] Make this the basis for my website.
    - [ ] Add styling and assets to static, copy to dist via copy plugin in webpack.
- [ ] Unlock Achievements Unlocked
    * Requirement: Spend a minute on the website.
    * Downstream: Unlock achievements. Is a pre-req for all achievements and requirements for achievements will not be recorded until this is achieved.
- [ ] Achievement: Nosy
    * Requirement: Click/tap a link.
- [ ] Achievement: Curious
    * Requirement: Click/tap a non link.
- [ ] Achievement: Repeat Visitor
    * Requirement: Return to the website after having previously visited.
- [ ] Achievement: Long Live the 80s (or 90s, whichever seems more appropriate)
    * Requirement: Input the konami code.
- [ ] Loot Boxes
    * ???: How does this get unlocked? Five minutes on the site?
    * Button: Clickable lootbox.
    * Loot box treasures ???
