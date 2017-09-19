// This is for leadger page
$(document).ready(function() {
    $('select').on('change', function() {
        var parent_id = $(this).parent().parent().attr('id');
        var selected_val = $(this).val();

        $.ajax({
            'url': '/ledger/edit_bucket',
            'method':'POST',
            'data': {'ledger_id': parent_id, 'bucket': selected_val},
            'success': function(data) {
                console.log(data);
            }
        });
    });
});
