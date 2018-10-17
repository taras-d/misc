from menu import PhoneBookMenu
from storage import PhoneBookStorage
from table import PhoneBookTable

# Create storage
storage_file = 'data.json'
storage = PhoneBookStorage(storage_file)

# Create table
table = PhoneBookTable()

# Create menu
menu = PhoneBookMenu()

# Listen to menu events
def on_menu_event(event, data):
  if event == 'show-items':
    items = storage.get_items()
    if items:
      print(table.get_table(items))
    else:
      print('No items')
    return

  if event == 'create-item':
    result = storage.create_item(data['name'], data['phone'])
    print('Item created (id: %s)' % result['id'])
    return

  if event == 'update-item':
    result = storage.update_item(data['id'], data['name'], data['phone'])
    if result:
      print('Item updated')
    else:
      print('Item with id "%s" not found' % data['id'])
    return

  if event == 'delete-item':
    if storage.delete_item(data['id']):
      print('Item deleted')
    else:
      print('Item with id "%s" not found' % data['id'])
    return

  if event == 'save':
    storage.save()
    print('Items saved to file "%s"' % storage_file)

# Listen to menu events
menu.on_event = on_menu_event

# Start menu loop
print('Phone Book')
menu.start_loop()
