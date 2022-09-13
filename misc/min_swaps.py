from pytest import approx
# Write a function to find out the minimum no of swaps required for bracket balancing in the given string.


def check(candidate):
    assert candidate("[]][][") == approx(
        2), "candidate(\"[]][][\") ==approx( 2)"
    assert candidate("[[][]]") == approx(
        0), "candidate(\"[[][]]\") ==approx( 0)"
    assert candidate("[[][]]][") == approx(
        1), "candidate(\"[[][]]][\") ==approx( 1)"


def swap_count(s):
    stack = []
    open_close = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    close_open = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    count = 0
    for i in s:
        if i in ['(', '[', '{']:
            if len(stack) != 0:
                try:
                    location = stack.index(open_close[i])
                except:
                    location = -1
                if location == -1:
                    stack.append(i)
                else:
                    count += len(stack) - location
                    stack.remove(open_close[i])
            else:
                stack.append(i)
        else:
            if len(stack) == 0:
                stack.append(i)
            else:
                if stack[-1] == close_open[i]:
                    stack.pop()
                else:
                    try:
                        location = stack.index(close_open[i])
                    except:
                        location = -1
                    if location == -1:
                        stack.append(i)
                    else:
                        count += len(stack) - location - 1
                        stack.remove(close_open[i])
    return count
