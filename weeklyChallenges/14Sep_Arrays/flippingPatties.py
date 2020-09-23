import sys

cookTime = []
serveTime = []
for line in sys.stdin:
    if len(line) == 1:
        numOrders = line
    
    else:
        orderDetails = line.split()
        cookTime.append(orderDetails[0])
        serveTime.append(orderDetails[1])


