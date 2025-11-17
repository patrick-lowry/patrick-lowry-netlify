---
type: PostLayout
title: I Broke the Auto-Grader
date: 2023-10-15T00:00:00.000Z
series: My MSc Experience
excerpt: >-
  How I managed to do something so wrong that the automated grading system didn't know how to handle it.
thumbnailImage: /images/bg2.jpg
---

## The Assignment

We had a programming assignment. Implement a neural network from scratch. How hard could it be?

*Narrator: It was very hard.*

But I persevered! I wrote my code. I debugged my code. I tested my code. It worked! Well, it ran. Those are different things, but let's not split hairs.

## Submission Time

I submitted my assignment with confidence. The system said it would grade it automatically and return results in a few minutes.

Perfect.

## The First Sign Something Was Wrong

Ten minutes later: No results.
Twenty minutes: Still nothing.
Thirty minutes: Starting to worry.
One hour: Definitely worried.

I refreshed the page. There was a message:

*"Error: Unable to grade submission. Please contact teaching staff."*

Oh no.

## The Investigation

I emailed the TA. The response came quickly:

*"What did you do?? The auto-grader has never crashed before. It literally doesn't know how to handle your submission."*

Apparently, I had achieved something special. Not good-special. Special-special.

## What Went Wrong

After investigation, here's what happened:

1. The assignment asked us to implement a neural network
2. I implemented... something
3. That something was technically code
4. It was even technically Python
5. But it was so fundamentally wrong that the grading script couldn't comprehend it

The TA explained: "The auto-grader is designed to handle wrong answers. It's designed to handle partially correct answers. It's even designed to handle code that crashes. But your code... it runs, produces output, but that output is in a format that shouldn't be possible."

## The Silver Lining

The professor found it so interesting that he used my code as an example in the next lecture.

**Professor**: "This is a great example of how to think about edge cases in your own code."

*Shows my code on the projector*

**Professor**: "This student managed to do something I didn't think was possible. The output has the right shape, the right type, but the values... well, let's just say they're creative."

The whole class turned to look at me. I've never been more famous or more embarrassed.

## What I Actually Did Wrong

Turns out, I had misunderstood a fundamental concept about matrix dimensions. My neural network was:
- Taking the input
- Running it through a layer
- Outputting something
- That something was technically the right size
- But the values were completely meaningless

It was like asking for a calculator and receiving a device that displays random numbers in calculator font. Technically looks right...

## The Lesson

1. **Just because code runs doesn't mean it's correct**
2. **Auto-graders can be broken**
3. **Breaking an auto-grader in a new way is both impressive and terrifying**
4. **Always, ALWAYS check if your math makes sense**

## The Aftermath

The TA helped me fix my code. It turns out when you actually understand what you're supposed to do, the code works much better!

Who knew?

They also updated the auto-grader to handle my specific brand of chaos. I'm now immortalized in the grading system as a cautionary tale.

**Error handling comments in the new code:**
```python
# Handle edge case discovered by student in 2023
# If you're reading this: please don't do what they did
```

I'm famous! Sort of. In the worst way possible.

*Note to self: "Making the grading system crash" is not the kind of extra credit I was hoping for...*
