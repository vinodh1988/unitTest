import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('Ram','M')).toEqual("Mr.Ram");
  });
});
