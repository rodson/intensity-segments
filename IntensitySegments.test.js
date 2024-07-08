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

  it('segments.add(12, 15, 2)', () => {
    segments.add(12, 15, 2);
    expect(segments.toString()).toBe('[[10,-1],[12,1],[15,-1],[20,0],[30,-1],[40,0]]');
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
});

describe('test more example sequence of segments.set version', () => {
  let segments;
  beforeAll(() => {
    segments = new IntensitySegments();
  });

  it('segments.set(10, 30, 1)', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  it('segments.set(10, 30, 2)', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  it('segments.set(5, 11, 2)', () => {
    segments.set(5, 11, 2);
    expect(segments.toString()).toBe("[[5,2],[11,1],[30,0]]");
  });

  it('segments.set(15, 20, 4)', () => {
    segments.set(15, 20, 4);
    expect(segments.toString()).toBe("[[5,2],[11,1],[15,4],[20,1],[30,0]]");
  });
  it('segments.set(5, 30, 3)', () => {
    segments.set(5, 30, 3);
    expect(segments.toString()).toBe("[[5,3],[30,0]]");
  });
  it('segments.set(30, 32, 1)', () => {
    segments.set(30, 32, 1);
    expect(segments.toString()).toBe("[[5,3],[30,1],[32,0]]");
  });
  it('segments.set(1, 4, 1)', () => {
    segments.set(1, 4, 1);
    expect(segments.toString()).toBe("[[1,1],[4,0],[5,3],[30,1],[32,0]]");
  });
})