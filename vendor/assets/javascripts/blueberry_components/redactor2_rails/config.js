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
});
