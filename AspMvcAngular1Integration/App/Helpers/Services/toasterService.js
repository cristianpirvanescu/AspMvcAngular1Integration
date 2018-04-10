mainAppWeb.factory('toasterService', [
    'toastr',
    function (toastr) {
        return {
            success: function (message) {
                toastr.success(message, 'Success');
            },
            warning: function (message) {
                toastr.warning(message, 'Warning');
            },
            info: function (message) {
                toastr.info(message, 'Information');
            },
            showError: function (message) {
                toastr.error(message, 'Error');
            },
            showErrorFromResponse: function (response) {
                var message = '';
                if (response) {
                    if (response.status === 601) {
                        message = response.data;
                    } else if (response.data) {
                        message = response.data.ExceptionMessage;
                    } else {
                        message = response.statusText;
                    }
                }
                toastr.error(message, 'Error');
            }
        };
    }
]);