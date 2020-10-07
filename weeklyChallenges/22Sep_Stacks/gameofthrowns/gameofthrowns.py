import sys

# Line 1 of input
input1 = list(input().split())
# Line 2 of input
input2 = list(sys.stdin.readline().split())


numKidz = int(input1[0])
numThrows = input1[1]
eggPosition = [0]
undo = False

for command in input2:
    if command == 'undo':
        undo = True        
        continue

    command = int(command)

    if undo == True:
        for i in range(command):
            eggPosition.pop()
        undo = False
        continue

    if command > numKidz:
        command = command % numKidz

    nextPosition = eggPosition[-1] + command
    if nextPosition > numKidz:
        nextPosition = nextPosition % numKidz

    eggPosition.append(nextPosition)

print(eggPosition[-1])