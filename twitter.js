/*
* A Twitter Search using a very light-weight jQuery version running on Node.js (http://nodejs.org)
* 
* @date 06-Mar-2010
* @author Eduardo Lundgren (eduardolundgren@gmail.com)
*/

var HTTP = 'http',
	SYS = 'sys',
	URL = 'url',

	CLIENT_NAME = 'Twitter Search',
	TWITTER_URI = 'search.twitter.com',

	DATA = 'data',
	EMPTY_STRING = '',
	END = 'end',
	JQUERY_PATH = './lib/jquery-node-js',
	RESPONSE = 'response',
	STRING = 'string',
	UTF8 = 'utf8',

	SEARCH_HEADER_TPL = 'Results {page} - {results_per_page} for {query}. ({completed_in} seconds)\n',

	SEARCH_ENTRY_TPL = '@{from_user} [  {text}  ]\n';

var NodeJS = {
	http: require(HTTP),
	sys: require(SYS),
	url: require(URL)
};

/*
* Loading jQuery lightweight (only extend/each/isFunction methods)
*/
var jQuery = require(JQUERY_PATH).jQuery;

/*
* Twitter class
*/
exports.Twitter = function() {
	var instance = this;

	instance.init.apply(instance, arguments);
};

exports.Twitter.DEFAULTS = {
	client: CLIENT_NAME,
	headers: {
		'host': TWITTER_URI,
		'User-Agent': CLIENT_NAME
	},
	method: 'GET',
	path: NodeJS.url.parse(
		'/search.json'
	),
	port: 80,
	uri: TWITTER_URI
};

jQuery.extend(
	exports.Twitter.prototype,
	{
		HTTPClient: null,
		HTTPRequest: null,

		/**
		 * Initialize the instance.
		 *
		 * @method init
		 * @param {Object} config Configuration attributes.
		 */
		init: function(config) {
			var instance = this;

			instance.config = jQuery.extend(
				exports.Twitter.DEFAULTS,
				config
			);

			instance.initHTTPClient();
		},

		/**
		 * Get the formated path URL.
		 *
		 * @method getQueryURL
		 * @param {Object} query Key-Value Object containing the params to send on the request.
		 * @return {String}
		 */
		getQueryURL: function(query) {
			var instance = this;
			var config = instance.config;

			config.path.query = query;

			return NodeJS.url.format(config.path);
		},

		/**
		 * Initialize the HTTPClient object.
		 *
		 * @method initHTTPClient
		 */
		initHTTPClient: function() {
			var instance = this;
			var config = instance.config;

			instance.HTTPClient = NodeJS.http.createClient(config.port, config.uri);
		},

		/**
		 * Print the search results on the command line.
		 *
		 * @method printResults
		 * @param {JSON} json Twitter Search Result JSON.
		 */
		printResults: function(json) {
			var instance = this;

			var output = [];
			var print = NodeJS.sys.puts;

			var completed_in = json.completed_in;
			var page = json.page;
			var query = json.query;
			var results = json.results;
			var results_per_page = json.results_per_page;

			output.push(
				jQuery.substitute(SEARCH_HEADER_TPL, {
					query: query,
					page: page,
					results_per_page: results_per_page,
					completed_in: completed_in
				})
			);

			jQuery.each(results, function(key, value) {
				output.push(
					jQuery.substitute(SEARCH_ENTRY_TPL, value)
				);
			});

			print(
				output.join('\n')
			);
		},

		/**
		 * Search on Twitter. For learn more Search Operators see
         * <a href="http://search.twitter.com/operators">http://search.twitter.com/operators</a>.
		 * 
		 * @method search
		 * @param {String} query Query-string to search.
		 */
		search: function(query) {
			var instance = this;
			var config = instance.config;

			if (typeof query == STRING) {
				query = { q: query, since_id: 0 };
			}

			var path = instance.getQueryURL(query);

			instance.HTTPRequest = instance.HTTPClient.request(
				config.method,
				path,
				config.headers
			);

			instance.HTTPRequest.addListener(RESPONSE, function(response) {
				var responseData = [];

			   	response.setBodyEncoding(UTF8);

			   	response.addListener(DATA, function(chunk) {
					responseData.push(chunk);
			   	});

				response.addListener(END, function() {
					var json = JSON.parse(
						responseData.join(EMPTY_STRING)
					);

					instance.printResults(json);
				});
			});

			instance.HTTPRequest.close();
		}
	}
);