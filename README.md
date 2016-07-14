# Meteor Testing Best Practices

TODO: add other readme content


## .babelrc File

We use a `.babelrc` in the root of the project to make Meteor and Mocha compile in the same way. The file used here follows [these recommendations](https://forums.meteor.com/t/announcing-meteor-1-3-4-1-and-1-4-beta-1/25460/8?u=rdickert). There are a few compromises that you will have to live with in your Meteor app as a result of this:

* It won't allow you to use nested import declarations.
* [You cannot use absolute import paths](https://forums.meteor.com/t/announcing-meteor-1-3-4-1-and-1-4-beta-1/25460/10?u=rdickert) from your project root (Node will read it as being the root of your filesystem)

There may be a way to improve this further using `meteor-babel/register` - [here is an example](https://github.com/meteor/babel/blob/master/test/register.js). A PR that makes this work would be welcome! Regardless, it seems likely that this situation will improve as Meteor migrates to NPM.
