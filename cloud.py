from turtle import *

BG_COLOR= "#231C29"

a = 0
b = 0

screen = Screen()
screen.colormode(255)

t1 = Turtle()
t1.screen.bgcolor(BG_COLOR)
t1.speed(13)

t1.penup()
t1.goto(200,200)
t1.pendown()

while True:
    t1.forward(a)
    t1.right(b)
    a+=3
    b+=1

    r = (255*(b/210)+255)%255
    g = (255*(b/210)-255)%255

    color = (int(r), int(g),255)
    t1.color(color)

    if b == 210:
        break


t1.hideturtle()
screen.exitonclick()