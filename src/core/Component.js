///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Component.js
//
//

    export const Component = (
        component_id,
        component_config
    ) =>
    {

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

            let __component =   {

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

            return __component

        };


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = () =>
        {

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