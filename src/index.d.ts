 /** An object with any value. */
interface dddLooseObject {
	[key: string] 	: any
}

 /** An object with function values. */
interface dddFunctionObject {
	[key: string] 	: Function
}

/** Default options for the class. */
interface dddOptions {
	
	/** The ellipsis to place after the truncated text. */
	ellipsis 	?: string,
	
	/** Function to invoke after the truncate process. */
	callback	?: Function,

	/** How to truncate: 'node', 'word' (default) or 'letter'. */
	truncate	?: string,

	/** Optional tolerance for the container height. */
	tolerance	?: number,

	/** Selector for elements not to remove from the DOM. */
	keep 		?: string,

	/** Whether and when to update the ellipsis: null, 'window' (default) or 'resize' */
	watch 		?: string,

	/** The height for the container. If null, the max-height will be read from the CSS properties. */
	height		?: number
}