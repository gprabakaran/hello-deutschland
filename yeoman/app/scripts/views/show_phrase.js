(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.View.ShowPhrase = (function(_super) {
    __extends(ShowPhrase, _super);

    function ShowPhrase() {
      return ShowPhrase.__super__.constructor.apply(this, arguments);
    }

    ShowPhrase.prototype.el = "#main-content";

    ShowPhrase.prototype.initialize = function() {};

    ShowPhrase.prototype.render = function(phrase) {
      return this.$el.html(this.template(phrase));
    };

    ShowPhrase.prototype.template = function(phrase) {
      var engine, obj, translation;
      engine = new DeutschApp.Service.Engine();
      translation = engine.translate(phrase);
      obj = {
        phrase: phrase,
        translation: translation
      };
      return Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](obj));
    };

    return ShowPhrase;

  })(Backbone.View);

}).call(this);
