///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/BlitStudio.js
//
//

    import { Controller } from "./core/Controller.js";


    export const BlitStudio = async () => {


    /**************************************************************************
     *  __initialise()
     * 
     */
        const   __initialise = async () =>
        {

            const   __controller = await Controller();

        };


        if (typeof __initialise === 'function') {
            await __initialise();
        }


        return {

            //

        }

    };
