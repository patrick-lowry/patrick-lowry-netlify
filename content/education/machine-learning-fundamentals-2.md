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

# Introduction
Let's continue with some of the concepts discussed previously

# How does a model find relationships?
You may be wondering how a model can find relationships between words or pixels in an image. The key to this is to understand that every piece of data a model works with must first be converted to a set of numbers, called a vector.

The word 'vector' sounds very technical - but all it is is a set of numbers to represent something. Your location in the world is a good example of a vector - to a person you meet, you might say that you live in 'London' but if you were a navigator you might instead refer to the longitude and latitude coordinates of London. Longitude and Latitude are just 2 numbers to represent a location - an example of a '2-dimensional vector' representing a location.

Considering an image - well an image on a computer might have 1,024 x 1,024 pixels. If its a colour image, each pixel will have a value for each of the Red, Green and Blue (RGB) colour components. Thus a single colour image of 1,024 x 1,024 pixels has 1,024 x 1,024 x 3 pieces of information about it - thats over 3 million pieces of data! In vector terms it is a 3-million dimensional vector representing an image. 

With images represented as vectors, simple mathematical operations can measure how similar two vectors are. This allows a model to determine, with very high accuracy, whether a new image is more similar to the cat images it learned from or the aeroplane images.

Something similar happens with word prediction - each word is also represented as a vector of thousands of numbers. These numbers are chosen randomly at first but as the model is fed more and more data, the vectors representing words are tuned over and over again such that similar words come to have similar vector representations. This allows a model to predict the next word in a sequence.


## Types of Machine Learning Problem
There are two types of problem that can be solved via Machine Learning:

- **Regression** Refers to predicting something on a continuous scale - for example the weather, the price of a stock
- **Classification** Refers to predicting something 'discrete' - for example whether an image is a cat or a dog. Word prediction is also an example of classification - as the model is trying to predict what specific word from the dictionary comes next.
