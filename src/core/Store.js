///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Store.js
//
//

    export const Store = (
        config
    ) =>
    {

        const   __config        = config['config'];

        const   __helpers       = config['helpers'];
        const   __console       = config['console'];


        let     _state          = {};


    /**************************************************************************
     *  __reset_store()
     * 
     */
        const   __reset_store = () =>
        {

            _state              = {
                'data':         {},
                'mode':         {},
                'subs':         {}
            };

        };


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = () =>
        {

            __reset_store();

            __console.log(`+-- Initialised Store module`);

        };


    /**************************************************************************
     *  _get_state()
     * 
     */
        const   _get_state = () =>
        {

            return structuredClone(_state);

        };


    /**************************************************************************
     *  _get_raw_state()
     * 
     */
        const   _get_raw_state = () =>
        {

            return _state;

        };


    /**************************************************************************
     *  _set_value()
     * 
     */
        const   _set_value = (
            var_name,
            var_data,
            var_mode = false,
            var_subs = false
        ) =>
        {

            if (_state.data.hasOwnProperty(var_name)) {
                if (_state.mode[var_name].hasOwnProperty('read_only')) {
                    if (_state.mode[var_name]['read_only'] === true) {
                        return {
                            'status':   "error",
                            'error':    `Attempt to overwrite read-only value ${var_name}`
                        };
                    }
                }

                _state['data'][var_name] = var_data;

                if (var_mode !== false) {
                    _state['mode'][var_name] = var_mode;
                }

                if (var_subs !== false) {
                    _state['subs'][var_name] = var_subs;
                }

                if (_state['subs'][var_name]) {
                    if (typeof _state['subs'][var_name] === 'function') {
                        _state['subs'][var_name]({
                            'module':   "Store",
                            'event':    "update",
                            'name':     var_name,
                            'data':     var_data
                        });
                    }
                }
                else if (Array.isArray(_state['subs'][var_name])) {
                    _state['subs'][var_name].forEach(callback => {
                        callback({
                            'module':   "Store",
                            'event':    "update",
                            'name':     var_name,
                            'data':     var_data
                        })
                    });
                }
            }
            else {
                _state['data'][var_name] = var_data;
                _state['mode'][var_name] = var_mode ?? {};
                _state['subs'][var_name] = var_subs ?? [];
            }

            return {
                'status':  "success",
                'module':   "Store",
                'event':    "update",
                'name':     var_name,
                'data':     var_data
            };

        };


    /**************************************************************************
     *  _get_value()
     * 
     */
        const   _get_value = (
            var_name
        ) =>
        {

            if (! _state['data'].hasOwnProperty(var_name)) {
                return {
                    'status':           "error",
                    'error':            `Attempt to read undefined value ${var_name}`
                };
            }

            return {
                'status':               "success",
                'result':               _state['data'][var_name]
            };

        };


        if (typeof __initialise === 'function') {
            __initialise();
        }


        return {

            get_state:          _get_state,
            get_raw_state:      _get_raw_state,

            set_value:          _set_value,
            get_value:          _get_value

        };


    };
