String.prototype.toAlternatingCase = function () {
    // Define your method here :)
      return this.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
  }