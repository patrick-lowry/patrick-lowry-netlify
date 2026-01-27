---
type: SimpleProjectLayout
date: 2024-05-30T00:00:00.000Z
title: Pixel Classification using Bayes Theorem
subtitle: >-
  Uses probability distributions to classify pixels as either being a skin pixel
  or not
thumbnailImage: /images/pixel-classification-bayes.png
bannerImage: /images/pixel-classification-bayes.png
---

This was the first part of an early Machine Vision lab. It's interesting because it illustrates Bayes Theorem in a visually striking way and demonstrates how it's possible (maybe) to classify pixels as one thing or another using probability distributions.

Objective

The objective is to build a simple model based upon Bayes Theorem which, when given the RGB values of any pixel from the image, should be able to determine if that pixel is a skin pixel or not. If you look at the pixels in the raw image you can see how there's quite a variation in their colouring - some are in sunlight, some are in shade. Also, the colour of the guitar body in the bottom right of the image is very similar to the colour of the left hand holding the guitar. Will a simple probability-based model be able to distinguish which pixels are which?

Inputs

Two images are provided - a real image and a mask of that same image. In this case, the image is a photo of Bob Dylan holding a guitar and tipping his hat. The mask image is an alternative view of the same Bob Dylan image but with only two colours - yellow and purple. Each yellow pixel in the mask corresponds to a pixel in the photo that's skin.

Approach

The approach is to build up two Gaussian probability distributions - one describing the probability distribution of skin-pixels and one describing the probability distribution on non-skin pixels. A Gaussian (normal) distribution is defined by the mean (average) and covariance (spread) of its values - this can be calculated by looping through each of the skin and non-skin pixels. 

These two distributions allow the calculation of the following probabilities:

* Distribution 1 (Skin): P\_1(RGB|SKIN) : ie the probability that a pixel represented by its RGB values has come from the distribution of skin pixels
* Distribution 2 (Non Skin): P\_2(RGB|NOT SKIN) ie the probability that a pixel represented by its RGB values has come from the distribution of non-skin pixels

Then, using Bayes Theorem, the posterior probability can be calculated of whether, given a pixel is it a skin pixel:  

* P(SKIN | RGB) = P\_1 (RGB|SKIN) \* P(SKIN) [/ ](/\() P(RGB)

Where 

* P(RGB) = P\_1(RGB | SKIN) \* P(SKIN) + P\_2(RGB | NOT SKIN) \* P(NOT SKIN)

P(SKIN) and P(NOT SKIN) are the prior probabilities—the proportion of skin pixels to non-skin pixels in the training mask. For example, if 30% of the mask pixels are yellow (skin), then P(SKIN) = 0.3.

Method

To build the distributions, one simply loops through each pixel in the image and the mask and collects two separate data sets. Set 1 contains the RGB values of pixels whose corresponding mask pixel is yellow (indicating that pixel represents skin). Set 2 does the same but for non-skin pixels. It is then possible to determine the mean vector μ and covariance matrix Σ of all the RGB values in each set - thus providing the parameters required to define each Gaussian distribution.

For each pixel, Bayes Theorem is then applied to calculate the posterior probability that a given pixel is from the skin distribution. The resulting probability is displayed in the image on the far right - with different colour intensities indicating the variation in probabilities that a pixel is a skin pixel.
