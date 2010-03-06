/*
* <p>To run this example on Node.js type on the command line: <strong>node test.js</strong></p>
* 
* <p>Invoking <code>twitter.search('from:eduardolundgren')</code> will print on the command
* line the search results for the query "nodejs".</p>
*
* <p>Example:</p>
*
* Results 1 - 15 for from%3Aeduardolundgren. (0.73769 seconds)
* 
* @eduardolundgren [  A #nodejs Twitter Search using a very light-weight #jQuery version http://github.com/eduardolundgren/twitter-search-nodejs  ]
* @eduardolundgren [  All #JavaScript frameworks in the world has a reference to some Dean Edwards piece of code.  ]
* @eduardolundgren [  RT @rotty3000: With git I can easily share my branches between desktop/laptop when I travel... #Liferay in git is great!  ]
* @eduardolundgren [  RT @InsomniacSoup: After spending a day with Liferay 6.0, I can safely say that Liferay will one day save our world from utter annihilation. #Liferay #FTW  ]
* @eduardolundgren [  The infinity is so close. (1.7976931348623158e+308 == Infinity) is false, but (1.7976931348623159e+308 == Infinity) is true. #wtfjs  ]
* @eduardolundgren [  #Liferay Portal 6 Preview Released, check it out.  http://www.liferay.com/web/brian.chan/blog/-/blogs/liferay-portal-6-preview-released  ]
* @eduardolundgren [  I'm so sad I lost the #crockonjs yesterday.  ]
* @eduardolundgren [  RT @yuilibrary: YUI 3.1.0 preview release 1. New widget/component foundation, improved Gallery integration, &amp; more: http://bit.ly/bvf6hz  ]
* @eduardolundgren [  Writing documentation for Alloy UI. YUI Docs made it more fun.  ]
* @eduardolundgren [  RT @sez11a: #Liferay in Action is now available as a MEAP, from @ManningBooks! Working hard on this: http://tinyurl.com/yabeej8 #fb #in  ]
* @eduardolundgren [  @rotty3000 We miss you on core!  ]
* @eduardolundgren [  My first experience with #Opera 10.50 for #Mac was: &quot;A problem has occurred, forcing Opera to close.&quot;  ]
* @eduardolundgren [  Working on bug fixes for Liferay 6.0 preview release.  ]
* @eduardolundgren [  http://twitpic.com/15ock3 - My #YUI3 t-shirt arrived, thanks YUI guys.  ]
* @eduardolundgren [  JavaScript... ++[ [] ][ +[] ] == 1; //true http://news.ycombinator.com/item?id=1154338  ]
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