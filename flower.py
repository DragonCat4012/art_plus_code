from turtle import *

BG_COLOR= "#231C29"

screen = Screen()
screen.colormode(255)

t1 = Turtle()
t1.screen.bgcolor(BG_COLOR)
t1.speed(13)


for j in range(25):
    for i in range(15):
        r = int(((i/15)*255)%255)
        g = int(((j/15)*255)%255)

        color = (r, g,255)
        t1.color(color)
        t1.right(90)
        t1.circle(200-j*4,90)
        t1.left(90)
        t1.circle(200-j*4, 90)
        t1.right(180)
        t1.circle(50,24)
t1.hideturtle()
screen.exitonclick()

