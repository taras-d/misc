#include <iostream>
#include <fstream>
#include <vector>
#include <string>
using namespace std;

void splitString(string str, vector<string>& target);
void readMatrix(string fileName, vector<vector<string>>& target);
void writeTransposeMatrix(string fileName, vector<vector<string>>& matrix);

// Transpose Matrix
// https://en.wikipedia.org/wiki/Transpose

int main() {
  vector<vector<string>> matrix;

  readMatrix("matrix.txt", matrix);

  writeTransposeMatrix("transposedMarix.txt", matrix);

  return 0;
}

// Split line into array of numbers
// Example: "1,2,3" => {"1", "2", "3"}
void splitLine(string line, vector<string>& result) {
  string num; 
  int start = 0;
  int comma_index;

  do {
    comma_index = line.find(',', start);
    num = line.substr(start, comma_index - start);

    if (num.size()) {
      result.push_back(num);
    }

    start = comma_index + 1;
  } while (comma_index != -1);
}

// Read matrix from file and store in result vector
void readMatrix(string fileName, vector<vector<string>>& result) {
  ifstream input_file(fileName);
  string line;

  while (input_file >> line) {
    vector<string> row; 
    splitLine(line, row);
    result.push_back(row);
  }
}

// Transpose matrix and write into file
void writeTransposeMatrix(string fileName, vector<vector<string>>& matrix) {
  ofstream file(fileName);

  int rowsNum = matrix.size();
  int colsNum = rowsNum? matrix[0].size(): 0;

  for (int i = 0; i < colsNum; ++i) {

    for (int j = 0; j < rowsNum; ++j) {
      file << matrix[j][i];
      if (j + 1 < rowsNum) {
        file << ",";
      }
    }
    
    if (i + 1 < colsNum) {
      file << endl;
    }
  }
}