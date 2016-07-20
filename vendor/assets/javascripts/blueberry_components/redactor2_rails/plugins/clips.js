(function($)
{
	$.Redactor.prototype.clips = function()
	{
		return {
			langs: {
				en: {
					"clips": "Clips"
				}
			},

			init: function()
			{
				var items = [
					['Tlačítko', '<a href="#" class="btn-red">Odkaz</a>'],
					['2 sloupce', '<div class="triple-box"><div class="col-sm-6">Sloupec 1</div><div class="col-sm-6">Sloupec 2</div></div>'],
					['3 sloupce', '<div class="triple-box"><div class="col-sm-4">Sloupec 1</div><div class="col-sm-4">Sloupec 2</div><div class="col-sm-4">Sloupec 3</div></div>'],
					['3 sloupce - na střed', '<div class="triple-box centered"><div class="col-sm-4">Sloupec 1</div><div class="col-sm-4">Sloupec 2</div><div class="col-sm-4">Sloupec 3</div></div>'],
					['2 sloupce - šedé', '<div class="triple-box gray"><div class="col-sm-6">Sloupec 1</div><div class="col-sm-6">Sloupec 2</div></div>'],
					['3 sloupce - šedé', '<div class="triple-box gray"><div class="col-sm-4">Sloupec 1</div><div class="col-sm-4">Sloupec 2</div><div class="col-sm-4">Sloupec 3</div></div>'],
					['3 sloupce - šedé, na střed', '<div class="triple-box gray centered"><div class="col-sm-4">Sloupec 1</div><div class="col-sm-4">Sloupec 2</div><div class="col-sm-4">Sloupec 3</div></div>'],
					['Nadpis kulatý', '<h3 class="rounded-heading"><strong>1</strong> Nadpis</h3>']
				];

				this.clips.template = $('<ul id="redactor-modal-list">');

				for (var i = 0; i < items.length; i++)
				{
					var li = $('<li>');
					var a = $('<a href="#" class="redactor-clips-link">').text(items[i][0]);
					var div = $('<div class="redactor-clips">').hide().html(items[i][1]);

					li.append(a);
					li.append(div);
					this.clips.template.append(li);
				}

				this.modal.addTemplate('clips', '<div class="modal-section">' + this.utils.getOuterHtml(this.clips.template) + '</div>');

				var button = this.button.add('clips', this.lang.get('clips'));

				this.button.addCallback(button, this.clips.show);

			},
			show: function()
			{
				this.modal.load('clips', 'Insert Clips', 500);

				$('#redactor-modal-list').find('.redactor-clips-link').each($.proxy(this.clips.load, this));

				this.modal.show();
			},
			load: function(i,s)
			{
				$(s).on('click', $.proxy(function(e)
				{
					e.preventDefault();
					this.clips.insert($(s).next().html());

				}, this));
			},
			insert: function(html)
			{
				this.buffer.set();
				this.air.collapsedEnd();
				this.insert.html(html);
				this.modal.close();
			}
		};
	};
})(jQuery);
