/*!
 *	dotdotdot JS 4.1.0
 *
 *	dotdotdot.frebsite.nl
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	License: CC-BY-NC-4.0
 *	http://creativecommons.org/licenses/by-nc/4.0/
 */
/** An object with function values. */
interface dddFunctionObject {
    [key: string]: Function;
}
/** Default options for the class. */
interface dddOptions {
    /** The ellipsis to place after the truncated text. */
    ellipsis?: string;
    /** Function to invoke after the truncate process. */
    callback?: Function;
    /** How to truncate: 'node', 'word' (default) or 'letter'. */
    truncate?: string;
    /** Optional tolerance for the container height. */
    tolerance?: number;
    /** Selector for elements not to remove from the DOM. */
    keep?: string;
    /** Whether and when to update the ellipsis: null, true or 'window' (default) */
    watch?: string;
    /** The height for the container. If null, the max-height will be read from the CSS properties. */
    height?: number;
}
/**
 * Class for a multiline ellipsis.
 */
export default class Dotdotdot {
    /**	Plugin version. */
    static version: string;
    /**	Default options. */
    static options: dddOptions;
    /** Element to truncate */
    container: HTMLElement;
    /** Inner element, added for measuring. */
    innerContainer: HTMLElement;
    /** Options. */
    options: dddOptions;
    /** The max-height for the element. */
    maxHeight: number;
    /** The ellipsis to use for truncating. */
    ellipsis: Text;
    /** The API */
    API: dddFunctionObject;
    /** Storage for the watch timeout, oddly it has a number type. */
    watchTimeout: number;
    /** Storage for the watch interval, oddly it has a number type. */
    watchInterval: number;
    /** Storage for the original style attribute. */
    originalStyle: string;
    /** Storage for the original HTML. */
    originalContent: Node[];
    /** Function to invoke on window resize. Needs to be stored so it can be removed later on. */
    resizeEvent: EventListener;
    /**
     * Truncate a multiline element with an ellipsis.
     *
     * @param {HTMLElement} 	container						The element to truncate.
     * @param {object} 			[options=Dotdotdot.options]		Options for the menu.
     */
    constructor(container: HTMLElement, options?: dddOptions);
    /**
     *	Restore the container to a pre-init state.
     */
    restore(): void;
    /**
     * Fully destroy the plugin.
     */
    destroy(): void;
    /**
     * Start a watch for the truncate process.
     */
    watch(): void;
    /**
     * Stop the watch.
     */
    unwatch(): void;
    /**
     * Start the truncate process.
     */
    truncate(): boolean;
    /**
     * Truncate an element by removing elements from the end.
     *
     * @param {HTMLElement} element The element to truncate.
     */
    _truncateToNode(element: HTMLElement): void;
    /**
     * Truncate a sentence by removing words from the end.
     *
     * @param {HTMLElement} element The element to truncate.
     */
    _truncateToWord(element: HTMLElement): void;
    /**
     * Truncate a word by removing letters from the end.
     *
     * @param 	{HTMLElement} element The element to truncate.
     */
    _truncateToLetter(element: HTMLElement): void;
    /**
     * Test if the content fits in the container.
     *
     * @return {boolean} Whether or not the content fits in the container.
     */
    _fits(): boolean;
    /**
     * Add the ellipsis to a text.
     *
     * @param 	{string} text 	The text to add the ellipsis to.
     * @return	{string}		The text with the added ellipsis.
     */
    _addEllipsis(text: string): string;
    /**
     * Sanitize and collect the original contents.
     *
     * @return {array} The sanitizes HTML elements.
     */
    _getOriginalContent(): HTMLElement[];
    /**
     * Find the max-height for the container.
     *
     * @return {number} The max-height for the container.
     */
    _getMaxHeight(): number;
    /** DOM traversing functions to uniform datatypes. */
    static $: {
        /**
         * Find elements by a query selector in an element.
         *
         * @param {string}		selector 			The selector to search for.
         * @param {HTMLElement}	[element=document]	The element to search in.
         * @return {array} 							The found elements.
         */
        find: (selector: string, element?: HTMLElement | Document) => HTMLElement[];
        /**
         * Collect child nodes (HTML elements and TextNodes) in an element.
         *
         * @param {HTMLElement}	[element=document]	The element to search in.
         * @return {array} 							The found nodes.
         */
        contents: (element?: HTMLElement | Document) => Node[];
    };
}
export {};
