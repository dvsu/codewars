import unittest
#from solution import alphabet_position
from alternative import alphabet_position


class TestSolution(unittest.TestCase):

    def test_normal(self):
        self.assertEqual(alphabet_position("The narwhal bacons at midnight."),
                         "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")

    def test_special_characters(self):
        self.assertEqual(alphabet_position("The sunset sets at twelve o' clock."),
                         "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

    def test_mixed_characters(self):
        self.assertEqual(alphabet_position("IorYTTfZAomySEGZRVZCaudiPVRKKNsgbRiTpEUUZGeLrmiwCgRcjsdigQwawJpsfcGmqlQUbzeqrOdBfIijkuXLqkhskXKzHCTR"),
                         "9 15 18 25 20 20 6 26 1 15 13 25 19 5 7 26 18 22 26 3 1 21 4 9 16 22 18 11 11 14 19 7 2 18 9 20 16 5 21 21 26 7 5 12 18 13 9 23 3 7 18 3 10 19 4 9 7 17 23 1 23 10 16 19 6 3 7 13 17 12 17 21 2 26 5 17 18 15 4 2 6 9 9 10 11 21 24 12 17 11 8 19 11 24 11 26 8 3 20 18")

    def test_non_letters(self):
        self.assertEqual(alphabet_position("890142789579834576"), "")

    def test_empty(self):
        self.assertEqual(alphabet_position(""), "")

    def test_whitespace(self):
        self.assertEqual(alphabet_position("    "), "")


if __name__ == "__main__":
    unittest.main()
