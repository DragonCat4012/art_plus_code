from turtle import *
import random
import colorsys as cs

BG_COLOR= "#231C29"


screen = Screen()
screen.colormode(255)

t1 = Turtle()
t1.screen.bgcolor(BG_COLOR)


for j in range(25):
    for i in range(15):
        t1.color(cs.hsv_to_rgb(i/15, j/15,1))
        t1.right(90)
        t1.circle(200-j*4,90)
        t1.left(90)
        t1.circle(200-j*4, 90)
        t1.right(180)
        t1.circle(50,24)
t1.hideturtle()
screen.exitonclick()

