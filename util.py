def lerp(a, b, t):
    return a + (b - a) * t

def lerp_color(c1, c2, t):
    return (lerp(c1[0], c2[0], t),
            lerp(c1[1], c2[1], t),
            lerp(c1[2], c2[2], t))

def draw_gradient_line(turtle, start, end, steps, color_start, color_end, pen_size=3):
    turtle.penup()
    turtle.goto(start)
    turtle.pendown()
    turtle.hideturtle()
    turtle.colormode(1.0)  # use float RGB [0..1]
    turtle.pensize(pen_size)

    x0, y0 = start
    x1, y1 = end
    for i in range(steps):
        t = i / (steps - 1)
        x = x0 + (x1 - x0) * t
        y = y0 + (y1 - y0) * t
        color = lerp_color(color_start, color_end, t)
        turtle.pencolor(color)
        turtle.goto(x, y)