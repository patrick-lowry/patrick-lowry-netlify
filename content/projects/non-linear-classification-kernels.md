---
type: SimpleProjectLayout
date: 2024-08-10T00:00:00.000Z
title: Non-Linear Classification
subtitle: How to classify linearly-non-separable data by first transforming it.
thumbnailImage: /images/non-linear-classification.png
bannerImage: /images/non-linear-classification.png
---

Classification refers to being able to group things into one set or another based upon their features. Thus, if you collected a series of data about plants such as height, width, colour etc. you might be able to use this data to classify the plants into ‘perennial’ or ‘annual’. Here the features are height, width and colour.

Considering for simplicity, the case of 2-dimensional data (ie where I have only 2 features to work with), classification techniques attempt to draw a straight line to separates the data points into different groups, where each group represents a different category. You can see this by plotting the points on a graph, each axis representing a feature and perhaps the colour of the point you plot indicating what group it belongs to. It should be easy to see whether or not you can draw a line to separate the different colours. If you can, the data is linearly separable, if you can't it's not!

When you have more than 2 features it becomes difficult to visualise, but the idea is exactly the same — we are still trying to find some kind of “flat surface” (called a **dividing plane** or **decision boundary**) that separates one group of points from another. 

One of the simplest algorithms that does this is the **Perceptron**. It starts with a rough guess for where the dividing plane should be and then repeatedly adjusts it whenever it classifies a point incorrectly. Over time, the line moves into a better position. If a clean separating line does exist, the Perceptron is guaranteed to find one (although not necessarily the best possible one).

**Non Linearly Separate Data**

But what if no straight line can separate the data? The spiral pattern above is a classic example. The two groups of points (purple and pink) are tightly intertwined and no matter how you draw a straight line, it will always cut through both groups. In two dimensions, this data simply cannot be separated by a straight line. The solution is to add additional dimensions to the data you already have. This is called **Feature Transformation**.

The key idea behind feature transformation is to create additional features (dimensions) based on the ones you already have. For example, if a point is described by two features, x1 and x2, we might add a third value that is some combination of those two. This effectively lifts the data into a higher-dimensional space with the objective that, by adding extra dimensions, points that were tangled together in 2D can become neatly separated when viewed from this higher dimension.

In this project, different ways of transforming the spiral data were explored by adding new features and then checking whether the two groups could be separated after the transformation. The following types of transformations were investigated:

* Simple linear transformations
* Polynomial transformations (adding curved features)
* Radial Basis Function (RBF) transformations (which measure distance to key points)

**Simple linear transformations**

Linear transformations add new features by performing linear operations on the existing features you have. For example, if you have a series of points each with two features - say x1 and x2, using a simple linear transformation you could add a third feature that's a simple linear operation of the other two. For example x3 = 2 x1 + 5 x2 By linear we mean that the x1 and x2 features are not squared or cubed. From a practical point of view, simple linear transformations are only re-express the same data in a different orientation or scale. They can make separation easier when the problem is mostly about alignment — for example, when the points are separable but the line just needs to be rotated or shifted. 

However, because they do not add any curvature, they cannot solve problems where the data is fundamentally intertwined.

**Polynomial transformations**

Polynomial transformations add extra features that can add curvature to the current points. With polynomial transformations, new features are created using curved combinations of the original values allowing a curved decision boundary to be traced between the points rather than a straight line. For example x3 = 2x1 + 3x1² + 5 x2³. This allows the transformed space to bend and curve, making it possible to separate data that cannot be handled using straight lines alone. This approach can work well for moderately complex structures, but as the shapes become more tangled, polynomial features can become inefficient or hard to tune.

Radial Basis Function (RBF) transformations

Radial Basis Functions create new features using an exponential function, but that exponential is applied to distance. Instead of trying to draw lines or curves through the data, RBF Transformations describe each point by how close it is to other points. This often makes highly complex patterns much easier to separate, because local structure becomes more important than the overall geometry. In practice, RBF-based approaches are often effective when simpler transformations fail.
