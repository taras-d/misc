import unittest

from table import PhoneBookTable

class PhoneBookTableTest(unittest.TestCase):
  def setUp(self):
    self.table = PhoneBookTable()

  def test_get_table(self):
    items = [
      { 'id': 1, 'name': 'Mike', 'phone': '567' },
      { 'id': 2, 'name': 'Bobby', 'phone': '890' }
    ]
    result = self.table.get_table(items)

    self.assertIsInstance(result, str)
    for item in items:
      self.assertIn(str(item['id']), result)
      self.assertIn(item['name'], result)
      self.assertIn(item['phone'], result)