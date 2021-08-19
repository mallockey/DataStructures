/*
Given n ropes of different lengths represented by an array of integers, connect them all into a single rope in a way that minimizes the cost of connecting them.

The cost of connecting two ropes is equal to sum of their lengths. We want to minimize the cost of connecting all the ropes.

Input: ropes, [Integer]
Output: Integer

In: [4, 3, 2, 6]
Out: 29

Explanation:

First we connect 3 + 2 = 5, giving the following ropes: [4,5,6]
Then we connect 5 + 4 = 9, giving the following ropes: [9,6]
Then we connect 9 + 6 = 15, giving the final combination of all ropes: [15]

So in total the cost for the most efficient approach is: 5 + 9 + 15 = 29

In: [4, 3, 2, 6]

4 + 6 = 10 -> [3,2,10]
10 + 3 = 13 -> [13,2]
13 + 2 = 15 -> [15]

totalCost = 33

[4, 3, 2, 6]


In: [4, 3, 2, 6, 10, 7]       

   //convert the array to a min heap

                            2
                          /   \
                        3       4
                       /  \      \
                      6   10      7
              
    3 + 2
      5 
    [4, 5, 6 ,10, 7]
      4 + 5
        9
      [9, 6, 10, 7]
          7 + 6 
            13
        [9, 10, 13]
          10 + 9
             19
          [19, 13]
            19 + 13 
              [32]


              
       
          15 + 10
          25 + 3
          28
          32
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(N)

N = # of Ropes
*/
