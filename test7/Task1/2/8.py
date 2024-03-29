import math

def find_angle(ab, bc):
    angle = math.atan2(ab, bc)
    return round(math.degrees(angle))

if __name__ == "__main__":
    ab = float(input())
    bc = float(input())
    print(find_angle(ab, bc), "°")
