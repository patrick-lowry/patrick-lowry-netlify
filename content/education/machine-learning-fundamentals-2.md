---
type: SimpleProjectLayout
title: ML Fundamentals Part 2
date: 2024-01-15T00:00:00.000Z
subheader: Data encoding and vectors
description: >-
  A high-level introduction to machine learning concepts.
thumbnailImage: /images/bg1.jpg
shortDescription: >-
  Understanding how machine learning models encode data as vectors and numbers.
bannerImage:
---

## Encoding Data

Under the covers, all computers work by processing numbers - they don't work directly with words or images. When you write a document on your PC or Mac, each letter is stored as a unique number using a standard encoding scheme (such as ASCII or Unicode -  in ASCII, the letter 'a' has the number 97). Similarly an image actually consists of 1000's of pixels - each pixel has an x, y coordinate (its position in the image) and 3 numerical values specifying how much Red, Green and Blue colour is within it. Essentially, whatever data you need to train a model on, must first be converted to some numerical representation - this process of converting data to numbers is called 'encoding'.

Does this mean that I can take a word and encode it by using the standard ASCII encoding of each letter in the word? Well, not quite. Taking language as an example, in order to model the enormous complexity of language and the relationships between words and the context within which they are used - many different numbers are needed. In fact, it is typical for a Language Model to represent (encode) each word as 300 different numbers!

## Vectors
The word 'vector' sounds very technical - but all it is is a set of numbers that represent something. Your location in the world is a good example of a vector - to a person you meet, you might say that you live in 'London' but if you were a navigator you might instead refer to the longitude and latitude coordinates of London. Longitude and Latitude simply provide an alternative way to represent a location as 2 numbers. This can be thought of as a 2-dimensional vector - the first dimension is longitude, the second is latitude.

Let's take another example - an image. An image might have 1,024 x 1,024 pixels. If it's a colour image, each pixel will have a value for each of the Red, Green and Blue (RGB) colour components. Thus a single colour image of 1,024 x 1,024 pixels has 1,024 x 1,024 x 3 pieces of information about it - that's over 3 million numbers to represent a single image! In vector terms it is a 3-million dimensional vector.

Extending this to words, in Language Models, each word is generally represented as a 300 dimension vector. Again, that just means that there are 300 different numbers used to represent each word in the dictionary. These 300 numbers can be arbitrarily assigned to each word at first, but during training they are updated in such a way that words with similar meanings end up with similar numerical representations.

## Why vectors?
Representing data as vectors is fundamental to how machines learn and create their internal representations. This is best understood using language as an example.

Lets start with location though. As described above, your location on the planet can be represented as a 2 dimensional vector - dimension 1 is latitude, dimension 2 is longitude. its easy to imagine plotting these points on a chart - with Latitude on the X-Axis and longitude on the Y-Axis. You'd find of course, that points on this graph would be plotted close to each other if those places that are close to each other geographically. 

This is fundamental to Machine Learning - being able to determine how 'close' one point is to another point. In langauge models 'close' means similar. Consider the words 'King' and 'Queen' - these are similar, much more similar than say 'King' and 'Waterfall'. If you could find a way to plot the 300 points for the word 'King', 'Wueen' and 'Waterfall' you;d expect King and Queen to be mich closer together than the word Waterfall.

## Vector Dot Product
Well surprise surprise - there is a very simple mathematical formula that can very quickly calculate how 'close' two vectors are to each other! And if the encoding of words into vectors is done correctly, this caluclation will yield a high value for the words 'King' and 'Queen' and a small value for the words 'King' and 'Waterfall'. This calculation is called the 'dot product'. In language modelling, the exact purpose of the training phase is to work out the values of the vectors such that words that are similar in language end up having vectors that give a high value for the dot-product. 

This calculation underpins all types of Machine Learning. It can be applied to vectors of any dimension to esatblish their closeness to each other. Itnis also the reason why companies like NVIDIA lie at the hear of Machine LEarning and Artificail Intelligence - they have developed microchips that are capable of calcualting dot products at extreme scale and speed!

