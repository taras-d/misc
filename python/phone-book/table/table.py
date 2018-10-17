class PhoneBookTable:
  def __init__(self, columns = (6, 30, 30)):
    self.__columns = columns

  def get_table(self, items):
    table = ''
    table += self.__get_divider() + '\n'
    table += self.__get_row('Id', 'Name', 'Phone') + '\n'
    table += self.__get_divider() + '\n'

    for item in items:
      table += self.__get_row(item['id'], item['name'], item['phone']) + '\n'

    table += self.__get_divider()
    return table

  def __get_divider(self):
    divider = '+'
    for col in self.__columns:
      divider += (col + 2) * '-' + '+'
    return divider

  def __get_row(self, *values):
    row = '|'
    length = len(values)
    index = 0
    
    while index < length:
      row += ' '
      row += self.__get_cell(values[index], self.__columns[index])
      row += ' |'
      index += 1

    return row

  def __get_cell(self, value, max_len):
    value = str(value)
    if len(value) > max_len:
      value = value[:max_len - 3] + '...'
    return value.ljust(max_len)
