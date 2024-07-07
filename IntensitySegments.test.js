const IntensitySegments = require('./IntensitySegments');

describe('test example sequence', () => {
  let segments;
  beforeAll(() => {
    segments = new IntensitySegments();
  });
  
  it('new IntensitySegments()', () => {
    expect(segments.toString()).toBe('[]');
  });

  it('segments.add(10, 30, 1)', () => {
    segments.add(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  it('segments.add(20, 40, 1)', () => {
    segments.add(20, 40, 1);
    expect(segments.toString()).toBe('[[10,1],[20,2],[30,1],[40,0]]');
  });

  it('segments.add(10, 40, -2)', () => {
    segments.add(10, 40, -2);
    expect(segments.toString()).toBe('[[10,-1],[20,0],[30,-1],[40,0]]');
  });
});

describe('test another example sequence', () => {
  let segments;
  beforeAll(() => {
    segments = new IntensitySegments();
  });

  it('segments.add(10, 30, 1)', () => {
    segments.add(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  it('segments.add(20, 40, 1)', () => {
    segments.add(20, 40, 1);
    expect(segments.toString()).toBe('[[10,1],[20,2],[30,1],[40,0]]');
  });

  it('segments.add(10, 40, -1)', () => {
    segments.add(10, 40, -1);
    expect(segments.toString()).toBe('[[20,1],[30,0]]');
  });

  it('segments.add(10, 40, -1)', () => {
    segments.add(10, 40, -1);
    expect(segments.toString()).toBe('[[10,-1],[20,0],[30,-1],[40,0]]');
  });
});

describe('test example sequence of segments.set version', () => {
  let segments;
  beforeAll(() => {
    segments = new IntensitySegments();
  });
  
  it('new IntensitySegments()', () => {
    expect(segments.toString()).toBe('[]');
  });

  it('segments.set(10, 30, 1)', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  it('segments.set(20, 40, 1)', () => {
    segments.set(20, 40, 1);
    expect(segments.toString()).toBe('[[10,1],[40,0]]');
  });

  it('segments.set(10, 40, -2)', () => {
    segments.set(10, 40, -2);
    expect(segments.toString()).toBe('[[10,-2],[40,0]]');
  });
});

describe('test another example sequence of segments.set version', () => {
  let segments;
  beforeAll(() => {
    segments = new IntensitySegments();
  });

  it('segments.set(10, 30, 1)', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  it('segments.set(20, 40, 1)', () => {
    segments.set(20, 40, 1);
    expect(segments.toString()).toBe('[[10,1],[40,0]]');
  });

  it('segments.set(10, 40, -1)', () => {
    segments.set(10, 40, -1);
    expect(segments.toString()).toBe('[[10,-1],[40,0]]');
  });

  it('segments.set(10, 40, -1)', () => {
    segments.set(10, 40, -1);
    expect(segments.toString()).toBe('[[10,-1],[40,0]]');
  });
})