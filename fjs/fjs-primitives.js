// Generated by CoffeeScript 1.6.2
/*
    FJS primitive functions
*/


(function() {
  var __slice = [].slice;

  module.exports = {
    _lbkt__rbkt_: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return [args];
      } else {
        return [[]];
      }
    },
    _lbrace__rbrace_: function() {
      var args, i, obj;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        obj = {};
        i = 0;
        while (i < args.length - 1) {
          obj[args[i].toString()] = args[i + 1];
          i += 2;
        }
        return obj;
      } else {
        return {};
      }
    },
    _dot_: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return console.log.apply(console, args);
      } else {
        console.log(args[0]);
        return args.slice(1);
      }
    },
    dup: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return args.concat(args);
      } else {
        return args.slice(0, 1).concat(args);
      }
    },
    drop: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return void 0;
      } else {
        return args.slice(1);
      }
    },
    truthy: function() {
      var arg, args, i, _i, _len;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
          arg = args[i];
          if (!args[i]) {
            return false;
          }
        }
        return true;
      } else {
        return [!!args[0]].concat(args.slice(1));
      }
    },
    not: function() {
      var arg, args, i, _i, _len;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
          arg = args[i];
          args[i] = !args[i];
        }
        return args;
      } else {
        return [!args[0]].concat(args.slice(1));
      }
    },
    over: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return args.slice(-1).concat(args);
      } else {
        return args.slice(1, 2).concat(args);
      }
    },
    swap: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return args.slice(1).concat(args.slice(0, 1));
      } else {
        return [args[1], args[0]];
      }
    },
    get: function() {
      var args, obj, res, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      obj = args[0];
      if (this.overrideDefault) {
        res = [];
        _ref = args.slice(1);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          args = _ref[_i];
          res.push(obj[arg]);
        }
        return res;
      } else {
        return obj[args[1]];
      }
    },
    _plus_: function() {
      var arg, args, haveStr, total, _i, _j, _len, _len1;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        haveStr = false;
        for (_i = 0, _len = args.length; _i < _len; _i++) {
          arg = args[_i];
          if (typeof arg === 'string') {
            haveStr = true;
            break;
          }
        }
        total = (haveStr ? '' : 0);
        for (_j = 0, _len1 = args.length; _j < _len1; _j++) {
          arg = args[_j];
          total += arg;
        }
        return total;
      } else {
        if (args.length < 2) {
          return args;
        } else {
          return [args[0] + args[1]].concat(args.slice(2));
        }
      }
    },
    _dash_: function() {
      var arg, args, total, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault && args.length > 2) {
        total = +args[0];
        _ref = args.slice(1);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          arg = _ref[_i];
          total -= arg;
        }
        return total;
      } else {
        if (args.length < 2) {
          return args;
        } else {
          return [args[0] - args[1]].concat(args.slice(2));
        }
      }
    },
    _star_: function() {
      var arg, args, i, total, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault && args.length > 2) {
        total = +args[0];
        _ref = args.slice(1);
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          arg = _ref[i];
          total *= arg;
        }
        return total;
      } else {
        if (args.length < 2) {
          return args;
        } else {
          return [args[0] * args[1]].concat(args.slice(2));
        }
      }
    },
    _slash_: function() {
      var arg, args, total, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault && args.length > 2) {
        total = +args[0];
        _ref = args.slice(1);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          arg = _ref[_i];
          total /= arg;
        }
        return total;
      } else {
        if (args.length < 2) {
          return args;
        } else {
          return [args[0] / args[1]].concat(args.slice(2));
        }
      }
    },
    or: function() {
      var arg, args, i, _i, _len;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
          arg = args[i];
          if (args[i]) {
            return true;
          }
        }
        return false;
      } else {
        if (args.length < 2) {
          return args;
        } else {
          return [args[0] || args[1]].concat(args.slice(2));
        }
      }
    },
    and: function() {
      var arg, args, i, _i, _len;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
          arg = args[i];
          if (!args[i]) {
            return false;
          }
        }
        return true;
      } else {
        if (args.length < 2) {
          return args;
        } else {
          return [args[0] && args[1]].concat(args.slice(2));
        }
      }
    },
    _eq_: function() {
      var arg, args, i, top, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        top = args[0];
        _ref = args.slice(1);
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          arg = _ref[i];
          if (top !== arg) {
            return false;
          }
        }
        return true;
      } else {
        if (args.length < 2) {
          return true;
        } else {
          return [args[0] === args[1]].concat(args.slice(2));
        }
      }
    },
    _lt_: function() {
      var arg, args, i, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        _ref = args.slice(1);
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          arg = _ref[i];
          if (arg[i - 1] >= arg) {
            return false;
          }
        }
        return true;
      } else {
        if (args.length < 2) {
          return false;
        } else {
          return [args[0] < args[1]].concat(args.slice(2));
        }
      }
    },
    _gt_: function() {
      var arg, args, i, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        _ref = args.slice(1);
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          arg = _ref[i];
          if (arg[i - 1] <= arg) {
            return false;
          }
        }
        return true;
      } else {
        if (args.length < 2) {
          return false;
        } else {
          return [args[0] > args[1]].concat(args.slice(2));
        }
      }
    },
    _if_: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      console.log('_if_', args);
      if (typeof args[0] === 'function' && args[0].call(this || args[0])) {
        args[1].apply(this, args.slice(2));
      }
      return void 0;
    },
    doif: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof args[1] === 'function' && args[1].call(this || args[1])) {
        args[0].apply(this, args.slice(2));
      }
      return void 0;
    },
    _while_: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      while (args[0].call(this)) {
        args[1].apply(this, args.slice(2));
      }
      return void 0;
    },
    repeat: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      while (true) {
        args[0].apply(this, args.slice(1));
        if (this.pop() === false) {
          break;
        }
      }
      return void 0;
    },
    dowhile: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      while (args[1].call(this)) {
        args[0].apply(this, args.slice(2));
      }
      return void 0;
    },
    map: function() {
      var args, item, res, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      res = [];
      _ref = args[1];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        args[0].call(this, item);
        res.push(this.pop());
      }
      return [res];
    },
    each: function() {
      var args, item, res, resItem, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      res = [];
      _ref = args[1];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        args[0].call(this, item);
        if ((resItem = this.pop()) === false) {
          break;
        }
        res.push(resItem);
      }
      return [res];
    },
    rot: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.overrideDefault) {
        return args.slice(-1).concat(args.slice(0, -1));
      } else {
        return args.slice(2, 3).concat(args.slice(0, 2), args.slice(3));
      }
    },
    set: function() {
      var args, i, obj;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      obj = args[0];
      if (this.overrideDefault) {
        i = 0;
        while (i < args.length - 1) {
          obj[args[i]] = args[i + 1];
          i += 2;
        }
        return res;
      } else {
        return obj[args[1]] = args[2];
      }
    },
    _new_: function() {
      var arg, args, argsArr, constructor, i, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      constructor = args[0];
      argsArr = [];
      _ref = args.slice(1);
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        arg = _ref[i];
        argsArr.push('args[' + i + ']');
      }
      return eval('new constructor(' + argsArr.join(',') + ')');
    }
  };

  exports._throw_ = function() {
    throw JSON.stringify(this);
  };

}).call(this);
