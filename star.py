from turtle import *

BG_COLOR= "#231C29"
screen = Screen()
screen.colormode(255)

t1 = Turtle()
t1.screen.bgcolor(BG_COLOR)
t1.speed(13)

t1.penup()
t1.goto(200,200)
t1.pendown()

a = 0
b = 0
c = 0


while True:
    t1.right(23)
    for i in range(4):
        t1.forward(100)
        t1.right(110)

        a+=3
        b+=1

        r = (255*(b/210)+255)%255
        g = (255*(b/210)+255)%255

        color = (int(r), int(g),255)
        t1.color(color)

    c+=1
    if c == 50:
        break


t1.hideturtle()
screen.exitonclick()