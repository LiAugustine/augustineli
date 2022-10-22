import unittest
from os import path
from pathlib import Path


class FileTests(unittest.TestCase):
    """
    Test if files needed (requirements, Dockerfile, etc exist)
    """

    def test_requirements_exists(self):
        file_path = path.join(
            Path(__file__).parent, "requirements.txt"
        )  # get current working directory, combine with file needed
        file_exists = path.isfile(file_path)  # true or false
        self.assertEqual(file_exists, True)  # must be true for file to exist

    def test_docker_exists(self):
        file_path = path.join(Path(__file__).parent, "Dockerfile")
        file_exists = path.isfile(file_path)
        self.assertEqual(file_exists, True)

    def test_herokuyml_exists(self):
        file_path = path.join(Path(__file__).parent, "heroku.yml")
        file_exists = path.isfile(file_path)
        self.assertEqual(file_exists, True)


if __name__ == "__main__":
    unittest.main()
