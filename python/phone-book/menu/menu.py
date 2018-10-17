class PhoneBookMenu:
  def __init__(self):
    self.on_event = None

  def start_loop(self):
    while True:
      self.__main_menu()

      val = self.__wait_input('> ')

      self.__nl()

      if val == '1':
        self.__show_items_menu()
      elif val == '2':
        self.__create_item_menu()
      elif val == '3':
        self.__update_item_menu()
      elif val == '4':
        self.__delete_item_menu()
      elif val == '5':
        self.__save_menu()
      elif val == '9':
        break

      self.__nl()
        

  def __main_menu(self):
    print('(1) show items, (2) create item, (3) update item, (4) delete item')
    print('(5) save, (9) exit')

  def __show_items_menu(self):
    self.__emit_even('show-items')

  def __create_item_menu(self):
    print('Create item:')
    name = self.__wait_input(' enter name: ')
    phone = self.__wait_input(' enter phone: ')
    self.__emit_even('create-item', {
      'name': name, 'phone': phone
    })

  def __update_item_menu(self):
    print('Update item:')
    id_ = self.__wait_input(' enter id: ')
    name = self.__wait_input(' enter name: ')
    phone = self.__wait_input(' enter phone: ')
    self.__emit_even('update-item', {
      'id': int(id_) if id_ else None,
      'name': name, 'phone': phone
    })

  def __delete_item_menu(self):
    print('Delete item:')
    id_ = self.__wait_input(' enter id: ')
    self.__emit_even('delete-item', { 'id': int(id_) })

  def __save_menu(self):
    self.__emit_even('save')

  def __wait_input(self, prompt):
    return raw_input(prompt)

  def __emit_even(self, event, data = None):
    if self.on_event:
      self.on_event(event, data)

  def __nl(self):
    print('')
