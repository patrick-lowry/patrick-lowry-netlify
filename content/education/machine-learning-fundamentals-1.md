---
type: SimpleProjectLayout
title: ML Fundamentals Part 1
date: 2024-01-15T00:00:00.000Z
subheader: A high level overview
description: >-
  A high-level introduction to machine learning concepts - part 1
thumbnailImage:
shortDescription: >-
  A 10,000 ft introduction to Machine Learning.
bannerImage:
---

# Introduction
If you're shown a picture of a lion, how do you know its a lion? Were you born with the ability to identify different animals? Of course not. In school, you were probably shown pictures of various animals with the name of the animal written underneath it. Maybe you were a quick learner and learnt to identify animals very quickly, but its more likely that you were shown a pictures a few times until you could remember it.

What's happening during this learning process??? You can imagine that, deep in your brain, connections were being made between your neurons, somehow storing (or encoding), what a lion is, what a tiger is etc. The next time you see an animal that you've learned you can imagin that the visual signals from your eye would 'match' the encodings you learned as a child for what that animal looks like.

This process of learning in humans is very similar to how Machine Learning works - in fact, in Machine Learning terminology, this is an example of 'Supervised Learning'. 

So how does a machine 'learn' what a lion looks like? Just like for humans, a machine learning model for image recognition learns by being shown many different labelled images of animals, but rather than building relationships between neurons, it builds a mathematical model consisting of a network of inter-connected 'nodes' - the strength of connections between nodes is slightly different for different animals. 

It can take make thousands of images for this interconnected network to be built. Once learning is complete, we say the model has been 'trained' and hopefully, when is presented with an image of a lion that was not in the imges used in training, if the network has been properly set, it should be able to determine that the pattern of pixels in the image match the patterns it has stored as representing a lons. Simple!

This example introduces some key Machine Learning concepts:

- **Model** To use the example above, the model is best thought of as how images of different animals are stored in a network and associated with that animal. In humans, the model consists of the neural connections in our brains that somehow encode what a cat or dog looks like. I

- **Training (Learning)** This is the process by which the model is created - i.e. how relationships are built. In Supervised Learning this is achieved by feeding in 1000's of images of animals into the Machine Learning system, each image is labelled with the type of animal that's in the picture. This allows the machine learning system to build a representation of what a 'lion' is versus a 'cat', for instance.

Note that training is a one-off activity, once a model has finished training, the relationships are set and do not change.

- **Inference** - Inference refers to the process of using the trained model on a new piece of data to identify what that new piece of data is. So for example, an image recognition model that has been trained on images of animals should be able to identify a lion in an image it has never seen before.

# Types of Learning
There are three ways Machine's 'learn' : Supervised Learning, Unsupervised Learning and Reinforcement Learning.

### Supervised Learning
The animal example described above is an example of 'Supervised Learning'. During the learning phase, a model is built by providing it with many examples of pre-labeled data that 'tell' the model what type of data it is. 

### Unsupervised Learning
With Unsupervised learning, the model is also fed large quantities of data - but in this case it's not told what the data represents - there are no labels provided. There's no teacher telling the model what each bit of data is, instead the model analyses the data itself and tries to group it into clusters by finding hidden patterns. 

For example, let's say you collected data about the characteristics of 1000's of plants - including colour, height, width, whether or not the plant produces flowers. An Unsupervised Learning model would group the plant data into clusters according to their characteristics. Thus a model might identify 4 clusters of plants - tall with flowers, tall without flowers, short with flowers, short without flowers. 

The power of this type of learning comes from the model being able to parse vast quantities of data, especially when each bit of data (in this case each bit of data represents a plant) has a high numbers of characteristics (also called features). The model can spot patterns in the data that might not be immediatly aparent to a human. For example, when presented with data about patients (age, sex, cholesterol level, weight, height etc etc), a model might group patients into different clusters base, pointing medics in one direction or another or allowing them to identify previously unseen risk factors.

### Reinforcement Learning
Reinforcement Learning is fundamentally different from Supervised and Unsupervised Learning. Rather than learning from labeled examples (Supervised Learning) or finding patterns in unlabeled data (Unsupervised Learning), a model in Reinforcement Learning learns through trial and error by receiving feedback on its actions. 

Imagine a child learning to ride a bike. They don't need someone to label every movement as "correct" or "incorrect." Instead, they try different things, and when they wobble and fall, that's negative feedback that teaches them to adjust. When they stay balanced, that's positive feedback. Over many attempts, they learn which actions lead to success.

Similarly, a Reinforcement Learning model learns by taking actions, receiving rewards or penalties based on those actions, and gradually improving its decision-making to maximize rewards over time.


## Types of Machine Learning Problem
There are two fundamental types of problem that can be solved via Machine Learning. These problem types lie at the heart of all machine learning models that you may be familiar with - including Large Language Models!

- **Regression** Refers to predicting something on a 'continuous' scale - for example the temperature or the price of a stock. This is a continuous problem because temperature can take any value on a continuous scale.
- **Classification** Refers to predicting something 'discrete' - for example whether an image is a cat or a dog. Word prediction is also an example of classification - in this case a model tries to predict what word comes next in a sentence. This is a discrete problem because the model is choosing from a finite set of options (the words in the dictionary).


<!--
This is easiest to understand within the context of image recognition. Let's say we wanted to create a model capable of detecting what animal appears in a photo. We would first find 1000's of images of different animals and label them according to which animal is in the picture. In the learning phase, we would feed the model the pictures of each animal in succession and each time we'd also tell it what animal is in the photo. Under the covers, the model builds a detailed relationship between all the pixels in the image and, over many examples, it will be able to detect slightly different relationships between pixels containing a cat versus one containing a dog. Because we're telling the model what each picture is, this form of training is called 'Supervised Learning'.

You could imagine a teacher in a classroom showing image after image of animals to his or her students. Each time the teacher tells the student what animal is in the picture. After a few examples, the student will be able to quickly recognise what animal is in the photo without being told. A supervised model works in exactly the same way.

For inference, a new photo will be ingested without a label and the model will essentially 'guess' (infer) what animal is in the photo using the relationships it has established during learning.
-->

