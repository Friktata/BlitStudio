///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Controller.js
//
//


///////////////////////////////////////////////////////////////////////////////
//  Import configs.
//
    import { BlitStudioConfig } from "../config/BlitStudio.config.js";
    import { ConsoleConfig } from "../config/Console.config.js";


///////////////////////////////////////////////////////////////////////////////
//  Import core modules.
//
    import { Helpers } from "./Helpers.js";
    import { Console } from "./Console.js";


///////////////////////////////////////////////////////////////////////////////
//  Import subsystems.
//
    import { BlitArtist } from "../plugins/BlitArtist/BlitArtist.js";


    export const Controller = () =>
    {

        const   _render_target  = document.querySelectorAll('[blitstudio]');

        const   _config         = BlitStudioConfig;

        const   _helpers        = Helpers();
        const   _console        = Console(ConsoleConfig);


    //  The main controller will make any public API;s or states available
    //  via this object.
    //
        const   _utilities      = {

            'config':           _config,
            'helpers':          _helpers,
            'console':          _console

        };


        const   __plugins       = {};


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = () =>
        {

    //  Before we do anything - there should be a single HTML element with
    //  a blitstudio attribute.
    //
            if (! _render_target || _render_target.length === 0) {
                __console.error("Error - no blitstudio render target element found");
            }
            if (_render_target.length > 1) {
                __console.error("Error - multiple blitstudio render target elements found");
            }

            const   __node = _render_target[0];
            const   __id = __node.getAttribute('id');

            if (! __id || __id.trim === "") {
                __console.error("Error - the blitstudio render target element must have an id");
            }

            _console.log(`Initialising BlitStudio - render target: ${__id}`);

            __plugins['artist'] = BlitArtist(_utilities);

        };


    /**************************************************************************
     *  _get_state()
     * 
     */
        const   _get_state = () =>
        {

            return structuredClone(_state);

        };


        if (typeof __initialise === 'function') {
            __initialise();
        }


        return {

            get_state:          _get_state

        };

    };
