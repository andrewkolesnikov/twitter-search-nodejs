/*
* <p>To run this example on Node.js type on the command line: <strong>node test.js</strong></p>
* 
* <p>Invoking <code>twitter.search('nodejs')</code> will print on the command
* line the search results for the query "nodejs".</p>
*
* <p>Example:</p>
*
* Results 1 - 15 for nodejs. (0.030064 seconds)
* @jacek_becela [  #nodejs v0.1.31 released without huge API changes. http://groups.google.com/group/nodejs/msg/f9f789948577e861 /via @ryah  ]
* @metapandava [  Hmm. http://nodejs.org/ + http://jsclass.jcoglan.com/ = a match made in heaven? Or me clinging too tightly to the familiar?  ]
* @ciaran_j [  RT @ryah: #nodejs v0.1.31 released without huge API changes. http://groups.google.com/group/nodejs/msg/f9f789948577e861  ]
* @vlahupetar [  RT @ryah: #nodejs v0.1.31 released without huge API changes. http://groups.google.com/group/nodejs/msg/f9f789948577e861  ]
* @elbartus [  RT @ryah: #nodejs v0.1.31 released without huge API changes. http://groups.google.com/group/nodejs/msg/f9f789948577e861  ]
* @streetofmysoul [  Node.JS is cool http://nodejs.org/  ]
* @dloss [  RT @hugs: &quot;JavaScript: It’s Not Just for Browsers Any More&quot; #nodejs #pragpub http://bit.ly/96xUjC  ]
* @kusor [  RT @ryah: #nodejs v0.1.31 released without huge API changes. http://groups.google.com/group/nodejs/msg/f9f789948577e861  ]
* @Joshua_C [  It would be interesting to build a 'no dependence plugin' with nodejs http://s3.amazonaws.com/four.livejournal/20091117/jsconf.pdf #nodejs  ]
* @alexbepple [  RT @zoftie: #nodejs has gotten its own package management system now! #kiwi. #nodejs going to be the next big thing, #imo  ]
* @woongy [  node.js: an evented I/O for V8 javascript. http://nodejs.org/jsconf.pdf  ]
* @bengl [  RT @ryah #nodejs v0.1.31 released without huge API changes. http://bit.ly/b0xDMe  ]
* @raycmorgan [  #nodejs v0.1.31 released without huge API changes. http://groups.google.com/group/nodejs/msg/f9f789948577e861 (via @ryah)  ]
* @tjholowaychuk [  hopes slicehost will sponsor the #kiwi nodejs package manager server  ]
* @alrayyes [  NodeJs, I'm lovin it! #nodejs  ]
*/
var TwitterSearch = require("./twitter").Twitter;

var twitter = new TwitterSearch();

// twitter.search('nodejs');
twitter.search('from:eduardolundgren');

/*
* Complex search (i.e., passing more params). See
* http://apiwiki.twitter.com/Twitter-Search-API-Method%3A-search for more
* information.
*/

// twitter.search({
// 	q: 'eduardo',
// 	testing: 'test'
// });