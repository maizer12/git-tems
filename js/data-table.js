(function($) {
  'use strict';
  $(function() {
    $('').DataTable({
      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "ordering":false,
      "language": {
        "lengthMenu": "Показувати _MENU_ entries",
        "zeroRecords": "Nothing found - sorry",
        "info": "Показувати _PAGE_ по _PAGES_ з _PAGES_ позицій",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "paginate": {
          "next": "Наступна",
          "previous": "Попередня" 
        }
      },
      "searching": false,
    });
    $('#order-listing').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
     // var search_input = //datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      //search_input.attr('placeholder', 'Search');
      //search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
  });
})(jQuery);