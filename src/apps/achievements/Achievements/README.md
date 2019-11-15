# Defined achievements

Individual achievement definitions.

## Usage

* To prevent circular import weirdness, each achievement requires an id defined in `achievement-ids.js`.
* If an achievement needs to reference another achievement, it should be done via these string ids and to the not-redux data store.
