---
type: SimpleProjectLayout
title: Machine Learning - Fundamentals 2
date: 2024-01-15T00:00:00.000Z
subheader: An overview
description: >-
  A high-level introduction to machine learning concepts.
thumbnailImage: /images/bg1.jpg
shortDescription: >-
bannerImage:
---

## Encoding and Vectors

Let's continue with some of the concepts discussed previously.

Under the covers, all computers work by processing numbers - they don't work directly with words or images. When you write a document on your PC or Mac, each letter is stored as a unique number using a standard encoding scheme (such as ASCII or Unicode -  in ASCII, the letter 'a' has the number 97). Similarly an image actually consists of 1000's of pixels - each pixel has an x, y coordinate (its position in the image) and 3 numerical values specifying how much Red, Green and Blue colour is within it. Essentially, whatever data you need to train a model on, must first be converted to some numerical representation - this process of converting data to numbers is called 'encoding'.

Does this mean that I can take a word and encode it by using the standard ASCII encoding of each letter in the word? Well, not quite. Taking language as an example, in order to model the enormous complexity of language and the relationships between words and the context within which they are used - many different numbers are needed. In fact, it is typical for a Langauge Model to represent (encode) each word as 300 different numbers! This list of numbers is referred to as a vector.

The word 'vector' sounds very technical - but all it is is a set of numbers to represent something. Your location in the world is a good example of a vector - to a person you meet, you might say that you live in 'London' but if you were a navigator you might instead refer to the longitude and latitude coordinates of London. Longitude and Latitude are just 2 numbers to represent a location - an example of a '2-dimensional vector' representing a location.

Let's take another example - an image. An image might have 1,024 x 1,024 pixels. If it's a colour image, each pixel will have a value for each of the Red, Green and Blue (RGB) colour components. Thus a single colour image of 1,024 x 1,024 pixels has 1,024 x 1,024 x 3 pieces of information about it - that's over 3 million pieces of data! In vector terms it is a 3-million dimensional vector.

Extending this to words, in modern Language Models each word is generally represented as a 300 dimension vector. Again, that just means that there are 300 different numbers used to represent each word in the dictionary. These 300 numbers aren't arbitrary, they're learned during training in a way that words with similar meanings end up with similar numerical representations. When training a Large Language Model, these numbers are tuned through a process similar to Supervised Learning in order to model the relationships between words and context.

<!--
## Types of Machine Learning Problem
There are two types of problem that can be solved via Machine Learning:

- **Regression** Refers to predicting something on a continuous scale - for example the weather, the price of a stock
- **Classification** Refers to predicting something 'discrete' - for example whether an image is a cat or a dog. Word prediction is also an example of classification - as the model is trying to predict what specific word from the dictionary comes next.
-->
