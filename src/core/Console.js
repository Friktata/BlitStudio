///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Console.js
//
//

    export const Console = (
        config
    ) =>
    {

        const   __config            = config ?? {};

        const   __exit_on_warnings  = __config['exit_on_warnings'] ?? false;
        const   __enable_warnings   = __config['enable_warnings'] ?? true;
        const   __enable_logging    = __config['enable_logging'] ?? false;


    /**************************************************************************
     *  _error()
     * 
     */
        const   _error = (
            error_message
        ) =>
        {

            error_message = error_message ?? "";

    //  If the config contains a 'exit_cleanup' it's an array of functions 
    //  to be called before we bail.
    //
            if (__config.hasOwnProperty('cleanup')) {
                if (Array.isArray(__config['cleanup'])) {
                    __config['cleanup'].forEach(callback => {
                        callback(__config);
                    });
                }
                else if (typeof __config['cleanup'] === 'function') {
                    __config['cleanup'](__config);
                }
            }

            throw new Error(error_message);

        };



    /**************************************************************************
     *  _warning()
     *
     */
        const   _warning = (
            warning_message
        ) =>
        {

            warning_message = warning_message ?? "";

            if (__exit_on_warnings) {
                _error(warning_message);
            }

            if (!__enable_warnings) {
                return false;
            }

            console.warn(warning_message);
            
            return true;

        };


    /**************************************************************************
     *  log()
     * 
     */
        const   _log = (
            log_message
        ) =>
        {

            log_message = log_message ?? "";

            if (! __enable_logging) {
                return false;
            }

            console.log(log_message);

            return true;

        };


        return {

            error:          _error,
            warning:        _warning,
            log:            _log

        };

    };
    