# Procrastination game

Silly, unlockable content for my webpage, a reward for those who loiter.

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

* Unlock Achievements Unlocked
    * Requirement: Spend a minute on the website.
    * Downstream: Unlock achievements. Is a pre-req for all achievements and requirements for achievements will not be recorded until this is achieved.
* Achievement: Nosy
    * Requirement: Click/tap a link.
* Achievement: Curious
    * Requirement: Click/tap a non link.
* Achievement: Repeat Visitor
    * Requirement: Return to the website after having previously visited.
* Achievement: Long Live the 80s (or 90s, whichever seems more appropriate)
    * Requirement: Input the konami code.
* Loot Boxes
    * ???: How does this get unlocked? Five minutes on the site?
    * Button: Clickable lootbox.
    * Loot box treasures ???
