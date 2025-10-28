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
    import { Helpers }  from "./Helpers.js";
    import { Console } from "./Console.js";
    import { Store } from   "./Store.js";
    import { Components } from "./Components.js";


///////////////////////////////////////////////////////////////////////////////
//  Load the root 'Display' component.
//
    import { Display } from "../components/Display.js";


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
     *  __build_blitstudio_ui()
     * 
     */
        const   __build_blitstudio_ui = () =>
        {

            _console.log(`+-- Initialising BlitStudio components...\n|`);

    //  Load and render the root 'Display' component.
    //
            const   _display = _utilities['components'].new_component(
                Display.id,
                Display
            );

            _console.log(`|\n+-- Done!\n|`);
            

        };


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = () =>
        {

            _console.log(`+- Initialising BlitStudio...\n|`);

    //  Fire up additional modules/subsystems here.
    //  
            const   _store = Store(_utilities);
            const   _components = Components(_utilities);

            _utilities['store'] = _store;
            _utilities['components'] = _components;

    //  Before we do anything - there should be a single HTML element with
    //  a blitstudio attribute.
    //
            if (! _render_target || _render_target.length === 0) {
                _console.error("Error - no blitstudio render target element found");
            }
            if (_render_target.length > 1) {
                _console.error("Error - multiple blitstudio render target elements found");
            }

            const   __node = _render_target[0];
            const   __id = __node.getAttribute('id');

            if (! __id || __id.trim === "") {
                _console.error("Error - the blitstudio render target element must have an id");
            }

    //  Now we need to build the BlitStudio UI...
    //
            __build_blitstudio_ui();

    //  Start the BlitArtist module.
    //
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
