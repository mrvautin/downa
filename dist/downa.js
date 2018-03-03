(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.downa = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
const rules = {
    headers: {
        regex: /(#+)(.*)/gm,
        replacer: function (match, $1, $2) {
            const h = $1.trim().length;
            return `<h${h}>${$2.trim()}</h${h}>`;
        }
    },
    links: {
        regex: /\[([^\[]+)\]\(([^\)]+)\)/gm,
        replacer: function (match, $1, $2) {
            return `<a href='${$2}'>${$1}</a>`;
        }
    },
    bold: {
        regex: /(\*\*|__)(.*?)\1/gm,
        replacer: function (match, $1, $2) {
            return `<strong>${$2}</strong>`;
        }
    },
    emphasis: {
        regex: /(\*|_)(.*?)\1/gm,
        replacer: function (match, $1, $2) {
            return `<em>${$2}</em>`;
        }
    },
    del: {
        regex: /\~\~(.*?)\~\~/gm,
        replacer: function (match, $1, $2) {
            return `<del>${$1}</del>`;
        }
    },
    quote: {
        regex: /\:\"(.*?)\"\:/gm,
        replacer: function (match, $1, $2) {
            return `<q>${$1}</q>`;
        }
    },
    blockCode: {
        regex: /```([^```]+)```/gm,
        replacer: function (match, $1, $2) {
            return `<pre><code>${$1}</code></pre>`;
        }
    },
    inlineCode: {
        regex: /`([^`]+)`/gm,
        replacer: function (match, $1, $2) {
            return `<code>${$1}</code>`;
        }
    },
    ulLists: {
        regex: /\*+(.*)?/gm,
        replacer: function (match, $1, $2) {
            return `<ul>\n\t<li>${$1.trim()}</li></ul>`;
        }
    },
    olLists: {
        regex: /\n[0-9]+\.(.*)/g,
        replacer: function (match, $1, $2) {
            return `\n<ol>\n\t<li>${$1.trim()}</li></ol>`;
        }
    },
    hr: {
        regex: /\n-{5,}/gm,
        replacer: function () {
            return '<hr />';
        }
    },
    blockQuote: {
        regex: /\n(&gt;|\>)(.*)/gm,
        replacer: function ($match, $1, $2) {
            return `\n<blockquote>${$2}</blockquote>`;
        }
    },
    // paragraphs: {
    //     regex: /\n([^\n]+)\n/gm,
    //     replacer: function($match, $1){
    //         let trimmed = $1.trim();
    //         if (/^<\/?(ul|ol|li|h|p|bl|code|table|tr|td)/i.test(trimmed)) {
    //             return `\n${trimmed}\n`;
    //         }
    //         return `\n<p>${trimmed}</p>\n`;
    //     }
    // },
    fixUl: {
        regex: /<\/ul>\s?<ul>/gm,
        replacer: function ($match, $1) {
            return '';
        }
    },
    fixOl: {
        regex: /<\/ol>\s?<ol>/gm,
        replacer: function ($match, $1) {
            return '';
        }
    },
    fixBlockquote: {
        regex: /<\/blockquote>\s?<blockquote>/g,
        replacer: function ($match, $1) {
            return '';
        }
    }
};
/**
 * @param  {String} markdown A string of Markdown content
 * @returns {String} A HTML formatted string
 */
function render(markdown) {
    Object.keys(rules).forEach(function (key) {
        markdown = markdown.replace(rules[key].regex, rules[key].replacer);
    });
    return markdown.trim();
};

module.exports = {
    render
};

},{}]},{},[1])(1)
});