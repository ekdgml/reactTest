function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

Shape.create = function (x, y) {
  return new Shape(x, y);
};

Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.area = function (x, y) {
  return 0;
};

var s = new Shape(0, 0);
s.area(); // 0�� ��������.

//////////////////////////// ���� //////////////////////////////
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  } // static ����
  name = 'Shape';
  contructor(x, y) {
    // ���� �Լ� move ȣ��
    this.move(x, y);
  }
  move(x, y) {
    // move �Լ� ����
    this.x = x;
    tihs.y = y;
  }
  area() {
    // �����Լ� area ����
    return 0;
  }
}
var s = new Shape(0, 0);
s.area(); // 0�� ��������.

