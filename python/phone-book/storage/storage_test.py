import unittest 

from storage import PhoneBookStorage

class TestPhoneBookStorage(unittest.TestCase):
  def setUp(self):
    self.storage = PhoneBookStorage('')

  def test_get_items(self):
    self.assertIsInstance(self.storage.get_items(), list)

  def test_get_item(self):
    item = self.storage.create_item('1', '2')
    self.assertIs(self.storage.get_item(item['id']), item)
    self.assertIs(self.storage.get_item('FAKEID'), None)

  def test_create_item(self):
    name, phone = 'Mike', '123'

    result = self.storage.create_item(name, phone)
    items = self.storage.get_items()

    self.assertEqual(len(items), 1)
    self.assertIs(result, items[0])
    self.assertIsInstance(result, dict)
    self.assertIsInstance(result['id'], int)
    self.assertEqual(result['name'], name)
    self.assertEqual(result['phone'], phone)

  def test_update_item(self):
    new_name, new_phone = 'Mike', '123'

    item_id = self.storage.create_item('ike', '1')['id']
    result = self.storage.update_item(item_id, new_name, new_phone)

    self.assertIsInstance(result, dict)
    self.assertDictEqual(result, {
      'id': item_id,
      'name': new_name,
      'phone': new_phone
    })
    self.assertDictEqual(result, self.storage.get_item(item_id))

  def test_delete_item(self):
    item_id = self.storage.create_item('delete', 'me')['id']
    items = self.storage.get_items()
    len_before = len(items)
    result = self.storage.delete_item(item_id)

    self.assertIsInstance(result, dict)
    self.assertEqual(result['id'], item_id)
    self.assertEqual(len_before - 1, len(items))
    self.assertEqual(self.storage.delete_item(item_id), None)
