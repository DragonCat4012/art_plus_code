from turtle import *
import random

from util import draw_gradient_line

BG_COLOR= "#231C29"

def main():
    t1 = Turtle()
    t1.screen.bgcolor(BG_COLOR)
    t1.color("white")

    screen = Screen()
    screen.colormode(255)


    for i in range(6):
        draw_spiral(Turtle(), t1.position())
        t1.forward(90)
        t1.left(300)

    screen.exitonclick()


def lerp(a,b,t): return int(a + (b-a)*t)


COLORS = ['#BFB2F3', "#96CAF7", '#9CDCAA', '#E5E1AB', '#F3C6A5', '#F8A3A8']

def hex_to_rgb(hexstr):
    s = hexstr.strip().lstrip('#')
    if len(s) == 3:
        s = ''.join(ch*2 for ch in s)
    if len(s) != 6:
        raise ValueError("Invalid hex color")
    return tuple(int(s[i:i+2], 16) for i in (0, 2, 4))

COLORS = ['#BFB2F3', "#96CAF7", '#9CDCAA', '#E5E1AB', '#F3C6A5', '#F8A3A8']

def draw_spiral(img, vert):
    img.penup()
    img.goto(vert) 
    img.pendown()
    i = 50 # 50

    for steps in range(i):
        for c in (COLORS):
            
            img.color(random.choice(COLORS) if bool(random.getrandbits(1)) else BG_COLOR)
            img.forward(steps)
            img.right(30)

    return


    for step in range(i):
        t = step / (i - 1) if i>1 else 0

        c1 = COLORS[i%len(COLORS)]
        c1_comps = hex_to_rgb(c1)
        c2 = COLORS[(i+1)%len(COLORS)]
        c2_comps = hex_to_rgb(c2)


        color = (lerp(c1_comps[0], c2_comps[0], t),lerp(c1_comps[1], c2_comps[0], t),lerp(c1_comps[2], c2_comps[0], t))   # red -> 0
       
        img.color(color[0], color[1], color[2])

        img.forward(step)
        img.right(30)


main()