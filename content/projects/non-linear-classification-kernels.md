---
type: SimpleProjectLayout
title: Non Linear Classification
date: 2024-08-10T00:00:00.000Z
subheader: >-
  Exploring various transformations in order to classify data that's not
  linearly separable in its natural form.
description: >-
  Implementation of advanced kernel methods for non-linear classification
  problems using SVM, RBF, and custom kernel functions with performance
  optimization.
thumbnailImage: /images/non-linear-classification.png
shortDescription: >-
  Investigates various methods for transforming data that's not linearly
  separable, such that it can be classified. Includes SVM and the RBF kernel
bannerImage: /images/non-linear-classification.png
---

Traditional classification techniques rely on finding a dividing plane that can separate data into various classifications. In the simplest case of 2 dimensional data, one can see visually if the data can be separated by plotting the points and drawing a line. Points on one side of the line are of type A and on the other side are of type B. But what happens if the data is not linearly separable? Take for example this set of datapoints arranged in a spiral form - its not possible to draw a straight line to separate these points.

One way of separating the data is to transform it by adding extra dimensions. So for example, if I have podints in 2D with coordinates x1, x2, we may add x3 which is some function of x1 and x2. The hope being that there is a 3D plane that can separate these modified points. Or perhaps we need 4 dimensions or 5 dimensions etc.

There are various transformations that can be applied. In this project we investigate:

* Simple Linear
* Polynomial
* RBF Kernel
