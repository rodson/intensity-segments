class IntensitySegments {
  constructor() {
    this.segmentMap = {};
  }

  add(from, to, amount) {
    let fromAmount = amount;

    Object.keys(this.segmentMap).map((key) => {
      const segment = parseInt(key, 10);

      // calculate from segment amount
      if (segment <= from) {
        fromAmount = amount + this.segmentMap[segment];
      }

      // set segments between from segment and to segment
      if (segment > from && segment < to) {
        this.segmentMap[segment] += amount;
      }
    });

    // set from segment
    this.segmentMap[from] = fromAmount;

    // set to segment
    if (!this.segmentMap[to]) {
      this.segmentMap[to] = 0;
    }

    // merge duplicated segments
    this._mergeSegments();
  }

  set(from, to, amount) {
    Object.keys(this.segmentMap).map((key) => {
      const segment = parseInt(key, 10);

      // delete segments between from segment and to segment
      if (segment > from && segment < to) {
        delete this.segmentMap[segment];
      }
    });

    // set from segment
    this.segmentMap[from] = amount;

    // set to segment
    if (!this.segmentMap[to]) {
      this.segmentMap[to] = 0;
    }

    // merge duplicated segments
    this._mergeSegments();
  }

  _mergeSegments() {
    // merge duplicated segments
    let lastSegment = undefined;
    Object.keys(this.segmentMap).forEach((currentValue) => {
      if (lastSegment === undefined) {
        lastSegment = currentValue;
      } else {
        // find duplicated segment and delete it
        if (this.segmentMap[currentValue] === this.segmentMap[lastSegment]) {
          delete this.segmentMap[currentValue];
        } else {
          lastSegment = currentValue;
        }
      }
    });

    // delete first segment if it's value is zero
    const firstSegment = Object.keys(this.segmentMap)?.[0];
    if (firstSegment && this.segmentMap[firstSegment] === 0) {
      delete this.segmentMap[firstSegment];
    }
  }

  toString() {
    const segmentArr = Object.keys(this.segmentMap)
      .map(key => ([parseInt(key, 10), this.segmentMap[key]]));
    return JSON.stringify(segmentArr);
  }
}

module.exports = IntensitySegments;