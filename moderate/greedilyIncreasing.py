previous_g = 0
GIS = []

for a in A:
    if (a > previous_g):
        GIS.push(a)
        previous_g = a

print(GIS)
