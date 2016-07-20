$(function () {
  // Pass authenticity_token
  var params = '[name="authenticity_token"]';
  // Set global settings
  $.Redactor.settings = {
    plugins: ['source', 'alignment', 'clips', 'inlinestyle', 'table', 'iconic2'],
    imageUpload: '/redactor2_rails/images',
    imageUploadFields: params,
    fileUpload: '/redactor2_rails/files',
    fileUploadFields: params,
  	lang: 'cs'
  };
  // Initialize Redactor
  printCount = function(el, text) {
    wrapper = el.closest('#course-perex')
    if (wrapper.length) {
      count = text.replace('&nbsp;', '').length
      $('.count', wrapper).html(count);
    }
  }


  window.initRedactor = function(el) {
    el.redactor({
      focus: true,
      formatting: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      formattingAdd: {
        "heading-red": {
          title: 'Nadpis červený',
          args: ['h3', 'class', 'heading-red']
        },
        "heading-yellow": {
          title: 'Nadpis žlutý',
          args: ['h3', 'class', 'heading-yellow']
        },
        "heading-green": {
          title: 'Nadpis zelený',
          args: ['h3', 'class', 'heading-green']
        }
      },
      callbacks: {
        init: function(e) {
          printCount( this.$element, this.clean.stripTags(this.code.get()) );
        },
        keyup: function(e) {
          printCount( this.$element, this.clean.stripTags(this.code.get()) );
        }
      }
    });
  }

  $('.redactor').each(function(){
    initRedactor( $(this) );
  });

});
