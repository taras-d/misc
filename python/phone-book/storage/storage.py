import json

class PhoneBookStorage:
  def __init__(self, file_name):
    self.__file_name = file_name
    self.__read_file()

  def get_items(self):
    return self.__data['items']

  def get_item(self, id):
    for item in self.__data['items']:
      if item['id'] == id:
        return item
    return None

  def create_item(self, name, phone):
    item = {
      'id': self.__data['next_id'],
      'name': name,
      'phone': phone
    }
    self.__data['items'].insert(0, item)
    self.__data['next_id'] += 1
    return item

  def update_item(self, id, name, phone):
    item = self.get_item(id)
    if item:
      item['name'] = name
      item['phone'] = phone
    return item

  def delete_item(self, id):
    try:
      item = self.get_item(id)
      self.__data['items'].remove(item)
      return item
    except:
      return None

  def save(self):
    with open(self.__file_name, 'w') as file:
      file.write( json.dumps(self.__data) )

  def __read_file(self):
    data = None

    try:
      with open(self.__file_name) as file:
        data = json.loads(file.read())
    except:
      pass

    if not isinstance(data, dict):
      data = {}

    if not isinstance(data.get('next_id'), int):
      data['next_id'] = 1

    if not isinstance(data.get('items'), list):
      data['items'] = []

    self.__data = data
