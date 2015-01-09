To run:
Clone the polymer-sample repo
Run grunt build in polymer-sample to build a dist package
Link public/elements to polymer-sample/dist/elements
ln -s ~repos/polymer-sample/dist/elements/ public/elements
Run meteor
