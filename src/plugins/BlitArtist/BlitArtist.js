///////////////////////////////////////////////////////////////////////////////
//  BlitArtist/src/BlitArtist.js
//
//

    import { DefaultThemes } from "../../themes/Default.js";


    export const BlitArtist = async (
        utilities
    ) =>
    {

        const   __config        = utilities['config'] ?? false;

        const   __helpers       = utilities['helpers'] ?? false;
        const   __console       = utilities['console'] ?? false;

        const   _state          = {};


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

            __console.log("+- Initialising BlitArtist...\n|");

        };


    /**************************************************************************
     *  __load_theme()
     * 
     */
        const   __load_theme = (
            config
        ) =>
        {

            if (! config.hasOwnProperty('theme')) {
                config['theme'] = {};
            }

            if (! config.hasOwnProperty("project_theme")) {
                config['project_theme'] = "Freestyle";
            }

            if (! DefaultThemes.hasOwnProperty(config['project_theme'])) {
                config['project_theme'] = "Freestyle";
            }

            config['theme'] = structuredClone(DefaultThemes[config['project_theme']]);

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
     *  _new_project()
     * 
     */
        const   _new_project = (
            config
        ) =>
        {

            __load_theme(config);

            _state = {

    //  Every good project needs a title!
    //
                'project_title':        config['project_title'] ?? "Project Title",

    //  Options:
    //
    //      Mode            Description
    //     
    //      NES             6-bit per channel (56 simultaneous colors).
    //      SNES            15-bit per channel (256 simultaneous).
    //      Gameboy         Monochrome (4 shades of gray).
    //      MasterSystem    6-bit per channel (64 simultaneous).
    //      Genesis         8-bit (512 simultaneous).
    //      Freestyle       Go wild with the full, unlimited chromatic range!
    //
    //  The default is "Freestyle"
    //
                'project_theme':        config['project_theme'],

                'theme':                config['theme'],

    //  All current frames are stored here.
    //
                'frames':               {

    //  The data array - contains an element for every frame that exists,
    //  each frame is a series of layered images.
    //
                    'data':             [],

    //  < 1 means there is no set frame limit.
    //
                    'max_frames':       0,

    //  Currently selected/active frame.
    //
                    'current_frame':    false

                },

    //  Action stack - we record previous frame states here for undo/redo
    //  functionality.
    //
                'history':              false

            };

        };


        if (typeof __initialise === 'function') {
            await __initialise();
        }


        return {

            get_state:          _get_state,

            new_project:        _new_project

        };

    };
