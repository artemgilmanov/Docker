import calendar

print('Welcome to Super Calendar App\n')

year = int(input('Enter year: '))
month = int(input('Enter month: '))

print(calendar.month(year, month))

print('All the best!')