///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Component.js
//
//

    export const Component = (
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
     *  __new_component()
     * 
     */
        const   __new_component = (
            id,
            config
        ) =>
        {

    //  The root component must have a render target.
    //
            if (! config.hasOwnProperty('target')) {
                __console.error(`Error in __new_component: No render target element specified`);
            }

            let __component =   {

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
            const   __template_path = config['template_path'];

    //  Same goes with 'style_file' - if this property exists and is true
    //  then 'style' is a path to a file containing css.
    //
    //  This file must be fetched and stored in 'style'.
    //
    //  Again, we can get the root path to the stylesheets from the main
    //  config.
    //
            const   __style_path = config['style_path'];

            return __component

        };


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = () =>
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

            _state = __new_component(component_id, component_config);

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


        if (typeof __initialise === 'function') {
            __initialise();
        }


        return {

            get_state:          _get_state,
            get_raw_state:      _get_raw_state

        };

    };