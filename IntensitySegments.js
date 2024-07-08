class IntensitySegments {
  constructor() {
    this.segmentMap = {};
  }

  add(from, to, amount) {
    let isToSegmentLast = true;
    let fromAmount = amount;
    let valueOfToSegment = 0;

    Object.keys(this.segmentMap).map((key) => {
      const segment = parseInt(key, 10);

      // calculate from segment amount
      if (segment <= from) {
        fromAmount = amount + this.segmentMap[segment];
      }

      if (segment < to) {
        // get to segment value
        valueOfToSegment = this.segmentMap[segment];
        if (segment > from) {
          // set segments between from segment and to segment
          this.segmentMap[segment] += amount;
        }
      }

      // whether to segment is the last one
      if (isToSegmentLast && segment > to) {
        isToSegmentLast = false;
      }
    });

    // set from segment
    this.segmentMap[from] = fromAmount;

    // set to segment
    if (!this.segmentMap[to]) {
      this.segmentMap[to] = 0;
    }

    if (isToSegmentLast) {
      // to segment is the last one: set zero
      this.segmentMap[to] = 0;
    } else {
      // to segment is not the last one: set value
      this.segmentMap[to] = valueOfToSegment;
    }

    // merge duplicated segments
    this._mergeSegments();
  }

  set(from, to, amount) {
    let isToSegmentLast = true;
    let valueOfToSegment = 0;
    Object.keys(this.segmentMap).map((key) => {
      const segment = parseInt(key, 10);

      if (segment <= to) {
        // get to segment value
        valueOfToSegment = this.segmentMap[segment];
        // delete segments between from segment and to segment
        if (segment > from) {
          delete this.segmentMap[segment];
        }
      }

      // whether to segment is the last one
      if (isToSegmentLast && segment > to) {
        isToSegmentLast = false;
      }
    });

    // set from segment
    this.segmentMap[from] = amount;

    if (isToSegmentLast) {
      // to segment is the last one: set zero
      this.segmentMap[to] = 0;
    } else {
      // to segment is not the last one: set value
      this.segmentMap[to] = valueOfToSegment;
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