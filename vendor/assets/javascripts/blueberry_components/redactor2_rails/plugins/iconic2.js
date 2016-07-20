(function($)
{
	$.Redactor.prototype.iconic2 = function()
	{
		return {
			init: function()
			{
				var icons = {
					'html': '<i class="glyphicon glyphicon-console"></i>',
					'format': '<i class="glyphicon glyphicon-text-size"></i>',
					'lists': '<i class="glyphicon glyphicon-list"></i>',
					'link': '<i class="glyphicon glyphicon-link"></i>',
					'alignment': '<i class="glyphicon glyphicon-align-left"></i>',
					'horizontalrule': '<i class="glyphicon glyphicon-minus"></i>',
					'image': '<i class="glyphicon glyphicon-picture"></i>',
					'video': '<i class="glyphicon glyphicon-facetime-video"></i>',
					'file': '<i class="glyphicon glyphicon-duplicate"></i>',
					'table': '<i class="glyphicon glyphicon-th-large"></i>',
					'fullscreen': '<i class="glyphicon glyphicon-fullscreen"></i>',
					'clips': '<i class="glyphicon glyphicon-tags"></i>'
				};

				$.each(this.button.all(), $.proxy(function(i,s)
				{
					var key = $(s).attr('rel');

					if (typeof icons[key] !== 'undefined')
					{
						var icon = icons[key];
						var button = this.button.get(key);
						this.button.setIcon(button, icon);
					}

				}, this));

			}
		};
	};
})(jQuery);
