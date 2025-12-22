---
type: SimpleProjectLayout
title: Machine Learning - 10,000ft view
date: 2024-01-15T00:00:00.000Z
subheader: An overview
description: >-
  A beginner-friendly introduction to machine learning concepts.
thumbnailImage: /images/bg1.jpg
shortDescription: >-
  Provides a very high level of overview of key Machine Learning concepts.
bannerImage: /images/bg1.jpg
---

## Introduction
There's a lot of uncertainty around AI and Machine Learning at present. The purpose of this short essay is to explain the key concepts at a very high level to increase understanding with minimal background.

## What is Machine Learning?
At the end of the day, Machine Learning is pattern-recognition on steroids - a machine (computer programme) processes vast quantities of data and identifies (ie learning) patterns and relationships within it. When presented with a new piece of data it hasn't seen before, the machine (computer programme) attempts to match it to the patterns it has previously seen and thus 'predict' what the data represents.


The 'learning' a machine does is essentially identifying patterns in the data and, in the case of 'Large Language Models' the learning consists of establishing relationships between words. In Medical Imaging, the 'machine' will analyse medical images and be able to identify anomalies that may indicate the presence of a cancer... but all the computer is doing is comparing the colours of adjacent pixels against colours it knows to indicate the presence of a tumour.

## Learning versus Inference
Machine Learning consists of two phases - the Learning phase and the Inference phase.

It's in the Learning phase that vast amounts of data are ingested. This allows a complex model to be developed - the model represents relationships between the data. The data can be anything but will depend upon what type of model it is you are trying to develop. For example, to develop a Language Model the data used in learning will be documents, web pages, code, manuals - anything text based. To develop a Medical Imaging model, the data would be... medical images!

The Inference phase refers to taking the model created during Learning and using it to 'predict' (or infer) things about a new piece of data. In a Language Model, inference typically means predicting what the next word will be, in medical imaging, inference might mean predicting whether a cell is cancerous or not.

## Learning - Two Types
There are two main ways that a machine can 'learn' - Supervised Learning and Unsupervised Learning.

### Supervised Learning

In supervised learning, during the learning phase, a model is built by providing it with many examples of pre-labeled data that 'tell' the model what type of data it is. This is easiest to understand within the context of image recognition. Let's say we wanted to create a model capable of detecting what animal appears in a photo. We would first find 1000's of images of different animals and label them according to which animal is in the picture. In the learning phase, we would feed the model the pictures of each animal in succession and each time we'd also tell it what animal is in the photo. Under the covers, the model builds a detailed relationship between all the pixels in the image and, over many examples, it will be able to detect slightly different relationships between pixels containing a cat versus one containing a dog. Because we're telling the model what each picture is, this form of training is called 'Supervised Learning'.

You could imagine a teacher in a classroom showing image after image of animals to his or her students. Each time the teacher tells the student what animal is in the picture. After a few examples, the student will be able to quickly recognise what animal is in the photo without being told. A supervised model works in exactly the same way.

For inference, a new photo will be ingested without a label and the model will essentially 'guess' (infer) what animal is in the photo using the relationships it has established during learning.


### Unsupervised Learning

With Unsupervised learning, the model is also fed large quantities of data - but in this case it is not told what the data represents - there are no labels provided, there's no teacher telling the model what each bit of data is. Instead it looks at the data itself and tries to group them into clusters by finding hidden patterns.

### How does a model find relationships?
You may be wondering how a model can find relationships between words or pixels in an image. The key to this is to understand that every piece of data a model works with, must first be converted to a set of numbers, called a vector.

The word 'vector' sounds very technical - but all it is is a set of numbers to represent something. Your location in the world is a good example of a vector - to a person you meet, you might say that you live in 'London' but if you were a navigator you might instead refer to the longitude and latitude coordinates of London. Longitude and Latitude are just 2 numbers to represent a location - an example of a '2-dimensional vector' representing a location.

Considering an image - well an image on a computer might have 1,024 x 1,024 pixels. If its a colour image, each pixel will have a value for each of the Red, Green and Blue (RGB) colour components. Thus a single colour image of 1,024 x 1,024 pixels has 1,024 x 1,024 x 3 pieces of information about it - thats over 3 million pieces of data! In vector terms it is a 3-million dimensional vector representing an image. 

With images represented as vectors, simple mathematical operations can measure how similar two vectors are. This allows a model to determine, with very high accuracy, whether a new image is more similar to the cat images it learned from or the aeroplane images.

Something similar happens with word prediction - each word is also represented as a vector of thousands of numbers. These numbers are chosen randomly at first but as the model is fed more and more data, the vectors representing words are tuned over and over again such that similar words come to have similar vector representations. This allows a model to predict the next word in a sequence.


## Key Terms

- **Model**: A model is what underpins all machine learning - the model is a complex representation of the data provided during learning that establishes relationships between data.
- **Learning (Training)**: The process of building a model by providing it with vast quantities of data - allowing it to build relationships between different data points
- **Inference**: Refers to a model using the internal relationships it has created during learning to predict what a new piece of data is
- **Supervised Learning**: Refers to the means of learning whereby each piece of data is accompanied by a label telling the model what the data is
- **Unsupervised Learning**: Reference to the means of learning whereby the model is not 'told' what each bit of data is (a cat or a dog) but groups different data into clusters just by finding patterns within the data itself
