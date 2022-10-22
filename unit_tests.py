import unittest
from os import path
from pathlib import Path


class FileTests(unittest.TestCase):
    """
    Test if files needed (.env, requirements, Dockerfile, etc exist)
    """

    def test_env_exists(self):
        file_path = path.join(
            Path(__file__).parent, ".env"
        )  # combines current directory with .env
        file_exists = path.isfile(file_path)  # true or false - if .env exists
        self.assertEqual(file_exists, True)  # check if it is true (exists) or not

    def test_requirements_exists(self):
        file_path = path.join(Path(__file__).parent, "requirements.txt")
        file_exists = path.isfile(file_path)
        self.assertEqual(file_exists, True)

    def test_herokuyml_exists(self):
        file_path = path.join(Path(__file__).parent, "heroku.yml")
        file_exists = path.isfile(file_path)
        self.assertEqual(file_exists, True)


if __name__ == "__main__":
    unittest.main()
