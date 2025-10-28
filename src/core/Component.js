///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Component.js
//
//

    export const Component = async (
        config,
        component_id,
        component_config
    ) =>
    {

        const   __config            = structuredClone(config['config']);

        const   __helpers           = config['helpers'] ?? false;
        const   __console           = config['console'] ?? false;

        let     _state              = {};


    /**************************************************************************
     *  __fetch_file()
     * 
     */
        const __fetch_file = async (
            file_path,
            file_name
        ) =>
        {

            try {
                if (!file_path || !file_name) {
                    console.log(`FILE_PATH = ${file_path}\nFILE_NAME = ${file_name}`)
                    return {
                        'status':       "error",
                        'error':        "Invalid file path or filename"
                    };
                }

                const url = `${file_path.replace(/\/$/, "")}/${file_name}`;
                const response = await fetch(url);

                if (!response.ok) {
                    return {
                        'status':       "error",
                        'error':        `Failed to fetch ${file_name} (HTTP ${response.status})`
                    };
                }

                const text = await response.text();

                return {
                    'status':           "success",
                    'data':             text
                };
            }
            catch (err) {
                return {
                    'status':           "error",
                    'error':            err.message
                };
            }

        };


    /**************************************************************************
     *  __new_component()
     * 
     */
        const   __new_component = async (
            id,
            config,
            render_target = false
        ) =>
        {

    //  The root component must have a render target.
    //
            if (! config.hasOwnProperty('target')) {
                if (render_target == false) {
                    __console.error(`Error in __new_component(): No render target element specified`);
                }
                
                config['target'] = render_target;
            }

            let _component =   {

                'target':           config['target'],

    //  Component/element id.
    //
                'id':               id,

    //  Component type - valid types are:
    //
    //      Type        Description
    //
    //      Panel       Typically used to group similar components within a
    //                  particular UI element. Example, a menu would use a
    //                  Panel element with child Button elements.
    //
    //      Button      Fairly self-explanitory.
    //
    //      Input       Text input component.
    //
    //      Everything is a Panel by default.
    //
                'type':             config['type'] ?? "Panel",

    //  If a comonent is mounted this will point to the parent cmponent that
    //  it is mounted to.
    //
                'mounted':          false,

    //  When mounted - the component can be enabled or disabled but still be
    //  visible.
    //
                'enabled':          false,

    //  When mounted - a component can be hidden, naturally this also disables
    //  the component.
    //
                'visible':          false,
                
    //  Event handlers.
    //
                'event_handlers':   config['event_handlers'] ?? false,

    //  Every component has a style that is applied when the component is
    //  mounted and rendered - this can be a string of CSS that will be
    //  applied between <style></style> tags or an object that defines
    //  the properties.
    //
                'style':            config['style'] ?? false,

    //  UI template string for the component.
    //
                'template':         config['template'] ?? false

            };

    //  If the config has a 'template_file' property and it 's set to
    //  true then _state['template'] is a path to a template file - this
    //  file must be fetched and copied to _state['template'] for
    //  rendering.
    //
    //  We can grab the template path from the main config.
    //
            config['template_file'] ?? false;

            if (config['template_file']) {
                let _template_data = await __fetch_file(
                    __config['template_path'],
                    config['template']
                );

                __console.log(`+---- Loaded template ${config['template']} for component ${component_id}`);

                if (_template_data['status'] !== "success") {
                    __console.error(`Error in __new_component(): ${_template_data['error']}}`);
                }

                _component['template'] = _template_data['data'];
            }

    //  Same goes with 'style_file' - if this property exists and is true
    //  then 'style' is a path to a file containing css.
    //
    //  This file must be fetched and stored in 'style'.
    //
    //  Again, we can get the root path to the stylesheets from the main
    //  config.
    //
            config['style_file'] ?? false;

            if (config['style_file']) {
                let _style_data = await __fetch_file(
                    __config['style_path'],
                    config['style']
                );

                __console.log(`+---- Loaded stylesheet ${config['style']} for component ${component_id}`);

                if (_style_data['status'] !== "success") {
                    __console.error(`Error in __new_component(): ${_style_data['error']}}`);
                }

                _component['style'] = _style_data['data'];
            }

            return _component

        };


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = async () =>
        {

            if (typeof __console !== 'object') {
                throw new Error("Console module not loaded!");
            }
            if (typeof __config !== 'object') {
                __console.error("Config object not defined!");
            }
            if (typeof __helpers !== 'object') {
                __console.error("Helpers module not loaded!");
            }

            _state = await __new_component(component_id, component_config);

        };


    /**************************************************************************
     *  _get_raw_state()
     * 
     */
        const   _get_raw_state = () =>
        {

            return _state;

        };


        if (typeof __initialise === 'function') {
            await __initialise();
        }


        return {

            get_raw_state:      _get_raw_state

        };

    };