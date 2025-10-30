---
type: PostLayout
title: Machine Learning Summary
colors: colors-a
date: '2024-10-30'
draft: true
excerpt: >-
  High level view of how Machine Learning actually works
featuredImage:
  type: ImageBlock
  url: /images/featured-Image1.jpg
  altText: Machine Learning
---

# How Machine Learning Works

Whats the next to appear in the series

a,b,c,?

Its 'd' right. HOw did you know that? were you born knowing the alphabet? Of course not, you learnt it off by heart be reciting the alphabet over and over. You can be 99% certain that if you see a sequence a,b,c that the next letter is 'd'. You were taught to remember this series by being told the right answer. And if 

IN Machine Learning terms, this is Supervised Learning - the next letter in the sequence is already known, the 'machine' will try to guess what it is (initially at random) and iof it gets it wrong it updates its settings so that the next time it might guess 'd', if it doesn;t it tries again until it gets the right answer. 

Concepts

Regression : Predict a continous value such as the weather
Classification : Predict a discrete value - is thi pictre a dog or is it not?





## Blog Series Structure - "How Machine Learning Really Works"

**Part 1: The Foundation**
- Alphabet analogy (supervised learning)
- Regression vs Classification concepts

**Part 2: The Geometry**
- Decision boundaries and separation lines
- Weight vectors perpendicular to boundaries
- Dot products and geometric intuition (|w||x|cos(θ)) - positive if same side as W
- The perceptron does just this - calssifies points by applying the dot product (+ bias)

**Part 3: The Linear Limitation**
- Why single perceptrons fail (XOR problem) - it will only work for linearly separable points
- Linearly vs non-linearly separable data
- So what can I do instead?

**Part 4: Breaking Through - Two Philosophies**
- **Approach 1:** Transform the data (RBF kernels, SVM)
- **Approach 2:** Transform the classifier (neural networks)
- Why this distinction matters (and confuses people!)

By transforming the data we add additional dimensions to the data point, the intention being that the values of the points in these dimensions allow them to be separated by some form of plane. For example, could use XOR problem where you cannot separate these points - try it, its not possible to draw aline to separate them!

Point 1 : (0,0)
Point 2 : (0,1)
Point 3 : (1,0)
Point 4 : (1,1)

But if we add an extra dimension we can separate them, For exampole x3 = x1 + x2, you then have:

(0,0,0) → 0
(0,1,0) → 1
(1,0,0) → 1
(1,1,1) → 0

Although it's hard to visualise, you can actually draw a plan to separate these points - they are linearly separable

For example, the plane z = 0.5 works perfectly:
  - Points with z < 0.5 → Class 1 (the three points with output 1)
  - Points with z > 0.5 → Class 0 (the one point with output 0)

Other transforms that work:
  - z = (x₁ - x₂)²
  - z = x₁ + x₂ - 2x₁x₂

The RBF Kernel

⏺ RBF (Radial Basis Function) kernels apply a distance-based transformation. The most common is the Gaussian RBF kernel:


  For each training point c (called a "center"), RBF adds a new dimension:
  new_feature = exp(-γ ||x - c||²)

  Where:
  - x = input point to transform
  - c = a training point (center)
  - ||x - c||² = squared Euclidean distance between x and c
  - γ = bandwidth parameter (controls how "wide" the influence is)

  What this does:
  - Creates a "bump" or "hill" centered at each training point
  - Points close to a center get high values (near 1)
  - Points far from a center get low values (near 0)
  - You get one new dimension per training point!

  For XOR example:
  If you have 4 training points, you get 4 new dimensions. Each dimension measures "how close am I to training point i?"

  The magic:
  This transforms your data into a space where each training point sits on its own "mountain peak." In this high-dimensional space, you can often draw a hyperplane that
  cleanly separates the classes.

  Key insight:
  RBF doesn't just add one dimension - it typically adds as many dimensions as you have training points. It's mapping to a very high-dimensional space where linear
  separation becomes possible through these distance-based features.

**Part 5: Building Complexity**
- Multi-layer perceptrons
- How ReLU creates "kinked" boundaries
- Why non-linear activations matter
- Universal approximation theorem

## Key Insights to Expand:
- Perceptron underpins all neural networks (with caveats about evolution)
- Classification = finding which side of boundary line a point lies on
- Weight vector geometry and dot product relationships
- Kernel trick vs neural network approaches - fundamental philosophical difference

*This post is in draft mode and won't appear publicly until draft: false is set.*