/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          s.unshift(n);
        }while (a[r] === s[r]) {
          r++;
        }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = pe(t);
    }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }i(null, v = [], l, u);
            }c = v.length;while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }p.push(n);
        }
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);break;
              }
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) {
            y(x, b, a, s);
          }if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        $(i[n], s(n), a.reject);
      }return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
          a = a.lastChild;
        }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }f.textContent = "", d = 0;while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
        De(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[J.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
        }d[r] = y && y[r] || w.style(e, r);
      }
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);break;
      }
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
          }
        }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
          s.setRequestHeader(a, i[a]);
        }_n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == "function" && __webpack_require__(4) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return w;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(t.bootstrap = {}, t.jQuery);
}(this, function (t, e) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function c(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(o);"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
      });
    }return r;
  }for (var r, n, o, a, l, f, h, u, d, p, g, m, _, v, E, y, b, T, C, w, I, D, A, S, O, N, k, L, P, x, j, M, R, H, W, F, U, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ft, ht, ut, dt, pt, gt = function (i) {
    var e = "transitionend";function t(t) {
      var e = this,
          n = !1;return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }var l = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {}return t;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");e && "#" !== e || (e = t.getAttribute("href") || "");try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var e = i(t).css("transition-duration");return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                o = e[i],
                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
          }
        }var a;
      } };return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, l;
  }(e = e && e.hasOwnProperty("default") ? e.default : e), mt = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], f = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, h = "alert", u = "fade", d = "show", p = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, o), this._element = null;
    }, t._getRootElement = function (t) {
      var e = gt.getSelectorFromElement(t),
          n = !1;return e && (n = r(e)[0]), n || (n = r(t).closest("." + h)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(f.CLOSE);return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;if (r(e).removeClass(d), r(e).hasClass(u)) {
        var t = gt.getTransitionDurationFromElement(e);r(e).one(gt.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(f.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(o);e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), i;
  }(), r(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
    return r.fn[n] = l, p._jQueryInterface;
  }, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', D = "input", A = ".active", S = ".btn", O = { CLICK_DATA_API: "click" + v + E, FOCUS_BLUR_DATA_API: (C = "focus") + v + E + " blur" + v + E }, N = function () {
    function n(t) {
      this._element = t;
    }var t = n.prototype;return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(I)[0];if (n) {
        var i = g(this._element).find(D)[0];if (i) {
          if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = !1;else {
            var r = g(n).find(A)[0];r && g(r).removeClass(b);
          }if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !g(this._element).hasClass(b), g(i).trigger("change");
          }i.focus(), e = !1;
        }
      }e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b);
    }, t.dispose = function () {
      g.removeData(this._element, _), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(_);t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), n;
  }(), g(document).on(O.CLICK_DATA_API, w, function (t) {
    t.preventDefault();var e = t.target;g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(S)[0];g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
  }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
    return g.fn[m] = y, N._jQueryInterface;
  }, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), j = ".data-api", M = (k = e).fn[L], R = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, H = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = "next", F = "prev", U = "left", B = "right", K = { SLIDE: "slide" + x, SLID: "slid" + x, KEYDOWN: "keydown" + x, MOUSEENTER: "mouseenter" + x, MOUSELEAVE: "mouseleave" + x, TOUCHEND: "touchend" + x, LOAD_DATA_API: "load" + x + j, CLICK_DATA_API: "click" + x + j }, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, Z = function () {
    function o(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._addEventListeners();
    }var t = o.prototype;return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(F);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), k(this._element).find(J.NEXT_PREV)[0] && (gt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0];var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(K.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? W : F;this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = c({}, R, t), gt.typeCheckConfig(L, t, H), t;
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && k(this._element).on(K.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(K.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), ("ontouchstart" in document.documentElement) && k(this._element).on(K.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, t._getItemIndex = function (t) {
      return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === F,
          r = this._getItemIndex(e),
          o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;var s = (r + (t === F ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),
          r = k.Event(K.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return k(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e = this._indicatorsElement.children[this._getItemIndex(t)];e && k(e).addClass(Q);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          o = this,
          s = k(this._element).find(J.ACTIVE_ITEM)[0],
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          f = Boolean(this._interval);if (t === W ? (n = q, i = z, r = U) : (n = G, i = X, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l);var h = k.Event(K.SLID, { relatedTarget: l, direction: r, from: a, to: c });if (k(this._element).hasClass(Y)) {
          k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n);var u = gt.getTransitionDurationFromElement(s);k(s).one(gt.TRANSITION_END, function () {
            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return k(o._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(u);
        } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(h);f && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var t = k(this).data(P),
            e = c({}, R, k(this).data());"object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (e = c({}, e, i));var n = "string" == typeof i ? i : e.slide;if (t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, o._dataApiClickHandler = function (t) {
      var e = gt.getSelectorFromElement(this);if (e) {
        var n = k(e)[0];if (n && k(n).hasClass(V)) {
          var i = c({}, k(n).data(), k(this).data()),
              r = this.getAttribute("data-slide-to");r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault();
        }
      }
    }, s(o, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return R;
      } }]), o;
  }(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () {
    k(J.DATA_RIDE).each(function () {
      var t = k(this);Z._jQueryInterface.call(t, t.data());
    });
  }), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () {
    return k.fn[L] = M, Z._jQueryInterface;
  }, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, st = { SHOW: "show" + nt, SHOWN: "shown" + nt, HIDE: "hide" + nt, HIDDEN: "hidden" + nt, CLICK_DATA_API: "click" + nt + ".data-api" }, at = "show", lt = "collapse", ct = "collapsing", ft = "collapsed", ht = "width", ut = "height", dt = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, pt = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            o = gt.getSelectorFromElement(r);null !== o && 0 < $(o).filter(t).length && (this._selector = o, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = a.prototype;return t.toggle = function () {
      $(this._element).hasClass(at) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = $(t).not(this._selector).data(et)) && e._isTransitioning))) {
        var i = $.Event(st.SHOW);if ($(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call($(t).not(this._selector), "hide"), e || $(t).data(et, null));var r = this._getDimension();$(this._element).removeClass(lt).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0);var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END, function () {
            $(n._element).removeClass(ct).addClass(lt).addClass(at), n._element.style[r] = "", n.setTransitioning(!1), $(n._element).trigger(st.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;if (!this._isTransitioning && $(this._element).hasClass(at)) {
        var e = $.Event(st.HIDE);if ($(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                o = gt.getSelectorFromElement(r);if (null !== o) $(o).hasClass(at) || $(r).addClass(ft).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var s = gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END, function () {
            t.setTransitioning(!1), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN);
          }).emulateTransitionEnd(s);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      $.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = c({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t;
    }, t._getDimension = function () {
      return $(this._element).hasClass(ht) ? ht : ut;
    }, t._getParent = function () {
      var n = this,
          t = null;gt.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0];var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return $(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = $(t).hasClass(at);0 < e.length && $(e).toggleClass(ft, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = gt.getSelectorFromElement(t);return e ? $(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = $(this),
            e = t.data(et),
            n = c({}, rt, t.data(), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? i : {});if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(et, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
        }
      });
    }, s(a, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return rt;
      } }]), a;
  }(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = $(this),
        e = gt.getSelectorFromElement(this);$(e).each(function () {
      var t = $(this),
          e = t.data(et) ? "toggle" : n.data();pt._jQueryInterface.call(t, e);
    });
  }), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () {
    return $.fn[tt] = it, pt._jQueryInterface;
  }, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1) {
    if (yt && 0 <= navigator.userAgent.indexOf(bt[Ct])) {
      Tt = 1;break;
    }
  }var wt = yt && window.Promise ? function (t) {
    var e = !1;return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, Tt));
    };
  };function It(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }function Dt(t, e) {
    if (1 !== t.nodeType) return [];var n = getComputedStyle(t, null);return e ? n[e] : n;
  }function At(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }function St(t) {
    if (!t) return document.body;switch (t.nodeName) {case "HTML":case "BODY":
        return t.ownerDocument.body;case "#document":
        return t.body;}var e = Dt(t),
        n = e.overflow,
        i = e.overflowX,
        r = e.overflowY;return (/(auto|scroll|overlay)/.test(n + r + i) ? t : St(At(t))
    );
  }var Ot = yt && !(!window.MSInputMethodContext || !document.documentMode),
      Nt = yt && /MSIE 10/.test(navigator.userAgent);function kt(t) {
    return 11 === t ? Ot : 10 === t ? Nt : Ot || Nt;
  }function Lt(t) {
    if (!t) return document.documentElement;for (var e = kt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position") ? Lt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }function Pt(t) {
    return null !== t.parentNode ? Pt(t.parentNode) : t;
  }function xt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        r = n ? e : t,
        o = document.createRange();o.setStart(i, 0), o.setEnd(r, 0);var s,
        a,
        l = o.commonAncestorContainer;if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Lt(s.firstElementChild) !== s ? Lt(l) : l;var c = Pt(t);return c.host ? xt(c.host, e) : xt(t, Pt(e).host);
  }function jt(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;return (t.ownerDocument.scrollingElement || i)[e];
    }return t[e];
  }function Mt(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }function Rt(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], kt(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
  }function Ht() {
    var t = document.body,
        e = document.documentElement,
        n = kt(10) && getComputedStyle(e);return { height: Rt("Height", t, e, n), width: Rt("Width", t, e, n) };
  }var Wt = function Wt(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      Ft = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }(),
      Ut = function Ut(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  },
      Bt = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }return t;
  };function Kt(t) {
    return Bt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }function Vt(t) {
    var e = {};try {
      if (kt(10)) {
        e = t.getBoundingClientRect();var n = jt(t, "top"),
            i = jt(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
        o = "HTML" === t.nodeName ? Ht() : {},
        s = o.width || t.clientWidth || r.right - r.left,
        a = o.height || t.clientHeight || r.bottom - r.top,
        l = t.offsetWidth - s,
        c = t.offsetHeight - a;if (l || c) {
      var f = Dt(t);l -= Mt(f, "x"), c -= Mt(f, "y"), r.width -= l, r.height -= c;
    }return Kt(r);
  }function Qt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = kt(10),
        r = "HTML" === e.nodeName,
        o = Vt(t),
        s = Vt(e),
        a = St(t),
        l = Dt(e),
        c = parseFloat(l.borderTopWidth, 10),
        f = parseFloat(l.borderLeftWidth, 10);n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));var h = Kt({ top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height });if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(l.marginTop, 10),
          d = parseFloat(l.marginLeft, 10);h.top -= c - u, h.bottom -= c - u, h.left -= f - d, h.right -= f - d, h.marginTop = u, h.marginLeft = d;
    }return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = jt(e, "top"),
          r = jt(e, "left"),
          o = n ? -1 : 1;return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
    }(h, e)), h;
  }function Yt(t) {
    if (!t || !t.parentElement || kt()) return document.documentElement;for (var e = t.parentElement; e && "none" === Dt(e, "transform");) {
      e = e.parentElement;
    }return e || document.documentElement;
  }function Gt(t, e, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        o = { top: 0, left: 0 },
        s = r ? Yt(t) : xt(t, e);if ("viewport" === i) o = function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = Qt(t, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : jt(n),
          a = e ? 0 : jt(n, "left");return Kt({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o });
    }(s, r);else {
      var a = void 0;"scrollParent" === i ? "BODY" === (a = St(At(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;var l = Qt(a, s, r);if ("HTML" !== a.nodeName || function t(e) {
        var n = e.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === Dt(e, "position") || t(At(e)));
      }(s)) o = l;else {
        var c = Ht(),
            f = c.height,
            h = c.width;o.top += l.top - l.marginTop, o.bottom = f + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left;
      }
    }return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }function qt(t, e, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var s = Gt(i, n, o, r),
        a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (t) {
      return Bt({ key: t }, a[t], { area: (e = a[t], e.width * e.height) });var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          n = t.height;return e >= i.clientWidth && n >= i.clientHeight;
    }),
        f = 0 < c.length ? c[0].key : l[0].key,
        h = t.split("-")[1];return f + (h ? "-" + h : "");
  }function zt(t, e, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;return Qt(n, i ? Yt(e) : xt(e, n), i);
  }function Xt(t) {
    var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }function Jt(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }function Zt(t, e, n) {
    n = n.split("-")[0];var i = Xt(t),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[Jt(a)], r;
  }function $t(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }function te(t, n, e) {
    return (void 0 === e ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });var i = $t(t, function (t) {
        return t[e] === n;
      });return t.indexOf(i);
    }(t, "name", e))).forEach(function (t) {
      t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e = t.function || t.fn;t.enabled && It(e) && (n.offsets.popper = Kt(n.offsets.popper), n.offsets.reference = Kt(n.offsets.reference), n = e(n, t));
    }), n;
  }function ee(t, n) {
    return t.some(function (t) {
      var e = t.name;return t.enabled && e === n;
    });
  }function ne(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var r = e[i],
          o = r ? "" + r + n : t;if ("undefined" != typeof document.body.style[o]) return o;
    }return null;
  }function ie(t) {
    var e = t.ownerDocument;return e ? e.defaultView : window;
  }function re(t, e, n, i) {
    n.updateBound = i, ie(t).addEventListener("resize", n.updateBound, { passive: !0 });var r = St(t);return function t(e, n, i, r) {
      var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;s.addEventListener(n, i, { passive: !0 }), o || t(St(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }function oe() {
    var t, e;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ie(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }function se(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }function ae(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && se(i[t]) && (e = "px"), n.style[t] = i[t] + e;
    });
  }function le(t, e, n) {
    var i = $t(t, function (t) {
      return t.name === e;
    }),
        r = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });if (!r) {
      var o = "`" + e + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }return r;
  }var ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      fe = ce.slice(3);function he(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = fe.indexOf(t),
        i = fe.slice(n + 1).concat(fe.slice(0, n));return e ? i.reverse() : i;
  }var ue = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function de(t, r, o, e) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(e),
        n = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        i = n.indexOf($t(n, function (t) {
      return -1 !== t.search(/,|\s/);
    }));n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];return (c = c.map(function (t, e) {
      var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];if (!o) return t;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return Kt(a)[e] / 100 * o;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
        }(t, n, r, o);
      });
    })).forEach(function (n, i) {
      n.forEach(function (t, e) {
        se(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
      });
    }), s;
  }var pe = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];if (i) {
            var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                f = { start: Ut({}, l, o[l]), end: Ut({}, l, o[l] + o[c] - s[c]) };t.offsets.popper = Bt({}, s, f[i]);
          }return t;
        } }, offset: { order: 200, enabled: !0, fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;return l = se(+n) ? [+n, 0] : de(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, i) {
          var e = i.boundariesElement || Lt(t.instance.popper);t.instance.reference === e && (e = Lt(e));var n = ne("transform"),
              r = t.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];r.top = "", r.left = "", r[n] = "";var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);r.top = o, r.left = s, r[n] = a, i.boundaries = l;var c = i.priority,
              f = t.offsets.popper,
              h = { primary: function primary(t) {
              var e = f[t];return f[t] < l[t] && !i.escapeWithReference && (e = Math.max(f[t], l[t])), Ut({}, t, e);
            }, secondary: function secondary(t) {
              var e = "right" === t ? "left" : "top",
                  n = f[e];return f[t] > l[t] && !i.escapeWithReference && (n = Math.min(f[e], l[t] - ("right" === t ? f.width : f.height))), Ut({}, e, n);
            } };return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";f = Bt({}, f, h[e](t));
          }), t.offsets.popper = f, t;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
          var n;if (!le(t.instance.modifiers, "arrow", "keepTogether")) return t;var i = e.element;if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              f = l ? "Top" : "Left",
              h = f.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = Xt(i)[c];a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Kt(t.offsets.popper);var g = a[h] + a[c] / 2 - p / 2,
              m = Dt(t.instance.popper),
              _ = parseFloat(m["margin" + f], 10),
              v = parseFloat(m["border" + f + "Width"], 10),
              E = g - t.offsets.popper[h] - _ - v;return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (Ut(n = {}, h, Math.round(E)), Ut(n, u, ""), n), t;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(p, g) {
          if (ee(p.instance.modifiers, "inner")) return p;if (p.flipped && p.placement === p.originalPlacement) return p;var m = Gt(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
              _ = p.placement.split("-")[0],
              v = Jt(_),
              E = p.placement.split("-")[1] || "",
              y = [];switch (g.behavior) {case ue.FLIP:
              y = [_, v];break;case ue.CLOCKWISE:
              y = he(_);break;case ue.COUNTERCLOCKWISE:
              y = he(_, !0);break;default:
              y = g.behavior;}return y.forEach(function (t, e) {
            if (_ !== t || y.length === e + 1) return p;_ = p.placement.split("-")[0], v = Jt(_);var n,
                i = p.offsets.popper,
                r = p.offsets.reference,
                o = Math.floor,
                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                a = o(i.left) < o(m.left),
                l = o(i.right) > o(m.right),
                c = o(i.top) < o(m.top),
                f = o(i.bottom) > o(m.bottom),
                h = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && f,
                u = -1 !== ["top", "bottom"].indexOf(_),
                d = !!g.flipVariations && (u && "start" === E && a || u && "end" === E && l || !u && "start" === E && c || !u && "end" === E && f);(s || h || d) && (p.flipped = !0, (s || h) && (_ = y[e + 1]), d && (E = "end" === (n = E) ? "start" : "start" === n ? "end" : n), p.placement = _ + (E ? "-" + E : ""), p.offsets.popper = Bt({}, p.offsets.popper, Zt(p.instance.popper, p.offsets.reference, p.placement)), p = te(p.instance.modifiers, p, "flip"));
          }), p;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = Jt(e), t.offsets.popper = Kt(r), t;
        } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
          if (!le(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
              n = $t(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }return t;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = $t(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : e.gpuAcceleration,
              a = Vt(Lt(t.instance.popper)),
              l = { position: r.position },
              c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
              f = "bottom" === n ? "top" : "bottom",
              h = "right" === i ? "left" : "right",
              u = ne("transform"),
              d = void 0,
              p = void 0;if (p = "bottom" === f ? -a.height + c.bottom : c.top, d = "right" === h ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform";else {
            var g = "bottom" === f ? -1 : 1,
                m = "right" === h ? -1 : 1;l[f] = p * g, l[h] = d * m, l.willChange = f + ", " + h;
          }var _ = { "x-placement": t.placement };return t.attributes = Bt({}, _, t.attributes), t.styles = Bt({}, l, t.styles), t.arrowStyles = Bt({}, t.offsets.arrow, t.arrowStyles), t;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
          var e, n;return ae(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && ae(t.arrowElement, t.arrowStyles), t;
        }, onLoad: function onLoad(t, e, n, i, r) {
          var o = zt(r, e, t, n.positionFixed),
              s = qt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", s), ae(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      ge = function () {
    function o(t, e) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};Wt(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = wt(this.update.bind(this)), this.options = Bt({}, o.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Bt({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) {
        n.options.modifiers[t] = Bt({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return Bt({ name: t }, n.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && It(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();var r = this.options.eventsEnabled;r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }return Ft(o, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = zt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = qt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Zt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = te(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, ee(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ne("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = re(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return oe.call(this);
      } }]), o;
  }();ge.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ge.placements = ce, ge.Defaults = pe;var me,
      _e,
      ve,
      Ee,
      ye,
      be,
      Te,
      Ce,
      we,
      Ie,
      De,
      Ae,
      Se,
      Oe,
      Ne,
      ke,
      Le,
      Pe,
      xe,
      je,
      Me,
      Re,
      He,
      We,
      Fe,
      Ue,
      Be,
      Ke,
      Ve,
      Qe,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      fn,
      hn,
      un,
      dn,
      pn,
      gn,
      mn,
      _n,
      vn,
      En,
      yn,
      bn,
      Tn,
      Cn,
      wn,
      In,
      Dn,
      An,
      Sn,
      On,
      Nn,
      kn,
      Ln,
      Pn,
      xn,
      jn,
      Mn,
      Rn,
      Hn,
      Wn,
      Fn,
      Un,
      Bn,
      Kn,
      Vn,
      Qn,
      Yn,
      Gn,
      qn,
      zn,
      Xn,
      Jn,
      Zn,
      $n,
      ti,
      ei,
      ni,
      ii,
      ri,
      oi,
      si,
      ai,
      li,
      ci,
      fi,
      hi,
      ui,
      di,
      pi,
      gi,
      mi,
      _i,
      vi,
      Ei,
      yi,
      bi,
      Ti = (_e = "dropdown", Ee = "." + (ve = "bs.dropdown"), ye = ".data-api", be = (me = e).fn[_e], Te = new RegExp("38|40|27"), Ce = { HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: "show" + Ee, SHOWN: "shown" + Ee, CLICK: "click" + Ee, CLICK_DATA_API: "click" + Ee + ye, KEYDOWN_DATA_API: "keydown" + Ee + ye, KEYUP_DATA_API: "keyup" + Ee + ye }, we = "disabled", Ie = "show", De = "dropup", Ae = "dropright", Se = "dropleft", Oe = "dropdown-menu-right", Ne = "position-static", ke = '[data-toggle="dropdown"]', Le = ".dropdown form", Pe = ".dropdown-menu", xe = ".navbar-nav", je = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Me = "top-start", Re = "top-end", He = "bottom-start", We = "bottom-end", Fe = "right-start", Ue = "left-start", Be = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Ke = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Ve = function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = l.prototype;return t.toggle = function () {
      if (!this._element.disabled && !me(this._element).hasClass(we)) {
        var t = l._getParentFromElement(this._element),
            e = me(this._menu).hasClass(Ie);if (l._clearMenus(), !e) {
          var n = { relatedTarget: this._element },
              i = me.Event(Ce.SHOW, n);if (me(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof ge) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r = this._element;"parent" === this._config.reference ? r = t : gt.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && me(t).addClass(Ne), this._popper = new ge(r, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === me(t).closest(xe).length && me(document.body).children().on("mouseover", null, me.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), me(this._menu).toggleClass(Ie), me(t).toggleClass(Ie).trigger(me.Event(Ce.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      me.removeData(this._element, ve), me(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;me(this._element).on(Ce.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = c({}, this.constructor.Default, me(this._element).data(), t), gt.typeCheckConfig(_e, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);this._menu = me(t).find(Pe)[0];
      }return this._menu;
    }, t._getPlacement = function () {
      var t = me(this._element).parent(),
          e = He;return t.hasClass(De) ? (e = Me, me(this._menu).hasClass(Oe) && (e = Re)) : t.hasClass(Ae) ? e = Fe : t.hasClass(Se) ? e = Ue : me(this._menu).hasClass(Oe) && (e = We), e;
    }, t._detectNavbar = function () {
      return 0 < me(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = me(this).data(ve);if (t || (t = new l(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), me(this).data(ve, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = me.makeArray(me(ke)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = me(e[n]).data(ve),
            o = { relatedTarget: e[n] };if (r) {
          var s = r._menu;if (me(i).hasClass(Ie) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && me.contains(i, t.target))) {
            var a = me.Event(Ce.HIDE, o);me(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && me(document.body).children().off("mouseover", null, me.noop), e[n].setAttribute("aria-expanded", "false"), me(s).removeClass(Ie), me(i).removeClass(Ie).trigger(me.Event(Ce.HIDDEN, o)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = gt.getSelectorFromElement(t);return n && (e = me(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || me(t.target).closest(Pe).length)) : Te.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !me(this).hasClass(we))) {
        var e = l._getParentFromElement(this),
            n = me(e).hasClass(Ie);if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = me(e).find(je).get();if (0 !== i.length) {
            var r = i.indexOf(t.target);38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var o = me(e).find(ke)[0];me(o).trigger("focus");
          }me(this).trigger("click");
        }
      }
    }, s(l, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Be;
      } }, { key: "DefaultType", get: function get() {
        return Ke;
      } }]), l;
  }(), me(document).on(Ce.KEYDOWN_DATA_API, ke, Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API, Pe, Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API + " " + Ce.KEYUP_DATA_API, Ve._clearMenus).on(Ce.CLICK_DATA_API, ke, function (t) {
    t.preventDefault(), t.stopPropagation(), Ve._jQueryInterface.call(me(this), "toggle");
  }).on(Ce.CLICK_DATA_API, Le, function (t) {
    t.stopPropagation();
  }), me.fn[_e] = Ve._jQueryInterface, me.fn[_e].Constructor = Ve, me.fn[_e].noConflict = function () {
    return me.fn[_e] = be, Ve._jQueryInterface;
  }, Ve),
      Ci = (Ye = "modal", qe = "." + (Ge = "bs.modal"), ze = (Qe = e).fn[Ye], Xe = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Je = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Ze = { HIDE: "hide" + qe, HIDDEN: "hidden" + qe, SHOW: "show" + qe, SHOWN: "shown" + qe, FOCUSIN: "focusin" + qe, RESIZE: "resize" + qe, CLICK_DISMISS: "click.dismiss" + qe, KEYDOWN_DISMISS: "keydown.dismiss" + qe, MOUSEUP_DISMISS: "mouseup.dismiss" + qe, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qe, CLICK_DATA_API: "click" + qe + ".data-api" }, $e = "modal-scrollbar-measure", tn = "modal-backdrop", en = "modal-open", nn = "fade", rn = "show", on = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, sn = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Qe(t).find(on.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }var t = r.prototype;return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;if (!this._isTransitioning && !this._isShown) {
        Qe(this._element).hasClass(nn) && (this._isTransitioning = !0);var n = Qe.Event(Ze.SHOW, { relatedTarget: t });Qe(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Qe(document.body).addClass(en), this._setEscapeEvent(), this._setResizeEvent(), Qe(this._element).on(Ze.CLICK_DISMISS, on.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS, function () {
          Qe(e._element).one(Ze.MOUSEUP_DISMISS, function (t) {
            Qe(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Qe.Event(Ze.HIDE);if (Qe(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;var i = Qe(this._element).hasClass(nn);if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Qe(document).off(Ze.FOCUSIN), Qe(this._element).removeClass(rn), Qe(this._element).off(Ze.CLICK_DISMISS), Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS), i) {
            var r = gt.getTransitionDurationFromElement(this._element);Qe(this._element).one(gt.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Qe.removeData(this._element, Ge), Qe(window, document, this._element, this._backdrop).off(qe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = c({}, Xe, t), gt.typeCheckConfig(Ye, t, Je), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Qe(this._element).hasClass(nn);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Qe(this._element).addClass(rn), this._config.focus && this._enforceFocus();var i = Qe.Event(Ze.SHOWN, { relatedTarget: t }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Qe(e._element).trigger(i);
      };if (n) {
        var o = gt.getTransitionDurationFromElement(this._element);Qe(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Qe(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? Qe(this._element).on(Ze.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Qe(this._element).off(Ze.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? Qe(window).on(Ze.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Qe(window).off(Ze.RESIZE);
    }, t._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Qe(document.body).removeClass(en), t._resetAdjustments(), t._resetScrollbar(), Qe(t._element).trigger(Ze.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Qe(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Qe(this._element).hasClass(nn) ? nn : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = tn, n && Qe(this._backdrop).addClass(n), Qe(this._backdrop).appendTo(document.body), Qe(this._element).on(Ze.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && gt.reflow(this._backdrop), Qe(this._backdrop).addClass(rn), !t) return;if (!n) return void t();var i = gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Qe(this._backdrop).removeClass(rn);var r = function r() {
          e._removeBackdrop(), t && t();
        };if (Qe(this._element).hasClass(nn)) {
          var o = gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;if (this._isBodyOverflowing) {
        Qe(on.FIXED_CONTENT).each(function (t, e) {
          var n = Qe(e)[0].style.paddingRight,
              i = Qe(e).css("padding-right");Qe(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Qe(on.STICKY_CONTENT).each(function (t, e) {
          var n = Qe(e)[0].style.marginRight,
              i = Qe(e).css("margin-right");Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Qe(on.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Qe(e)[0].style.marginRight,
              i = Qe(e).css("margin-right");Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });var t = document.body.style.paddingRight,
            e = Qe(document.body).css("padding-right");Qe(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Qe(on.FIXED_CONTENT).each(function (t, e) {
        var n = Qe(e).data("padding-right");"undefined" != typeof n && Qe(e).css("padding-right", n).removeData("padding-right");
      }), Qe(on.STICKY_CONTENT + ", " + on.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Qe(e).data("margin-right");"undefined" != typeof n && Qe(e).css("margin-right", n).removeData("margin-right");
      });var t = Qe(document.body).data("padding-right");"undefined" != typeof t && Qe(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = $e, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Qe(this).data(Ge),
            e = c({}, Xe, Qe(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (t || (t = new r(this, e), Qe(this).data(Ge, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, s(r, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Xe;
      } }]), r;
  }(), Qe(document).on(Ze.CLICK_DATA_API, on.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = gt.getSelectorFromElement(this);i && (e = Qe(i)[0]);var r = Qe(e).data(Ge) ? "toggle" : c({}, Qe(e).data(), Qe(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var o = Qe(e).one(Ze.SHOW, function (t) {
      t.isDefaultPrevented() || o.one(Ze.HIDDEN, function () {
        Qe(n).is(":visible") && n.focus();
      });
    });sn._jQueryInterface.call(Qe(e), r, this);
  }), Qe.fn[Ye] = sn._jQueryInterface, Qe.fn[Ye].Constructor = sn, Qe.fn[Ye].noConflict = function () {
    return Qe.fn[Ye] = ze, sn._jQueryInterface;
  }, sn),
      wi = (ln = "tooltip", fn = "." + (cn = "bs.tooltip"), hn = (an = e).fn[ln], un = "bs-tooltip", dn = new RegExp("(^|\\s)" + un + "\\S+", "g"), mn = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(gn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(pn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, vn = "out", En = { HIDE: "hide" + fn, HIDDEN: "hidden" + fn, SHOW: (_n = "show") + fn, SHOWN: "shown" + fn, INSERTED: "inserted" + fn, CLICK: "click" + fn, FOCUSIN: "focusin" + fn, FOCUSOUT: "focusout" + fn, MOUSEENTER: "mouseenter" + fn, MOUSELEAVE: "mouseleave" + fn }, yn = "fade", bn = "show", Tn = ".tooltip-inner", Cn = ".arrow", wn = "hover", In = "focus", Dn = "click", An = "manual", Sn = function () {
    function i(t, e) {
      if ("undefined" == typeof ge) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var t = i.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = an(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (an(this.getTipElement()).hasClass(bn)) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), an.removeData(this.element, this.constructor.DATA_KEY), an(this.element).off(this.constructor.EVENT_KEY), an(this.element).closest(".modal").off("hide.bs.modal"), this.tip && an(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === an(this.element).css("display")) throw new Error("Please use show on visible elements");var t = an.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        an(this.element).trigger(t);var n = an.contains(this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !n) return;var i = this.getTipElement(),
            r = gt.getUID(this.constructor.NAME);i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && an(i).addClass(yn);var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);this.addAttachmentClass(s);var a = !1 === this.config.container ? document.body : an(this.config.container);an(i).data(this.constructor.DATA_KEY, this), an.contains(this.element.ownerDocument.documentElement, this.tip) || an(i).appendTo(a), an(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ge(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Cn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          } }), an(i).addClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().on("mouseover", null, an.noop);var l = function l() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, an(e.element).trigger(e.constructor.Event.SHOWN), t === vn && e._leave(null, e);
        };if (an(this.tip).hasClass(yn)) {
          var c = gt.getTransitionDurationFromElement(this.tip);an(this.tip).one(gt.TRANSITION_END, l).emulateTransitionEnd(c);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = an.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== _n && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), an(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };if (an(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (an(n).removeClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().off("mouseover", null, an.noop), this._activeTrigger[Dn] = !1, this._activeTrigger[In] = !1, this._activeTrigger[wn] = !1, an(this.tip).hasClass(yn)) {
          var o = gt.getTransitionDurationFromElement(n);an(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      an(this.getTipElement()).addClass(un + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || an(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = an(this.getTipElement());this.setElementContent(t.find(Tn), this.getTitle()), t.removeClass(yn + " " + bn);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e.nodeType || e.jquery) ? n ? an(e).parent().is(t) || t.empty().append(e) : t.text(an(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return gn[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) an(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== An) {
          var e = t === wn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === wn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;an(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }an(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = c({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? In : wn] = !0), an(e.getTipElement()).hasClass(bn) || e._hoverState === _n ? e._hoverState = _n : (clearTimeout(e._timeout), e._hoverState = _n, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === _n && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? In : wn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = vn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === vn && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = c({}, this.constructor.Default, an(this.element).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(ln, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }return t;
    }, t._cleanTipClass = function () {
      var t = an(this.getTipElement()),
          e = t.attr("class").match(dn);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;null === t.getAttribute("x-placement") && (an(t).removeClass(yn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = an(this).data(cn),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), an(this).data(cn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return mn;
      } }, { key: "NAME", get: function get() {
        return ln;
      } }, { key: "DATA_KEY", get: function get() {
        return cn;
      } }, { key: "Event", get: function get() {
        return En;
      } }, { key: "EVENT_KEY", get: function get() {
        return fn;
      } }, { key: "DefaultType", get: function get() {
        return pn;
      } }]), i;
  }(), an.fn[ln] = Sn._jQueryInterface, an.fn[ln].Constructor = Sn, an.fn[ln].noConflict = function () {
    return an.fn[ln] = hn, Sn._jQueryInterface;
  }, Sn),
      Ii = (Nn = "popover", Ln = "." + (kn = "bs.popover"), Pn = (On = e).fn[Nn], xn = "bs-popover", jn = new RegExp("(^|\\s)" + xn + "\\S+", "g"), Mn = c({}, wi.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Rn = c({}, wi.DefaultType, { content: "(string|element|function)" }), Hn = "fade", Fn = ".popover-header", Un = ".popover-body", Bn = { HIDE: "hide" + Ln, HIDDEN: "hidden" + Ln, SHOW: (Wn = "show") + Ln, SHOWN: "shown" + Ln, INSERTED: "inserted" + Ln, CLICK: "click" + Ln, FOCUSIN: "focusin" + Ln, FOCUSOUT: "focusout" + Ln, MOUSEENTER: "mouseenter" + Ln, MOUSELEAVE: "mouseleave" + Ln }, Kn = function (t) {
    var e, n;function i() {
      return t.apply(this, arguments) || this;
    }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var r = i.prototype;return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      On(this.getTipElement()).addClass(xn + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || On(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = On(this.getTipElement());this.setElementContent(t.find(Fn), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Un), e), t.removeClass(Hn + " " + Wn);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = On(this.getTipElement()),
          e = t.attr("class").match(jn);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = On(this).data(kn),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null;if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), On(this).data(kn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Mn;
      } }, { key: "NAME", get: function get() {
        return Nn;
      } }, { key: "DATA_KEY", get: function get() {
        return kn;
      } }, { key: "Event", get: function get() {
        return Bn;
      } }, { key: "EVENT_KEY", get: function get() {
        return Ln;
      } }, { key: "DefaultType", get: function get() {
        return Rn;
      } }]), i;
  }(wi), On.fn[Nn] = Kn._jQueryInterface, On.fn[Nn].Constructor = Kn, On.fn[Nn].noConflict = function () {
    return On.fn[Nn] = Pn, Kn._jQueryInterface;
  }, Kn),
      Di = (Qn = "scrollspy", Gn = "." + (Yn = "bs.scrollspy"), qn = (Vn = e).fn[Qn], zn = { offset: 10, method: "auto", target: "" }, Xn = { offset: "number", method: "string", target: "(string|element)" }, Jn = { ACTIVATE: "activate" + Gn, SCROLL: "scroll" + Gn, LOAD_DATA_API: "load" + Gn + ".data-api" }, Zn = "dropdown-item", $n = "active", ti = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, ei = "offset", ni = "position", ii = function () {
    function n(t, e) {
      var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ti.NAV_LINKS + "," + this._config.target + " " + ti.LIST_ITEMS + "," + this._config.target + " " + ti.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Vn(this._scrollElement).on(Jn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }var t = n.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? ei : ni,
          r = "auto" === this._config.method ? t : this._config.method,
          o = r === ni ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Vn.makeArray(Vn(this._selector)).map(function (t) {
        var e,
            n = gt.getSelectorFromElement(t);if (n && (e = Vn(n)[0]), e) {
          var i = e.getBoundingClientRect();if (i.width || i.height) return [Vn(e)[r]().top + o, n];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Vn.removeData(this._element, Yn), Vn(this._scrollElement).off(Gn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = c({}, zn, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).target) {
        var e = Vn(t.target).attr("id");e || (e = gt.getUID(Qn), Vn(t.target).attr("id", e)), t.target = "#" + e;
      }return gt.typeCheckConfig(Qn, t, Xn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",");t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });var n = Vn(t.join(","));n.hasClass(Zn) ? (n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n), n.addClass($n)) : (n.addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS + ", " + ti.LIST_ITEMS).addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)), Vn(this._scrollElement).trigger(Jn.ACTIVATE, { relatedTarget: e });
    }, t._clear = function () {
      Vn(this._selector).filter(ti.ACTIVE).removeClass($n);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Vn(this).data(Yn);if (t || (t = new n(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), Vn(this).data(Yn, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return zn;
      } }]), n;
  }(), Vn(window).on(Jn.LOAD_DATA_API, function () {
    for (var t = Vn.makeArray(Vn(ti.DATA_SPY)), e = t.length; e--;) {
      var n = Vn(t[e]);ii._jQueryInterface.call(n, n.data());
    }
  }), Vn.fn[Qn] = ii._jQueryInterface, Vn.fn[Qn].Constructor = ii, Vn.fn[Qn].noConflict = function () {
    return Vn.fn[Qn] = qn, ii._jQueryInterface;
  }, ii),
      Ai = (si = "." + (oi = "bs.tab"), ai = (ri = e).fn.tab, li = { HIDE: "hide" + si, HIDDEN: "hidden" + si, SHOW: "show" + si, SHOWN: "shown" + si, CLICK_DATA_API: "click" + si + ".data-api" }, ci = "dropdown-menu", fi = "active", hi = "disabled", ui = "fade", di = "show", pi = ".dropdown", gi = ".nav, .list-group", mi = ".active", _i = "> li > .active", vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ei = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ri(this._element).hasClass(fi) || ri(this._element).hasClass(hi))) {
        var t,
            i,
            e = ri(this._element).closest(gi)[0],
            r = gt.getSelectorFromElement(this._element);if (e) {
          var o = "UL" === e.nodeName ? _i : mi;i = (i = ri.makeArray(ri(e).find(o)))[i.length - 1];
        }var s = ri.Event(li.HIDE, { relatedTarget: this._element }),
            a = ri.Event(li.SHOW, { relatedTarget: i });if (i && ri(i).trigger(s), ri(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (t = ri(r)[0]), this._activate(this._element, e);var l = function l() {
            var t = ri.Event(li.HIDDEN, { relatedTarget: n._element }),
                e = ri.Event(li.SHOWN, { relatedTarget: i });ri(i).trigger(t), ri(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      ri.removeData(this._element, oi), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? ri(e).find(_i) : ri(e).children(mi))[0],
          o = n && r && ri(r).hasClass(ui),
          s = function s() {
        return i._transitionComplete(t, r, n);
      };if (r && o) {
        var a = gt.getTransitionDurationFromElement(r);ri(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        ri(e).removeClass(di + " " + fi);var i = ri(e.parentNode).find(yi)[0];i && ri(i).removeClass(fi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }if (ri(t).addClass(fi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), gt.reflow(t), ri(t).addClass(di), t.parentNode && ri(t.parentNode).hasClass(ci)) {
        var r = ri(t).closest(pi)[0];r && ri(r).find(Ei).addClass(fi), t.setAttribute("aria-expanded", !0);
      }n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = ri(this),
            e = t.data(oi);if (e || (e = new i(this), t.data(oi, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), i;
  }(), ri(document).on(li.CLICK_DATA_API, vi, function (t) {
    t.preventDefault(), bi._jQueryInterface.call(ri(this), "show");
  }), ri.fn.tab = bi._jQueryInterface, ri.fn.tab.Constructor = bi, ri.fn.tab.noConflict = function () {
    return ri.fn.tab = ai, bi._jQueryInterface;
  }, bi);!function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = Ti, t.Modal = Ci, t.Popover = Ii, t.Scrollspy = Di, t.Tab = Ai, t.Tooltip = wi, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
                      VERSION  10.2.3
========================================================= */


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (a) {
                      return typeof a === "undefined" ? "undefined" : _typeof2(a);
} : function (a) {
                      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof2(a);
},
    windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));!function (a) {
                      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
                                            var b;try {
                                                                  b = require("jquery");
                                            } catch (c) {
                                                                  b = null;
                                            }module.exports = a(b);
                      } else window && (window.Slider = a(window.jQuery));
}(function (a) {
                      var b = "slider",
                          c = "bootstrapSlider";windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function () {}), windowIsDefined && !window.console.warn && (window.console.warn = function () {});var d;return function (a) {
                                            function b() {}function c(a) {
                                                                  function c(b) {
                                                                                        b.prototype.option || (b.prototype.option = function (b) {
                                                                                                              a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
                                                                                        });
                                                                  }function e(b, c) {
                                                                                        a.fn[b] = function (e) {
                                                                                                              if ("string" == typeof e) {
                                                                                                                                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                                                                                                                                                          var j = this[h],
                                                                                                                                                              k = a.data(j, b);if (k) {
                                                                                                                                                                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                                                                                                                                                                                      var l = k[e].apply(k, g);if (void 0 !== l && l !== k) return l;
                                                                                                                                                                                } else f("no such method '" + e + "' for " + b + " instance");
                                                                                                                                                          } else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'");
                                                                                                                                    }return this;
                                                                                                              }var m = this.map(function () {
                                                                                                                                    var d = a.data(this, b);return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this);
                                                                                                              });return !m || m.length > 1 ? m : m[0];
                                                                                        };
                                                                  }if (a) {
                                                                                        var f = "undefined" == typeof console ? b : function (a) {
                                                                                                              console.error(a);
                                                                                        };return a.bridget = function (a, b) {
                                                                                                              c(b), e(a, b);
                                                                                        }, a.bridget;
                                                                  }
                                            }var d = Array.prototype.slice;c(a);
                      }(a), function (a) {
                                            function e(b, c) {
                                                                  function d(a, b) {
                                                                                        var c = "data-slider-" + b.replace(/_/g, "-"),
                                                                                            d = a.getAttribute(c);try {
                                                                                                              return JSON.parse(d);
                                                                                        } catch (e) {
                                                                                                              return d;
                                                                                        }
                                                                  }this._state = { value: null, enabled: null, offset: null, size: null, percentage: null, inDrag: !1, over: !1 }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b), c = c ? c : {};for (var e = Object.keys(this.defaultOptions), f = 0; f < e.length; f++) {
                                                                                        var h = e[f],
                                                                                            i = c[h];i = "undefined" != typeof i ? i : d(this.element, h), i = null !== i ? i : this.defaultOptions[h], this.options || (this.options = {}), this.options[h] = i;
                                                                  }"auto" === this.options.rtl && (this.options.rtl = "rtl" === window.getComputedStyle(this.element).direction), "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right";var j,
                                                                      k,
                                                                      l,
                                                                      m,
                                                                      n,
                                                                      o = this.element.style.width,
                                                                      p = !1,
                                                                      q = this.element.parentNode;if (this.sliderElem) p = !0;else {
                                                                                        this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";var r = document.createElement("div");r.className = "slider-track", k = document.createElement("div"), k.className = "slider-track-low", j = document.createElement("div"), j.className = "slider-selection", l = document.createElement("div"), l.className = "slider-track-high", m = document.createElement("div"), m.className = "slider-handle min-slider-handle", m.setAttribute("role", "slider"), m.setAttribute("aria-valuemin", this.options.min), m.setAttribute("aria-valuemax", this.options.max), n = document.createElement("div"), n.className = "slider-handle max-slider-handle", n.setAttribute("role", "slider"), n.setAttribute("aria-valuemin", this.options.min), n.setAttribute("aria-valuemax", this.options.max), r.appendChild(k), r.appendChild(j), r.appendChild(l), this.rangeHighlightElements = [];var s = this.options.rangeHighlights;if (Array.isArray(s) && s.length > 0) for (var t = 0; t < s.length; t++) {
                                                                                                              var u = document.createElement("div"),
                                                                                                                  v = s[t]["class"] || "";u.className = "slider-rangeHighlight slider-selection " + v, this.rangeHighlightElements.push(u), r.appendChild(u);
                                                                                        }var w = Array.isArray(this.options.labelledby);if (w && this.options.labelledby[0] && m.setAttribute("aria-labelledby", this.options.labelledby[0]), w && this.options.labelledby[1] && n.setAttribute("aria-labelledby", this.options.labelledby[1]), !w && this.options.labelledby && (m.setAttribute("aria-labelledby", this.options.labelledby), n.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                                                                                                              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", f = 0; f < this.options.ticks.length; f++) {
                                                                                                                                    var x = document.createElement("div");if (x.className = "slider-tick", this.options.ticks_tooltip) {
                                                                                                                                                          var y = this._addTickListener(),
                                                                                                                                                              z = y.addMouseEnter(this, x, f),
                                                                                                                                                              A = y.addMouseLeave(this, x);this.ticksCallbackMap[f] = { mouseEnter: z, mouseLeave: A };
                                                                                                                                    }this.ticks.push(x), this.ticksContainer.appendChild(x);
                                                                                                              }j.className += " tick-slider-selection";
                                                                                        }if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", f = 0; f < this.options.ticks_labels.length; f++) {
                                                                                                              var B = document.createElement("div"),
                                                                                                                  C = 0 === this.options.ticks_positions.length,
                                                                                                                  D = this.options.reversed && C ? this.options.ticks_labels.length - (f + 1) : f;B.className = "slider-tick-label", B.innerHTML = this.options.ticks_labels[D], this.tickLabels.push(B), this.tickLabelContainer.appendChild(B);
                                                                                        }var E = function E(a) {
                                                                                                              var b = document.createElement("div");b.className = "tooltip-arrow";var c = document.createElement("div");c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c);
                                                                                        },
                                                                                            F = document.createElement("div");F.className = "tooltip tooltip-main", F.setAttribute("role", "presentation"), E(F);var G = document.createElement("div");G.className = "tooltip tooltip-min", G.setAttribute("role", "presentation"), E(G);var H = document.createElement("div");H.className = "tooltip tooltip-max", H.setAttribute("role", "presentation"), E(H), this.sliderElem.appendChild(r), this.sliderElem.appendChild(F), this.sliderElem.appendChild(G), this.sliderElem.appendChild(H), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(m), this.sliderElem.appendChild(n), q.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
                                                                  }if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), g[this.options.scale] && (this.options.scale = g[this.options.scale]), p === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function (a) {
                                                                                        this._removeProperty(this.trackLow, a), this._removeProperty(this.trackSelection, a), this._removeProperty(this.trackHigh, a);
                                                                  }, this), [this.handle1, this.handle2].forEach(function (a) {
                                                                                        this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top");
                                                                  }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (a) {
                                                                                        this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top"), this._removeClass(a, "right"), this._removeClass(a, "left"), this._removeClass(a, "top");
                                                                  }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = o, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = k || this.trackLow, this.trackSelection = j || this.trackSelection, this.trackHigh = l || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = m || this.handle1, this.handle2 = n || this.handle2, p === !0) for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), f = 0; f < this.ticks.length; f++) {
                                                                                        this._removeClass(this.ticks[f], "round triangle hide");
                                                                  }var I = ["round", "triangle", "custom"],
                                                                      J = -1 !== I.indexOf(this.options.handle);if (J) for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), f = 0; f < this.ticks.length; f++) {
                                                                                        this._addClass(this.ticks[f], this.options.handle);
                                                                  }if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable) {
                                                                                        var K = !1;try {
                                                                                                              var L = Object.defineProperty({}, "passive", { get: function get() {
                                                                                                                                                          K = !0;
                                                                                                                                    } });window.addEventListener("test", null, L);
                                                                                        } catch (M) {}var N = K ? { passive: !0 } : !1;this.sliderElem.addEventListener("touchstart", this.touchstart, N), this.sliderElem.addEventListener("touchmove", this.touchmove, N);
                                                                  }if (this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0;else {
                                                                                        if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
                                                                                                              var O = this._addTickListener(),
                                                                                                                  P = O.addMouseEnter(this, this.handle1),
                                                                                                                  Q = O.addMouseLeave(this, this.handle1);this.handleCallbackMap.handle1 = { mouseEnter: P, mouseLeave: Q }, P = O.addMouseEnter(this, this.handle2), Q = O.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = { mouseEnter: P, mouseLeave: Q };
                                                                                        } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1);this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1);
                                                                  }this.options.enabled ? this.enable() : this.disable();
                                            }var f = { formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(a) {
                                                                                        return "Invalid input value '" + a + "' passed in";
                                                                  }, callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method" },
                                                g = { linear: { toValue: function toValue(a) {
                                                                                                              var b = a / 100 * (this.options.max - this.options.min),
                                                                                                                  c = !0;if (this.options.ticks_positions.length > 0) {
                                                                                                                                    for (var d, e, f, g = 0, h = 1; h < this.options.ticks_positions.length; h++) {
                                                                                                                                                          if (a <= this.options.ticks_positions[h]) {
                                                                                                                                                                                d = this.options.ticks[h - 1], f = this.options.ticks_positions[h - 1], e = this.options.ticks[h], g = this.options.ticks_positions[h];break;
                                                                                                                                                          }
                                                                                                                                    }var i = (a - f) / (g - f);b = d + i * (e - d), c = !1;
                                                                                                              }var j = c ? this.options.min : 0,
                                                                                                                  k = j + Math.round(b / this.options.step) * this.options.step;return k < this.options.min ? this.options.min : k > this.options.max ? this.options.max : k;
                                                                                        }, toPercentage: function toPercentage(a) {
                                                                                                              if (this.options.max === this.options.min) return 0;if (this.options.ticks_positions.length > 0) {
                                                                                                                                    for (var b, c, d, e = 0, f = 0; f < this.options.ticks.length; f++) {
                                                                                                                                                          if (a <= this.options.ticks[f]) {
                                                                                                                                                                                b = f > 0 ? this.options.ticks[f - 1] : 0, d = f > 0 ? this.options.ticks_positions[f - 1] : 0, c = this.options.ticks[f], e = this.options.ticks_positions[f];break;
                                                                                                                                                          }
                                                                                                                                    }if (f > 0) {
                                                                                                                                                          var g = (a - b) / (c - b);return d + g * (e - d);
                                                                                                                                    }
                                                                                                              }return 100 * (a - this.options.min) / (this.options.max - this.options.min);
                                                                                        } }, logarithmic: { toValue: function toValue(a) {
                                                                                                              var b = 1 - this.options.min,
                                                                                                                  c = Math.log(this.options.min + b),
                                                                                                                  d = Math.log(this.options.max + b),
                                                                                                                  e = Math.exp(c + (d - c) * a / 100) - b;return Math.round(e) === d ? d : (e = this.options.min + Math.round((e - this.options.min) / this.options.step) * this.options.step, e < this.options.min ? this.options.min : e > this.options.max ? this.options.max : e);
                                                                                        }, toPercentage: function toPercentage(a) {
                                                                                                              if (this.options.max === this.options.min) return 0;var b = 1 - this.options.min,
                                                                                                                  c = Math.log(this.options.max + b),
                                                                                                                  d = Math.log(this.options.min + b),
                                                                                                                  e = Math.log(a + b);return 100 * (e - d) / (c - d);
                                                                                        } } };if (d = function d(a, b) {
                                                                  return e.call(this, a, b), this;
                                            }, d.prototype = { _init: function _init() {}, constructor: d, defaultOptions: { id: "", min: 0, max: 10, step: 1, precision: 0, orientation: "horizontal", value: 5, range: !1, selection: "before", tooltip: "show", tooltip_split: !1, handle: "round", reversed: !1, rtl: "auto", enabled: !0, formatter: function formatter(a) {
                                                                                                              return Array.isArray(a) ? a[0] + " : " + a[1] : a;
                                                                                        }, natural_arrow_keys: !1, ticks: [], ticks_positions: [], ticks_labels: [], ticks_snap_bounds: 0, ticks_tooltip: !1, scale: "linear", focus: !1, tooltip_position: null, labelledby: null, rangeHighlights: [] }, getElement: function getElement() {
                                                                                        return this.sliderElem;
                                                                  }, getValue: function getValue() {
                                                                                        return this.options.range ? this._state.value : this._state.value[0];
                                                                  }, setValue: function setValue(a, b, c) {
                                                                                        a || (a = 0);var d = this.getValue();this._state.value = this._validateInputValue(a);var e = this._applyPrecision.bind(this);this.options.range ? (this._state.value[0] = e(this._state.value[0]), this._state.value[1] = e(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = e(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();var f = this.options.range ? this._state.value : this._state.value[0];return this._setDataVal(f), b === !0 && this._trigger("slide", f), d !== f && c === !0 && this._trigger("change", { oldValue: d, newValue: f }), this;
                                                                  }, destroy: function destroy() {
                                                                                        this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"));
                                                                  }, disable: function disable() {
                                                                                        return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this;
                                                                  }, enable: function enable() {
                                                                                        return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this;
                                                                  }, toggle: function toggle() {
                                                                                        return this._state.enabled ? this.disable() : this.enable(), this;
                                                                  }, isEnabled: function isEnabled() {
                                                                                        return this._state.enabled;
                                                                  }, on: function on(a, b) {
                                                                                        return this._bindNonQueryEventHandler(a, b), this;
                                                                  }, off: function off(b, c) {
                                                                                        a ? (this.$element.off(b, c), this.$sliderElem.off(b, c)) : this._unbindNonQueryEventHandler(b, c);
                                                                  }, getAttribute: function getAttribute(a) {
                                                                                        return a ? this.options[a] : this.options;
                                                                  }, setAttribute: function setAttribute(a, b) {
                                                                                        return this.options[a] = b, this;
                                                                  }, refresh: function refresh() {
                                                                                        return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), a && a.data(this.element, "slider", this), this;
                                                                  }, relayout: function relayout() {
                                                                                        return this._resize(), this._layout(), this;
                                                                  }, _removeSliderEventHandlers: function _removeSliderEventHandlers() {
                                                                                        if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
                                                                                                              for (var a = this.ticksContainer.getElementsByClassName("slider-tick"), b = 0; b < a.length; b++) {
                                                                                                                                    a[b].removeEventListener("mouseenter", this.ticksCallbackMap[b].mouseEnter, !1), a[b].removeEventListener("mouseleave", this.ticksCallbackMap[b].mouseLeave, !1);
                                                                                                              }this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1);
                                                                                        }this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1)), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), window.removeEventListener("resize", this.resize, !1);
                                                                  }, _bindNonQueryEventHandler: function _bindNonQueryEventHandler(a, b) {
                                                                                        void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []), this.eventToCallbackMap[a].push(b);
                                                                  }, _unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(a, b) {
                                                                                        var c = this.eventToCallbackMap[a];if (void 0 !== c) for (var d = 0; d < c.length; d++) {
                                                                                                              if (c[d] === b) {
                                                                                                                                    c.splice(d, 1);break;
                                                                                                              }
                                                                                        }
                                                                  }, _cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
                                                                                        for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) {
                                                                                                              var c = a[b];delete this.eventToCallbackMap[c];
                                                                                        }
                                                                  }, _showTooltip: function _showTooltip() {
                                                                                        this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0;
                                                                  }, _hideTooltip: function _hideTooltip() {
                                                                                        this._state.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1;
                                                                  }, _setToolTipOnMouseOver: function _setToolTipOnMouseOver(a) {
                                                                                        function b(a, b) {
                                                                                                              return b ? [100 - a.percentage[0], this.options.range ? 100 - a.percentage[1] : a.percentage[1]] : [a.percentage[0], a.percentage[1]];
                                                                                        }var c = this.options.formatter(a ? a.value[0] : this._state.value[0]),
                                                                                            d = a ? b(a, this.options.reversed) : b(this._state, this.options.reversed);this._setText(this.tooltipInner, c), this.tooltip.style[this.stylePos] = d[0] + "%";
                                                                  }, _addTickListener: function _addTickListener() {
                                                                                        return { addMouseEnter: function addMouseEnter(a, b, c) {
                                                                                                                                    var d = function d() {
                                                                                                                                                          var b = a._state,
                                                                                                                                                              d = c >= 0 ? c : this.attributes["aria-valuenow"].value,
                                                                                                                                                              e = parseInt(d, 10);b.value[0] = e, b.percentage[0] = a.options.ticks_positions[e], a._setToolTipOnMouseOver(b), a._showTooltip();
                                                                                                                                    };return b.addEventListener("mouseenter", d, !1), d;
                                                                                                              }, addMouseLeave: function addMouseLeave(a, b) {
                                                                                                                                    var c = function c() {
                                                                                                                                                          a._hideTooltip();
                                                                                                                                    };return b.addEventListener("mouseleave", c, !1), c;
                                                                                                              } };
                                                                  }, _layout: function _layout() {
                                                                                        var a;if (a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), isNaN(this.options.formatter(this._state.value[0])) && this.handle1.setAttribute("aria-valuetext", this.options.formatter(this._state.value[0])), this.handle2.style[this.stylePos] = a[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), isNaN(this.options.formatter(this._state.value[1])) && this.handle2.setAttribute("aria-valuetext", this.options.formatter(this._state.value[1])), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) for (var b = 0; b < this.options.rangeHighlights.length; b++) {
                                                                                                              var c = this._toPercentage(this.options.rangeHighlights[b].start),
                                                                                                                  d = this._toPercentage(this.options.rangeHighlights[b].end);if (this.options.reversed) {
                                                                                                                                    var e = 100 - d;d = 100 - c, c = e;
                                                                                                              }var f = this._createHighlightRange(c, d);f ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[b].style.top = f.start + "%", this.rangeHighlightElements[b].style.height = f.size + "%") : (this.options.rtl ? this.rangeHighlightElements[b].style.right = f.start + "%" : this.rangeHighlightElements[b].style.left = f.start + "%", this.rangeHighlightElements[b].style.width = f.size + "%") : this.rangeHighlightElements[b].style.display = "none";
                                                                                        }if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                                                                                                              var g,
                                                                                                                  h = "vertical" === this.options.orientation ? "height" : "width";g = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft";var i = this._state.size / (this.options.ticks.length - 1);if (this.tickLabelContainer) {
                                                                                                                                    var j = 0;if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[g] = -i / 2 + "px"), j = this.tickLabelContainer.offsetHeight;else for (k = 0; k < this.tickLabelContainer.childNodes.length; k++) {
                                                                                                                                                          this.tickLabelContainer.childNodes[k].offsetHeight > j && (j = this.tickLabelContainer.childNodes[k].offsetHeight);
                                                                                                                                    }"horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = j + "px");
                                                                                                              }for (var k = 0; k < this.options.ticks.length; k++) {
                                                                                                                                    var l = this.options.ticks_positions[k] || this._toPercentage(this.options.ticks[k]);this.options.reversed && (l = 100 - l), this.ticks[k].style[this.stylePos] = l + "%", this._removeClass(this.ticks[k], "in-selection"), this.options.range ? l >= a[0] && l <= a[1] && this._addClass(this.ticks[k], "in-selection") : "after" === this.options.selection && l >= a[0] ? this._addClass(this.ticks[k], "in-selection") : "before" === this.options.selection && l <= a[0] && this._addClass(this.ticks[k], "in-selection"), this.tickLabels[k] && (this.tickLabels[k].style[h] = i + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[k] ? (this.tickLabels[k].style.position = "absolute", this.tickLabels[k].style[this.stylePos] = l + "%", this.tickLabels[k].style[g] = -i / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[k].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[k].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[g] = this.sliderElem.offsetWidth / 2 * -1 + "px"));
                                                                                                              }
                                                                                        }var m;if (this.options.range) {
                                                                                                              m = this.options.formatter(this._state.value), this._setText(this.tooltipInner, m), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%";var n = this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min, n);var o = this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max, o), this.tooltip_min.style[this.stylePos] = a[0] + "%", this.tooltip_max.style[this.stylePos] = a[1] + "%";
                                                                                        } else m = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, m), this.tooltip.style[this.stylePos] = a[0] + "%";if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";else {
                                                                                                              "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(a[0], a[1]) + "%" : this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";var p = this.tooltip_min.getBoundingClientRect(),
                                                                                                                  q = this.tooltip_max.getBoundingClientRect();"bottom" === this.options.tooltip_position ? p.right > q.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : p.right > q.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
                                                                                        }
                                                                  }, _createHighlightRange: function _createHighlightRange(a, b) {
                                                                                        return this._isHighlightRange(a, b) ? a > b ? { start: b, size: a - b } : { start: a, size: b - a } : null;
                                                                  }, _isHighlightRange: function _isHighlightRange(a, b) {
                                                                                        return a >= 0 && 100 >= a && b >= 0 && 100 >= b ? !0 : !1;
                                                                  }, _resize: function _resize(a) {
                                                                                        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
                                                                  }, _removeProperty: function _removeProperty(a, b) {
                                                                                        a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b);
                                                                  }, _mousedown: function _mousedown(a) {
                                                                                        if (!this._state.enabled) return !1;a.preventDefault && a.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];var b = this._getPercentage(a);if (this.options.range) {
                                                                                                              var c = Math.abs(this._state.percentage[0] - b),
                                                                                                                  d = Math.abs(this._state.percentage[1] - b);this._state.dragged = d > c ? 0 : 1, this._adjustPercentageForRangeSliders(b);
                                                                                        } else this._state.dragged = 0;this._state.percentage[this._state.dragged] = b, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;var e = this._calculateValue();return this._trigger("slideStart", e), this._setDataVal(e), this.setValue(e, !1, !0), a.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
                                                                  }, _touchstart: function _touchstart(a) {
                                                                                        if (void 0 === a.changedTouches) return void this._mousedown(a);var b = a.changedTouches[0];this.touchX = b.pageX, this.touchY = b.pageY;
                                                                  }, _triggerFocusOnHandle: function _triggerFocusOnHandle(a) {
                                                                                        0 === a && this.handle1.focus(), 1 === a && this.handle2.focus();
                                                                  }, _keydown: function _keydown(a, b) {
                                                                                        if (!this._state.enabled) return !1;var c;switch (b.keyCode) {case 37:case 40:
                                                                                                                                    c = -1;break;case 39:case 38:
                                                                                                                                    c = 1;}if (c) {
                                                                                                              if (this.options.natural_arrow_keys) {
                                                                                                                                    var d = "vertical" === this.options.orientation && !this.options.reversed,
                                                                                                                                        e = "horizontal" === this.options.orientation && this.options.reversed;(d || e) && (c = -c);
                                                                                                              }var f = this._state.value[a] + c * this.options.step,
                                                                                                                  g = f / this.options.max * 100;if (this._state.keyCtrl = a, this.options.range) {
                                                                                                                                    this._adjustPercentageForRangeSliders(g);var h = this._state.keyCtrl ? this._state.value[0] : f,
                                                                                                                                        i = this._state.keyCtrl ? f : this._state.value[1];f = [h, i];
                                                                                                              }return this._trigger("slideStart", f), this._setDataVal(f), this.setValue(f, !0, !0), this._setDataVal(f), this._trigger("slideStop", f), this._layout(), this._pauseEvent(b), delete this._state.keyCtrl, !1;
                                                                                        }
                                                                  }, _pauseEvent: function _pauseEvent(a) {
                                                                                        a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1;
                                                                  }, _mousemove: function _mousemove(a) {
                                                                                        if (!this._state.enabled) return !1;var b = this._getPercentage(a);this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b, this._layout();var c = this._calculateValue(!0);return this.setValue(c, !0, !0), !1;
                                                                  }, _touchmove: function _touchmove(a) {
                                                                                        if (void 0 !== a.changedTouches) {
                                                                                                              var b = a.changedTouches[0],
                                                                                                                  c = b.pageX - this.touchX,
                                                                                                                  d = b.pageY - this.touchY;this._state.inDrag || ("vertical" === this.options.orientation && 5 >= c && c >= -5 && (d >= 15 || -15 >= d) ? this._mousedown(a) : 5 >= d && d >= -5 && (c >= 15 || -15 >= c) && this._mousedown(a));
                                                                                        }
                                                                  }, _adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(a) {
                                                                                        if (this.options.range) {
                                                                                                              var b = this._getNumDigitsAfterDecimalPlace(a);b = b ? b - 1 : 0;var c = this._applyToFixedAndParseFloat(a, b);0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], b) > c ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._state.value[1] / this.options.max * 100 < a ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._state.value[0] / this.options.max * 100 > a && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
                                                                                        }
                                                                  }, _mouseup: function _mouseup() {
                                                                                        if (!this._state.enabled) return !1;this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();var a = this._calculateValue(!0);return this._layout(), this._setDataVal(a), this._trigger("slideStop", a), this._state.dragged = null, !1;
                                                                  }, _calculateValue: function _calculateValue(a) {
                                                                                        var b;if (this.options.range ? (b = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (b[0] = this._toValue(this._state.percentage[0]), b[0] = this._applyPrecision(b[0])), 100 !== this._state.percentage[1] && (b[1] = this._toValue(this._state.percentage[1]), b[1] = this._applyPrecision(b[1]))) : (b = this._toValue(this._state.percentage[0]), b = parseFloat(b), b = this._applyPrecision(b)), a) {
                                                                                                              for (var c = [b, 1 / 0], d = 0; d < this.options.ticks.length; d++) {
                                                                                                                                    var e = Math.abs(this.options.ticks[d] - b);e <= c[1] && (c = [this.options.ticks[d], e]);
                                                                                                              }if (c[1] <= this.options.ticks_snap_bounds) return c[0];
                                                                                        }return b;
                                                                  }, _applyPrecision: function _applyPrecision(a) {
                                                                                        var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a, b);
                                                                  }, _getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(a) {
                                                                                        var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
                                                                  }, _applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(a, b) {
                                                                                        var c = a.toFixed(b);return parseFloat(c);
                                                                  }, _getPercentage: function _getPercentage(a) {
                                                                                        !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type || (a = a.touches[0]);var b = a[this.mousePos],
                                                                                            c = this._state.offset[this.stylePos],
                                                                                            d = b - c;"right" === this.stylePos && (d = -d);var e = d / this._state.size * 100;return e = Math.round(e / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (e = 100 - e), Math.max(0, Math.min(100, e));
                                                                  }, _validateInputValue: function _validateInputValue(a) {
                                                                                        if (isNaN(+a)) {
                                                                                                              if (Array.isArray(a)) return this._validateArray(a), a;throw new Error(f.formatInvalidInputErrorMsg(a));
                                                                                        }return +a;
                                                                  }, _validateArray: function _validateArray(a) {
                                                                                        for (var b = 0; b < a.length; b++) {
                                                                                                              var c = a[b];if ("number" != typeof c) throw new Error(f.formatInvalidInputErrorMsg(c));
                                                                                        }
                                                                  }, _setDataVal: function _setDataVal(a) {
                                                                                        this.element.setAttribute("data-value", a), this.element.setAttribute("value", a), this.element.value = a;
                                                                  }, _trigger: function _trigger(b, c) {
                                                                                        c = c || 0 === c ? c : void 0;var d = this.eventToCallbackMap[b];if (d && d.length) for (var e = 0; e < d.length; e++) {
                                                                                                              var f = d[e];f(c);
                                                                                        }a && this._triggerJQueryEvent(b, c);
                                                                  }, _triggerJQueryEvent: function _triggerJQueryEvent(a, b) {
                                                                                        var c = { type: a, value: b };this.$element.trigger(c), this.$sliderElem.trigger(c);
                                                                  }, _unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
                                                                                        this.$element.off(), this.$sliderElem.off();
                                                                  }, _setText: function _setText(a, b) {
                                                                                        "undefined" != typeof a.textContent ? a.textContent = b : "undefined" != typeof a.innerText && (a.innerText = b);
                                                                  }, _removeClass: function _removeClass(a, b) {
                                                                                        for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                                                                                                              var f = c[e],
                                                                                                                  g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)");d = d.replace(g, " ");
                                                                                        }a.className = d.trim();
                                                                  }, _addClass: function _addClass(a, b) {
                                                                                        for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                                                                                                              var f = c[e],
                                                                                                                  g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
                                                                                                                  h = g.test(d);h || (d += " " + f);
                                                                                        }a.className = d.trim();
                                                                  }, _offsetLeft: function _offsetLeft(a) {
                                                                                        return a.getBoundingClientRect().left;
                                                                  }, _offsetRight: function _offsetRight(a) {
                                                                                        return a.getBoundingClientRect().right;
                                                                  }, _offsetTop: function _offsetTop(a) {
                                                                                        for (var b = a.offsetTop; (a = a.offsetParent) && !isNaN(a.offsetTop);) {
                                                                                                              b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop);
                                                                                        }return b;
                                                                  }, _offset: function _offset(a) {
                                                                                        return { left: this._offsetLeft(a), right: this._offsetRight(a), top: this._offsetTop(a) };
                                                                  }, _css: function _css(b, c, d) {
                                                                                        if (a) a.style(b, c, d);else {
                                                                                                              var e = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) {
                                                                                                                                    return b.toUpperCase();
                                                                                                              });b.style[e] = d;
                                                                                        }
                                                                  }, _toValue: function _toValue(a) {
                                                                                        return this.options.scale.toValue.apply(this, [a]);
                                                                  }, _toPercentage: function _toPercentage(a) {
                                                                                        return this.options.scale.toPercentage.apply(this, [a]);
                                                                  }, _setTooltipPosition: function _setTooltipPosition() {
                                                                                        var a = [this.tooltip, this.tooltip_min, this.tooltip_max];if ("vertical" === this.options.orientation) {
                                                                                                              var b;b = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right";var c = "left" === b ? "right" : "left";a.forEach(function (a) {
                                                                                                                                    this._addClass(a, b), a.style[c] = "100%";
                                                                                                              }.bind(this));
                                                                                        } else "bottom" === this.options.tooltip_position ? a.forEach(function (a) {
                                                                                                              this._addClass(a, "bottom"), a.style.top = "22px";
                                                                                        }.bind(this)) : a.forEach(function (a) {
                                                                                                              this._addClass(a, "top"), a.style.top = -this.tooltip.outerHeight - 14 + "px";
                                                                                        }.bind(this));
                                                                  } }, a && a.fn) {
                                                                  var h = void 0;a.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), h = c) : (a.bridget(b, d), h = b), a.bridget(c, d), a(function () {
                                                                                        a("input[data-provide=slider]")[h]();
                                                                  });
                                            }
                      }(a), d;
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var _this = this;

$('.filter_checked').change(function (event) {
    $.ajax({
        url: '/getCountOfChoice',
        type: 'POST',
        dataType: 'json',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            params: $('#filter_form').serialize()
        },
        beforeSend: function beforeSend() {
            $('.ajax-loader').css('display', 'block');
            $('.filter_count').css('display', 'none');
        },
        success: function success(message) {
            $('.ajax-loader').css('display', 'none');
            $('.filter_count').css('display', 'block');
            $('#count_choosen').text(message.all);
            var parentElement = event.target.parentElement;
            $(parentElement).prepend($('.filter_count'));
            $(_this).parent('div').append($('.filter_count'));
        },
        error: function error(_error) {
            console.log(_error);
            $('.ajax-loader').css('display', 'none');
        }
    });
});
$('#showButton').click(function () {
    $("#filter_form").submit();
});
$('#close_counter').click(function () {
    $('.filter_count').css('display', 'none');
});
$('#toggle_country').on('click', function () {
    var country_value = $('#country_visible').val();
    if (country_value == 0) {
        $('#country_visible').val(1);
        $('#country_block').css('display', 'block');
        $('#country_icon').removeClass('fas fa-plus');
        $('#country_icon').addClass('fas fa-minus');
    } else {
        $('#country_visible').val(0);
        $('#country_block').css('display', 'none');
        $('#country_icon').removeClass('fas fa-minus');
        $('#country_icon').addClass('fas fa-plus');
    }
});

$('#toggle_color').click(function () {
    var country_value = $('#color_visible').val();
    if (country_value == 0) {
        $('#color_visible').val(1);
        $('#color_block').css('display', 'block');
        $('#color_icon').removeClass('fas fa-plus');
        $('#color_icon').addClass('fas fa-minus');
    } else {
        $('#color_visible').val(0);
        $('#color_block').css('display', 'none');
        $('#color_icon').removeClass('fas fa-minus');
        $('#color_icon').addClass('fas fa-plus');
    }
});

$('#toggle_sweet').click(function () {
    var country_value = $('#sweet_visible').val();
    if (country_value == 0) {
        $('#sweet_visible').val(1);
        $('#sweet_block').css('display', 'block');
        $('#sweet_icon').removeClass('fas fa-plus');
        $('#sweet_icon').addClass('fas fa-minus');
    } else {
        $('#sweet_visible').val(0);
        $('#sweet_block').css('display', 'none');
        $('#sweet_icon').removeClass('fas fa-minus');
        $('#sweet_icon').addClass('fas fa-plus');
    }
});
$("#clear-btn").click(function (event) {
    window.location.hash = $(event.target).attr('href');
    window.location.reload();
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

$(function () {
    $("#slider_price").slider({
        min: minPriceEnable,
        max: maxPriceEnable,
        step: 100,
        range: true,
        orientation: 'horizontal',
        value: [current_minPrice, currentMaxPrice]
    }).on('slideStop', function (event) {
        var _values = event.target.value;
        $("#price_min").val(_values[0]);
        $("#price_max").val(_values[1]);
        $("#price_min").trigger('change');
        $("#price_max").trigger('change');
    });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

$(document).ready(function () {
    $('#wine_name').keyup(function (event) {
        var query = event.target.value;
        $("#wineList ul").empty();
        $('#wineList').css('display', 'none');
        if (query != '') {
            $.ajax({
                url: '/autocomplete?',
                type: 'GET',
                data: {
                    wine_name: query
                },
                success: function success(list) {
                    if (list.wines.length != 0) {
                        $('#wineList').css('display', 'block');
                        $("#wineList ul").empty();
                        $.each(list.wines, function (index, wine) {
                            $('#wineList ul').append($("<li><a href='" + searchLink + wine.id + "#vines'>" + wine.name_rus + "</a>" + "</li>"));
                        });
                    } else {
                        $('#wineList').css('display', 'none');
                    }
                },
                error: function error(_error) {
                    $('#wineList').css('display', 'none');
                    console.log(_error);
                }
            });
        }
    });
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

$('.wine').on('click touchstart', function (event) {
    $("#wineModal").modal({
        show: true
    });
    var Card = $(event.target).closest('.card');
    var image_src = Card.find('.wine_img');
    var wine_name_rus = Card.find('.name_rus');
    var wine_color = Card.find('.color_wine');
    var wine_sweet = Card.find('.sweet_wine');
    var wine_country = Card.find('.country_wine');
    var region_name = Card.find('.region_name');
    var strength = Card.find('.strength');
    var year = Card.find('.year');
    var price_cup = Card.find('.price_cup');
    var price_bottle = Card.find('.price_bottle');
    var volume = Card.find('.volume');
    var sort_contain = Card.find('.sort_contain');
    $('#image_wine').attr('src', image_src.attr('src'));
    $('#name_rus').text(wine_name_rus.text());
    $('#color_wine').text(wine_color.text());
    $('#sweet_wine').text(wine_sweet.text());
    $("#country_wine").text(wine_country.text());
    $("#region_name").text(region_name.text());
    $('#strength').text(strength.val() + " %");
    $('#year').text(year.val() + " г");
    $('#price_cup').text(price_cup.text());
    $("#price_bottle").text(price_bottle.text());
    $("#volume").text(volume.text());
    $("#sort_contain").text(sort_contain.val());
});

/***/ })
/******/ ]);