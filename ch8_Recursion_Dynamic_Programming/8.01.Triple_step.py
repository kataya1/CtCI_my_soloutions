def count_stair_ways(n):
    one_step = 1
    two_step = 2
    three_step = 4
    for i in range(3, n):
        one_step, two_step, three_step = two_step, three_step,  one_step + two_step + three_step
    return three_step
