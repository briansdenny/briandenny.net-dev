---
title: Guiding Users Through Unintuitive jSign UI
date: 2023-06-22
toc: false
tags:
 
summary: Visual demonstration of vital (yet clunky) web app functionality
 

---

## Problem
The first major update to a document signing website recently acquired by Consensus Cloud Solutions allowed users to send multiple documents at once, a sorely needed feature. However, immediately following the update, the customer support team began receiving numerous calls from customers who could not locate their additional documents. On the document preparation page, users wanting to access additional documents had to click on the document's title within the rightmost pane, but the additional document titles were housed beneath the already expanded pages of the initial document. Given the time and effort that would be required for the developers to correct this design issue, Product leadership instead looked to Whatfix for a solution.   

## Solution
I designed and created a **popup with an embedded GIF** (see below) showing users exactly where their additional documents were located. I used a GIF rather than written instructions because I understood that it would more quickly and easily inform users and save them from having to read, interpret, and apply precise instructions describing an already cluttered user interface. I designed the GIF and created it in Camtasia, using several visual effects to make it easier for users to follow along. I constructed the popup in Whatfix using jQuery selectors that identify users who are actually sending multiple documents to ensure only those users are shown the popup and only at the right time. I also included a simple feedback mechanism on the popup to help me evaluate its helpfulness. 

![screen reader text](jSignGIF.gif)

## Results 🤩
More than 80% of users who were shown the popup during the first half of 2024 said they found it helpful.  According to the product manager, the release of this popup coincided with a marked reduction in calls to CS about this particular user pain point.
<!--more-->
