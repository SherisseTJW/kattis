previous_g = 0
GIS = []
A = [2, 3, 1, 5, 4, 7, 6]

for a in A:
    if (a > previous_g):
        GIS.append(a)
        previous_g = a

print(GIS)
