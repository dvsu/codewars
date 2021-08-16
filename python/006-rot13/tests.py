import unittest
from solution import rot13
from alternative1 import rot13sol2
from alternative2 import rot13sol3


class TestSolution(unittest.TestCase):

    def test_normal_1(self):
        self.assertEqual(rot13("test"),"grfg")

    def test_normal_2(self):
        self.assertEqual(rot13("Test"),"Grfg")

    def test_normal_3(self):
        self.assertEqual(rot13("C6H12O6"),"P6U12B6")

    def test_normal_4(self):
        self.assertEqual(rot13("Cas89jh32,.;6"),"Pnf89wu32,.;6")


if __name__ == "__main__":
    unittest.main()
