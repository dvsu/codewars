// find the size of equilateral triangular size
int triangular(int n) {
  if (n <= 0) {
    return 0;
  }
  return (n+1)*n~/2;
}