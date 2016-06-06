
import doctest
import re

def is_palindrome(val):
	"""
	Сheck if a given sentence is a palindrome
	-----------------------------------------
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

# Run doctest
doctest.testmod()
