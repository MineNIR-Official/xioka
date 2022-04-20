array s1
t1 = 0
score = 0
goto 35
display 2, 2
array x1
array x2
t = 0
rem
clc
a = rnd(2) - 1
b = rnd(2) - 1 
x2[0] = a 
x2[1] = b
text 0, 0, "score: " + score, 20, "black"
x1[0] = "no"
x1[1] = "no"
score = score + 1
plot a, b, "purple"
rem
x = getclick()
if x = "" then print "" else x1[0] = x[0]
if x = "" then print "" else x1[1] = x[1]
if x1[0] = x2[0] and x1[1] = x2[1] then goto 8
if t > t1 then goto 31
if x1[0] not = "no" then goto 31
rem print t
t = t + 1
pause 100
goto 20
clc
TEXT 0, 0, "you lose score: " + score, 25, "red"
score = 0
pause 3000
rem menu
display 1, 2
text 0, 0, "easy", 25, "green"
text 1, 0, "hard", 25, "red"
s1[0] = "no"
s1[1] = "no"
rem selection
s = getclick()
rem 
if s not = "" then s1[0] = s[0] 
if s1[0] = 0 then goto 48
if s1[0] = 1 then goto 51
goto 38
rem time limit
t1 = 8
goto 5
rem time limit
t1 = 5
goto 5
