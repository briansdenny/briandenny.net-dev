---
title: Using jQuery Selectors to Customize Microcontent Display Rules
date: 2024-01-01
tags:
  - Consensus
  - Teaching
  - Writing
summary: Internal teaching document with step-by-step instructions for identifying jQuery selectors and applying them to Whatfix display rules
---

## Problem
As Senior Technical Writer and Whatfix Lead at Consensus Cloud Solutions, part of my role entails transitioning a small group of technical writers away from traditional, single-source authoring and towards the regular design, creation, management, and analysis of in-app, just-in-time digital adoption microcontent. One aspect of this transition involves teaching my team how to utilize the web apps' underlying elements to customize the digital adoption content. This involves identifying HTML elements through jQuery or CSS selectors and including the selectors in Whatfix display rules. Given that my team has no prior involvement in web development and we work asynchronously, I needed to create a training document that my team could reference at their convenience.

## Solution
I compiled the following step-by-step instructions in a PDF as an easy reference sheet my team could use to begin exploring the process of identifying jQuery selectors.

<br/>

PROCEDURE #1: IDENTIFY A SELECTOR
Consider whether any element or bit of text on the web page appears or disappears when the Whatfix content/widget should also appear or disappear. For example:
To make a beacon visible only for users with more than one document, find a bit of text indicating how many documents are uploaded or an element that only appears/disappears when more than one document is uploaded.
To activate a Smart Tip when a user skips a form field, recreate that by skipping that form field and completing the following field.
Right-click on your element and select Inspect. The code inspector box will appear.
Examine the highlighted line of code in the code inspector.
The line of code begins with < which is followed by the element’s tag in purple font.
The element’s attributes appear in red font.
The content of each attribute appears in blue within quotation marks.
Any non-image text or numeric value that displays on the web page appears in black.
Construct a jQuery referencing one or more of the element’s features listed above.
Double-click on an attribute="content" combination within the element’s line of code, select the entire combination with your mouse, then copy it. Avoid copying content that includes numbers, since those may be dynamic resulting in an unreliable selector.
Tags, attributes, and values can include numbers.
Click on Console in the top menu of the code inspector box.
Clear the console with Ctrl+L or by clicking the  button in the top left.
Type in the following function:
jQuery('[]')
Paste your copied attribute="content" combination inside the two brackets.


```python
# Example of code highlighting
jQuery('[attribute="content"]')
```

jQuery('[attribute="content"]')
Hit Enter.
Determine whether the jQuery selector you selected is unique.
The code returned after hitting Enter should begin with w.fn.init
Red errors indicate a structural issue with the code you entered. Ensure the capitalization, order, punctuation, and spacing of your code match the code.
Click on the small black triangle icon at the left of the returned code. You will see either:
three lines of code with the first reading "length:  0" which means the jQuery could not identify any corresponding elements, or
a list of elements. Toward the end of that list will be a line reading "length: " followed by a number. That number indicates how many elements were identified by the jQuery selector.
The jQuery selector is unique if there is only one element in the list.
The line of code will begin with "0: " and the next line will read "length: 1".
If the jQuery selector you constructed is not unique, you can either:
Use the jQuery selector in your Whatfix rule
Depending on how your rule should function, a jQuery selector that identify more than one element may be acceptable.
Search for a different unique element
Refine your current jQuery selector in one of three ways:
You can combine the attribute="content" with any number of parent attribute="content" combinations. However, it is best to aim for the fewest number possible.
The code for a child element is nested within its parent element’s code. The parent attributes and content will thus come from a line of code above the child element. For example:
If this document were code and this line an element, line 7ci1 would be its parent, 7ci its grandparent, etc.
jQuery('[grandparentattribute="content"] [parentattribute="content"] [childattribute="content"]')
You can include a value that is (or is not) in the element’s code.
jQuery('[attribute="content"]:contains(value)')
jQuery('[attribute="content"]:not(:contains(value))')
You can include a tag associated with the element.
jQuery('tag[parentattribute="content"] [attribute="content"]:not(:contains(value))')


PROCEDURE #2: CREATING WHATFIX RULES
Once you have identified an appropriate jQuery selector, you must create a Whatfix display rule.
Depending on the type of Whatfix content/widget and the rule type, you can select the following rule parameters from the display rule dropdown menus:
Other Element on Page combined with either Exists jQuery Selector or Not Exists jQuery Selector
Determines whether the element referenced by the selector is on the page
Action Element is combined with jQuery Selector
Determines whether a user clicks on the element referenced by the selector
When setting up the rule, you should copy and paste the selector from the code inspector. You will only copy what appears within the opening/closing brackets. The parentheses and single quotation marks are not part of the selector.
 
Do not include in rules:            	jQuery('                                      ')
 
For this jQuery selector:           	jQuery('[attribute="content"]')
Type this into Whatfix:             	 	[attribute="content"]
 
For this jQuery selector:           	jQuery('[attribute="content"] [attribute="content"]')
Type this into Whatfix:             	 	[attribute="content"] [attribute="content"]
 
For this jQuery selector:           	jQuery('[attribute="content"]:contains(value)')
Type this into Whatfix:             	 	[attribute="content"]:contains(value)
 
For this jQuery selector:            	jQuery('[attribute="content"]:not(:contains(value))')
Type this into Whatfix:             	 	[attribute="content"]:not(:contains(value))
 
For this jQuery selector:           	jQuery('tag[attribute="content"] tag[attribute="content"]')
Type this into Whatfix:             	 	tag[attribute="content"] tag[attribute="content"]

<!--more-->
