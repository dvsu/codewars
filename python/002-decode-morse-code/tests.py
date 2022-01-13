import unittest
from solution import decodeMorse


class TestSolution(unittest.TestCase):

    def test_normal(self):
        self.assertEqual(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE")

    def test_numbers_and_special_characters(self):
        self.assertEqual(decodeMorse("...-- .-.-.- .---- ....- .---- ..... ----."), "3.14159")

    def test_alphanumeric(self):
        self.assertEqual(decodeMorse("..--- .---- ... -   -.-. . -. - ..- .-. -.--"), "21ST CENTURY")

    def test_empty(self):
        self.assertEqual(decodeMorse(""), "")

    def test_whitespace(self):
        self.assertEqual(decodeMorse(" "), "")

    def test_trailing_whitespaces(self):
        self.assertEqual(decodeMorse("       .... . -.--   .--- ..- -.. .       "), "HEY JUDE")


if __name__ == "__main__":
    unittest.main()
