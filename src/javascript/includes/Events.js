var Events = $({});
$.subscribe = function () { Events.on.apply(Events, arguments); };
$.unsubscribe = function () { Events.off.apply(Events, arguments); };
$.publish = function () { Events.trigger.apply(Events, arguments); };

/* AJAX */
var $submitAJAX = function (event) {
  var $form = $(this),
    $method = $form.find('input[name="_method"]').val() || 'POST',
    $url = $form.prop('action'),
    $data = $form.serialize();

  $.ajax({
    type : $method,
    url : $url,
    data : $data,
    success : function () {
      $.publish('AjaxFormSubmitted', $form);
    },
  });

  event.preventDefault();
};

/* Subscribe to Event */
$.subscribe('AjaxFormSubmitted', function () {
  console.log('Event: AjaxFormSubmitted');
});

/* Unsubscribe from Event */
// $.unsubscribe('AjaxFormSubmitted', arguments);
/* Publish a Event */
// $.publish('AjaxFormSubmitted', arguments);
/* EXAMPLE USE */
/* Assuming: <form data-ajax></form> */
$('form[data-ajax]').on('submit', $submitAJAX);