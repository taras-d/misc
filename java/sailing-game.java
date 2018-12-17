import java.util.Scanner;

class SailingGame {
  private final int size = 9;
  private int shipX;
  private int shipY;
  private char[][] map;

  SailingGame() {
    this.initMap();
  }

  void start() {
    while (true) {
      this.showMap();
      this.showMenu();

      char way = this.askWay();

      if (!this.checkWayAndMove(way)) {
        break;
      }
    }
  }

  private void initMap() {
    this.map = new char[this.size][this.size];

    this.shipX = this.size / 2;
    this.shipY = this.size / 2;

    for (int i = 0; i < this.size; ++i) {
      for (int j = 0; j < this.size; ++j) {
        if (i == this.shipY && j == this.shipX) {
          this.map[i][j] = 'S';
        } else if (j <= i) {
          this.map[i][j] = '~';
        } else {
          this.map[i][j] = '.';
        }
      }
    }
  }

  private void showMap() {
    for (int i = 0; i < this.size; ++i) {
      System.out.print(i);
      for (int j = 0; j < this.size; ++j) {
        System.out.format(" %c", this.map[i][j]);
      }
      System.out.println();
    }

    System.out.print(" ");
    for (int i = 0; i < this.size; ++i) {
      System.out.format(" %d", i);
    }

    System.out.println();
    System.out.println();
  }

  private void showMenu() {
    System.out.println("(n) north");
    System.out.println("(s) sourth");
    System.out.println("(e) east");
    System.out.println("(w) west");
    System.out.println();
  }

  private char askWay() {
    char way;
    String inputText;
    Scanner input = new Scanner(System.in);

    do {
      System.out.print("Which way, Captain? ");
      inputText = input.nextLine().toLowerCase();
      way = inputText.length() == 1? inputText.charAt(0): ' ';

      if (way == 'n' || way == 's' || way == 'e' || way == 'w') {
        break;
      } else {
        System.out.println(" invalid direction");
      }
    } while (true);

    System.out.println();

    return way;
  }

  private boolean checkWayAndMove(char way) {
    int moveX = this.shipX;
    int moveY = this.shipY;

    if (way == 'n') {
      moveY -= 1;
    } else if (way == 's') {
      moveY += 1;
    } else if (way == 'e') {
      moveX += 1;
    } else if (way == 'w') {
      moveX -= 1;
    } else {
      return false;
    }

    if (
      moveX < 0 || moveX > this.size - 1 ||
      moveY < 0 || moveY > this.size - 1
    ) {
      System.out.println("Ouch! Captain, we have been lost at sea!");
      return false;
    }

    if (this.map[moveY][moveX] == '.') {
      System.out.println("Ouch! Captain, we have been crashed!");
      return false;
    }

    this.map[this.shipY][this.shipX] = '~';
    this.map[moveY][moveX] = 'S';

    this.shipX = moveX;
    this.shipY = moveY;

    return true;
  }
}

class Main {
  public static void main(String[] args) {
    new SailingGame().start();
  }
}