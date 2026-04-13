from turtle import *

BG_COLOR= "#231C29"

screen = Screen()
screen.colormode(255)

t1 = Turtle()
t1.screen.bgcolor(BG_COLOR)
t1.speed(13)

t1.left(90)
t1.backward(100)

def tree(i):
    if i <10:
        return

    t1.forward(i)
    t1.color("red")
    t1.circle(2)
    t1.color("blue")
    t1.left(30)
    tree(3*i/4)
    t1.right(60)
    tree(3*i/4)
    t1.left(30)
    t1.backward(i)

tree(100)