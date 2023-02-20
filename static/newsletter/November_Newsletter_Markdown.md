<a href="https://ibb.co/frFrPkp"><img src="https://i.ibb.co/44t458T/MM-Logo-No-BG.png" alt="MM-Logo-No-BG" border="0" /></a>

<div style="text-align: center;">



MUSTANG
=======

MATH
====

MEMO
====

## November 2022, Issue #2

</div>

# Message From The Director


Dear Mustang Math Community,

We just ran our 1st ever Mustang Mini Math Tournament (3MT) on 11/19/2022! The event went wonderfully, with over 150 individuals from around the US and Canada participating. Congratulations to all the students who participated, we are incredibly proud of how well you did! Unlike our upcoming Mustang Math Tournament 2023 on 4/29/2022, this event was our first ever individual tournament, designed to provide students with an opportunity to test their competition math skills near the start of the competition season in order to help them discover where they can work on before the later competitions!  
  
For our organizing team, the event brought a lot of our various teams together. This was the first competition to debut different tests for different divisions, so our problem writing team worked to produce not one, but three unique tests, allowing us to better ensure that all of our competitors receive tests that are both approachable but also challenging. Our tech team worked hard to improve our overall online contest experience, integrating ContestDojo with Discord to ensure students had a solid and clear registration experience, and enabling proctoring to help mitigate cheating which is a concern in online contests. The Community Engagement team worked to put on exciting and high-quality activities for the students to unwind with after the tournament was complete. And, of course, the Tournament Development team worked tirelessly to keep the competition experience smooth so our competitiors had the best experience possible.  
  
We're already diligently preparing for our MMT 2023, which will include both an online option as well as two in-person competitions in the states of Washington and California, and are excited for you all to participate!

Thanks,  
Arpit Ranasaria  
_Director_

# Mustang Math Updates


<table border="0">
 <tr>
    <td><b style="font-size:30px">Tournaments</b></td>
    <td><b style="font-size:30px">News</b></td>
 </tr>
 <tr>
    <td>MMT 2023 will be held on April 29th 2023. Mark your calenders!</td>
    <td>Signups for new Mustang Math subject classes starting soon! For more information visit: <a href="https://www.mustangmath.com/classes">here!</a>
  
These classes will be run year-round and will be split into 4 main topics: Algebra, Combinatorics, Number Theory, and Geometry, each run for 8 weeks. Instructive sessions will run for 90 minutes every week over Zoom. Additionally, teachers will hold office hours each week, during which students can seek assistance with the content or ask any lingering questions. Each class will have 10-15 students and, depending on the interest we receive, there may be multiple classes run for each level. The total cost for 8 weeks of classes will be $80 with financial aid available.</td>
 </tr>
  <tr>
    <td><b style="font-size:30px">Message for Sponsors</b></td>
    <td><b style="font-size:30px">MM Community</b></td>
 </tr>
 <tr>
    <td>If you're interesting in sponsoring Mustang Math or any of our competitions, please contact <a href="sponsorships@mustangmath.com">sponsorships@mustangmath.com</a></td>
    <td>Mustang Math is planning to host an Holiday Event on 12/30 at 1:30 PST/4:30 EST. The event will involve holiday trivia and fun math questions. To participate in the event join Mustang Math’s community server: <a href="https://discord.gg/maNFVjrSnR">https://discord.gg/maNFVjrSnR</a> We would love to have you there!
    </td>
 </tr>
  <t>
</table>



# Other Mathematical Opportunities


## Here are some awesome opportunities for middle school students!

**Math Kangaroo**: September 15th - December 15th (regular $21)

[https://mathkangaroo.org/mks/](https://mathkangaroo.org/mks/)

Math Kangaroo is a math competition open to grades 1-12. Regular individual registration is 21 USD until December 16th, while school registration is free. The competition will take place both online and in-person on March 16, 2023. For more details, visit [here](https://mathkangaroo.org/mks/).

**Noetic Learning Math Competition**

NLMC is a semi-annual math competition for elementary and middle schoolers. In the fall, the school competition will be held from November 10th-November 23rd, and the individual competition will be held from November 25th-December 2nd. For more details, visit [here](https://www.noetic-learning.com/mathcontest/details.jsp).

**MathCON**

MathCON is an annual test for elementary students through high schoolers. The first round, the online test, is held between January 18th and March 10th 2023. The invitational final round is held in person at McCormick Place Convention Center Chicago, Illinois on April 30th. Regular registration is open!

## Hockey Sticks in Math?


Many of you have probably seen hockey sticks in the context of sports, but what about in the context of math? In combinatorics, or the math of counting things, hockey sticks are used to show a very interesting property rightly called the Hockey Stick Identity. Here’s how:

Let’s pretend we have $7$ members, and we need to choose $3$ people to be on a committee. We have $7$ options for our first member, $6$ for our second member, and $5$ for our third member. We take this product, $7 \cdot 6 \cdot 5$, and divide it by $6 (2 \cdot 1)$ because we don’t really care in what order these members are picked. This is also known as a combination, or choosing some part of the total and having them unordered. The notation is ${7 \choose 3}$. Now, we have the numbers $1,2,3$ to hand out to our club members. Those with a number will be on our committee. If person a gets a number, we need to choose $2$ more people to be on the committee. This can be split up into distinct cases, where in each case, person a gets a number and the remaining $2$ members are chosen from the $a-1$ people left. These $2$ members can be chosen from a pool of minimum $2$ and maximum $6$, as we already have our third person chosen in each case. This can be written as:
$$\begin{equation*}
{6 \choose 2} + {5 \choose 2} + {4 \choose 2} + {3 \choose 2} + {2 \choose 2}
\end{equation*}$$
 which returns $35$, the same as ${7 \choose 3}$. This can be generalized to the identity ${n+1 \choose k+1} = {n \choose k} + {n \choose k} + \dots + {k+1 \choose k} + {k \choose k}$, where $n+1$ is the size of the club and $k+1$ is the size of the committee. But now you’re wondering, where do hockey sticks come into play?
 
 For that, we need to take a look at Pascal’s triangle. Pascal’s triangle represents binomial coefficients and the values we get when finding the number of combinations. We start with three $1$’s in the shape of a triangle and slowly expand outwards. It looks like this, where the $n$-th row and $k$-th column is ${n \choose k}$:


<div align="center">

| **n** |   |   |   |   |   |    |    |    | **k** |    |    |    |   |   |   |   |
|---|---|---|---|---|---|----|----|----|----|----|----|----|---|---|---|---|
| 0 |   |   |   |   |   |    |    |    | 1  |    |    |    |   |   |   |   |
| 1 |   |   |   |   |   |    |    | 1  |    | 1  |    |    |   |   |   |   |
| 2 |   |   |   |   |   |    | 1  |    | 2  |    | 1  |    |   |   |   |   |
| 3 |   |   |   |   |   | 1  |    | 3  |    | 3  |    | 1  |   |   |   |   |
| 4 |   |   |   |   | 1 |    | 4  |    | 6  |    | 4  |    | 1 |   |   |   |
| 5 |   |   |   | 1 |   | 5  |    | 10 |    | 10 |    | 5  |   | 1 |   |   |
| 6 |   |   | 1 |   | 6 |    | 15 |    | 20 |    | 15 |    | 6 |   | 1 |   |
| 7 |   | 1 |   | 7 |   | 21 |    | 35 |    | 35 |    | 21 |   | 7 |   | 1 |


</div>

Now, let's pretend $n = 6$ and $k = 2$, like our initial example. We circle all the numbers in the rows with $k = 2$ and stop once we circle $6$. These numbers form a diagonal. If we mark ${7 \choose 3}$ as well, we observe what happens when we leave the diagonal. Every time we leave the diagonal, there is only $1$ path to get to $(7,3)$, as we can only go down to the right and down to the left. So, the number of ways to get to $(7,3)$ is equal to the sum of the numbers in the diagonal above it, creating the shape of a hockey stick. The sum of the numbers is the diagonal can be written as ${6 \choose 2} + {5 \choose 2} + {4 \choose 2} + {3 \choose 2} + {2 \choose 2}$ by using Pascal's triangle, which is the same identity we found earlier. 

<div align="center">

| n |   |   |   |   |   |    |          |          | k       |         |         |    |   |   |   |   |
|---|---|---|---|---|---|----|----------|----------|---------|---------|---------|----|---|---|---|---|
| 0 |   |   |   |   |   |    |          |          | 1       |         |         |    |   |   |   |   |
| 1 |   |   |   |   |   |    |          | 1        |         | 1       |         |    |   |   |   |   |
| 2 |   |   |   |   |   |    | 1        |          | 2       |         | &#9312; |    |   |   |   |   |
| 3 |   |   |   |   |   | 1  |          | 3        |         | &#9314;|         | 1  |   |   |   |   |
| 4 |   |   |   |   | 1 |    | 4        |          | &#9317; |         | 4       |    | 1 |   |   |   |
| 5 |   |   |   | 1 |   | 5  |          | &#9321; |         | 10      |         | 5  |   | 1 |   |   |
| 6 |   |   | 1 |   | 6 |    | &#9326; |          | 20      |         | 15      |    | 6 |   | 1 |   |
| 7 |   | 1 |   | 7 |   | 21 |          | &#12895; |         | 35      |         | 21 |   | 7 |   | 1 |

</div>

## The Bridges of Königsberg and Graph Theory


There are seven bridges in the city of Königsberg. They connect two islands in the middle of a river to each other. They also connect two pieces of land from each river to each other. A tour guide wants to lead a tour throughout the city. Naturally, they want to take the tourists to as many places in the city as they can. Is there a way they can travel on every bridge in the city, but only cross each bridge once? To get the answer, read below!

<div style="text-align: center;">

[Read more](https://mcusercontent.com/c80101147f7690b2cd88056c7/files/6ba0c3de-0595-c995-c2b5-429a06307bf5/Overview_of_Graph_Theory.pdf)

</div>

## Racing Riddle


A census taker visits the home of a mathematician and asks for the ages of his children. The mathematician replies, “Let me offer you a riddle to make this interesting. If you add up the ages of my 3 children you will get the number of my house, and if you multiply the ages of my children you will get 72.”

The census taker tries to figure it out but eventually replies, “I still do not know.”

The mathematician says, “I forgot to mention: my oldest child loves chocolate chip cookies.” The census taker nods to acknowledge he has figured it out.

What are the ages of the 3 children?


([Source](https://mindyourdecisions.com/blog/2016/02/21/classic-impossible-riddle-what-are-the-ages-of-the-children-sunday-puzzle/))


## Mathematician of the Month

<a href="https://imgbb.com/"><img src="https://i.ibb.co/1sM6w5T/Shakuntala-Devi.jpg" alt="Shakuntala-Devi" border="0"></a>




Shakuntala Devi was born on November 4th, 1929 in Bengaluru, India. Born as the daughter of a circus performer, her family financial status was not stable enough to provide formal education for her. However, Shakuntala was a gifted child with such amazing mathematical talent. Without getting taught by someone, Shakuntala was able to repute complicated calculations from her early age. When Shakuntala was three years old, she was able to win all the card games against her father by memorizing all the numbers and the sequence. At age of five, she was already an expert in mental arithmetic. His father, who was very surprised after discovering her phenomenal ability, began to take his daughter on tours and let her daughter perform her amazing mathematical calculations to the audience. Quickly, Shakuntala earned her fame and popularity in India.

Her journey to math did not stop in India, she traveled across the world and demonstrated her skills. In 1977, the Southern Methodist University asked Shakuntala to solve the 23rd root of a 201 digit number, which she was able to solve in 50 seconds while a Univac computer took more than a minute to solve it. In the 1980, the Computer Department of Imperial College asked her to do multiplication of two 13-digit numbers. The two numbers were 7,686,369,774,870 and 2,465,099,745,779. Shakuntala was able to give the answer 18,947,668,177,995,426,462,773,730 in 28 seconds and she earned the Guiness Book of Records title. In acknowledgement of her talent, she was credited with the title “Human Computer”. To find more about her, please check out the film “Shakuntala Devi” on Amazon Prime.

<br/><br/>

*Thank you so much for reading our newsletter! Stay tuned for more exciting newsletters just like this one each month! For more information about Mustang Math, visit: [https://mustangmath.com](https://mustangmath.com).*




