/**
 *  Form Input Validator
 */
function FormInputValidator(rules) {
  'use strict';

  this.patterns = {};
  this.tests = {};

  for (var i = 0; i < rules.length; ++i ) {
    this.addRule(rules[i]);
  }
}

FormInputValidator.prototype.onChange = function(input, ruleName) {
  'use strict';

  try {
    if ( typeof this.tests[ruleName] !== 'function' ) {
      throw new Error('"'+ruleName+'" is not a rule');
    }
    if ( ['INPUT','SELECT','TEXTAREA'].indexOf(input.tagName) === -1) {
      throw new Error('[input] is not a form input');
    }
    if ( this.tests[ruleName](this.patterns[ruleName], input.value)) {
      input.classList.remove('js-is-invalid');
      input.classList.add('js-is-valid');
      return true;
    }
    else {
      input.classList.remove('js-is-valid');
      input.classList.add('js-is-invalid');
      return false;
    }
  }
  catch(e){ console.log(e); }
};

FormInputValidator.prototype.attachRule = function(input, rule) {
  'use strict';

  input.addEventListener('keyup', function(e) {
    this.onChange.call(this, input, rule);
  }.bind(this),
  false
  );
};

FormInputValidator.prototype.addRule = function(rule) {
  this.patterns[rule.name] = rule.pattern;
  this.tests[rule.name] = rule.test;
  //console.log(this);
};

var validatorRules = [
  {
    name: "required",
    pattern: null,
    test: function(pattern,value) {
      return !!value;
    }
  },
  {
    name: "email",
    pattern: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}/,
    test: function(pattern,value) {
      return pattern.test(value);
    }
  },
  {
    name: "phone",
    pattern: /[0-9]{3}[)]?[-. ]?[0-9]{3}/,
    test: function(pattern,value) {
      return pattern.test(value);
    }
  },
  {
    name: "url",
    pattern: /^((http|https):\/\/)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$/,
    test: function(pattern,value) {
      return pattern.test(value);
    }
  }
];

var validator = new FormInputValidator(validatorRules);

Array.prototype.slice.call(
  document.querySelectorAll('[data-validator]')).forEach(function(input) {
    validator.attachRule(input, input.getAttribute('data-validator'));
  }
);