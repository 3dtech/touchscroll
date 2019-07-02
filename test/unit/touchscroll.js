import touchscroll from '../../src/touchscroll';

describe('touchscroll', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(touchscroll, 'greet');
      touchscroll.greet();
    });

    it('should have been run once', () => {
      expect(touchscroll.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(touchscroll.greet).to.have.always.returned('hello');
    });
  });
});
