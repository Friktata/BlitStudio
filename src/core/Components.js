///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Components.js
//
//


///////////////////////////////////////////////////////////////////////////////
//  We need the Component module.
//
    import { Component } from "./Component.js";


    export const Components = (
        config
    ) =>
    {

        const   __config            = config['config'];

        const   __helpers           = config['helpers'] ?? false;
        const   __console           = config['console'] ?? false;


        const   __components        = {};


    /**************************************************************************
     *  All component data is stored here.
     *
     *  We can grab a copy via get_state() or get a raw reference with
     *  get_raw_state()
     * 
     */
        let     _state              = {

            'id':                   [],
            'components':           []
        
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

            __console.log(`+-- Initialised Components module\n|`);

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
     *  _new_component()
     * 
     */
        const   _new_component = (
            component_id,
            component_config = false
        ) => {

    //  The id must be unique.
    //
            if (_state.id.includes(component_id)) {
                return __console.warning(`Error in new_component(): Component id '${component_id}' is not unique`);
            }

    //  Create the component.
    //
            let _component = Component(config, component_id, component_config);

            _state['id'].push(component_id);
            _state['components'].push(_component.get_state());

            // __console.log(`+--- Created component ${component_id} ${JSON.stringify(_component.get_state(), null, 3)}\n`);
            __console.log(`+--- Created component ${component_id}\n`);

        };


        if (typeof __initialise === 'function') {
            __initialise();
        }


        return {

            get_state:          _get_state,
            get_raw_state:      _get_raw_state,

            new_component:      _new_component

        };

    };
    