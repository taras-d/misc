import re

def is_palindrome(val):
	"""
	Check if a given sentence is palindrome
	---------------------------------------
	>>> is_palindrome("anna")
	True
	>>> is_palindrome("12321")
	True
	>>> is_palindrome("A but tuba.")
	True
	>>> is_palindrome("A Santa at Nasa.")
	True
	>>> is_palindrome("Hello")
	False
	"""

	val = re.sub('\W', '', val.lower())
	i = 0
	j = len(val) - 1

	while i <= j:
		if val[i] != val[j]:
			return False
		i += 1
		j -= 1

	return True

if __name__ == '__main__':
	import doctest
	doctest.testmod()
